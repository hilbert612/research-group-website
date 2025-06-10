# 快速设置指南 - AI 课题组网站

## 🚀 快速开始

### 第一步：安装 Node.js

1. 访问 [https://nodejs.org/](https://nodejs.org/)
2. 下载并安装 LTS 版本（推荐 18.x 或更高版本）
3. 安装完成后，重启命令行工具

### 第二步：验证安装

打开命令行（PowerShell 或 CMD），输入以下命令：
```bash
node --version
npm --version
```

如果显示版本号，说明安装成功。

### 第三步：安装项目依赖

在项目目录中运行：
```bash
npm install
```

### 第四步：启动开发服务器

```bash
npm run dev
```

然后在浏览器中访问 [http://localhost:3000](http://localhost:3000)

## 📝 自定义内容

### 修改基本信息

1. **网站标题和描述**：编辑 `src/app/layout.tsx`
2. **课题组名称**：在 `src/components/Header.tsx` 中修改
3. **联系信息**：更新 `src/components/Contact.tsx` 和 `src/components/Footer.tsx`

### 更新团队信息

编辑 `src/components/Team.tsx` 文件：
```typescript
const teamMembers = [
  {
    name: "您的姓名",
    title: "您的职位",
    description: "您的简介",
    email: "您的邮箱",
    imageUrl: "/path/to/your/photo"
  },
  // 添加更多团队成员...
]
```

### 添加研究领域

在 `src/components/Research.tsx` 中更新：
```typescript
const researchAreas = [
  {
    icon: Brain, // 从 lucide-react 选择图标
    title: "您的研究领域",
    description: "研究领域描述",
    projects: ["项目1", "项目2", "项目3"]
  },
  // 添加更多研究领域...
]
```

### 更新出版物

编辑 `src/components/Publications.tsx`：
```typescript
const publications = [
  {
    title: "论文标题",
    authors: ["作者1", "作者2"],
    journal: "期刊名称",
    year: 2024,
    abstract: "论文摘要",
    tags: ["标签1", "标签2"]
  },
  // 添加更多出版物...
]
```

## 🎨 样式定制

### 修改颜色主题

编辑 `tailwind.config.js` 中的 primary 颜色：
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... 更多颜色值
    600: '#2563eb', // 主要颜色
    // ... 更多颜色值
  },
}
```

### 添加自定义样式

在 `src/app/globals.css` 中添加自定义 CSS。

## 📱 响应式设计

网站已经完全响应式，会自动适配：
- 桌面电脑
- 平板电脑  
- 手机

## 🚀 部署到线上

### 使用 Vercel（推荐）

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入 GitHub 仓库
4. 一键部署

### 使用 Netlify

1. 运行 `npm run build`
2. 上传 `.next` 文件夹到 Netlify
3. 配置部署设置

## ❓ 常见问题

**Q: 如何添加新页面？**
A: 在 `src/app/` 目录下创建新的文件夹和 `page.tsx` 文件。

**Q: 如何添加新组件？**
A: 在 `src/components/` 目录下创建新的 `.tsx` 文件。

**Q: 如何修改网站图标？**
A: 替换 `public/` 目录下的 `favicon.ico` 文件。

**Q: 网站加载慢怎么办？**
A: 检查图片大小，使用 Next.js 的 Image 组件优化图片。

## 📞 技术支持

如果遇到问题：
1. 查看 README.md 详细文档
2. 检查浏览器控制台的错误信息
3. 重新安装依赖：删除 `node_modules` 文件夹后运行 `npm install`

---

🎉 祝您使用愉快！如有问题，请参考完整的 README.md 文档。 