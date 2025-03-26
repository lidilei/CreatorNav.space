import React, { useState } from 'react';

// 自定义SVG图标
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const PlayCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polygon points="13 2 3 14 12 14 11 22 21 10"></polygon>
  </svg>
);

const ToolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const PieChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);

const HERO_CATEGORIES = [
  {
    icon: <PlayCircleIcon />,
    title: 'YouTube创作',
    description: '全方位创作指南'
  },
  {
    icon: <ZapIcon />,
    title: 'TikTok运营',
    description: '快速增长秘籍'
  },
  {
    icon: <ToolIcon />,
    title: '创作工具',
    description: '高效制作利器'
  }
];

const FEATURED_RESOURCES = [
  {
    title: 'YouTube算法解析',
    category: '平台运营',
    tags: ['SEO', '推荐算法']
  },
  {
    title: 'TikTok内容策略',
    category: '内容创作',
    tags: ['趋势', '病毒式传播']
  },
  {
    title: '短视频剪辑技巧',
    category: '内容创作',
    tags: ['剪辑', '特效']
  }
];

const CreatorNavModernHomepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 顶部hero区域 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            创作者导航站 CreatorNav
          </h1>
          <p className="text-xl mb-8 text-white/80">
            为YouTube和TikTok内容创作者提供最全面的资源和工具
          </p>

          {/* 搜索栏 */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
            <input 
              type="text"
              placeholder="搜索创作工具、运营技巧..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>

      {/* 快速入口 */}
      <div className="max-w-6xl mx-auto -mt-12">
        <div className="grid md:grid-cols-3 gap-6">
          {HERO_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-blue-500 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-500">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 精选资源 */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">精选资源</h2>
          <a href="#" className="text-blue-600 hover:underline">更多资源</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_RESOURCES.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {resource.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <div className="flex space-x-2">
                {resource.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 平台资源导航 */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">平台资源导航</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <TrendingUpIcon />, title: 'YouTube运营' },
            { icon: <BookOpenIcon />, title: '内容创作' },
            { icon: <PieChartIcon />, title: '数据分析' },
            { icon: <ToolIcon />, title: '创作工具' }
          ].map((nav, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-blue-500 mb-4 flex justify-center">
                {nav.icon}
              </div>
              <h3 className="text-xl font-bold">{nav.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">关于CreatorNav</h4>
            <p className="text-gray-400">为创作者提供最全面的资源导航站</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">快速导航</h4>
            <ul className="space-y-2">
              <li>首页</li>
              <li>资源分类</li>
              <li>投稿</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">资源分类</h4>
            <ul className="space-y-2">
              <li>YouTube</li>
              <li>TikTok</li>
              <li>内容创作</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">联系我们</h4>
            <p className="text-gray-400">邮箱: contact@creatornav.space</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatorNavModernHomepage;
