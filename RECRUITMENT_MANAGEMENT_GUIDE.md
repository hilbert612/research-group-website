# 招聘信息管理指南

## 概述

招聘板块位于Gallery和Contact之间，用于展示课题组的招聘信息。当前展示的是**Research Assistant Professor (RAP)**职位招聘。

该板块具有以下特点：

- 🏛️ 展示CityU化学系的顶尖学术平台信息
- 👨‍🏫 介绍合作导师朱宗龙教授的学术背景
- 📋 详细的职位要求和研究方向
- 🎨 现代化的卡片式设计
- 📱 响应式布局，适配移动端
- ✨ 精美的渐变色和动画效果

## 文件位置

招聘组件文件位于：
```
src/components/Recruitment.tsx
```

## 当前职位信息

### Research Assistant Professor (RAP)

**所属单位：**
- 香港城市大学化学系
- 高效光伏材料与智能能源协同创新联合研究中心

**研究方向：**
1. 理论模拟与计算化学
2. AI驱动的钙钛矿材料设计与制备
3. 大面积高效稳定钙钛矿太阳能组件
4. 智能储能材料与系统集成

**任职要求：**
- 相关学科博士学位（化学、材料、物理、电子工程、计算机等）
- 2年及以上研究工作经验
- 在国际顶级期刊发表高水平论文
- 良好的沟通能力、团队精神、指导博士生经验和项目管理能力
- 优秀的英语听说读写能力

**薪酬待遇：**
- 具有竞争力的薪酬和福利
- 初始合同期2年

**申请方式：**
- 发送英文简历、代表性论文、两位推荐人信息
- 邮件地址：zonglzhu@cityu.edu.hk 和 dp.gao@cityu.edu.hk
- 邮件主题：RAP Application – [姓名] – [当前单位]

## 如何修改招聘信息

### 1. 修改CityU化学系介绍

在文件约第24-60行找到 "About Us" 部分，修改内容：

```typescript
<p className="leading-relaxed">
  // 修改系部介绍文字
</p>
```

修改排名信息卡片（约第34-50行）：

```typescript
<div className="grid md:grid-cols-3 gap-4 my-6">
  // 三个排名卡片，可修改排名数据
</div>
```

### 2. 修改朱宗龙教授介绍

在文件约第63-93行找到 "Introduction of Collaborating Professor" 部分：

```typescript
<p className="leading-relaxed">
  // 修改教授简介、研究成果、荣誉等信息
</p>
```

### 3. 修改研究方向

在文件约第110-124行找到研究方向列表：

```typescript
{[
  'Theoretical simulation and computational chemistry',
  'AI-driven design and fabrication of perovskite materials',
  // 添加或修改研究方向
].map((direction, idx) => (
  // ...
))}
```

### 4. 修改职位要求

在文件约第129-147行找到要求列表：

```typescript
{[
  'PhD degree in a relevant discipline...',
  'Applicants must possess 2 years or more...',
  // 修改或添加要求
].map((req, idx) => (
  // ...
))}
```

### 5. 修改薪酬待遇

在文件约第152-165行找到薪酬待遇部分：

```typescript
<div className="bg-green-50 rounded-lg p-4 border border-green-200 space-y-2">
  // 修改薪酬和合同期限信息
</div>
```

### 6. 修改申请方式

在文件约第169-199行找到申请方法部分：

```typescript
<ul className="space-y-2 text-gray-700 ml-6 list-disc mb-4">
  <li>English CV</li>
  <li>Representative papers</li>
  // 修改所需材料
</ul>
```

修改联系邮箱（约第181-189行）：

```typescript
<p className="text-blue-600 font-medium">
  <a href="mailto:zonglzhu@cityu.edu.hk">zonglzhu@cityu.edu.hk</a>
  {' '}and{' '}
  <a href="mailto:dp.gao@cityu.edu.hk">dp.gao@cityu.edu.hk</a>
</p>
```

## 添加新职位

如果未来需要添加其他职位（如博士后、博士生等），可以：

### 方案1：添加到当前页面

在当前的 RAP 职位卡片后添加新的职位卡片，复制相同的结构：

```typescript
{/* Position Details - RAP */}
<div className="bg-white rounded-xl shadow-xl...">
  // 现有RAP职位内容
</div>

{/* Position Details - 新职位 */}
<div className="bg-white rounded-xl shadow-xl...">
  // 新职位内容
</div>
```

### 方案2：使用数组管理多个职位

创建职位数据数组，然后循环渲染：

```typescript
const positions = [
  {
    title: 'Research Assistant Professor',
    location: 'Department of Chemistry, CityU',
    directions: [...],
    requirements: [...],
    // ...
  },
  {
    title: 'Postdoctoral Research Fellow',
    // ...
  }
]

// 然后在JSX中：
{positions.map((position, idx) => (
  <div key={idx} className="bg-white rounded-xl...">
    // 渲染职位信息
  </div>
))}
```

## 设计特点

### 1. 信息层次清晰
- **顶部**：页面标题和简介
- **About Us**：CityU化学系介绍和排名
- **Professor Intro**：朱宗龙教授介绍
- **Position Details**：具体职位信息

### 2. 视觉设计
- 使用蓝绿渐变主题色
- 不同信息块使用不同的背景色和边框
- 图标辅助说明，增强可读性
- 卡片式设计，层次分明

### 3. 排名展示
三个排名卡片使用不同颜色：
- **Nature Index**: 蓝色（from-blue-50 to-blue-100）
- **ARWU**: 绿色（from-green-50 to-green-100）
- **NTU Ranking**: 紫色（from-purple-50 to-purple-100）

### 4. 响应式设计
- 桌面端：多列布局
- 移动端：单列堆叠布局
- 所有元素都适配不同屏幕尺寸

## 常见修改示例

### 示例1：更新排名数据

```typescript
<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
  <div className="flex items-center mb-2">
    <Award className="text-blue-600 mr-2" size={20} />
    <h4 className="font-semibold text-gray-900">Nature Index 2026</h4>  {/* 更新年份 */}
  </div>
  <p className="text-sm text-gray-700"><strong>Ranked 1st</strong> in Hong Kong in Chemistry</p>
</div>
```

### 示例2：添加新的研究方向

```typescript
{[
  'Theoretical simulation and computational chemistry',
  'AI-driven design and fabrication of perovskite materials',
  'Large-area high-efficiency and stable perovskite solar modules',
  'Smart energy storage materials and system integration',
  'New research direction'  // 添加新方向
].map((direction, idx) => (
  // ...
))}
```

### 示例3：修改合同期限

```typescript
<p className="text-gray-700 flex items-start">
  <CheckCircle size={18} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
  <span><strong>Contract Duration:</strong> The initial contract period is 3 years</span>  {/* 改为3年 */}
</p>
```

### 示例4：更新联系邮箱

```typescript
<a href="mailto:newemail@cityu.edu.hk" className="hover:underline">newemail@cityu.edu.hk</a>
```

同时更新 "Apply Now" 按钮的链接：

```typescript
<a
  href="mailto:newemail@cityu.edu.hk?subject=RAP Application – [Your Name] – [Your Affiliation]"
  // ...
>
```

## 暂停招聘

如果暂时不招聘，有以下选项：

### 选项1：注释掉整个组件
在 `src/app/page.tsx` 中注释掉：

```typescript
// <Recruitment />
```

### 选项2：添加"暂无招聘"提示
在招聘页面顶部添加提示信息：

```typescript
<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
  <p className="text-yellow-800">
    Currently no positions available. Please check back later.
  </p>
</div>
```

## 最佳实践

1. **及时更新**：排名数据、教授信息、职位要求等应保持最新
2. **准确信息**：确保联系邮箱、网站链接等信息准确无误
3. **清晰描述**：职位要求和研究方向描述要清晰具体
4. **及时回复**：对申请者的询问及时响应
5. **定期检查**：定期检查链接是否有效、信息是否过时

## 注意事项

- 修改后需要保存文件并刷新浏览器查看效果
- 如果本地开发，需要重启开发服务器（`npm run dev`）
- 确保所有外部链接（如课题组网站）可以正常访问
- 邮箱地址要正确，建议发送测试邮件验证
- 修改英文内容时注意语法和拼写

## 技术细节

- **框架**: React + TypeScript
- **图标**: Lucide React
- **样式**: Tailwind CSS
- **邮件链接**: 使用 `mailto:` 协议
- **响应式**: 使用 Tailwind 的响应式工具类（sm, md, lg等）

## 需要帮助？

如果需要添加更复杂的功能（如：
- 在线申请表单系统
- 申请状态追踪
- 多语言支持（中英文切换）
- 申请材料在线上传

请联系开发人员进行定制开发。
