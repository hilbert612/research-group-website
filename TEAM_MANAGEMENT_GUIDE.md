# 团队成员管理指南

本文档详细说明如何在研究组网站中批量添加和管理团队成员及校友信息。

## 📁 数据文件位置

所有团队成员数据都存储在：`src/lib/teamData.ts`

## 📊 数据结构说明

### TeamMember 接口定义

```typescript
export interface TeamMember {
  id: string                    // 必填：唯一标识符（用于URL路由）
  name: string                  // 必填：姓名
  title: string                 // 必填：职位/头衔
  email: string                 // 必填：邮箱地址
  homePage?: string            // 可选：个人主页
  googleScholar?: string       // 可选：Google Scholar链接
  linkedin?: string            // 可选：LinkedIn链接
  github?: string              // 可选：GitHub链接
  orcid?: string               // 可选：ORCID链接
  affiliations: string[]       // 必填：隶属关系数组
  biography: string            // 必填：个人简介
  education: Array<{           // 必填：教育背景数组
    institution: string
    degree: string
    years: string
  }>
  researchInterests: string[]  // 必填：研究兴趣数组
  imageUrl: string            // 必填：头像图片路径
  isPrincipalInvestigator?: boolean  // 可选：是否为首席研究员
  isAlumni?: boolean          // 可选：是否为校友
  currentPosition?: string    // 可选：当前职位（校友专用）
}
```

## 🆕 添加新团队成员

### 1. 当前团队成员添加格式

在 `teamMembers` 对象中添加新成员：

```typescript
export const teamMembers: Record<string, TeamMember> = {
  // 现有成员...
  
  'member-id-here': {
    id: 'member-id-here',
    name: '成员姓名',
    title: '职位头衔',
    email: 'email@cityu.edu.hk',
    homePage: 'https://personal-website.com',        // 可选
    googleScholar: 'https://scholar.google.com/...',  // 可选
    linkedin: 'https://linkedin.com/in/...',          // 可选
    github: 'https://github.com/username',            // 可选
    orcid: 'https://orcid.org/0000-0000-0000-0000',  // 可选
    affiliations: [
      '具体职位描述',
      'City University of Hong Kong',
      '其他隶属关系'
    ],
    biography: `详细的个人简介，包括研究背景、主要成就等。

可以分多段落描述，支持markdown格式。

包含教育背景、研究经历、主要贡献等信息。`,
    education: [
      {
        institution: '毕业院校',
        degree: '学位类型',
        years: '起始年份-结束年份'
      },
      // 可以添加多个教育经历
    ],
    researchInterests: [
      '研究领域1',
      '研究领域2',
      '研究领域3'
    ],
    imageUrl: '/images/team/member-id-here.jpg'
  }
}
```

### 2. 校友添加格式

在 `alumni` 对象中添加校友：

```typescript
export const alumni: Record<string, TeamMember> = {
  // 现有校友...
  
  'alumni-id-here': {
    id: 'alumni-id-here',
    name: '校友姓名',
    title: '在实验室时的职位',
    currentPosition: '现在的职位 @ 现在的机构',
    email: 'current-email@institution.edu',
    affiliations: [
      '现在的职位',
      '现在的机构名称'
    ],
    biography: `简短的校友介绍，包括在实验室期间的工作和现在的职位。`,
    education: [
      {
        institution: '毕业院校',
        degree: '学位类型',
        years: '年份'
      }
    ],
    researchInterests: [
      '主要研究领域'
    ],
    imageUrl: '/images/team/alumni-id-here.jpg',
    isAlumni: true
  }
}
```

## 📝 字段填写指南

### 必填字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `id` | 唯一标识符，用于URL和内部引用 | `'john-smith'`, `'li-wei'` |
| `name` | 完整姓名 | `'Dr. John Smith'`, `'李伟'` |
| `title` | 职位头衔 | `'Research Fellow'`, `'PhD Student'` |
| `email` | 邮箱地址 | `'john.smith@cityu.edu.hk'` |
| `affiliations` | 隶属关系，按重要性排序 | `['Research Fellow', 'Department of Chemistry', 'City University of Hong Kong']` |
| `biography` | 个人简介，支持多段落 | 详细的研究背景和成就 |
| `education` | 教育背景，按时间倒序 | 学位、院校、年份 |
| `researchInterests` | 研究兴趣关键词 | `['AI', 'Materials Science', 'Solar Cells']` |
| `imageUrl` | 头像图片路径 | `'/images/team/john-smith.jpg'` |

### 可选字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| `homePage` | 个人主页 | `'https://www.personal-site.com'` |
| `googleScholar` | Google Scholar链接 | `'https://scholar.google.com/citations?user=XXX'` |
| `linkedin` | LinkedIn链接 | `'https://linkedin.com/in/username'` |
| `github` | GitHub链接 | `'https://github.com/username'` |
| `orcid` | ORCID链接 | `'https://orcid.org/0000-0000-0000-0000'` |
| `currentPosition` | 当前职位（仅校友） | `'Assistant Professor @ MIT'` |

## 🖼️ 图片管理

### 图片要求
- **存放位置**: `/public/images/team/`
- **命名格式**: `成员id.jpg` 或 `成员id.png`
- **推荐尺寸**: 400x400像素（正方形）
- **文件大小**: 小于500KB
- **格式**: JPG或PNG

### 图片添加步骤
1. 将图片文件放入 `/public/images/team/` 目录
2. 按照 `成员id.jpg` 格式命名
3. 在数据中设置 `imageUrl: '/images/team/成员id.jpg'`

## 📋 批量添加步骤

### 准备工作
1. 收集所有成员信息（Excel或表格形式）
2. 准备所有成员照片
3. 为每个成员确定唯一的ID（建议使用 `firstname-lastname` 格式）

### 数据录入
1. 打开 `src/lib/teamData.ts` 文件
2. 根据成员类型选择添加到 `teamMembers` 或 `alumni` 对象
3. 使用上述模板逐个添加成员信息
4. 确保每个成员的 `id` 唯一
5. 检查必填字段是否完整

### 验证检查
1. 确保语法正确（TypeScript格式）
2. 检查所有必填字段
3. 验证邮箱格式
4. 确认图片路径正确
5. 测试网站是否正常显示

## 📚 完整示例

### 研究员示例
```typescript
'alice-chen': {
  id: 'alice-chen',
  name: 'Dr. Alice Chen',
  title: 'Postdoctoral Research Fellow',
  email: 'alice.chen@cityu.edu.hk',
  googleScholar: 'https://scholar.google.com/citations?user=example123',
  linkedin: 'https://linkedin.com/in/alice-chen-phd',
  orcid: 'https://orcid.org/0000-0002-1234-5678',
  affiliations: [
    'Postdoctoral Research Fellow',
    'Department of Chemistry',
    'City University of Hong Kong'
  ],
  biography: `Dr. Alice Chen is a Postdoctoral Research Fellow specializing in perovskite solar cell technology. She obtained her PhD from Stanford University in 2022, focusing on interface engineering for high-efficiency photovoltaic devices.

Her current research involves developing novel passivation strategies to enhance the stability and efficiency of perovskite solar cells. She has published 15 peer-reviewed papers in top-tier journals including Nature Energy and Advanced Materials.

Dr. Chen brings expertise in materials characterization, device physics, and computational modeling to advance the lab's research in renewable energy applications.`,
  education: [
    {
      institution: 'Stanford University',
      degree: 'PhD in Materials Science and Engineering',
      years: '2018-2022'
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'M.S. in Chemical Engineering',
      years: '2016-2018'
    },
    {
      institution: 'Tsinghua University',
      degree: 'B.S. in Chemical Engineering',
      years: '2012-2016'
    }
  ],
  researchInterests: [
    'Perovskite Solar Cells',
    'Interface Engineering',
    'Materials Characterization',
    'Device Physics',
    'Renewable Energy'
  ],
  imageUrl: '/images/team/alice-chen.jpg'
}
```

### 博士生示例
```typescript
'bob-liu': {
  id: 'bob-liu',
  name: 'Bob Liu',
  title: 'PhD Student',
  email: 'bob.liu@my.cityu.edu.hk',
  github: 'https://github.com/bobliu',
  affiliations: [
    'PhD Student',
    'Department of Chemistry',
    'City University of Hong Kong'
  ],
  biography: `Bob Liu is a second-year PhD student working on AI-enhanced materials discovery. His research focuses on developing machine learning models to predict material properties and accelerate the discovery of new photovoltaic materials.

Before joining the lab, Bob worked as a research assistant at HKUST, where he gained experience in computational chemistry and data science.`,
  education: [
    {
      institution: 'City University of Hong Kong',
      degree: 'PhD in Chemistry (In Progress)',
      years: '2023-Present'
    },
    {
      institution: 'Hong Kong University of Science and Technology',
      degree: 'M.Phil. in Chemistry',
      years: '2021-2023'
    }
  ],
  researchInterests: [
    'Machine Learning',
    'Materials Discovery',
    'Computational Chemistry',
    'Data Science'
  ],
  imageUrl: '/images/team/bob-liu.jpg'
}
```

### 校友示例
```typescript
'david-wang': {
  id: 'david-wang',
  name: 'Dr. David Wang',
  title: 'Former Postdoctoral Fellow',
  currentPosition: 'Assistant Professor @ National University of Singapore',
  email: 'david.wang@nus.edu.sg',
  affiliations: [
    'Assistant Professor',
    'Department of Materials Science',
    'National University of Singapore'
  ],
  biography: `Dr. David Wang is now an Assistant Professor at NUS. During his time at our lab (2020-2023), he focused on organic photovoltaic materials and published several high-impact papers.`,
  education: [
    {
      institution: 'University of Cambridge',
      degree: 'PhD in Chemistry',
      years: '2016-2020'
    }
  ],
  researchInterests: [
    'Organic Photovoltaics',
    'Materials Synthesis',
    'Device Engineering'
  ],
  imageUrl: '/images/team/david-wang.jpg',
  isAlumni: true
}
```

## ⚠️ 注意事项

1. **ID 唯一性**: 确保每个成员的 `id` 在整个系统中唯一
2. **邮箱隐私**: 考虑是否公开显示邮箱地址
3. **图片版权**: 确保有权使用所上传的照片
4. **数据格式**: 严格按照 TypeScript 语法格式
5. **定期更新**: 及时更新成员状态和信息
6. **信息同步**: 每次成员信息有更新时，需同步更新所有相关页面和组件（如主页、团队页等），以保证信息一致性，避免出现部分页面未及时反映最新信息的情况。

## 🔄 维护建议

- 定期检查链接的有效性
- 及时更新成员状态变化
- 保持信息的时效性和准确性
- 备份重要数据

---

如有任何问题，请参考现有成员数据作为参考，或联系网站维护人员。 