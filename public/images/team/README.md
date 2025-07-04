# Team Photos Guide

## 照片存放位置
所有团队成员的照片应放在 `/public/images/team/` 目录中。

## 照片命名规范

### Director
- **文件名**: `zonglong-zhu.jpg`
- **显示尺寸**: 200x200 像素（在个人页面）, 128x128 像素（在团队页面）

### 团队成员
建议使用以下命名格式：
- `firstname-lastname.jpg`
- 例如：`emily-williams.jpg`, `michael-chen.jpg`

## 照片规格要求

### 推荐规格
- **格式**: JPG 或 PNG
- **尺寸**: 至少 400x400 像素（方形）
- **长宽比**: 1:1 (正方形)
- **文件大小**: 小于 500KB
- **背景**: 建议使用纯色或专业背景
- **质量**: 清晰的专业照片

### 技术要求
- 照片应该是正面照
- 光线充足，面部清晰可见
- 适合学术网站的专业风格

## 当前使用的照片

### Director
- `zonglong-zhu.jpg` - Prof. ZHU Zonglong的个人照片

## 如何添加新照片

1. 将照片文件复制到 `/public/images/team/` 目录
2. 确保文件名遵循命名规范
3. 在 `src/lib/teamData.ts` 中更新相应的 `imageUrl` 字段
4. 格式：`/images/team/filename.jpg`

## 示例代码
```typescript
imageUrl: '/images/team/zonglong-zhu.jpg'
```

## Image Requirements
- Recommended size: 400x400 pixels (square)
- Format: JPG or PNG
- File size: < 500KB
- Naming convention: Use the team member's ID as the filename (e.g., `john-smith.jpg`)

## Missing Images
The following team members need images:
- yan-wang.png - Dr. WANG Yan (Postdoctoral Fellow)
- hang-zhang.jpg - ZHANG Hang (PhD Student)
- zexin-yu.jpg - YU Zexin (PhD Student)
- francesco-vanin.jpg - Francesco Vanin (PhD Student)
- weidong-tian.jpg - TIAN Weidong (PhD Student)
- chang-chen.jpg - CHEN Chang (PhD Student)

Please add these images to this directory with the correct filename. 