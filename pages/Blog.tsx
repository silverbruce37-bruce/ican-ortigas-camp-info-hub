import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBlog } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const { posts } = useBlog();
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(p => p.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 font-sans text-gray-900">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2 font-['Playfair_Display']">
              <span className="text-2xl mr-2">로이하우스</span>
              <span>LIVING IN WONDER</span>
            </h1>
            <p className="text-gray-500 text-sm">이곳에서의 평범한 일상이 아이들에게는 특별한 여정이 됩니다.</p>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              올티가스 근처의 좋은 명소들을 나노바나나가 소개합니다. 직접갈 수 없는 경우 빠른 정보 전달을 위해서 온라인상에서 실제로 직접 방문한 사람들의 이야기를 모아 각색해서 스토리를 만들어 보여드립니다.<br />
              실제로 로이하우스 식구들이 방문하거나 경험을 통해 쓴 글은 <span className="font-bold text-blue-600">"레알"</span> 이라는 문구를 넣어 실제경험담을 나누게 될 것입니다.
            </p>
          </div>
          <Link
            to={user && user.role === 'admin' ? "/blog/admin" : "/admin/login"}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors bg-gray-50 px-4 py-2 rounded-full"
          >
            <Settings size={16} />
            <span>Admin Console</span>
          </Link>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.id}`} className="block mb-20 group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4 text-sm font-medium">
                  <span className="text-blue-600">{featuredPost.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 font-medium text-blue-600 group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          </Link>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {remainingPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <span className="text-blue-600">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 leading-snug group-hover:text-blue-600 transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-gray-400 font-medium">No stories found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;