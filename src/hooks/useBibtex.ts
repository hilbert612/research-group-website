import { useState, useEffect } from 'react';
import { BibTexParser, Publication } from '../utils/bibtexParser';

interface UseBibtexOptions {
  bibtexFile?: string; // 文件路径
  bibtexContent?: string; // 直接传入内容
  sortBy?: 'year' | 'title' | 'authors';
  sortOrder?: 'asc' | 'desc';
  filterByYear?: number[];
  filterByType?: string[];
}

interface UseBibtexReturn {
  publications: Publication[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useBibtex = (options: UseBibtexOptions = {}): UseBibtexReturn => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    bibtexFile,
    bibtexContent,
    sortBy = 'year',
    sortOrder = 'desc',
    filterByYear,
    filterByType
  } = options;

  const loadAndParseBibtex = async () => {
    if (!bibtexFile && !bibtexContent) {
      setPublications([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let content = bibtexContent;
      
      if (bibtexFile && !content) {
        const response = await fetch(bibtexFile);
        if (!response.ok) {
          throw new Error(`Failed to load BibTeX file: ${response.statusText}`);
        }
        content = await response.text();
      }

      if (!content) {
        throw new Error('No BibTeX content provided');
      }

      let parsedPublications = BibTexParser.parse(content);

      // 应用过滤器
      if (filterByYear && filterByYear.length > 0) {
        parsedPublications = parsedPublications.filter(pub => 
          filterByYear.includes(pub.year)
        );
      }

      if (filterByType && filterByType.length > 0) {
        parsedPublications = parsedPublications.filter(pub => 
          filterByType.includes(pub.type)
        );
      }

      // 应用排序
      parsedPublications.sort((a, b) => {
        let compareValue = 0;
        
        switch (sortBy) {
          case 'year':
            compareValue = a.year - b.year;
            break;
          case 'title':
            compareValue = a.title.localeCompare(b.title);
            break;
          case 'authors':
            const aFirstAuthor = a.authors[0] || '';
            const bFirstAuthor = b.authors[0] || '';
            compareValue = aFirstAuthor.localeCompare(bFirstAuthor);
            break;
        }

        return sortOrder === 'desc' ? -compareValue : compareValue;
      });

      setPublications(parsedPublications);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Error parsing BibTeX:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAndParseBibtex();
  }, [bibtexFile, bibtexContent, sortBy, sortOrder, JSON.stringify(filterByYear), JSON.stringify(filterByType)]);

  return {
    publications,
    loading,
    error,
    refetch: loadAndParseBibtex
  };
}; 