'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const GalleryDetail = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: '/images/news/wangyan.png',
      alt: 'Congratulations to Dr. LIAO Meng on his promotion and WANG Yan on his Ph.D.',
      caption: 'Congratulations to Dr. LIAO Meng on his promotion and WANG Yan on his Ph.D.'
    },
    {
      src: '/images/news/zhangchunlei.jpg',
      alt: 'Congratulations to Dr. Sun Xianglang on his promotion and Zhang Chunlei on his Ph.D.',
      caption: 'Congratulations to Dr. Sun Xianglang on his promotion and Zhang Chunlei on his Ph.D.'
    },
    {
      src: '/images/news/liboprofessor.jpg',
      alt: 'Congratulations to Dr. Li Bo, Dr. Gao Danpeng, and Dr. Li Xintong',
      caption: 'Congratulations to Dr. Li Bo, Dr. Gao Danpeng, and Dr. Li Xintong'
    },
    {
      src: '/images/news/nicolong.jpg',
      alt: 'Workshop with Professor Nicholas Long',
      caption: 'Workshop with Professor Nicholas Long'
    },
    {
      src: '/images/news/geneva50.jpg',
      alt: 'Gold Medal at the 50th International Exhibition of Inventions Geneva',
      caption: 'Gold Medal at the 50th International Exhibition of Inventions Geneva'
    },
    {
      src: '/images/news/genva49.jpg',
      alt: 'Laboratory Building',
      caption: '49th International Exhibition of Inventions of Geneva'
    },
    {
      src: '/images/news/haoxiaojin.jpg',
      alt: 'Research team member',
      caption: 'Workshop with Professor Hao Xiaojin'
    },
    {
      src: '/images/news/wuxinlizhen.jpg',
      alt: 'Conference presentation',
      caption: 'Congratulations to Dr. Li Zhen, Dr. Wu Xin, and Dr. Liu Yizhe'
    },
    {
      src: '/images/news/geneva48.jpg',
      alt: 'Conference presentation',
      caption: '48th International Exhibition of Inventions of Geneva'
    },
    
    
  ]

  // 按类别组织图片
  const categories = [
    { name: 'All', count: galleryImages.length },
    { name: 'Facilities', count: 2 },
    { name: 'Team', count: 7 },
    { name: 'Research', count: 3 }
  ]

  const [activeCategory, setActiveCategory] = useState('All')

  // 根据类别筛选图片
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter((_, index) => {
        if (activeCategory === 'Facilities' && (index === 0 || index === 8)) return true
        if (activeCategory === 'Team' && (index > 0 && index < 6 || index > 6)) return true
        if (activeCategory === 'Research' && (index === 2 || index === 3 || index === 11)) return true
        return false
      })

  return (
    <div>
      {/* 类别筛选 */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.name
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* 图片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="h-60 overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 图片为空时的提示 */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No images found in this category.</p>
        </div>
      )}

      {/* 图片弹窗 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute top-2 right-2 bg-white rounded-full p-1"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} className="text-gray-800" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryDetail 