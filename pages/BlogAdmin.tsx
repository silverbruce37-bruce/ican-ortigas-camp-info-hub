import React, { useState, useRef, useEffect } from 'react';
import { useBlog } from '../context/BlogContext';
import { useChat } from '../context/ChatContext';
import { useAuth } from '../context/AuthContext';
import { useCarrot } from '../context/CarrotContext';
import { BlogPost } from '../types';
import { Plus, Trash2, Edit, X, Check, Link as LinkIcon, Grid, Brain, Sparkles, FileText, Loader2, CloudUpload, Image as ImageIcon, Users, HardDrive, Search, Shield, UserX, UserCheck } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import heic2any from 'heic2any';
import { useNavigate } from 'react-router-dom';

// Storage Keys
const STORAGE_KEYS = {
    USERS: 'ican-auth-users-db-v1',
    BLOG_POSTS: 'ican-blog-posts-v1',
    BLOG_MEDIA: 'ican-blog-media-v1',
    CARROT_ITEMS: 'ican-carrot-items-v1',
    CARROT_CHATS: 'ican-carrot-chats-v1',
    BOT_KNOWLEDGE: 'ican-bot-knowledge-v1'
};

// --- Image Picker Component ---
const ImagePickerModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onSelect: (urls: string[]) => void;
    multiple?: boolean;
}> = ({ isOpen, onClose, onSelect, multiple = false }) => {
    const { mediaLibrary, uploadImage, deleteMedia } = useBlog();
    const [activeTab, setActiveTab] = useState<'gallery' | 'upload' | 'link'>('gallery');
    const [urlInput, setUrlInput] = useState('');
    const [selectedUrls, setSelectedUrls] = useState<string[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [tempImages, setTempImages] = useState<{ id: string, url: string, name: string }[]>([]);
    const uploadInputRef = useRef<HTMLInputElement>(null);

    // Merge temp images with library (deduplicate by URL to avoid showing same image twice if sync happens)
    const displayItems = React.useMemo(() => {
        const libraryUrls = new Set(mediaLibrary.map(m => m.url));
        const distinctiveTemps = tempImages.filter(t => !libraryUrls.has(t.url));
        // Show Temps FIRST
        return [...distinctiveTemps, ...mediaLibrary];
    }, [mediaLibrary, tempImages]);

    useEffect(() => {
        if (isOpen) {
            setSelectedUrls([]);
            setUrlInput('');
            // Keep temp images for the session or clear? Clear for clean state + refetch
            setTempImages([]);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const toggleSelection = (url: string) => {
        if (multiple) {
            if (selectedUrls.includes(url)) {
                setSelectedUrls(prev => prev.filter(u => u !== url));
            } else {
                setSelectedUrls(prev => [...prev, url]);
            }
        } else {
            onSelect([url]);
            onClose();
        }
    };

    const handleConfirmSelection = () => {
        if (selectedUrls.length > 0) {
            onSelect(selectedUrls);
            onClose();
        }
    };

    // Helper: Resize Image
    const resizeImage = (file: File, maxWidth: number = 800, quality: number = 0.6): Promise<File> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;
                img.onload = () => {
                    const elem = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    if (width > maxWidth) {
                        height = Math.round(height * (maxWidth / width));
                        width = maxWidth;
                    }

                    elem.width = width;
                    elem.height = height;
                    const ctx = elem.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);

                    ctx?.canvas.toBlob((blob) => {
                        if (!blob) {
                            resolve(file); // Fallback
                            return;
                        }
                        const newFile = new File([blob], file.name, {
                            type: 'image/jpeg',
                            lastModified: Date.now(),
                        });
                        resolve(newFile);
                    }, 'image/jpeg', quality);
                };
                img.onerror = (err) => resolve(file); // Fallback
            };
            reader.onerror = (err) => resolve(file); // Fallback
        });
    };

    const processFiles = async (files: FileList | File[]) => {
        const fileArray = Array.from(files);

        setIsUploading(true);
        const uploadedUrls: string[] = [];
        const newTemps: { id: string, url: string, name: string }[] = [];

        try {
            for (const file of fileArray) {
                let fileToUpload = file;

                // 1. HEIC Conversion
                if (file.name.toLowerCase().endsWith('.heic') || file.type === 'image/heic' || file.type === 'image/heif') {
                    try {
                        console.log(`Converting HEIC: ${file.name}`);
                        const convertedBlob = await heic2any({
                            blob: file,
                            toType: 'image/jpeg',
                            quality: 0.7
                        });
                        const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
                        fileToUpload = new File(
                            [blob],
                            file.name.replace(/\.(heic|HEIC)$/i, '.jpg'),
                            { type: 'image/jpeg' }
                        );
                    } catch (e) {
                        console.error("HEIC conversion failed", e);
                        // Continue trying with original, or fail?
                        // Usually browsers can't display HEIC, so valid to just alert
                        alert(`Could not convert ${file.name}.`);
                        continue;
                    }
                }

                // 2. Resize/Compress to safe size for LocalStorage
                try {
                    fileToUpload = await resizeImage(fileToUpload);
                } catch (e) {
                    console.warn("Resize failed, using original", e);
                }

                // 3. Upload
                try {
                    const url = await uploadImage(fileToUpload);
                    uploadedUrls.push(url);
                    newTemps.push({ id: `temp-${Date.now()}-${Math.random()}`, url, name: fileToUpload.name });
                } catch (e) {
                    console.error("Single upload failed", e);
                    alert(`Failed to upload ${file.name} (Storage might be full).`);
                }
            }

            if (uploadedUrls.length > 0) {
                setTempImages(prev => [...newTemps, ...prev]);

                if (multiple) {
                    setSelectedUrls(prev => [...prev, ...uploadedUrls]);
                    setActiveTab('gallery');
                } else {
                    onSelect([uploadedUrls[0]]);
                    onClose();
                }
            } else {
                if (fileArray.length > 0) alert("No images were uploaded successfully.");
            }
        } catch (error) {
            console.error("Process failed", error);
            alert("An error occurred during upload.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); };
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) processFiles(e.dataTransfer.files);
    };



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in font-sans">
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-xl overflow-hidden animate-scale-in">
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10">
                    <div>
                        <h3 className="text-lg font-bold text-[#1d1d1f]">
                            {multiple ? 'Select Images' : 'Select Image'}
                        </h3>
                    </div>
                    <div className="flex gap-2">
                        {multiple && selectedUrls.length > 0 && (
                            <button
                                onClick={handleConfirmSelection}
                                className="bg-[#0071E3] text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#0077ED] transition-colors flex items-center gap-1.5"
                            >
                                Insert {selectedUrls.length}
                            </button>
                        )}
                        <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex px-4 border-b border-gray-100 bg-[#F5F5F7]">
                    {['gallery', 'upload', 'link'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors capitalize ${activeTab === tab ? 'border-[#0071E3] text-[#0071E3]' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex-1 overflow-y-auto p-4 bg-white">
                    {activeTab === 'gallery' && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            <div
                                onClick={() => setActiveTab('upload')}
                                className="aspect-square rounded-xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:border-[#0071E3] hover:text-[#0071E3] hover:bg-blue-50 transition-all cursor-pointer group"
                            >
                                <Plus className="w-6 h-6 mb-1" />
                                <span className="text-xs font-medium">Add New</span>
                            </div>
                            {displayItems.map(item => {
                                const isSelected = selectedUrls.includes(item.url);
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => toggleSelection(item.url)}
                                        className={`group relative aspect-square rounded-xl overflow-hidden border transition-all cursor-pointer ${isSelected ? 'border-[#0071E3] ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'}`}
                                    >
                                        <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                                        {isSelected && (
                                            <div className="absolute top-2 right-2 bg-[#0071E3] text-white rounded-full p-0.5 z-20 shadow-md">
                                                <Check className="w-3 h-3" />
                                            </div>
                                        )}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteMedia(item.id); }}
                                            className="absolute bottom-2 right-2 p-1.5 bg-white/90 text-red-500 rounded-full hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {activeTab === 'upload' && (
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`h-full flex flex-col items-center justify-center py-12 border border-dashed rounded-xl transition-all duration-200 ${isDragging ? 'border-[#0071E3] bg-blue-50/50' : 'border-gray-300 bg-gray-50/50'}`}
                        >
                            {isUploading ? (
                                <div className="text-center">
                                    <Loader2 className="w-8 h-8 animate-spin text-[#0071E3] mx-auto mb-2" />
                                    <p className="text-gray-500 text-sm font-medium">Compressing & Uploading...</p>
                                </div>
                            ) : (
                                <>
                                    <CloudUpload className="w-12 h-12 text-[#0071E3] mb-4" />
                                    <h4 className="text-lg font-semibold text-[#1d1d1f] mb-1">Upload Images</h4>
                                    <p className="text-gray-400 mb-6 text-sm">Drag & drop or browse</p>
                                    <button onClick={() => uploadInputRef.current?.click()} className="px-6 py-2 bg-[#0071E3] text-white rounded-full text-sm font-semibold hover:bg-[#0077ED] transition-colors shadow-sm">
                                        Select Files
                                    </button>
                                    <input type="file" ref={uploadInputRef} onChange={(e) => e.target.files && processFiles(e.target.files)} className="hidden" accept="image/*" multiple />
                                </>
                            )}
                        </div>
                    )}

                    {activeTab === 'link' && (
                        <form onSubmit={(e) => { e.preventDefault(); if (urlInput) { onSelect([urlInput]); onClose(); } }} className="flex flex-col gap-4 max-w-sm mx-auto py-8">
                            <input type="text" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} placeholder="https://..." className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0071E3]" />
                            <button type="submit" className="w-full py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">Use Image</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Main Blog Admin Component ---
const BlogAdmin: React.FC = () => {
    // 1. Hooks (Unconditional)
    const { posts, addPost, updatePost, deletePost, backupPosts, restorePosts } = useBlog();
    const chatContext = useChat();
    const knowledgeBase = chatContext?.knowledgeBase || [];
    const addKnowledge = chatContext?.addKnowledge || (() => { });
    const importKnowledge = chatContext?.importKnowledge || (() => { });
    const deleteKnowledge = chatContext?.deleteKnowledge || (() => { });
    const { user, allUsers, isInitialized, updateUserRole, updateUserStatus, deleteUser } = useAuth();
    const { items: carrotItems } = useCarrot();
    const navigate = useNavigate();

    const [activeAdminTab, setActiveAdminTab] = useState<'posts' | 'brain' | 'users' | 'system'>('posts');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
    const [imagePickerTarget, setImagePickerTarget] = useState<'cover' | 'content' | 'gallery'>('cover');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);
    const [generationTopic, setGenerationTopic] = useState('');
    const [showAutoGenerateInput, setShowAutoGenerateInput] = useState(false);

    // New State for 2-Step Workflow
    const [additionalContext, setAdditionalContext] = useState('');

    // Knowledge Form
    const [newKnowledgeTitle, setNewKnowledgeTitle] = useState('');
    const [newKnowledgeContent, setNewKnowledgeContent] = useState('');
    const [isKnowledgeFormOpen, setIsKnowledgeFormOpen] = useState(false);
    const knowledgeUploadRef = useRef<HTMLInputElement>(null);

    // Knowledge JSON Helper
    const flattenJsonToKnowledge = (obj: any, parentKey = ''): { title: string, content: string }[] => {
        let items: { title: string, content: string }[] = [];
        for (const key in obj) {
            const newKey = parentKey ? `${parentKey} > ${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                items = [...items, ...flattenJsonToKnowledge(obj[key], newKey)];
            } else {
                items.push({
                    title: newKey.replace(/_/g, ' ').toUpperCase(),
                    content: Array.isArray(obj[key]) ? obj[key].map((i: any) => typeof i === 'object' ? JSON.stringify(i) : i).join('\n') : String(obj[key])
                });
            }
        }
        return items;
    };

    const handleKnowledgeJsonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target?.result as string);
                const items = flattenJsonToKnowledge(json);
                if (confirm(`Found ${items.length} knowledge items. Import them?`)) {
                    importKnowledge(items);
                    alert("Successfully imported knowledge base!");
                }
            } catch (err) {
                console.error(err);
                alert("Failed to parse JSON file.");
            }
        };
        reader.readAsText(file);
    };

    // User Search
    const [userSearchTerm, setUserSearchTerm] = useState('');

    const initialFormState: BlogPost = { id: '', title: '', excerpt: '', content: '', date: new Date().toISOString().split('T')[0].replace(/-/g, '.'), category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070', galleryImages: [], author: 'Roy House', tags: [] };
    const [formData, setFormData] = useState<BlogPost>(initialFormState);

    const systemRestoreInputRef = useRef<HTMLInputElement>(null);
    const contentTextareaRef = useRef<HTMLTextAreaElement>(null);

    // 2. Effects
    useEffect(() => {
        if (isInitialized && (!user || user.role !== 'admin')) navigate('/admin/login');
    }, [user, isInitialized, navigate]);

    // 3. Conditional Returns (Guard Clauses)
    if (!isInitialized) return <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>;
    if (!user || user.role !== 'admin') return null;

    // Post Handlers
    const handleEdit = (post: BlogPost) => { setFormData({ ...post, galleryImages: post.galleryImages || [] }); setEditingId(post.id); setIsFormOpen(true); };
    const handleAddNew = () => { setFormData({ ...initialFormState, id: `post-${Date.now()}` }); setEditingId(null); setIsFormOpen(true); setShowAutoGenerateInput(false); };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const tags = Array.isArray(formData.tags) ? formData.tags : (formData.tags as any).split(',').map((t: string) => t.trim());
        editingId ? updatePost({ ...formData, tags }) : addPost({ ...formData, tags });
        setIsFormOpen(false); setFormData(initialFormState);
    };

    // Image Handlers
    const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

    const openImagePicker = (target: any, index: number | null = null) => {
        setImagePickerTarget(target);
        setActiveGalleryIndex(index);
        setIsImagePickerOpen(true);
    };

    const handleImagePickerSelect = (urls: string[]) => {
        if (!urls.length) return;
        if (imagePickerTarget === 'cover') {
            setFormData(p => ({ ...p, image: urls[0] }));
        } else if (imagePickerTarget === 'gallery') {
            setFormData(p => {
                const currentImages = [...(p.galleryImages || [])];
                const newUrl = urls[0]; // Gallery is now single-select mode
                if (activeGalleryIndex !== null && activeGalleryIndex < currentImages.length) {
                    // Replace existing at index
                    currentImages[activeGalleryIndex] = newUrl;
                } else {
                    // Append new
                    currentImages.push(newUrl);
                }
                return { ...p, galleryImages: currentImages };
            });
        } else {
            const imgTags = urls.map(u => `<img src="${u}" class="w-full rounded-lg my-4" />`).join('\n');
            setFormData(p => ({ ...p, content: p.content + '\n' + imgTags }));
        }
    };

    // AI Handlers
    const handleAutoGenerate = async () => {
        if (isGenerating) return;
        setIsGenerating(true);
        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
            if (!apiKey) throw new Error("No API Key configured in .env (VITE_GEMINI_API_KEY)");

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const prompt = `Write a poetic and warm Korean blog post about "${generationTopic || 'Ortigas Life'}". valid JSON: {title, excerpt, content(html), category, tags, imageSearchTerm}`;

            const result = await model.generateContent({
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            });
            const response = await result.response;
            const text = response.text();

            const data = JSON.parse(text);
            setFormData(p => ({ ...p, ...data, image: `https://source.unsplash.com/featured/?${data.imageSearchTerm}` }));
            setShowAutoGenerateInput(false);
        } catch (e) {
            console.error("AI Gen Failed:", e);
            alert("AI Gen Failed");
        } finally { setIsGenerating(false); }
    };

    const handleAiImageGen = async () => {
        if (!formData.title) return alert("Enter title first");
        setIsGeneratingImage(true);
        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
            if (!apiKey) throw new Error("API Key missing.");

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const result = await model.generateContent({
                contents: [{
                    role: 'user',
                    parts: [{ text: `Cinematic cover image description for: ${formData.title}` }]
                }]
            });
            const response = await result.response;
            const text = response.text();

            alert("Image description generated: " + text);
        } catch (e) {
            console.error(e);
            alert("AI Generation failed: " + (e as Error).message);
        } finally { setIsGeneratingImage(false); }
    };

    const handleGenerateFromImage = async () => {
        if (!formData.image) return alert("Please select a cover image first.");
        setIsGenerating(true);

        try {
            // 1. Collect all images (Cover + Gallery)
            const allImageUrls = [formData.image, ...(formData.galleryImages || [])].filter(Boolean);

            // 2. Process all images in parallel to get Base64 parts
            const imageParts = await Promise.all(allImageUrls.map(async (url) => {
                let imageBase64 = '';
                let mimeType = 'image/jpeg';

                if (url.startsWith('data:')) {
                    const matches = url.match(/^data:(.+);base64,(.+)$/);
                    if (matches) {
                        mimeType = matches[1];
                        imageBase64 = matches[2];
                    }
                } else {
                    try {
                        const response = await fetch(url);
                        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                        const blob = await response.blob();
                        mimeType = blob.type;
                        imageBase64 = await new Promise((resolve) => {
                            const reader = new FileReader();
                            reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
                            reader.readAsDataURL(blob);
                        });
                    } catch (err) {
                        console.error("Failed to fetch image", url, err);
                        return null;
                    }
                }
                return { inlineData: { mimeType, data: imageBase64 } };
            }));

            const validImageParts = imageParts.filter(Boolean) as any[];

            if (validImageParts.length === 0) {
                throw new Error("No valid images could be processed. Please check your internet connection or image sources.");
            }

            const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
            if (!apiKey) throw new Error("System Error: API Key (VITE_GEMINI_API_KEY) is missing in .env.");

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const promptText = `
        You are "NanoBanana", a legendary fairy tale magazine editor with a warm, lyrical, and poetic soul (like J.K. Rowling or a Studio Ghibli narrator).
        
        **Task**: Create a "Premium Magazine Style" blog post in Korean based on these ${validImageParts.length} photos and the user's notes.
        
        **User's Notes/Context**: "${additionalContext || 'No specific notes, just follow your artistic intuition.'}"
        
        **Writing Style**:
        1. **Tone**: Warm, magical, deeply observant. Use evocative Korean expressions (e.g., '햇살이 머무는 자리', '소소한 기쁨', '기억의 조각').
        2. **Narrative**: Don't just list facts. Tell a story about the moment, the children, the atmosphere, and the growth happening at ICAN Ortigas Camp.
        3. **Structure**: Engaging title, a touching excerpt, and a rich narrative structure.
        
        **Layout Instructions**:
        - You MUST weave the images into the story naturally. 
        - Use the marker \`<!-- IMAGE_0 -->\` for the FIRST image (the soul of the story/Cover).
        - Use \`<!-- IMAGE_1 -->\`, \`<!-- IMAGE_2 -->\`, etc. for the gallery photos.
        - Place these markers within the HTML content at the perfect emotional beats (e.g., after a paragraph that builds up to that scene).
        - DO NOT bunch all images at the top or bottom. Spread them throughout the text like a real magazine spread.
        
        **Output Format (Strict JSON)**:
        {
          "title": "Evocative Korean title",
          "excerpt": "A short, heartwarming summary that makes parents want to read more",
          "content": "HTML content with <h2>, <p>, and <!-- IMAGE_n --> markers. DO NOT include <html> or <body> tags, only the body content.",
          "category": "Story",
          "tags": ["RoyHouse", "Memory", "Growth", "Life"]
        }
      `;

            const result = await model.generateContent({
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { text: promptText },
                            ...validImageParts
                        ]
                    }
                ],
                generationConfig: { responseMimeType: "application/json" }
            });

            const response = await result.response;
            const responseText = response.text();
            let data;
            try {
                data = JSON.parse(responseText);
            } catch (e) {
                throw new Error("AI response was not valid JSON. Please try again.");
            }

            // Post-process content to inject actual images
            let finalContent = data.content;

            // Inject Cover Image (Index 0)
            finalContent = finalContent.replace(
                /<!--\s*IMAGE_0\s*-->/g,
                `<img src="${allImageUrls[0]}" class="w-full rounded-2xl shadow-lg my-8" alt="Cover Scene" />`
            );

            // Inject Gallery Images (Index 1+)
            allImageUrls.slice(1).forEach((url, idx) => {
                const marker = new RegExp(`<!--\\s*IMAGE_${idx + 1}\\s*-->`, 'g');
                finalContent = finalContent.replace(marker, `<img src="${url}" class="w-full rounded-2xl shadow-lg my-8" alt="Scene ${idx + 1}" />`);
            });

            setFormData(p => ({
                ...p,
                title: data.title,
                excerpt: data.excerpt,
                content: finalContent,
                category: data.category || 'Story',
                tags: data.tags || []
            }));

        } catch (e) {
            console.error(e);
            alert(`Error: ${(e as Error).message}`);
        } finally {
            setIsGenerating(false);
        }
    };

    // Knowledge Handlers
    const handleKnowledgeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newKnowledgeTitle && newKnowledgeContent) {
            addKnowledge(newKnowledgeTitle, newKnowledgeContent);
            setIsKnowledgeFormOpen(false); setNewKnowledgeTitle(''); setNewKnowledgeContent('');
        }
    }

    // System Handlers
    const handleFullBackup = () => {
        const data = { timestamp: new Date().toISOString(), data: { users: JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]'), posts: JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOG_POSTS) || '[]'), media: JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOG_MEDIA) || '[]'), carrotItems: JSON.parse(localStorage.getItem(STORAGE_KEYS.CARROT_ITEMS) || '[]'), knowledge: JSON.parse(localStorage.getItem(STORAGE_KEYS.BOT_KNOWLEDGE) || '[]') } };
        const a = document.createElement('a'); a.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)); a.download = 'ICAN_BACKUP.json'; a.click();
    };

    const handleRestore = (e: any) => {
        const file = e.target.files?.[0];
        if (!file || !confirm("Overwrite all data?")) return;
        const r = new FileReader();
        r.onload = (ev) => {
            try {
                const d = JSON.parse(ev.target?.result as string).data;
                if (d.users) localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(d.users));
                if (d.posts) localStorage.setItem(STORAGE_KEYS.BLOG_POSTS, JSON.stringify(d.posts));
                if (d.media) localStorage.setItem(STORAGE_KEYS.BLOG_MEDIA, JSON.stringify(d.media));
                if (d.carrotItems) localStorage.setItem(STORAGE_KEYS.CARROT_ITEMS, JSON.stringify(d.carrotItems));
                if (d.knowledge) localStorage.setItem(STORAGE_KEYS.BOT_KNOWLEDGE, JSON.stringify(d.knowledge));
                alert("Done."); window.location.reload();
            } catch (e) { alert("Error"); }
        };
        r.readAsText(file);
    };

    return (
        <div className="bg-[#F5F5F7] min-h-screen pt-24 pb-24 font-sans text-[#1d1d1f]">
            <div className="max-w-[1024px] mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-1">Admin Dashboard</h1>
                        <p className="text-gray-500 text-sm font-medium">Manage platform resources.</p>
                    </div>
                    <div className="flex bg-[#E5E5EA] p-1 rounded-lg">
                        {['posts', 'users', 'brain', 'system'].map(tab => (
                            <button key={tab} onClick={() => setActiveAdminTab(tab as any)} className={`px-4 py-1.5 text-xs font-semibold rounded-md capitalize transition-all ${activeAdminTab === tab ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-700'}`}>{tab}</button>
                        ))}
                    </div>
                </div>

                {/* --- POSTS TAB --- */}
                {activeAdminTab === 'posts' && (
                    <>
                        <div className="flex justify-end mb-6">
                            <button onClick={handleAddNew} className="bg-[#0071E3] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0077ED] flex items-center gap-2 shadow-sm"><Plus className="w-4 h-4" /> New Post</button>
                        </div>
                        {isFormOpen ? (
                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <div className="flex justify-between mb-6">
                                    <h2 className="text-xl font-bold">{editingId ? 'Edit Post' : 'New Post'}</h2>
                                    <button onClick={() => setIsFormOpen(false)}><X className="w-5 h-5 text-gray-400" /></button>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <input type="text" placeholder="Title" required className="w-full text-lg font-bold border-b py-2 outline-none focus:border-[#0071E3]" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                                    <textarea placeholder="Excerpt" required className="w-full text-sm border-b py-2 outline-none focus:border-[#0071E3] resize-none" rows={2} value={formData.excerpt} onChange={e => setFormData({ ...formData, excerpt: e.target.value })} />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Category" className="text-sm border-b py-2 outline-none" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
                                        <input type="text" placeholder="Author" className="text-sm border-b py-2 outline-none" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} />
                                    </div>

                                    {/* 2-Step AI Workflow UI */}
                                    <div className="space-y-6">
                                        {/* Step 1: Images */}
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-end border-b pb-2">
                                                <label className="text-sm font-bold text-[#1d1d1f] flex items-center gap-2">
                                                    <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                                                    Select Story Images (Max 5)
                                                </label>
                                                <span className="text-xs text-gray-400 font-medium">{formData.galleryImages?.length || 0}/5 Selected</span>
                                            </div>

                                            {/* Image Grid */}
                                            <div className="grid grid-cols-5 gap-3">
                                                {/* Main Cover */}
                                                <div
                                                    onClick={() => openImagePicker('cover')}
                                                    className={`aspect-square rounded-2xl overflow-hidden cursor-pointer relative group border-2 transition-all ${formData.image ? 'border-[#0071E3] shadow-md' : 'border-dashed border-gray-300 hover:border-gray-400 bg-gray-50'}`}
                                                >
                                                    {formData.image ? (
                                                        <>
                                                            <img src={formData.image} className="w-full h-full object-cover" />
                                                            <div className="absolute top-1 left-1 bg-[#0071E3] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">COVER</div>
                                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                                <span className="text-white text-xs font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Change</span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                                            <Plus className="w-8 h-8 mb-2 opacity-50" />
                                                            <span className="text-[10px] font-medium uppercase tracking-wide">Add Cover</span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Slots 2-6 (Gallery) */}
                                                {[0, 1, 2, 3, 4].map((idx) => {
                                                    const imgUrl = formData.galleryImages?.[idx];
                                                    return (
                                                        <div
                                                            key={idx}
                                                            onClick={() => openImagePicker('gallery', idx)}
                                                            className="aspect-square rounded-2xl overflow-hidden cursor-pointer relative group border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                                                        >
                                                            {imgUrl ? (
                                                                <>
                                                                    <img src={imgUrl} className="w-full h-full object-cover" />
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            const newGallery = [...(formData.galleryImages || [])];
                                                                            newGallery.splice(idx, 1);
                                                                            setFormData(p => ({ ...p, galleryImages: newGallery }));
                                                                        }}
                                                                        className="absolute top-1 right-1 bg-white text-red-500 p-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50"
                                                                    >
                                                                        <X className="w-3 h-3" />
                                                                    </button>
                                                                </>
                                                            ) : (
                                                                <div className="flex flex-col items-center justify-center h-full text-gray-300">
                                                                    <ImageIcon className="w-5 h-5 mb-1 opacity-50" />
                                                                    <span className="text-[10px] font-medium">Add</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Step 2: Context */}
                                        <div className="space-y-4">
                                            <div className="border-b pb-2">
                                                <label className="text-sm font-bold text-[#1d1d1f] flex items-center gap-2">
                                                    <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                                                    Add Notes / Context for NanoBanana
                                                </label>
                                            </div>
                                            <textarea
                                                className="w-full p-4 bg-[#F5F5F7] rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#0071E3] transition-all resize-none"
                                                placeholder="e.g. 'This was a rainy day in Ortigas, but the coffee was warm and the mood was nostalgic.' (Optional)"
                                                rows={3}
                                                value={additionalContext}
                                                onChange={(e) => setAdditionalContext(e.target.value)}
                                            />
                                        </div>

                                        {/* Step 3: Action */}
                                        {(formData.image || (formData.galleryImages && formData.galleryImages.length > 0)) && (
                                            <div className="pt-2">
                                                <button
                                                    type="button"
                                                    onClick={handleGenerateFromImage}
                                                    disabled={isGenerating}
                                                    className="w-full py-4 bg-gradient-to-r from-[#1d1d1f] to-[#434344] text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100 transition-all transform active:scale-[0.99]"
                                                >
                                                    {isGenerating ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 animate-spin" />
                                                            <span className="animate-pulse">NanoBanana is writing your story...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                                            <Sparkles className="w-5 h-5 text-yellow-300" />
                                                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-400 text-base">
                                                                Auto-Write Magazine Story
                                                            </span>
                                                        </>
                                                    )}
                                                </button>
                                                <p className="text-center text-[10px] text-gray-400 mt-2">
                                                    * AI (NanoBanana) will weave your images and notes into a lyrical story.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-xs font-bold text-gray-400 uppercase">Content (HTML)</label>
                                            <button type="button" onClick={() => openImagePicker('content')} className="text-[#0071E3] text-xs font-bold hover:underline">Insert Image</button>
                                        </div>
                                        <textarea
                                            rows={12}
                                            className="w-full p-4 border rounded-xl text-sm outline-none focus:border-[#0071E3] font-mono bg-gray-50/50"
                                            value={formData.content}
                                            onChange={e => setFormData({ ...formData, content: e.target.value })}
                                            placeholder="Content will be generated here..."
                                        />
                                    </div>

                                    <div className="flex justify-end gap-3 pt-4">
                                        <button type="button" onClick={() => setIsFormOpen(false)} className="px-6 py-2 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-100">Cancel</button>
                                        <button type="submit" className="px-6 py-2 rounded-xl text-sm font-bold bg-[#1d1d1f] text-white hover:bg-black">Save Story</button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {posts.map(post => (
                                    <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                                        <div className="aspect-[3/2] relative bg-gray-100"><img src={post.image} className="w-full h-full object-cover" />
                                            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEdit(post)} className="bg-white p-2 rounded-full shadow-sm"><Edit className="w-4 h-4" /></button>
                                                <button onClick={() => deletePost(post.id)} className="bg-white p-2 rounded-full text-red-500 shadow-sm"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                        <div className="p-4 flex-1 flex flex-col">
                                            <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                                            <p className="text-xs text-gray-500 line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                                            <span className="text-[10px] uppercase font-bold text-[#0071E3]">{post.category}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {/* --- USERS TAB --- */}
                {activeAdminTab === 'users' && (
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h2 className="text-lg font-bold">User Management</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input type="text" placeholder="Search users..." className="pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[#0071E3]" value={userSearchTerm} onChange={e => setUserSearchTerm(e.target.value)} />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                                    <tr>
                                        <th className="p-4 pl-6">Name</th>
                                        <th className="p-4">Email</th>
                                        <th className="p-4">Role</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4 text-right pr-6">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {allUsers.filter(u => u.name.toLowerCase().includes(userSearchTerm.toLowerCase())).map(u => (
                                        <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 pl-6 font-medium">{u.name}</td>
                                            <td className="p-4 text-gray-500">{u.email}</td>
                                            <td className="p-4"><span className={`px-2 py-1 rounded-md text-xs font-bold uppercase ${u.status === 'admin' ? 'bg-purple-50 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>{u.role}</span></td>
                                            <td className="p-4"><span className={`px-2 py-1 rounded-md text-xs font-bold uppercase ${u.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>{u.status}</span></td>
                                            <td className="p-4 text-right pr-6 flex justify-end gap-2">
                                                <button onClick={() => updateUserRole(u.id, u.role === 'admin' ? 'user' : 'admin')} className="p-1.5 hover:bg-gray-100 rounded-md" title="Toggle Role"><Shield className="w-4 h-4 text-gray-400" /></button>
                                                <button onClick={() => updateUserStatus(u.id, u.status === 'active' ? 'blocked' : 'active')} className="p-1.5 hover:bg-gray-100 rounded-md" title="Toggle Status">{u.status === 'active' ? <UserX className="w-4 h-4 text-red-400" /> : <UserCheck className="w-4 h-4 text-green-400" />}</button>
                                                <button onClick={() => deleteUser(u.id)} className="p-1.5 hover:bg-red-50 rounded-md" title="Delete"><Trash2 className="w-4 h-4 text-red-400" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* --- BRAIN TAB --- */}
                {activeAdminTab === 'brain' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 border border-gray-200 bg-white rounded-3xl p-6 shadow-sm h-fit">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Plus className="w-5 h-5 text-[#0071E3]" /> Add Knowledge</h3>
                            <form onSubmit={handleKnowledgeSubmit} className="space-y-4">
                                <input type="text" placeholder="Title / Keyword" className="w-full px-4 py-3 bg-[#F5F5F7] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0071E3]" value={newKnowledgeTitle} onChange={e => setNewKnowledgeTitle(e.target.value)} required />
                                <textarea placeholder="Information Content" rows={6} className="w-full px-4 py-3 bg-[#F5F5F7] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0071E3]" value={newKnowledgeContent} onChange={e => setNewKnowledgeContent(e.target.value)} required />
                                <button type="submit" className="w-full py-3 bg-[#0071E3] text-white rounded-xl font-bold text-sm hover:bg-[#0077ED] transition-colors">Add to Knowledge Base</button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-sm mb-3 text-gray-700">Bulk Import</h4>
                                <p className="text-xs text-gray-500 mb-4">Upload a JSON file to populate the brain.</p>
                                <input
                                    type="file"
                                    accept=".json"
                                    ref={knowledgeUploadRef}
                                    className="hidden"
                                    onChange={handleKnowledgeJsonUpload}
                                />
                                <button
                                    onClick={() => knowledgeUploadRef.current?.click()}
                                    className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    <CloudUpload className="w-4 h-4" /> Upload JSON
                                </button>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 space-y-4">
                            <h3 className="font-bold text-lg text-gray-400 uppercase text-xs tracking-widest mb-4">Current Knowledge Base ({knowledgeBase.length})</h3>
                            {knowledgeBase.map(kb => (
                                <div key={kb.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#0071E3] transition-colors relative">
                                    <h4 className="font-bold text-[#1d1d1f] mb-2">{kb.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">{kb.content}</p>
                                    <button onClick={() => deleteKnowledge(kb.id)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            ))}
                            {knowledgeBase.length === 0 && <div className="text-center py-12 text-gray-400 italic">No knowledge added yet.</div>}
                        </div>
                    </div>
                )}

                {/* --- SYSTEM TAB --- */}
                {activeAdminTab === 'system' && (
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><HardDrive className="w-5 h-5" /> Data Management</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h4 className="font-bold mb-2">Backup</h4>
                                <p className="text-sm text-gray-500 mb-4">Download system data as JSON.</p>
                                <button onClick={handleFullBackup} className="px-6 py-2 bg-[#1d1d1f] text-white rounded-lg text-sm font-bold">Download</button>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h4 className="font-bold mb-2">Restore</h4>
                                <p className="text-sm text-gray-500 mb-4">Overwrite data from backup.</p>
                                <input type="file" ref={systemRestoreInputRef} onChange={handleRestore} className="hidden" />
                                <button onClick={() => systemRestoreInputRef.current?.click()} className="px-6 py-2 border border-gray-300 bg-white text-black rounded-lg text-sm font-bold">Select File</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <ImagePickerModal isOpen={isImagePickerOpen} onClose={() => setIsImagePickerOpen(false)} onSelect={handleImagePickerSelect} multiple={imagePickerTarget === 'content'} />
        </div>
    );
};

export default BlogAdmin;
