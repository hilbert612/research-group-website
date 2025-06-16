# 本地运行和Git操作指南

本文档详细介绍如何在本地运行研究组网站以及如何将修改推送到Git仓库。

## 📋 目录

1. [环境要求](#环境要求)
2. [本地运行网站](#本地运行网站)
3. [Git操作指南](#git操作指南)
4. [常见问题解决](#常见问题解决)

## 🔧 环境要求

在开始之前，请确保您的系统已安装以下软件：

### 必需软件
- **Node.js** (版本 18 或更高)
  - 下载地址：[https://nodejs.org/](https://nodejs.org/)
  - 选择 LTS 版本进行安装
- **Git**
  - 下载地址：[https://git-scm.com/](https://git-scm.com/)
- **代码编辑器** (推荐 VSCode)

### 验证安装
打开终端/命令提示符，运行以下命令验证安装：

```bash
node --version    # 应显示 v18.0.0 或更高版本
npm --version     # 应显示版本号
git --version     # 应显示版本号
```

## 🚀 本地运行网站

### 1. 导航到项目目录

```bash
cd research-group-website
```

### 2. 安装项目依赖

**使用 npm (推荐)：**
```bash
npm install
```

**或使用 yarn：**
```bash
yarn install
```

**或使用 pnpm：**
```bash
pnpm install
```

### 3. 启动开发服务器

**使用 npm：**
```bash
npm run dev
```

**或使用 yarn：**
```bash
yarn dev
```

**或使用 pnpm：**
```bash
pnpm dev
```

### 4. 在浏览器中查看网站

启动成功后，您会看到类似如下的输出：
```
Next.js 14.0.4
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.3s
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可查看网站。

### 5. 实时预览修改

开发服务器支持热重载，当您修改代码时，网站会自动刷新显示最新内容。

## 📚 其他可用命令

- **构建生产版本：**
  ```bash
  npm run build
  ```

- **运行生产版本：**
  ```bash
  npm run start
  ```

- **代码检查：**
  ```bash
  npm run lint
  ```

## 📁 Git操作指南

### 1. 初始化Git仓库（如果尚未初始化）

```bash
git init
```

### 2. 查看文件状态

```bash
git status
```

### 3. 添加修改到暂存区

**添加所有修改的文件：**
```bash
git add .
```

**添加特定文件：**
```bash
git add src/components/Team.tsx
git add src/lib/teamData.ts
```

**添加特定类型的文件：**
```bash
git add *.tsx    # 添加所有 .tsx 文件
git add src/     # 添加 src 目录下的所有文件
```

### 4. 提交修改

```bash
git commit -m "描述您的修改内容"
```

**提交信息示例：**
```bash
git commit -m "添加新的团队成员信息"
git commit -m "更新研究领域描述"
git commit -m "修复导航栏样式问题"
git commit -m "优化移动端响应式布局"
```

### 5. 推送到远程仓库

**首次推送（设置远程仓库）：**
```bash
git remote add origin https://github.com/hilbert612/research-group-website.git
git branch -M main
git push -u origin main
```

**后续推送：**
```bash
git push origin main
```

**推送到特定分支：**
```bash
git push origin branch-name
```

### 6. 完整的工作流程示例

```bash
# 1. 查看当前状态
git status

# 2. 添加修改的文件
git add .

# 3. 提交修改
git commit -m "更新团队成员信息和研究方向"

# 4. 推送到远程仓库
git push

# 5. 查看提交历史
git log --oneline
```

## 🔄 分支管理

### 创建和切换分支

```bash
# 创建新分支
git branch feature-new-design

# 切换到新分支
git checkout feature-new-design

# 创建并切换到新分支（推荐）
git checkout -b feature-new-design
```

### 合并分支

```bash
# 切换到主分支
git checkout main

# 合并功能分支
git merge feature-new-design

# 删除已合并的分支
git branch -d feature-new-design
```

## 📝 Git 最佳实践

### 1. 提交信息规范

- 使用清晰、描述性的提交信息
- 第一行应该是简短的摘要（50字符以内）
- 如有必要，空一行后添加详细描述

```bash
git commit -m "添加团队成员页面的筛选功能

- 添加按研究领域筛选团队成员的功能
- 优化成员卡片的显示效果
- 修复移动端布局问题"
```

### 2. 频繁提交

- 经常提交小的、相关的更改
- 避免一次性提交大量不相关的修改

### 3. 检查修改内容

在提交前查看修改内容：
```bash
git diff          # 查看工作区的修改
git diff --cached # 查看暂存区的修改
```

## ❌ 常见问题解决

### 1. 端口占用问题

如果端口 3000 被占用，可以使用其他端口：

```bash
npm run dev -- -p 3001
```

### 2. 依赖安装失败

```bash
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装依赖
npm install
```

### 3. Git 推送被拒绝

如果推送被拒绝，通常是因为远程仓库有新的提交：

```bash
# 拉取远程更改
git pull origin main

# 解决冲突后重新推送
git push origin main
```

### 4. 忘记添加 .gitignore 文件

确保项目根目录有 `.gitignore` 文件，内容包括：

```gitignore
# 依赖
node_modules/
.pnp
.pnp.js

# 构建输出
.next/
out/
build/

# 环境变量
.env*.local

# 调试
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# 编辑器
.vscode/
.idea/

# 操作系统
.DS_Store
Thumbs.db
```

## 🎯 快速参考

### 本地开发快速启动

```bash
cd research-group-website
npm install
npm run dev
# 打开 http://localhost:3000
```

### Git 基本流程

```bash
git add .
git commit -m "您的修改描述"
git push
```

### 查看帮助

```bash
git help        # Git 帮助
npm --help      # npm 帮助
node --help     # Node.js 帮助
```

## 📞 获取帮助

如果遇到问题，可以：

1. 查看项目的 README.md 文件
2. 参考 [Next.js 官方文档](https://nextjs.org/docs)
3. 查看 [Git 官方文档](https://git-scm.com/doc)
4. 在项目仓库中提交 Issue

---

**祝您使用愉快！** 🎉 

## 🚀 推送到远程仓库（GitHub）

本项目的远程仓库地址为：

> https://github.com/hilbert612/research-group-website

### 推送操作流程

1. 打开终端，进入项目目录：
   ```bash
   cd research-group-website
   ```
2. 查看当前修改状态：
   ```bash
   git status
   ```
3. 添加所有修改：
   ```bash
   git add .
   ```
4. 提交修改（请填写有意义的提交信息）：
   ```bash
   git commit -m "简要描述本次修改内容"
   ```
5. 推送到远程仓库：
   ```bash
   git push origin main
   ```

> 如果是第一次推送，或未设置远程仓库，可先执行：
> ```bash
> git remote add origin https://github.com/hilbert612/research-group-website.git
> git branch -M main
> git push -u origin main
> ```

推送完成后，GitHub 上的仓库会同步你的网站最新代码和内容。

---

## 🛡️ 操作守则

为保证团队协作高效、数据一致、项目安全，特制定如下操作守则：

1. **信息同步**：每次成员信息有更新时，需同步更新所有相关页面和组件（如主页、团队页等），以保证信息一致性，避免出现部分页面未及时反映最新信息的情况。
2. **只维护一份数据源**：团队成员、校友等核心数据应只在 `src/lib/teamData.ts` 维护，页面展示应自动同步。
3. **推送前自查**：推送前请务必检查所有页面是否正常显示、数据是否一致。
4. **提交信息规范**：每次提交请写明本次修改的主要内容，便于团队追溯。
5. **频繁小步提交**：鼓励小步快跑，避免一次性提交大量不相关内容。
6. **分支管理**：如需开发新功能或大改动，请新建分支，开发完成后合并到主分支。
7. **代码审查**：如有多人协作，建议通过 Pull Request 进行代码审查。
8. **备份与恢复**：定期推送代码到远程仓库，防止本地数据丢失。
9. **遵守开源协议**：如有外部贡献或开源需求，遵守 MIT License 相关规定。
10. **遇到问题及时沟通**：如遇到冲突、报错或不确定操作，及时与团队成员沟通。

--- 