'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Gallery = () => {
  // 只选择3张预览图片
  const previewImages = [
    {
      src: '/images/news/zhangchunlei.jpg',
      alt: 'Congratulations to Dr. Sun Xianglang on his promotion and Zhang Chunlei on his Ph.D.',
    },
    {
      src: '/images/news/liboprofessor.jpg',
      alt: 'Congratulations to Dr. Li Bo, Dr. Gao Danpeng, and Dr. Li Xintong',
    },
    {
      src: '/images/news/nicolong.jpg',
      alt: 'Workshop with Professor Nicholas Long',
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Gallery
            </h2>
            <p className="text-lg text-gray-600">
              A visual journey through our research facilities and activities
            </p>
          </div>
          <Link 
            href="/gallery" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-1">View full gallery</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 图片预览网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <Link 
              key={index} 
              href="/gallery"
              className="block h-40 md:h-48 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="mt-8 text-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery 