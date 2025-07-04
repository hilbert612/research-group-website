'use client'

import Link from 'next/link'
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'

const News = () => {
  // 只显示3个最新的新闻
  const newsItems = [
    {
      title: "Congratulations to Prof. Zhu Zonglong for being awarded the Research Grants Council (RGC) Research Impact Fund for 2024/25",
      content: "Five research projects led by City University of Hong Kong (CityUHK) have been awarded a total of HK$26.4 million from the Research Grants Council (RGC) under the Research Impact Fund. This achievement ranks CityUHK first in both the number of projects and funding amount among the top eight UGC-funded universities. The research projects cover sustainable development and energy, medical and drug development and biomedical engineering, showcasing CityUHK scholars’ commitment to advancing cutting-edge research and translating academic results into practical applications to continuously promote sustainable development and contribute to societal advancement.In the area of green energy and sustainable development, a project led by Professor Zhu Zonglong, from the Department of Chemistry, titled “Advancing Sustainable and Closed-loop Eco-friendly Emerging Perovskite Photovoltaic”, received a grant of HK$7.7 million. Perovskite solar cells are gaining attention for their high efficiency, low cost, and multifunctional applications in building-integrated photovoltaics and tandem solar cells. The research aims to promote environmentally friendly manufacturing of perovskite solar cells, mitigate lead leakage, and create sustainable recycling solutions to reduce the environmental impact, thereby facilitating the widespread application of perovskite technology in the green energy field.",
      date: "2025-01-16",
      category: "Event",
      image: "/images/news/RIF.jpg", // Placeholder image path
      sourceUrl: "https://www.cityu.edu.hk/media/news/2025/01/16/cityuhk-achieves-excellence-sustainable-development-and-biomedical-engineering-research-champion-funding-rgcs-research-impact-fund" // Example URL
    },
    {
      title: "Interdisciplinary science research for enhancing sustainability through solar cells",
      content: "Published in Science, the research is significant because the simple device structure that the CityUHK team has built can facilitate future industrial production and enhance confidence in the commercialisation of perovskite solar cells.",
      date: "2024-12-14",
      category: "Publication",
      image: "/images/news/science3.jpg", // Placeholder image path
      sourceUrl: "https://www.cityu.edu.hk/media/news/2024/10/14/interdisciplinary-science-research-enhancing-sustainability-through-solar-cells" // Example URL
    },
    {
      title: "Celebrating Excellence: Honoring Prof. ZHU Zonglong for receiving CSCI College Awards 2024/2025",
      content: "Congratulations to Dr. Li Bo for obtaining a professor position at Central South University, and congratulations to Gao Danpeng and Li Xintong for receiving their doctoral degrees - celebration dinner.",
      date: "2025-05-12",
      category: "News",
      image: "/images/news/csci.jpg", // Placeholder image path
      sourceUrl: "https://www.cityu.edu.hk/chem/news/csciaward202425" // Example URL
    }
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Latest News
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with our recent achievements and announcements
            </p>
          </div>
          <Link 
            href="/news" 
            className="hidden md:flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-1">View all news</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.content}
                </p>
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/news" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read more
                  </Link>
                  {item.sourceUrl && (
                    <a 
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                    >
                      <span className="mr-1">Source</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Button (Mobile) */}
        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/news" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}

export default News 