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

  // 分离精选论文和所有论文
  const selectedPublications = publications
    .filter(pub => pub.selected)
    .sort((a, b) => {
      // 按weight排序，没有weight的排在后面
      const weightA = a.weight ?? 999;
      const weightB = b.weight ?? 999;
      if (weightA !== weightB) {
        return weightA - weightB;
      }
      // 如果weight相同，按年份降序排序
      return b.year - a.year;
    });
  const allPublications = publications;

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

      {/* Selected Publications */}
      {selectedPublications.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Selected Publications
          </h3>
          <div className="space-y-4">
            {selectedPublications.map((pub, index) => (
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
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {pub.journal || pub.booktitle || pub.publisher || typeLabels[pub.type] || pub.type}
                      </span>
                      
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
                        {pub.url && !pub.doi && (
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

      {/* All Publications */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          All Publications
        </h3>
        <div className="space-y-4">
          {allPublications.map((pub, index) => (
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
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {pub.journal || pub.booktitle || pub.publisher || typeLabels[pub.type] || pub.type}
                    </span>
                    
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
                      {pub.url && !pub.doi && (
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