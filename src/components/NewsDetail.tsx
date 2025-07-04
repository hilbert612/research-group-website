'use client'

import { useState } from 'react'
import { Calendar, Tag, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

const NewsDetail = () => {
  const [expandedNews, setExpandedNews] = useState<number | null>(null)

  const allNews = [
    {
      id: 1,
      title: 'Congratulations to our CHEM colleagues on being recognized as the Top 2% of the World\'s Most Highly Cited Scientists in the latest report of Stanford University released in October 2024.',
      date: '02 Dec 2024',
      image: '/images/news/highly-cited-2024.jpg',
      summary: 'Our CHEM colleagues have been recognized as the Top 2% of the World\'s Most Highly Cited Scientists in the latest report of Stanford University.',
      content: `Congratulations to our CHEM colleagues on being recognized as the Top 2% of the World's Most Highly Cited Scientists in the latest report of Stanford University released in October 2024. It provides information on the work of the world's top-cited scientists including standardised information on citations, h-index, co-authorship-adjusted hm-index, citations to papers in different authorship positions, and a composite indicator (c-score).`,
      tags: ['Achievement', 'Recognition', 'Research Impact'],
      sourceUrl: 'https://www.cityu.edu.hk/chem/news/Highly%20Cited2024_Top2'
    },
    {
      id: 2,
      title: 'Congratulations to Prof. Zhu Zonglong for being awarded the Research Grants Council (RGC) Research Impact Fund for 2024/25',
      date: 'January 2025',
      image: '/images/news/RIF.jpg',
      summary: 'Prof. Zhu Zonglong has been awarded the prestigious Research Grants Council (RGC) Research Impact Fund for 2024/25.',
      content: `Congratulations to Prof. Zhu Zonglong for being awarded the Research Grants Council (RGC) Research Impact Fund for 2024/25! 

Prof. Zhu's research has been widely recognized, and he has published numerous articles in high-impact journals. His work is contributing to the advancement of renewable energy technologies and the development of more efficient electronic devices.`,
      tags: ['Grant', 'Research', 'Achievement'],
      sourceUrl: 'https://www.cityu.edu.hk/chem/news/ZL'
    },
    {
      id: 3,
      title: 'Congratulations to our 9 CHEM colleagues who have been listed as Top 1% Highly Cited Researchers 2024',
      date: 'December 2024',
      image: '/images/news/highly-cited-researchers-2024.jpg',
      summary: '9 scientists from the Department of Chemistry have been listed as Top 1% Highly Cited Researchers 2024.',
      content: `The Department of Chemistry (CHEM) proudly announces that 9 scientists have been listed as Top 1% Highly Cited Researchers 2024. This annual Highly Cited Researchers list identifies influential scientists across the globe who have demonstrated significant and broad research influence in their chosen field or fields of research among their peers. Many Congratulations to all the recipients.`,
      tags: ['Achievement', 'Recognition', 'Research Excellence'],
      sourceUrl: 'https://www.cityu.edu.hk/chem/news/highly-cited-researchers2024_top1'
    },
    {
      id: 4,
      title: 'Congratulations to 4 CHEM teams on winning at the 49th International Exhibition of Inventions Geneva (IEIG)',
      date: 'April 2023',
      image: '/images/news/geneva-exhibition.png',
      summary: 'Four teams from the Department of Chemistry have achieved remarkable results at the 49th IEIG.',
      content: `Four teams from the Department of Chemistry have achieved remarkable results at the 49th International Exhibition of Inventions of Geneva (IEIG), winning one Gold Medal with Congratulations of the Jury, two Silver Medals, and one Bronze Medal. These impressive outcomes reflect the global acknowledgment of our research and scientific accomplishments.

The exhibition is the world's most important event exclusively dedicated to inventions. It offers a unique opportunity for universities, inventors and researchers to present the results of their research, inventions, and new products. The 49th IEIG, held from 17 to 21 April in Switzerland, featured over 1,000 inventions from 38 countries and regions worldwide.`,
      tags: ['Award', 'International', 'Innovation'],
      sourceUrl: 'https://www.cityu.edu.hk/chem/news/congratulations-4-chem-teams-winning-49th-international-exhibition-inventions-geneva-ieig'
    },
    {
      id: 5,
      title: 'Congratulations to Prof. Zonglong Zhu on receiving RGC Collaborative Research Fund for the year 2023/24',
      date: 'December 2023',
      image: '/images/news/crf-grant.png',
      summary: 'Three professors from CHEM have received the RGC Collaborative Research Fund for 2023/24.',
      content: `Heartfelt congratulations to Prof. Kenneth Leung, Prof. Guangyu Zhu and Prof. Zonglong Zhu who have received the fundings from the Research Grants Council (RGC) Collaborative Research Fund (CRF) for the year 2023/24.`,
      tags: ['Grant', 'Research', 'Collaboration'],
      sourceUrl: 'https://www.cityu.edu.hk/chem/news/congratulations-prof-kenneth-leung-prof-guangyu-zhu-and-prof-zonglong-zhu-receiving-rgc'
    }
  ]

  const toggleExpand = (id: number) => {
    setExpandedNews(expandedNews === id ? null : id)
  }

  return (
    <div className="space-y-12">
      {allNews.map((news) => (
        <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/3 h-64 md:h-auto">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  <span>{news.date}</span>
                </div>
                {news.sourceUrl && (
                  <a 
                    href={news.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                  >
                    <span className="mr-1">Source</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {news.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {news.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-4">
                {expandedNews === news.id ? news.content : news.summary}
              </p>
              
              <button
                onClick={() => toggleExpand(news.id)}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>{expandedNews === news.id ? 'Read less' : 'Read more'}</span>
                {expandedNews === news.id ? (
                  <ChevronUp size={16} className="ml-1" />
                ) : (
                  <ChevronDown size={16} className="ml-1" />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsDetail 