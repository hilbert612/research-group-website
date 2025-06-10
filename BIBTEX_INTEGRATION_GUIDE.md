# BibTeX Integration Guide

本指南展示了如何在研究组网站中快速导入和管理发表的论文数据。

## 功能特性

✅ **自动解析 BibTeX 文件** - 支持标准 BibTeX 格式
✅ **多种导入方式** - 静态文件或动态上传
✅ **智能过滤和排序** - 按年份、类型、作者排序
✅ **响应式设计** - 在所有设备上都有良好的用户体验
✅ **丰富的显示信息** - DOI 链接、摘要展开/收起等

## 使用方法

### 方法 1: 静态 BibTeX 文件

1. 将你的 `.bib` 文件放在 `public/publications.bib`
2. 系统会自动加载并解析该文件
3. 支持的字段包括：
   ```bibtex
   @article{key2024,
     title={论文标题},
     author={作者1 and 作者2 and 作者3},
     journal={期刊名称},
     volume={卷号},
     number={期号},
     pages={页码范围},
     year={2024},
     publisher={出版社},
     doi={10.1000/123456},
     url={https://example.com},
     abstract={摘要内容},
     keywords={关键词1, 关键词2, 关键词3}
   }
   ```

### 方法 2: 动态文件上传

1. 访问 Publications 页面
2. 将 `.bib` 文件拖拽到上传区域，或点击选择文件
3. 系统会实时解析并显示论文列表

### 方法 3: 编程方式集成

```typescript
import { useBibtex } from '../hooks/useBibtex';

// 使用文件路径
const { publications, loading, error } = useBibtex({
  bibtexFile: '/path/to/your/publications.bib',
  sortBy: 'year',
  sortOrder: 'desc'
});

// 使用字符串内容
const { publications, loading, error } = useBibtex({
  bibtexContent: bibtexString,
  filterByYear: [2023, 2024],
  filterByType: ['article', 'inproceedings']
});
```

## 支持的论文类型

| BibTeX 类型 | 显示名称 | 说明 |
|-------------|----------|------|
| `@article` | Journal Article | 期刊论文 |
| `@inproceedings` | Conference Paper | 会议论文 |
| `@book` | Book | 书籍 |
| `@phdthesis` | PhD Thesis | 博士论文 |
| `@mastersthesis` | Master Thesis | 硕士论文 |
| `@misc` | Other | 其他类型 |

## 常用学术数据库导出方法

### Google Scholar
1. 搜索论文
2. 点击引用按钮 (") 
3. 选择 "BibTeX" 格式
4. 复制内容到 `.bib` 文件

### IEEE Xplore
1. 搜索并选择论文
2. 点击 "Cite This" 
3. 选择 "BibTeX" 标签
4. 复制内容

### ACM Digital Library
1. 搜索论文
2. 点击 "Export Citation"
3. 选择 "BibTeX" 格式
4. 下载或复制内容

### arXiv
1. 访问论文页面
2. 在右侧找到 "Export citation" 链接
3. 选择 "BibTeX" 格式

### Springer/Nature
1. 搜索论文
2. 点击论文标题进入详情页
3. 点击 "Download citations"
4. 选择 "BibTeX" 格式

## 高级功能

### 自定义标签生成
系统会根据以下规则自动生成标签：
- 论文类型（自动识别）
- `keywords` 字段中的关键词
- 可以通过修改 `generateTags` 方法来自定义

### 作者格式化
- 单个作者：直接显示
- 两个作者：`作者1 and 作者2`
- 多个作者：`第一作者 et al.`

### 链接处理
系统会自动生成以下链接：
- DOI 链接：`https://doi.org/{DOI}`
- 自定义 URL：直接使用 `url` 字段

## 故障排除

### 常见问题

**Q: BibTeX 文件无法解析？**
A: 检查文件格式是否正确，确保花括号匹配，字段名称正确。

**Q: 作者显示不正确？**
A: 确保作者之间使用 ` and ` 分隔（注意两边的空格）。

**Q: 年份排序不正确？**
A: 确保 `year` 字段是数字格式，不要包含额外的文字。

**Q: 摘要太长影响布局？**
A: 系统会自动截断长摘要，用户可以点击展开查看完整内容。

### 调试模式

开发时可以在浏览器控制台查看解析日志：
```javascript
// 打开控制台查看解析详情
console.log(publications);
```

## 最佳实践

1. **统一格式**：保持 BibTeX 条目格式的一致性
2. **完整信息**：尽量填写完整的字段信息（DOI、摘要等）
3. **合理关键词**：使用有意义的关键词便于分类
4. **定期更新**：及时更新 BibTeX 文件以保持同步

## 扩展开发

### 添加新的论文类型
在 `bibtexParser.ts` 中的 `normalizeType` 方法添加新类型：

```typescript
case 'newtype':
  return 'newtype';
```

### 自定义显示样式
修改 `Publications.tsx` 组件中的 JSX 部分来调整显示样式。

### 集成其他数据源
可以扩展 `useBibtex` hook 来支持其他数据源，如 API 接口等。 