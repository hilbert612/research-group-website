'use client'

import { useState } from 'react'
import { Calendar, Tag, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

const NewsDetail = () => {
  const [expandedNews, setExpandedNews] = useState<number | null>(null)

  const allNews = [
    {
      id: 7,
      title: 'Improving the stability of perovskite/silicon tandems published in Nature Energy',
      date: 'May 2026',
      image: '/images/news/nature-energy-2026.jpg',
      summary: 'We report graded dielectric layers that improve reverse-bias stability of monolithic perovskite/silicon tandems, achieving efficiencies over 34% and retaining over 92% of initial performance after 1,000 h.',
      content: `Our latest work, led by Lina Wang and published in Nature Energy, addresses a critical stability challenge for perovskite/silicon tandem solar cells under partial shading. By introducing graded dielectric layers, we smooth the electric field profile at the perovskite/C60 interface, suppress abnormal carrier tunnelling, and inhibit halide ion accumulation under reverse bias. The resulting tandem devices deliver certified efficiencies of 33.76% and maintain more than 92% of their initial efficiency after 1,000 hours at −15 V. A large-area multicell module reaches 31.00% efficiency and retains over 90% after 1,000 hours of shading stress.`,
      tags: ['Publication', 'Nature Energy', 'Tandem Solar Cells'],
      sourceUrl: 'https://www.nature.com/articles/s41560-026-02067-w'
    },
    {
      id: 9,
      title: 'Our team won first and second prizes at the 12th Hong Kong University Student Innovation and Entrepreneurship Competition',
      date: '30 May 2026',
      image: '/images/news/innovation-competition-2026.jpg',
      summary: 'Our team received first and second prizes at the 12th Hong Kong University Student Innovation & Entrepreneurship Competition for projects on autonomous closed-loop perovskite photovoltaics and self-powered flexible power supplies for wearable medical electronics.',
      content: `We are delighted to announce that members of our research group won both first and second prizes at the 12th Hong Kong University Student Innovation and Entrepreneurship Competition, held on 30 May 2026.

The first-prize project, "Artificial Intelligence-Driven and Automated Manufacturing Integrated Autonomous Closed-Loop Research and Development Framework Applied to High-Performance Perovskite Photovoltaics", translates our recent autonomous laboratory work into an integrated innovation platform.

The second-prize project, "Self-Powered Flexible Power Supply Platform for Wearable Medical Electronic Devices", explores flexible energy solutions for next-generation healthcare electronics.

These awards recognise the creativity, teamwork and translational potential of our group members, and we congratulate all involved.`,
      tags: ['Award', 'Innovation', 'Student Achievement'],
      sourceUrl: ''
    },
    {
      id: 10,
      title: '声明',
      date: '12 May 2026',
      image: '/images/news/statement-2026.svg',
      summary: '关于近期通过邮件散布不实信息、涉嫌恶意造谣和诽谤事件的声明。',
      content: `近期，有人多次通过邮件向我的朋友、同事及同行散布关于我本人及课题组的不实信息，涉嫌恶意造谣和诽谤。经核实，此事涉及其他课题组个别人员，相关导师已知悉情况，并会作出相应的批评和处理。具体情况也已向学校进行了汇报。

对于相关造谣、诽谤行为，我们保留依法追究责任的权利，并将坚决维护本人及课题组的合法权益。

感谢一直以来信任、理解和支持我的朋友、同事及同行，也感谢大家在此事中的理性判断与支持。`,
      tags: ['Statement', 'Notice'],
      sourceUrl: ''
    },
    {
      id: 8,
      title: 'Autonomous closed-loop framework for reproducible perovskite solar cells published in Nature',
      date: '14 April 2026',
      image: '/images/news/nature-2026.jpg',
      summary: 'We developed a fully autonomous closed-loop framework that integrates active learning and Bayesian optimization, achieving over 27% efficiency and substantially improved reproducibility in perovskite solar cells.',
      content: `Published in Nature, this work introduces an autonomous closed-loop framework that bridges materials discovery and device manufacturing for perovskite photovoltaics. The system combines active learning and quantum modelling to identify high-performance passivation molecules with Bayesian optimization and symbolic regression to refine fabrication parameters in real time. The autonomous pipeline discovered a novel molecule, 5ANI, and produced small-area cells with 27.22% efficiency (certified 27.18%) and mini-modules with 23.49% efficiency, while improving device reproducibility by about fivefold compared with manual fabrication.`,
      tags: ['Publication', 'Nature', 'Automation'],
      sourceUrl: 'https://doi.org/10.1038/s41586-026-10482-y'
    },
    {
      id: 1,
      title: 'Congratulations to Prof. Zhu Zonglong for being awarded the RGC Research Fellow Scheme (RFS) 2025/26',
      date: '25 July 2025',
      image: '/images/news/RGC-RFS.png',
      summary: 'Prof. Zhu Zonglong has been awarded funding from the Research Grants Council (RGC) under the 2025/26 Research Fellow Scheme (RFS).',
      content: `In recognition of their distinguished achievements, four outstanding scholars from City University of Hong Kong (CityUHK) have been awarded funding from the Research Grants Council (RGC) under the 2025/26 Senior Research Fellow Scheme (SRFS) and the Research Fellow Scheme (RFS).

Professor Anderson Shum Ho-cheung, Vice-President (Research), extended his heartfelt congratulations to the fellowship winners. "Their dedication to research excellence will lead to significant advancements in their respective fields. We look forward to our scholars' continued pursuit of knowledge and innovation to address global challenges," he said.

Two CityUHK scholars were named under the SRFS: Professor Julien Laurent Chaisse from the School of Law and Professor Angus Yip Hin-lap from the Department of Materials Science & Engineering, College of Engineering. Their research projects are respectively: "Semiconductors, Quantum Computing, and AI: Pioneering the Future of Trade and Sustainability in International Economic Law" and "Next-Generation Tandem Perovskite Solar Cells: High-Efficiency, Flexible, and Scalable Solutions for Diverse Applications".

Professor Zhu Zonglong from the Department of Chemistry, College of Science, and Professor Wang Shiqi from the Department of Computer Science, College of Computing, were awarded under the RFS. Their research projects are respectively: "Advanced Perovskite Technologies for Flexible Electronics: Mechanisms, Interfaces, and Application Optimisation" and "Improving the Perceptual Experience of Visual Content Generated by AI".

SRFS and RFS aim to provide sustained support to outstanding researchers at the University Grants Committee-funded universities in Hong Kong. The supporting university will receive a fellowship grant of around HK$8.2 million per SRFS award and HK$5.5 million per RFS award to support the scholars' research projects for a period of 60 months.`,
      tags: ['Award', 'Grant', 'Research Excellence'],
      sourceUrl: 'https://www.cityu.edu.hk/media/press-release/2025/07/25/four-cityuhk-scholars-named-rgc-senior-research-fellows-and-research-fellows'
    },
    {
      id: 2,
      title: 'Congratulations to our CHEM colleagues on being recognized as the Top 2% of the World\'s Most Highly Cited Scientists in the latest report of Stanford University released in October 2024.',
      date: '02 Dec 2024',
      image: '/images/news/highly-cited-2024.jpg',
      summary: 'Our CHEM colleagues have been recognized as the Top 2% of the World\'s Most Highly Cited Scientists in the latest report of Stanford University.',
      content: `Congratulations to our CHEM colleagues on being recognized as the Top 2% of the World's Most Highly Cited Scientists in the latest report of Stanford University released in October 2024. It provides information on the work of the world's top-cited scientists including standardised information on citations, h-index, co-authorship-adjusted hm-index, citations to papers in different authorship positions, and a composite indicator (c-score).`,
      tags: ['Achievement', 'Recognition', 'Research Impact'],
      sourceUrl: 'https://www.cityu.edu.hk/chem/news/Highly%20Cited2024_Top2'
    },
    {
      id: 3,
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
      id: 4,
      title: 'Congratulations to our 9 CHEM colleagues who have been listed as Top 1% Highly Cited Researchers 2024',
      date: 'December 2024',
      image: '/images/news/highly-cited-researchers-2024.jpg',
      summary: '9 scientists from the Department of Chemistry have been listed as Top 1% Highly Cited Researchers 2024.',
      content: `The Department of Chemistry (CHEM) proudly announces that 9 scientists have been listed as Top 1% Highly Cited Researchers 2024. This annual Highly Cited Researchers list identifies influential scientists across the globe who have demonstrated significant and broad research influence in their chosen field or fields of research among their peers. Many Congratulations to all the recipients.`,
      tags: ['Achievement', 'Recognition', 'Research Excellence'],
      sourceUrl: 'https://www.cityu.edu.hk/chem/news/highly-cited-researchers2024_top1'
    },
    {
      id: 5,
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
      id: 6,
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