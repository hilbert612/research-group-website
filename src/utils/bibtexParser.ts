interface Publication {
  title: string;
  authors: string[];
  journal?: string;
  year: number;
  abstract?: string;
  tags: string[];
  doi?: string;
  url?: string;
  pages?: string;
  volume?: string;
  number?: string;
  publisher?: string;
  booktitle?: string;
  type: 'article' | 'inproceedings' | 'book' | 'phdthesis' | 'mastersthesis' | 'misc';
  selected?: boolean;
  weight?: number;
}

interface BibEntry {
  [key: string]: string;
}

export class BibTexParser {
  static parse(bibtexContent: string): Publication[] {
    const publications: Publication[] = [];
    
    // 移除注释
    const cleanContent = bibtexContent.replace(/%.*$/gm, '');
    
    // 匹配所有 BibTeX 条目
    const entryRegex = /@(\w+)\s*\{\s*([^,]+)\s*,\s*([\s\S]*?)\n\s*\}/g;
    let match;
    
    while ((match = entryRegex.exec(cleanContent)) !== null) {
      const [, type, key, content] = match;
      const entry = this.parseEntry(content);
      const publication = this.convertToPublication(type.toLowerCase(), entry);
      if (publication) {
        publications.push(publication);
      }
    }
    
    return publications;
  }
  
  private static parseEntry(content: string): BibEntry {
    const entry: BibEntry = {};
    
    // 匹配字段
    const fieldRegex = /(\w+)\s*=\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
    let match;
    
    while ((match = fieldRegex.exec(content)) !== null) {
      const [, key, value] = match;
      entry[key.toLowerCase()] = value.trim();
    }
    
    return entry;
  }
  
  private static convertToPublication(type: string, entry: BibEntry): Publication | null {
    if (!entry.title) return null;
    
    // 处理作者
    const authors = this.parseAuthors(entry.author || '');
    
    // 处理年份
    const year = parseInt(entry.year || '0');
    
    // 生成标签
    const tags = this.generateTags(type, entry);
    
    return {
      title: this.cleanBraces(entry.title),
      authors,
      journal: entry.journal || entry.booktitle,
      year,
      abstract: this.cleanBraces(entry.abstract || ''),
      tags,
      doi: entry.doi,
      url: entry.url,
      pages: entry.pages,
      volume: entry.volume,
      number: entry.number,
      publisher: entry.publisher,
      booktitle: entry.booktitle,
      type: this.normalizeType(type),
      selected: entry.selected === 'true' || entry.selected === 'yes',
      weight: entry.weight ? parseInt(entry.weight) : undefined
    };
  }
  
  private static parseAuthors(authorString: string): string[] {
    if (!authorString) return [];
    
    // 处理 "and" 分隔的作者
    return authorString
      .split(' and ')
      .map(author => author.trim())
      .filter(author => author.length > 0)
      .map(author => this.formatAuthorName(author));
  }
  
  private static formatAuthorName(author: string): string {
    const cleanAuthor = this.cleanBraces(author);
    
    // 检查是否是 "姓, 名" 的格式
    if (cleanAuthor.includes(',')) {
      const parts = cleanAuthor.split(',').map(part => part.trim());
      if (parts.length >= 2) {
        const lastName = parts[0];
        const firstName = parts[1];
        // 转换为 "名 姓" 格式
        return `${firstName} ${lastName}`;
      }
    }
    
    // 如果没有逗号，直接返回（假设已经是正确格式）
    return cleanAuthor;
  }
  
  private static cleanBraces(text: string): string {
    return text.replace(/[{}]/g, '').trim();
  }
  
  private static generateTags(type: string, entry: BibEntry): string[] {
    const tags: string[] = [];
    
    // 基于类型添加标签
    switch (type) {
      case 'article':
        tags.push('Journal Article');
        break;
      case 'inproceedings':
        tags.push('Conference Paper');
        break;
      case 'book':
        tags.push('Book');
        break;
      case 'phdthesis':
        tags.push('PhD Thesis');
        break;
      case 'mastersthesis':
        tags.push('Master Thesis');
        break;
    }
    
    // 基于关键词添加标签（如果有的话）
    if (entry.keywords) {
      const keywords = entry.keywords.split(',').map(k => k.trim());
      tags.push(...keywords);
    }
    
    return tags;
  }
  
  private static normalizeType(type: string): Publication['type'] {
    switch (type.toLowerCase()) {
      case 'article':
        return 'article';
      case 'inproceedings':
      case 'conference':
        return 'inproceedings';
      case 'book':
        return 'book';
      case 'phdthesis':
        return 'phdthesis';
      case 'mastersthesis':
        return 'mastersthesis';
      default:
        return 'misc';
    }
  }
}

export type { Publication }; 