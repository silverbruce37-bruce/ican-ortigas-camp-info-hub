import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Hash, RefreshCw, X, Youtube, Home } from 'lucide-react';

// INLINED DATA & COMPONENT TO PREVENT IMPORT/CRASH ISSUES
interface WaymakerNode {
    id: string;
    title: string;
    category: string;
    tags: string[];
    thumbnail: string;
    desc: string;
    duration: string;
    date: string;
    student?: string;
    videoUrl: string;
    x: number;
    y: number;
    z: number;
    type?: string;
    orbitTarget?: string;
    shipType?: number;
    isHoly?: boolean;
    isNew?: boolean;
}

const waymakerNodes: WaymakerNode[] = [
    // --- MISSIONARY JOURNEY (THE HOLY CONSTELLATION) ---
    {
        id: 'mission_01_antioch',
        title: "수리아 안디옥 (The Calling)",
        student: "Paul & Barnabas",
        category: 'Missionary',
        tags: ['#부르심', '#출발', '#성령의지시', '#Journey'],
        thumbnail: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop',
        desc: "주를 섬겨 금식할 때에 성령이 이르시되... (행 13:2)",
        duration: "00:00",
        date: "AD 46",
        x: 0, y: 50, z: 0,
        type: 'missionary',
        isHoly: true,
        videoUrl: ""
    },
    {
        id: 'mission_02_seleucia',
        title: "실루기아 (The Port)",
        student: "Paul & Barnabas",
        category: 'Missionary',
        tags: ['#항구', '#떠남', '#첫걸음', '#Journey'],
        thumbnail: 'https://images.unsplash.com/photo-1505245208761-ba872912fac0?q=80&w=2070&auto=format&fit=crop',
        desc: "두 사람이 성령의 보내심을 받아 실루기아에 내려가... (행 13:4)",
        duration: "00:00",
        date: "AD 46",
        x: 20, y: 45, z: 10,
        type: 'missionary',
        isHoly: true,
        videoUrl: ""
    },
    {
        id: 'mission_03_salamis',
        title: "살라미 (The Synagogues)",
        student: "Paul & Barnabas & John",
        category: 'Missionary',
        tags: ['#구브로', '#회당', '#말씀전파', '#Journey'],
        thumbnail: 'https://images.unsplash.com/photo-1548625361-e88c60dc55f4?q=80&w=2070&auto=format&fit=crop',
        desc: "살라미에 이르러 하나님의 말씀을 유대인의 여러 회당에서 전할새... (행 13:5)",
        duration: "00:00",
        date: "AD 46",
        x: 40, y: 40, z: 20,
        type: 'missionary',
        isHoly: true,
        videoUrl: ""
    },
    {
        id: 'mission_04_paphos',
        title: "바보 (The Confrontation)",
        student: "Paul (Saul)",
        category: 'Missionary',
        tags: ['#총독', '#엘루마', '#성령충만', '#Journey'],
        thumbnail: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop',
        desc: "바울이라고 하는 사울이 성령이 충만하여 그를 주목하고... (행 13:9)",
        duration: "00:00",
        date: "AD 46",
        x: 60, y: 35, z: 10,
        type: 'missionary',
        isHoly: true,
        videoUrl: ""
    },
    {
        id: 'kwon-soo-a-happiness',
        title: "행복은 선물인가, 재능인가?",
        student: "권수아 (Kwon Soo A)",
        category: 'TED',
        tags: ['#행복', '#관점', '#재능', '#철학', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "우리가 느끼는 행복은 타고나는 것일까요, 아니면 훈련할 수 있는 근육일까요? 행복에 대한 깊이 있는 통찰.",
        duration: "04:12",
        date: "2024.10.15",
        videoUrl: "PtIN1fFSeJs",
        x: 0, y: 0, z: 0
    },
    {
        id: 'kwon-soo-a-animals',
        title: "문화적 삶: 동물 vs 인간",
        student: "권수아 (Kwon Soo A)",
        category: 'TED',
        tags: ['#문화', '#생물학', '#관점', '#과학'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "동물과 인간의 사회적 구조와 문화적 행동을 비교하며, 우리 삶의 본질을 탐구합니다.",
        duration: "05:10",
        date: "2024.11.02",
        videoUrl: "pXwjQGfDyWM",
        x: -25, y: 15, z: 10
    },
    {
        id: 'kim-joi-table-tennis',
        title: "탁구의 놀라운 세계",
        student: "김조이 (Kim Joi)",
        category: '방송',
        tags: ['#스포츠', '#열정', '#기술', '#몰입', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "탁구공 회전에 숨겨진 물리학과, 그 안에 담긴 뜨거운 열정을 이야기합니다.",
        duration: "03:30",
        date: "2024.09.20",
        videoUrl: "HtLG95LIAQw",
        x: 25, y: -10, z: -15
    },
    {
        id: 'lee-soo-eun-interview',
        title: "2025 겨울방학 파이널 인터뷰",
        student: "이수은 (Lee Soo Eun)",
        category: '비전',
        tags: ['#성장', '#인터뷰', '#미래리더', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "지난 겨울 캠프 동안 겪은 도전과 성장의 이야기, 그리고 미래를 향한 다짐.",
        duration: "04:00",
        date: "2025.02.01",
        videoUrl: "seOAHUY5kXI",
        x: 10, y: -25, z: 20
    },
    {
        id: 'ted-cinematic-benchmark',
        title: "미래의 수사학 (시네마틱 벤치마크)",
        student: "다니엘 팀 (Daniel Team)",
        category: '다큐멘터리',
        tags: ['#시네마틱', '#수사학', '#퀄리티', '#미래리더'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "학생 영상 제작의 기준점이 되는 고품질 시네마틱 영상. 말의 질감과 깊이를 시각화하다.",
        duration: "06:00",
        date: "2026.02.02",
        videoUrl: "PtIN1fFSeJs",
        x: -15, y: 30, z: -10
    },
    {
        id: 'park-si-yeon-climate',
        title: "TED:: Climate Change",
        student: "박시연 (Park Si Yeon)",
        category: 'TED',
        tags: ['#기후변화', '#환경', '#미래', '#책임', '#New'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "기후 변화의 심각성과 우리가 가져야 할 책임감에 대한 박시연 학생의 통찰력 있는 발표.",
        duration: "03:45",
        date: "2025.01.01",
        videoUrl: "J0fXgg6W_BE",
        x: 40, y: 20, z: -10,
        isNew: true
    },
    {
        id: 'mok-min-chan-space-junk',
        title: "Space Junk: Who Should Be Responsible?",
        student: "목민찬 (Mok Min Chan)",
        category: 'TED Documentary',
        tags: ['#우주', '#환경', '#우주쓰레기', '#과학', '#책임'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "우주 개발의 이면에 감춰진 우주 쓰레기 문제, 누가 책임져야 할까요?",
        duration: "05:15",
        date: "2024.12.29",
        videoUrl: "sSgwXQfQHmA",
        x: -30, y: 30, z: -30,
        type: 'satellite',
        orbitTarget: 'kwon-soo-a-happiness'
    },
    {
        id: 'ahn-jay-space-pollution',
        title: "Human Actions and Space Pollution",
        student: "안제이 (Ahn Jay)",
        category: 'TED Documentary',
        tags: ['#우주오염', '#인류', '#환경보호', '#지속가능성'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "인류의 활동이 우주 환경에 미치는 영향과 우리가 나아가야 할 방향.",
        duration: "04:40",
        date: "2024.12.28",
        videoUrl: "jvKzvW6Yt-g",
        x: 30, y: -30, z: 30,
        type: 'satellite',
        orbitTarget: 'kwon-soo-a-happiness'
    },
    {
        id: 'kim-ji-woo-drones',
        title: "EduSpace Conference :: Drones in Space Exploration",
        student: "Kim Ji Woo",
        category: 'Eduspace',
        tags: ['#Drones', '#Space', '#Future', '#Tech'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "우주 탐사에서 드론이 어떻게 활용될 수 있는지, 김지우 학생의 미래 기술 브리핑.",
        duration: "04:15",
        date: "2025.09.15",
        videoUrl: "7bKbsT_25rI",
        x: 70, y: 30, z: -40,
        type: 'spaceship',
        shipType: 2
    },
    {
        id: 'choi-ji-yun-interview',
        title: "Winter 2025 Final Interview",
        student: "Choi Ji Yun",
        category: 'Interview',
        tags: ['#New', '#Interview', '#ICAN'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "Choi Ji Yun shares her thoughts on the winter camp.",
        duration: "00:00",
        date: "2026.02.05",
        videoUrl: "gDyCQJF5udI",
        x: 0, y: 0, z: 0,
        type: 'shooting-star'
    },
    {
        id: 'hong-seong-wook-interview',
        title: "Winter 2025 Final Interview",
        student: "Hong Seong Wook",
        category: 'Interview',
        tags: ['#New', '#Interview', '#ICAN'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "Reflecting on the best moments of the camp.",
        duration: "00:00",
        date: "2026.02.05",
        videoUrl: "-2w1ybqKilk",
        x: 0, y: 0, z: 0,
        type: 'shooting-star'
    }
];

const allTags = Array.from(new Set(waymakerNodes.flatMap(node => node.tags)));

interface CanvasProps {
    selectedTag: string | null;
    onNodeClick: (node: WaymakerNode) => void;
}

const WaymakerCanvas: React.FC<CanvasProps> = ({ selectedTag, onNodeClick }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const tagRef = useRef(selectedTag);
    tagRef.current = selectedTag;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let rotation = 0;
        let mouseX = 0;
        let mouseY = 0;
        let hoveredNode: WaymakerNode | null = null;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleClick = () => {
            if (hoveredNode) {
                onNodeClick(hoveredNode);
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };
        window.addEventListener('resize', resize);
        resize();

        const links: { source: WaymakerNode, target: WaymakerNode }[] = [];
        waymakerNodes.forEach((n1, i) => {
            waymakerNodes.slice(i + 1).forEach(n2 => {
                const shared = n1.tags.filter(t => n2.tags.includes(t));
                if (shared.length > 0) {
                    links.push({ source: n1, target: n2 });
                }
            });
        });

        const render = () => {
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            rotation += 0.002;
            const currentTag = tagRef.current;
            hoveredNode = null;

            const project = (x: number, y: number, z: number) => {
                const cos = Math.cos(rotation);
                const sin = Math.sin(rotation);
                const rotX = x * cos - z * sin;
                const rotZ = x * sin + z * cos;
                const scale = 800 / (800 + rotZ * 10);
                return {
                    x: centerX + rotX * 10 * scale,
                    y: centerY + y * 10 * scale,
                    scale: scale,
                    z: rotZ,
                    isVisible: scale > 0
                };
            };

            // --- HOLY PATH (MISSIONARY JOURNEY) ---
            const holyNodes = waymakerNodes.filter(n => n.isHoly);
            if (holyNodes.length > 1) {
                ctx.beginPath();
                holyNodes.forEach((node, index) => {
                    const p = project(node.x, node.y, node.z);
                    if (index === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                });
                const pulse = (Math.sin(Date.now() * 0.002) + 1) / 2;
                ctx.strokeStyle = `rgba(245, 158, 11, ${0.3 + pulse * 0.5})`;
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.stroke();
                ctx.setLineDash([]);
            }

            links.forEach(link => {
                const isHighlighed = currentTag
                    ? (link.source.tags.includes(currentTag) && link.target.tags.includes(currentTag))
                    : false;
                if (currentTag && !isHighlighed) return;

                const p1 = project(link.source.x, link.source.y, link.source.z);
                const p2 = project(link.target.x, link.target.y, link.target.z);
                if (!p1.isVisible || !p2.isVisible) return;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = isHighlighed ? 'rgba(96, 165, 250, 0.8)' : 'rgba(59, 130, 246, 0.1)';
                ctx.lineWidth = isHighlighed ? 2 : 0.5;
                ctx.stroke();
            });

            waymakerNodes.forEach(node => {
                // SATELLITE & SHOOTING STAR LOGIC (SYNCED FROM GALAXY.HTML)
                if (node.type === 'satellite') {
                    const targetNode = waymakerNodes.find(n => n.id === node.orbitTarget);
                    if (targetNode) {
                        const time = Date.now() * 0.001;
                        const offset = node.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;
                        const angle = (time * 0.015) + offset;
                        node.x = targetNode.x + Math.cos(angle) * 60;
                        node.z = targetNode.z + Math.sin(angle) * 60;
                        node.y = targetNode.y + Math.sin(time * 0.3) * 10;
                    }
                } else if (node.type === 'shooting-star') {
                    const time = Date.now() * 0.0008;
                    const offset = node.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    const a = 50 + (offset % 30);
                    const b = 15 + (offset % 10);
                    const angle = time + offset;
                    node.x = Math.cos(angle) * a;
                    node.z = Math.sin(angle) * b;
                    node.y = (Math.cos(angle) * a * 0.2);
                }

                const p = project(node.x, node.y, node.z);
                if (!p.isVisible) return;

                const isSelected = currentTag ? node.tags.includes(currentTag) : true;
                const isHovered = Math.abs(p.x - mouseX) < 20 && Math.abs(p.y - mouseY) < 20;
                if (isHovered) hoveredNode = node;

                ctx.save();
                ctx.translate(p.x, p.y);
                const baseSize = ((isSelected ? 4 : 2) + (isHovered ? 3 : 0)) * p.scale;

                if (node.type === 'spaceship') {
                    const s = baseSize * 2.5;
                    ctx.fillStyle = isSelected || isHovered ? '#22d3ee' : '#0e7490';
                    ctx.beginPath();
                    ctx.moveTo(0, -s); ctx.lineTo(s * 0.8, s); ctx.lineTo(0, s * 0.7); ctx.lineTo(-s * 0.8, s);
                    ctx.closePath();
                    ctx.fill();
                } else if (node.type === 'shooting-star') {
                    const time = Date.now() * 0.0008;
                    const offset = node.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    const angle = time + offset;
                    const tx = Math.sin(angle) * 20;
                    const ty = -Math.cos(angle) * 10;
                    const grad = ctx.createLinearGradient(0, 0, tx, ty);
                    grad.addColorStop(0, '#fef08a'); grad.addColorStop(1, 'transparent');
                    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(tx, ty); ctx.strokeStyle = grad; ctx.lineWidth = 4 * p.scale; ctx.stroke();
                    ctx.beginPath(); ctx.arc(0, 0, baseSize * 1.8, 0, Math.PI * 2); ctx.fillStyle = '#fef08a'; ctx.fill();
                } else {
                    let color = isSelected || isHovered ? '#60a5fa' : '#475569';
                    if (node.isHoly) color = '#F59E0B';
                    else if (node.isNew) color = '#fbbf24';
                    ctx.beginPath();
                    ctx.arc(0, 0, baseSize, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    if (isSelected || isHovered || node.isHoly) {
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = color;
                    }
                    ctx.fill();
                }
                ctx.restore();

                if (p.scale > 0.8 || isSelected || isHovered) {
                    ctx.fillStyle = isSelected || isHovered ? 'white' : 'rgba(255,255,255,0.5)';
                    ctx.font = isSelected || isHovered ? 'bold 12px sans-serif' : '10px sans-serif';
                    ctx.fillText((node.isHoly ? "✝ " : (node.type === 'spaceship' ? "🛸 " : "")) + (node.student || node.title.split('(')[0]), p.x + 12, p.y + 4);
                }
            });

            canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

const Waymaker: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<WaymakerNode | null>(null);

    return (
        <div className="relative min-h-screen text-white overflow-hidden bg-slate-900 font-sans">
            <WaymakerCanvas selectedTag={selectedTag} onNodeClick={setSelectedVideo} />



            <div className="relative z-10 container mx-auto px-4 py-10 min-h-screen flex flex-col pointer-events-none">



                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center pt-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20 backdrop-blur-sm pointer-events-auto">
                        <RefreshCw size={12} className={selectedTag ? "animate-spin" : ""} />
                        The Infinity Loop Protocol
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 tracking-tight drop-shadow-2xl">
                        SPACE WAYMAKER
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        아이들의 생각이 연결되어 거대한 은하계를 이룹니다.<br />
                        별(이름)을 누르면 아이들의 이야기를 볼 수 있습니다.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="fixed right-8 bottom-8 z-30 flex flex-col gap-2 items-end pointer-events-auto"
                >


                    <div className="text-[10px] text-slate-500 font-mono mb-2 uppercase tracking-widest bg-slate-900/80 px-2 py-1 rounded backdrop-blur border border-slate-800">
                        Constellation Navigation
                    </div>
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-4 py-2 rounded-l-full text-xs font-medium transition-all duration-300 border-r-4 backdrop-blur-md w-32 text-right ${selectedTag === null
                            ? 'bg-white text-slate-900 border-blue-500 shadow-[0_0_20px_rgba(255,255,255,0.4)] translate-x-2'
                            : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:border-slate-500 hover:bg-slate-800/80 hover:w-36'
                            }`}
                    >
                        전체 보기 (Reset)
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                            className={`px-4 py-2 rounded-l-full text-xs font-medium transition-all duration-300 border-r-4 flex items-center justify-end gap-2 backdrop-blur-md w-auto min-w-[120px] ${selectedTag === tag
                                ? 'bg-gradient-to-l from-blue-600/90 to-blue-900/40 text-white border-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.6)] translate-x-2'
                                : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:border-blue-500/50 hover:text-blue-200 hover:bg-slate-800/80 hover:pr-6'
                                }`}
                        >
                            {tag.replace('#', '')} <Hash size={10} className="opacity-50" />
                        </button>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-slate-900 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 relative max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur z-10">
                                <div className="flex items-center gap-2">
                                    <div className="text-red-500"><Youtube size={24} /></div>
                                    <h3 className="font-bold text-white text-lg line-clamp-1">{selectedVideo.title}</h3>
                                </div>
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="aspect-video w-full bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedVideo.videoUrl}?autoplay=1`}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="px-8 py-6 bg-slate-900">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-white">{selectedVideo.title}</h2>
                                    <span className="text-slate-500 font-mono text-sm">{selectedVideo.date}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-slate-400 text-sm">{selectedVideo.student}</span>
                                    <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                                    <span className="text-slate-500 text-sm">{selectedVideo.category}</span>
                                </div>

                                <p className="text-slate-300 leading-relaxed mb-8 border-l-2 border-slate-700 pl-4">
                                    {selectedVideo.desc}
                                </p>

                                <div className="flex gap-2 mb-8 flex-wrap">
                                    {selectedVideo.tags.map(tag => (
                                        <span key={tag} className="text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Home Button (Top Right) - Bulletproof Inline Styles - SVG Version */}
            <a href="/" style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '50%', boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)', cursor: 'pointer', textDecoration: 'none' }} title="Main Base">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            </a>
        </div>
    );
};

export default Waymaker;
