import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { ArrowLeft, User, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts } = useBlog();
  const post = posts.find(p => p.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!post?.galleryImages?.length) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === post.galleryImages!.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [post?.galleryImages]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-white">
        <h2 className="text-2xl font-bold">Post Not Found</h2>
        <Link to="/blog" className="text-blue-500 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white pb-20 pt-24 font-sans text-gray-900">
      {/* Article Header */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">
          {post.category}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Author" />
            </div>
            <span className="font-medium text-black">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="aspect-[21/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-sm">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xl md:text-2xl font-medium italic leading-relaxed mb-12 text-gray-700 border-l-4 border-blue-500 pl-6 py-2">
          "{post.excerpt}"
        </div>

        <div
          className="prose prose-lg prose-blue max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Gallery */}
        {post.galleryImages && post.galleryImages.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h3 className="text-2xl font-bold mb-8">Gallery</h3>
            <div className="relative aspect-[4/3] md:aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden group">
              <img src={post.galleryImages[currentSlide]} alt={`Slide ${currentSlide}`} className="w-full h-full object-cover transition-all duration-500" />

              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setCurrentSlide(p => (p === 0 ? post.galleryImages!.length - 1 : p - 1))}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => setCurrentSlide(p => (p === post.galleryImages!.length - 1 ? 0 : p + 1))}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {post.galleryImages.map((_, idx) => (
                  <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-white/50'}`} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mt-12 flex gap-2 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;