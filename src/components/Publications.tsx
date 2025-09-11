'use client'

import { useState } from 'react';
import { useBibtex } from '../hooks/useBibtex';
import { Publication } from '../utils/bibtexParser';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Publications = () => {
  // 使用 BibTeX 文件
  const { publications, loading, error, refetch } = useBibtex({
    bibtexFile: '/publications.bib',
    sortBy: 'year',
    sortOrder: 'desc',
  });

  // 只获取Science期刊论文
  const selectedPublications = publications
    .filter(pub => {
      const journalName = (pub.journal || '').toLowerCase();
      return journalName.includes('science');
    })
    .sort((a, b) => b.year - a.year)
    .slice(0, 5); // 只显示前5篇

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
      <section id="publications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading publications...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="publications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Error loading publications: {error}</p>
            <button 
              onClick={refetch}
              className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Selected Publications
            </h2>
            <p className="text-gray-600">
              Selected research contributions and scholarly work
            </p>
          </div>
          <a 
            href="https://scholar.google.com.ua/citations?user=_HSF3-oAAAAJ&hl=en" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-1">View all publications</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Selected Publications */}
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

        {/* View All Publications Button */}
        <div className="mt-8 text-center">
          <a 
            href="https://scholar.google.com.ua/citations?user=_HSF3-oAAAAJ&hl=en" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Publications
          </a>
        </div>
      </div>
    </section>
  )
}

export default Publications 