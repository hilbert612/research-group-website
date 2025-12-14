'use client'

import { useState } from 'react';
import { useBibtex } from '../hooks/useBibtex';
import { Publication } from '../utils/bibtexParser';
import { ExternalLink } from 'lucide-react';

const PublicationsDetail = () => {
  const [sortBy, setSortBy] = useState<'year' | 'title' | 'authors'>('year');

  // 使用 BibTeX 文件
  const { publications, loading, error, refetch } = useBibtex({
    bibtexFile: '/publications.bib',
    sortBy,
    sortOrder: 'desc',
  });

  // 分离Science期刊和其他精选论文
  const sciencePublications = publications
    .filter(pub => {
      const journalName = (pub.journal || '').toLowerCase();
      return journalName.includes('science');
    })
    .sort((a, b) => b.year - a.year);
    
  // 手动添加Nature系列期刊文章，按照时间排序（最新的在前）
  const selectedPublications = [
    {
      title: "Closed-loop manufacturing for sustainable perovskite photovoltaics",
      authors: ["Bo Li", "Danpeng Gao", "Chunlei Zhang", "Zexin Yu", "Martin Stolterfoht", "Yen Hung Lin", "Markus Lenz", "Henry J. Snaith", "Zonglong Zhu"],
      journal: "Nature Reviews Materials",
      year: 2025,
      type: "article" as const,
      doi: "10.1038/s41578-025-00872-5",
      pages: "1-16",
      tags: ["Solar cells", "Perovskite", "Sustainability"],
      url: "https://www.nature.com/articles/s41578-025-00872-5",
      booktitle: "",
      publisher: ""
    },
    {
      title: "Graphene oxide doping of the hole injection layer enables 23.6% efficiency in perovskite solar cells with carbon electrodes",
      authors: ["Yudi Wang", "Wenrui Li", "Xin Wu", "Guanghao Meng", "Qiuyu Liu", "Wenpei Zhao", "Bo Li", "Francesco Vanin", "Hongjiang Li", "Yanying Shi", "Shuhong Wang", "Ziyang Tian", "Linghui Zhang", "Jie Zhang", "Zonglong Zhu", "Yantao Shi"],
      journal: "Nature Energy",
      year: 2025,
      type: "article" as const,
      doi: "10.1038/s41560-025-01893-8",
      pages: "1-11",
      tags: ["Solar cells", "Perovskite"],
      url: "https://www.nature.com/articles/s41560-025-01893-8",
      booktitle: "",
      publisher: ""
    },
    {
      title: "Nanoscale Soft Interaction-Engineered Perovskite Heterojunctions for Highly Efficient and Reproducible Solar Cells",
      authors: ["Bo Li", "Danpeng Gao", "Francesco Vanin", "Chunlei Zhang", "Zexin Yu", "Ning Wang", "Jie Gong", "Shuai Li", "Jianqiu Gong", "Liangchen Qian", "Yen-Hung Lin", "Martin Stolterfoht", "Nicholas J. Long", "Zonglong Zhu"],
      journal: "Nature Communications",
      year: 2025,
      volume: "16",
      number: "1",
      pages: "9500",
      doi: "10.1038/s41467-025-64550-4",
      type: "article" as const,
      tags: ["Solar cells", "Perovskite"],
      url: "https://www.nature.com/articles/s41467-025-64550-4",
      booktitle: "",
      publisher: ""
    },
    {
      title: "Highly efficient all-perovskite photovoltaic-powered battery with dual-function viologen for portable electronics",
      authors: ["Jie Gong", "Danpeng Gao", "Hang Zhang", "Xiongyi Liang", "Bo Li", "Qi Liu", "Liangchen Qian", "Xintong Li", "Xin Wu", "Chunlei Zhang", "Zexin Yu", "Francesco Vanin", "Xiao Cheng Zeng", "Nan Li", "Jijian Xu", "Chunyi Zhi", "Zonglong Zhu"],
      journal: "Nature Communications",
      year: 2025,
      volume: "16",
      number: "1",
      pages: "7980",
      doi: "10.1038/s41467-025-63272-x",
      type: "article" as const,
      tags: ["Batteries", "Solar cells"],
      url: "https://www.nature.com/articles/s41467-025-63272-x",
      booktitle: "",
      publisher: ""
    },
    {
      title: "High-efficiency perovskite solar cells enabled by suppressing intermolecular aggregation in hole-selective contacts",
      authors: ["Danpeng Gao", "Bo Li", "Xianglang Sun", "Qi Liu", "Chunlei Zhang", "Liangchen Qian", "Zexin Yu", "Xintong Li", "Xin Wu", "Baoze Liu", "Ning Wang", "Francesco Vanin", "Xinxin Xia", "Jie Gong", "Nan Li", "Xiao Cheng Zeng", "Zhong'an Li", "Zonglong Zhu"],
      journal: "Nature Photonics",
      year: 2025,
      doi: "10.1038/s41566-025-01725-x",
      pages: "1-8",
      type: "article" as const,
      tags: ["Solar cells"],
      url: "https://www.nature.com/articles/s41566-025-01725-x",
      booktitle: "",
      publisher: ""
    },
    {
      title: "Harnessing strong aromatic conjugation in low-dimensional perovskite heterojunctions for high-performance photovoltaic devices",
      authors: ["Bo Li", "Qi Liu", "Jianqiu Gong", "Shuai Li", "Chunlei Zhang", "Danpeng Gao", "Zhongwei Chen", "Zhen Li", "Xin Wu", "Dan Zhao", "Zexin Yu", "Xintong Li", "Yan Wang", "Haipeng Lu", "Xiao Cheng Zeng", "Zonglong Zhu"],
      journal: "Nature Communications",
      year: 2024,
      volume: "15",
      number: "1",
      pages: "2753",
      doi: "10.1038/s41467-024-47112-y",
      type: "article" as const,
      tags: ["Solar cells"],
      url: "https://www.nature.com/articles/s41467-024-47112-y",
      booktitle: "",
      publisher: ""
    },
    {
      title: "Co-deposition of hole-selective contact and absorber for improving the processability of perovskite solar cells",
      authors: ["Xiaopeng Zheng", "Zhen Li", "Yi Zhang", "Min Chen", "Tuo Liu", "Chuanxiao Xiao", "Danpeng Gao", "Jay B. Patel", "Darius Kuciauskas", "Artiom Magomedov", "Rebecca A. Scheidt", "Xiaoming Wang", "Steven P. Harvey", "Zhenghong Dai", "Chunlei Zhang", "Daniel Morales", "Henry Pruett", "Brian M. Wieliczka", "Ahmad R. Kirmani", "Nitin P. Padture", "Kenneth R. Graham", "Yanfa Yan", "Mohammad Khaja Nazeeruddin", "Michael D. McGehee", "Zonglong Zhu", "Joseph M. Luther"],
      journal: "Nature Energy",
      year: 2023,
      volume: "8",
      number: "5",
      pages: "462-472",
      doi: "10.1038/s41560-023-01227-6",
      type: "article" as const,
      tags: ["Materials for energy and catalysis", "Solar cells"],
      url: "https://www.nature.com/articles/s41560-023-01227-6",
      booktitle: "",
      publisher: ""
    },
    {
      title: "Improved photovoltaic performance and robustness of all-polymer solar cells enabled by a polyfullerene guest acceptor",
      authors: ["Han Yu", "Yan Wang", "Xinhui Zou", "Junli Yin", "Xiaoyu Shi", "Yuhao Li", "Heng Zhao", "Lingyuan Wang", "Ho Ming Ng", "Bosen Zou", "Xinhui Lu", "Kam Sing Wong", "Wei Ma", "Zonglong Zhu", "He Yan", "Shangshang Chen"],
      journal: "Nature Communications",
      year: 2023,
      volume: "14",
      number: "1",
      pages: "2323",
      doi: "10.1038/s41467-023-37738-9",
      type: "article" as const,
      tags: ["Conjugated polymers", "Devices for energy harvesting", "Electronic devices", "Solar cells"],
      url: "https://www.nature.com/articles/s41467-023-37738-9",
      booktitle: "",
      publisher: ""
    },
    {
      title: "Pseudo-bilayer architecture enables high-performance organic solar cells with enhanced exciton diffusion length",
      authors: ["Kui Jiang", "Jie Zhang", "Zhengxing Peng", "Francis Lin", "Shengfan Wu", "Zhen Li", "Yuzhong Chen", "He Yan", "Harald Ade", "Zonglong Zhu", "Alex K.-Y. Jen"],
      journal: "Nature Communications",
      year: 2021,
      volume: "12",
      number: "1",
      pages: "468",
      doi: "10.1038/s41467-020-20791-z",
      type: "article" as const,
      tags: ["Solar cells"],
      url: "https://www.nature.com/articles/s41467-020-20791-z",
      booktitle: "",
      publisher: ""
    },
    {
      title: "2D metal–organic framework for stable perovskite solar cells with minimized lead leakage",
      authors: ["Shengfan Wu", "Zhen Li", "Mu-Qing Li", "Yingxue Diao", "Francis Lin", "Tiantian Liu", "Jie Zhang", "Peter Tieu", "Wenpei Gao", "Feng Qi", "Xiaoqing Pan", "Zhengtao Xu", "Zonglong Zhu", "Alex K.-Y. Jen"],
      journal: "Nature Nanotechnology",
      year: 2020,
      volume: "15",
      number: "11",
      pages: "934-940",
      doi: "10.1038/s41565-020-0765-7",
      type: "article" as const,
      tags: ["Metal–organic frameworks", "Solar cells"],
      url: "https://www.nature.com/articles/s41565-020-0765-7",
      booktitle: "",
      publisher: ""
    },
    {
      title: "Highly efficient all-inorganic perovskite solar cells with suppressed non-radiative recombination by a Lewis base",
      authors: ["Jing Wang", "Jie Zhang", "Yingzhi Zhou", "Hongbin Liu", "Qifan Xue", "Xiaosong Li", "Chu-Chen Chueh", "Hin-Lap Yip", "Zonglong Zhu", "Alex K. Y. Jen"],
      journal: "Nature Communications",
      year: 2020,
      volume: "11",
      number: "1",
      pages: "177",
      doi: "10.1038/s41467-019-13909-5",
      type: "article" as const,
      tags: ["Photovoltaics", "Solar cells"],
      url: "https://www.nature.com/articles/s41467-019-13909-5",
      booktitle: "",
      publisher: ""
    }
  ];

  const typeLabels: { [key: string]: string } = {
    article: 'Journal Article',
    inproceedings: 'Conference Paper',
    book: 'Book',
    phdthesis: 'PhD Thesis',
    mastersthesis: 'Master Thesis',
    misc: 'Other'
  };

  const getPublicationLink = (pub: Publication): string | null => {
    if (pub.doi) return `https://doi.org/${pub.doi}`;
    if (pub.url) return pub.url;
    return null;
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading publications...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-600">Error loading publications: {error}</p>
        <button 
          onClick={refetch}
          className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* 排序控件 */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Sort by:</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'year' | 'title' | 'authors')}
          >
            <option value="year">Year</option>
            <option value="title">Title</option>
            <option value="authors">First Author</option>
          </select>
        </div>

        {/* Google Scholar Link Button */}
        <a 
          href="https://scholar.google.com.ua/citations?user=_HSF3-oAAAAJ&hl=en" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <span className="mr-1">Google Scholar</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Science Publications */}
      {sciencePublications.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Science
          </h3>
          <div className="space-y-4">
            {sciencePublications.map((pub, index) => (
              <div key={`selected-${index}`} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div className="space-y-1">
                  {/* 标题和年份 */}
                  <h3 className="text-lg leading-relaxed">
                    {getPublicationLink(pub) ? (
                      <a 
                        href={getPublicationLink(pub)!} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <span className="text-blue-600">{pub.title}</span>
                    )}
                    <span className="text-gray-900 ml-1">({pub.year})</span>
                  </h3>
                  
                  {/* 作者信息 */}
                  <p className="text-gray-700 text-base leading-relaxed">
                    {pub.authors.join('; ')}
                  </p>

                  {/* 期刊名称和链接 */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {pub.journal || pub.booktitle || pub.publisher || typeLabels[pub.type] || pub.type}
                      </span>
                        {pub.note === "In press" && 
                          <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">
                            IN PRESS
                          </span>
                        }
                      </div>
                      
                      {/* 链接 */}
                      <div className="flex space-x-3 text-sm">
                        {pub.doi && (
                          <a 
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            DOI
                          </a>
                        )}
                        {/* 已经在期刊名称旁边显示了In Press标志，这里不再重复显示 */}
                        {pub.url && !pub.doi && !pub.note && (
                          <a 
                            href={pub.url}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            Link
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Nature Family */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Nature Family
        </h3>
        <div className="space-y-4">
          {selectedPublications.map((pub, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <div className="space-y-1">
                {/* 标题和年份 */}
                <h3 className="text-lg leading-relaxed">
                  {getPublicationLink(pub) ? (
                    <a 
                      href={getPublicationLink(pub)!} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    <span className="text-blue-600">{pub.title}</span>
                  )}
                  <span className="text-gray-900 ml-1">({pub.year})</span>
                </h3>
                
                {/* 作者信息 */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {pub.authors.join('; ')}
                </p>

                {/* 期刊名称和链接 */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {pub.journal || pub.booktitle || pub.publisher || typeLabels[pub.type] || pub.type}
                    </span>
                      {pub.note === "In press" && 
                        <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">
                          IN PRESS
                        </span>
                      }
                    </div>
                    
                    {/* 链接 */}
                    <div className="flex space-x-3 text-sm">
                      {pub.doi && (
                        <a 
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          DOI
                        </a>
                      )}
                      {/* 已经在期刊名称旁边显示了In Press标志，这里不再重复显示 */}
                      {pub.url && !pub.doi && !pub.note && (
                        <a 
                          href={pub.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          Link
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationsDetail; 