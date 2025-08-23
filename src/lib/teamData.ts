export interface TeamMember {
  id: string
  name: string
  title: string
  email: string
  homePage?: string
  googleScholar?: string
  linkedin?: string
  github?: string
  orcid?: string
  affiliations: string[]
  biography: string
  education: Array<{
    institution: string
    degree: string
    years?: string
  }>
  researchInterests: string[]
  imageUrl?: string
  isPrincipalInvestigator?: boolean
  isAlumni?: boolean
  currentPosition?: string // For alumni
}

export const teamMembers: Record<string, TeamMember> = {
  'zonglong-zhu': {
    id: 'zonglong-zhu',
    name: 'Prof. ZHU Zonglong',
    title: 'Chair Professor & Principal Investigator',
    email: 'zonglzhu@cityu.edu.hk',
    homePage: 'https://www.cityu.edu.hk/chem/people/academic-staff/ZZHU',
    googleScholar: 'https://scholar.google.com.ua/citations?user=_HSF3-oAAAAJ&hl=en',
    orcid: 'https://orcid.org/0000-0002-8285-9665',
    affiliations: [
      'Chair Professor of Chemistry and Photovoltaic Technology',
      'City University of Hong Kong',
      'Research Grants Coordinator (CSCI)'
    ],
    biography: `Prof. Zonglong Zhu serves as the Chair Professor of Chemistry and Photovoltaic Technology in the Department of Chemistry at the City University of Hong Kong. He earned his Ph.D. in Chemistry from the Hong Kong University of Science and Technology, following a Bachelor of Science degree from Nanjing University in 2010. After completing his Ph.D., Prof. Zhu pursued postdoctoral research at the University of Washington, Seattle.Prof. Zhu has published over 150 SCI-indexed publications, which have collectively garnered more than 18,000 citations. His portfolio includes 110 articles in prestigious, top-tier journals, with impactful contributions to the journal Science in 2022, 2023, and 2024. He has authored more than 75 publications as the corresponding author and has 29 Highly Cited Papers. Prof. Zhu was also named a Clarivate Highly Cited Researcher (Cross-Field) for three consecutive years (2022-2024). Additionally, he has been ranked among Stanford University's top 2% of highly cited scientists worldwide from 2021 to 2024.

Prof. Zhu has been awarded including the RGC Research Fellow Award and the NSFC Excellent Young Scientists Fund (Hong Kong and Macau). He has received over HK$45 million in competitive research grants, with more than HK$30 million as a Principal Investigator (PI) or Project Coordinator (PC). These grants led by him include funding from prestigious programs such as the Collaborative Research Fund, Research Impact Fund, NSFC-RGC Joint Fund, Innovation and Technology Support Programme (ITSP) seed and platform, Mainland-Hong Kong Technology Cooperation Funding Scheme (MHKTCFS) funded by Mainland and Hong Kong, Guangdong and Hong Kong, Shenzhen and Hong Kong, Shenzhen-Hong Kong-Macau Technology Research Programme (Type C), Shenzhen Key Research Project in Natural Sciences Basic Research.`,
    education: [
      {
        institution: 'Hong Kong University of Science and Technology (HKUST)',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Nanjing University',
        degree: 'B.S. degree in Chemistry'
      }
    ],
    researchInterests: [
      'Materials Innovation',
      'Interfacial Engineering', 
      'Renewable Energy',
      'Nanotechnology',
      'Perovskite Solar Cells',
      'Organic Photovoltaics',
      'Electrochemical Devices'
    ],
    imageUrl: '/images/team/zonglong-zhu.jpg',
    isPrincipalInvestigator: true
  },
  
  'danpeng-gao': {
    id: 'danpeng-gao',
    name: 'Dr. GAO Danpeng',
    title: 'JC STEM Research Fellow',
    email: 'dp.gao@cityu.edu.hk',
    googleScholar: 'https://scholar.google.com/citations?hl=zh-CN&user=QmNhp_oAAAAJ&view_op=list_works&sortby=pubdate',
    orcid: 'https://orcid.org/0000-0001-6633-8782',
    affiliations: [
      'Research Fellow',
      'City University of Hong Kong',
      'Materials Research Group'
    ],
    biography: `Dr. Gao Danpeng is a Research Fellow in our group. His research focuses on chemistry and materials science with applications in renewable energy and nanotechnology.

He completed his PhD in Chemistry at City University of Hong Kong and has published extensively in high-impact journals in the field of materials science and chemistry.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      }
    ],
    researchInterests: [
      'Chemistry',
      'Materials Science',
      'Renewable Energy'
    ],
    imageUrl: '/images/team/GAO Danpeng.jpg'
  },
  
  'xin-wu': {
    id: 'xin-wu',
    name: 'Dr. WU Xin',
    title: 'RGC Research Fellow',
    email: 'xinwu29@cityu.edu.hk',
    googleScholar: 'https://scholar.google.com.hk/citations?user=iEMOs98AAAAJ&hl=zh-CN',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Xin Wu obtained his BS degree and MS degree in 2016 and 2019 from the School of Chemistry, Beihang University. Then, he joined Prof. Zonglong Zhu research group in city university of Hong Kong and obtained his PhD degree in 2022. Currently, he is a Postdoctoral Fellow in the Department of Chemistry, City University of Hong Kong. His research focuses on the physical properties of perovskite materials, perovskite-based tandem solar cells, carbon-based perovskite solar cells, and inverted perovskite solar cells.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD'
      },
      {
        institution: 'Beihang University',
        degree: 'Master in Chemistry'
      },
      {
        institution: 'Beihang University',
        degree: 'Bachelor in Chemistry'
      }
    ],
    researchInterests: [
      'Perovskite Materials',
      'Tandem Solar Cells',
      'Carbon-based Perovskite Solar Cells'
    ],
    imageUrl: '/images/team/xin-wu.jpg'
  },
  
  'xintong-li': {
    id: 'xintong-li',
    name: 'Dr. LI Xintong',
    title: 'Postdoctoral Fellow',
    email: 'xintonli9@cityu.edu.hk',
    orcid: 'https://orcid.org/0000-0003-2995-2323',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Li Xintong completed her undergraduate and master's degrees at Tianjin University in 2017 and 2020, respectively. In 2024, she received her PhD from City University of Hong Kong. Currently, she is a postdoctoral fellow in Professor Zhu Zonglong's research group. Her research areas include electrocatalytic hydrogen and oxygen evolution reactions, electrocatalytic nitrate reduction reactions, and advanced catalytic oxidation reactions. She is currently exploring integrated photovoltaic-driven electrochemical energy conversion systems. She has published papers as first author in journals such as ACS Nano, ACS Catal., Small Method, ACS Sustainable Chem. Eng., Carbon, Nanoscale, and J. Colloid Interface Sci.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Tianjin University',
        degree: 'Master in Chemical Engineering'
      },
      {
        institution: 'Tianjin University',
        degree: 'Bachelor in Chemical Engineering and Technology'
      }
    ],
    researchInterests: [
      'Electrocatalytic Hydrogen and Oxygen Evolution Reactions',
      'Electrocatalytic Nitrate Reduction Reaction'
    ],
    imageUrl: '/images/team/xintong-li.jpg'
  },
  
  'jie-gong': {
    id: 'jie-gong',
    name: 'Dr. GONG Jie',
    title: 'Postdoctoral Fellow',
    email: 'gongjie2@cityu.edu.hk',
    affiliations: [
      'Research Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Gong Jie is focused on materials engineering for photovoltaics and batteries, with research interests in advanced materials design, interface engineering, and energy device optimization. She has published 7 SCI papers as first author in prestigious journals such as ACS Nano and Advanced Functional Materials. Her work emphasizes the development of high-efficiency, stable energy conversion and storage systems through innovative materials and device architectures. Current efforts aim to advance next-generation materials for sustainable energy technologies.`,
    education: [
      {
        institution: 'Shandong University',
        degree: 'PhD in Materials Science and Engineering'
      }
    ],
    researchInterests: [
      'Materials Engineering for Photovoltaics',
      'Battery Technologies'
     
    ],
    imageUrl: '/images/team/jie-gong.jpg'
  },
  

  
  'lei-yang': {
    id: 'lei-yang',
    name: 'Dr. YANG Lei',
    title: 'Postdoctoral Fellow',
    email: 'lyang488@cityu.edu.hk',
    orcid: 'https://orcid.org/0009-0004-3957-2599',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Yang Lei is a Junior Research Fellow at City University of Hong Kong. He previously conducted postdoctoral research at Imperial College London and Shanghai Jiao Tong University. His main research focuses on molecular design of organic semiconductor materials, chemical synthesis, and their applications in optoelectronic devices. He has published 12 SCI papers as first or corresponding author in international journals including J. Am. Chem. Soc., Angew. Chem. Int. Ed., and Chem. Rev. In 2020, he received the Outstanding Doctoral Dissertation Award from the Chinese Academy of Sciences.`,
    education: [
      {
        institution: 'University of Chinese Academy of Sciences',
        degree: 'PhD in Materials Science'
      },
      {
        institution: 'Liaoning University',
        degree: 'Bachelor in Materials Chemistry'
      }
    ],
    researchInterests: [
      'Organic Semiconductor Materials',
      'Molecular Design',
      'Chemical Synthesis'
    ],
    imageUrl: '/images/team/lei-yang.jpg'
  },
  
  'chunlei-zhang': {
    id: 'chunlei-zhang',
    name: 'Dr. ZHANG Chunlei',
    title: 'Postdoctoral Fellow',
    email: 'clzhang5@cityu.edu.hk',
    googleScholar: 'https://scholar.google.com.hk/citations?hl=zh-CN&user=S3z8OBsAAAAJ',
    orcid: 'https://orcid.org/0000-0003-1562-1849',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Zhang Chunlei's research focuses on the development of high-performance and stable perovskite solar cells, with a particular emphasis on addressing key challenges such as efficiency, long-term stability, and large-scale manufacturability. These efforts are especially relevant for advancing next-generation photovoltaic technologies that can meet the growing global demand for clean and sustainable energy. By leveraging the unique optoelectronic properties of perovskite materials, he works on optimizing material compositions, interface engineering, and scalable fabrication techniques to enhance device performance and durability.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Zhejiang University',
        degree: 'Master in Materials Engineering'
      },
      {
        institution: 'Zhejiang University',
        degree: 'Bachelor in Materials Science and Engineering'
      }
    ],
    researchInterests: [
      'Perovskite Solar Cells',
      'Photovoltaic Technologies'
      
    ],
    imageUrl: '/images/team/chunlei-zhang.jpg'
  },
  
    'bingyao-shao': {
    id: 'bingyao-shao',
    name: 'Dr. SHAO Bingyao',
    title: 'Postdoctoral Fellow',
    email: 'bingyao.shao@kaust.edu.sa',
    googleScholar: 'https://scholar.google.com/citations?hl=zh-CN&user=8uuBfV8AAAAJ',
    orcid: 'https://orcid.org/0000-0002-9334-3592',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Shao Bingyao's research focuses on the rational design and advanced engineering of functional organic/inorganic materials in high-performance perovskite photovoltaics.`,
    education: [
      {
        institution: 'King Abdullah University of Science and Technology (KAUST)',
        degree: 'PhD'
      },
      {
        institution: 'University of Electronic Science and Technology of China',
        degree: 'Master of Science'
      },
      {
        institution: 'University of Electronic Science and Technology of China',
        degree: 'Bachelor of Science'
      }
    ],
    researchInterests: [
      'Perovskite Photovoltaics',
      'Functional Materials Design'
    ],
    imageUrl: '/images/team/bingyao-shao.jpg'
  },
  
  'yan-wang': {
    id: 'yan-wang',
    name: 'Dr. WANG Yan',
    title: 'Postdoctoral Fellow',
    email: 'ywang2735-c@my.cityu.edu.hk',
    googleScholar: 'https://scholar.google.com/citations?user=crBQCdoAAAAJ&hl=zh-CN',
    orcid: 'https://orcid.org/0000-0002-3341-1469',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Yan earned his bachelor's degree in Chemistry as part of the Zhi Yuan Honors Program at Shanghai Jiao Tong University in 2018. He continued his studies at the same institution, obtaining a master's degree in 2021. Following his master's graduation, Yan pursued a Ph.D. at City University of Hong Kong (CityU) starting in 2021. His research focuses on organic solar cells and flexible electronic devices.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Shanghai Jiao Tong University',
        degree: 'Master in Chemistry'
      },
      {
        institution: 'Shanghai Jiao Tong University',
        degree: 'Bachelor in Chemistry (Zhi Yuan Honors Program)'
      }
    ],
    researchInterests: [
      'Organic Solar Cells',
      'Flexible Electronic Devices',
      'Materials Chemistry'
    ],
    imageUrl: '/images/team/yan-wang.png'
  },
  
  'shiqiang-fu': {
    id: 'shiqiang-fu',
    name: 'Dr. FU Shiqiang',
    title: 'Postdoctoral Fellow',
    email: '316913224@qq.com',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Fu Shiqiang obtained his Bachelor's degree in Physics from Zhongyuan University of Technology in 2009. He received his Master's degree in Condensed Matter Physics from Ningbo University in 2022 and his Doctoral degree in Materials Physics and Chemistry from Wuhan University in 2025. Currently, Dr. Fu serves as a research assistant in the Department of Chemistry at City University of Hong Kong. His recent research focuses on the physicochemical properties of perovskite materials, perovskite solar cells, and all-perovskite tandem solar cells.`,
    education: [
      {
        institution: 'Wuhan University',
        degree: 'PhD in Materials Physics and Chemistry',
        years: '2022-2025'
      },
      {
        institution: 'Ningbo University',
        degree: 'Master in Condensed Matter Physics',
        years: '2019-2022'
      },
      {
        institution: 'Zhongyuan University of Technology',
        degree: 'Bachelor in Applied Physics',
        years: '2015-2019'
      }
    ],
    researchInterests: [
      'Perovskite Materials',
      'Perovskite Solar Cells',
      'All-Perovskite Tandem Solar Cells'
    ],
    imageUrl: '/images/team/shiqiang-fu.jpg'
  },
  
  'mingyu-li': {
    id: 'mingyu-li',
    name: 'Dr. LI Mingyu',
    title: 'Postdoctoral Fellow',
    email: '18236902722@163.com',
    orcid: 'https://orcid.org/0009-0004-6737-0644',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Li Mingyu's research centers on perovskite-based tandem optoelectronic devices. His specific work encompasses material synthesis, the development of high-performance all-perovskite tandem solar cells, perovskite/PbS quantum dot tandem devices, and scalable fabrication technologies.`,
    education: [
      {
        institution: 'Huazhong University of Science and Technology',
        degree: 'PhD in Optical Engineering'
      },
      {
        institution: 'Zhengzhou University',
        degree: 'Bachelor in Physics'
      }
    ],
    researchInterests: [
      'Perovskite-based Tandem Optoelectronic Devices',
      'Material Synthesis',
      'Scalable Fabrication Technologies'
    ],
    imageUrl: '/images/team/mingyu-li.jpg'
  },
  
  'jianan-wang': {
    id: 'jianan-wang',
    name: 'Dr. WANG Jianan',
    title: 'Postdoctoral Fellow',
    email: 'wangjianan126@163.com',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Jianan Wang obtained his B.S. and Ph.D. degrees from Northeast Forestry University and Huazhong University of Science and Technology in 2020 and 2025, respectively. He is focused on all-perovskite tandem photovoltaics, with research interests in material design and interface engineering to achieve improved efficiency and stability of tandem devices.`,
    education: [
      {
        institution: 'Huazhong University of Science and Technology',
        degree: 'PhD in Optical Engineering'
      },
      {
        institution: 'Northeast Forestry University',
        degree: 'Bachelor in Materials Chemistry'
      }
    ],
    researchInterests: [
      'All-Perovskite Tandem Photovoltaics',
      'Material Design',
      'Interface Engineering'
    ],
    imageUrl: '/images/team/jianan-wang.jpg'
  },
  
  'zihao-song': {
    id: 'zihao-song',
    name: 'Dr. SONG Zihao',
    title: 'Postdoctoral Fellow',
    email: 'williamsong666@outlook.com',
    affiliations: [
      'Postdoctoral Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Song Zihao's research mainly focus on radiation detectors. He has 5 years of experiences in studying perovskite X-ray imager. He has skills in materials design, device preparation and programming. He is currently exploring new types of detectors Professor Zhu's group. Designing detection materials and electronics for different types of radiation will be his major research content.`,
    education: [
      {
        institution: 'Huazhong University of Science and Technology',
        degree: 'PhD'
      },
      {
        institution: 'Jilin University',
        degree: 'Bachelor of Science'
      }
    ],
    researchInterests: [
      'Radiation Detectors',
      'Perovskite X-ray Imagers'
    ],
    imageUrl: '/images/team/zihao-song.jpg'
  },
  
  'dong-zhang': {
    id: 'dong-zhang',
    name: 'ZHANG Dong',
    title: 'PhD Student',
    email: 'dzhang67-c@my.cityu.edu.hk',
    orcid: 'https://orcid.org/0000-0003-1202-6921',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Zhang Dong received his Bachelor's and Master's degrees from Chongqing University in 2017 and 2020, respectively. He is currently pursuing his PhD in Professor Zhu Zonglong's research group at City University of Hong Kong, focusing on perovskite/organic tandem solar cells.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Chongqing University',
        degree: 'Master in Mechanical Engineering'
      },
      {
        institution: 'Chongqing University',
        degree: 'Bachelor in Mechanical Design, Manufacturing and Automation'
      }
    ],
    researchInterests: [
      'Perovskite/Organic Tandem Solar Cells',
      'Photovoltaic Devices'
    ],
    imageUrl: '/images/team/dong-zhang.jpg'
  },
  
  'jianqiu-gong': {
    id: 'jianqiu-gong',
    name: 'GONG Jianqiu',
    title: 'PhD Student',
    email: 'jqgong2-c@my.cityu.edu.hk',
    orcid: 'https://orcid.org/0000-0001-7464-1570',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Gong Jianqiu received his Bachelor's and Master's degrees from East China University of Science and Technology. He is currently a PhD student at City University of Hong Kong (2022 cohort), focusing on the fabrication of high-efficiency flexible perovskite solar cells. His research aims to enhance device performance through compositional engineering, interface passivation, and crystallization control, while also investigating grain boundary damage suppression and stress release mechanisms in flexible perovskite devices.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'East China University of Science and Technology',
        degree: 'Master'
      },
      {
        institution: 'East China University of Science and Technology',
        degree: 'Bachelor'
      }
    ],
    researchInterests: [
      'Flexible Perovskite Solar Cells',
      'Compositional Engineering',
      'Interface Passivation'
    ],
    imageUrl: '/images/team/jianqiu-gong.jpg'
  },
  
  'shuai-li': {
    id: 'shuai-li',
    name: 'LI Shuai',
    title: 'PhD Student',
    email: 'sli345-c@my.cityu.edu.hk',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Li Shuai received his Bachelor's degree in Materials Chemistry from Central South University in 2019, where he focused on metal material phase structures and high-temperature material anti-ablation mechanisms. In 2022, he obtained his Master's degree in Materials Science and Engineering from South China University of Technology, where his research centered on chemical synthesis and the preparation and application of COF materials. He began his PhD studies in the Department of Chemistry at City University of Hong Kong in 2022. His current research focuses on compositional engineering and crystallization control to achieve high-efficiency and stable perovskite solar cells.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'South China University of Technology',
        degree: 'Master in Materials Science and Engineering'
      },
      {
        institution: 'Central South University',
        degree: 'Bachelor in Materials Chemistry'
      }
    ],
    researchInterests: [
      'Perovskite Solar Cells',
      'Compositional Engineering',
      'Crystallization Control'
    ],
    imageUrl: '/images/team/shuai-li.jpg'
  },
  
  'hang-zhang': {
    id: 'hang-zhang',
    name: 'ZHANG Hang',
    title: 'PhD Student',
    email: 'hzhang725-c@my.cityu.edu.hk',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Zhang Hang received his Bachelor's and Master's degrees from Zhengzhou University and University of Science and Technology of China in 2016 and 2019, respectively. His current research focuses on the development of halide cathodes materials based on halogen conversion for aqueous zinc batteries and lithium batteries.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'University of Science and Technology of China',
        degree: 'Master of Science'
      },
      {
        institution: 'Zhengzhou University',
        degree: 'Bachelor of Science'
      }
    ],
    researchInterests: [
      'Halide Cathodes Materials',
      'Aqueous Zinc Batteries',
      'Lithium Batteries'
    ],
    imageUrl: '/images/team/hang-zhang.jpg'
  },
  
  'baoze-liu': {
    id: 'baoze-liu',
    name: 'LIU Baoze',
    title: 'PhD Student',
    email: 'baozeliu2-c@my.cityu.edu.hk',
    orcid: 'https://orcid.org/0000-0002-7348-8428',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Liu Baoze obtained his Bachelor's degree from the Department of Physics at Central South University in 2022. In the following year, he joined Dr. Zhu Zonglong's research group as a PhD student. His current research focuses on high-efficiency perovskite/organic photovoltaics (PVK/OPV) tandem cells, as well as enhancing their stability. He has published articles as the first author or co-first author in journals such as Advanced Materials (3) and Small.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Central South University',
        degree: 'Bachelor in Physics'
      }
    ],
    researchInterests: [
      'Perovskite/Organic Photovoltaics',
      'Tandem Solar Cells',
      'Device Stability'
    ],
    imageUrl: '/images/team/baoze-liu.jpg'
  },
  
  'lina-wang': {
    id: 'lina-wang',
    name: 'WANG Lina',
    title: 'PhD Student',
    email: 'linawang6-c@my.cityu.edu.hk',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Wang Lina completed her bachelor's degree in China University of Geoscience in Beijing. Then she received her master's degree in Beijing Institute of Technology with a focus on perovskite/silicon tandem solar cells. Currently, as a PhD student, her research centers on the development of high-performance perovskite/silicon tandem solar cells. This work encompasses the rational design of device architectures, precise fabrication of functional layers, and optimization of interface engineering to enhance power conversion efficiency. Additionally, she investigates the long-term stability of these tandem devices, exploring degradation mechanisms under operational stressors like thermal cycling, humidity, and light-induced aging to inform strategies for durable, commercial-ready technologies.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Beijing Institute of Technology',
        degree: 'Master'
      },
      {
        institution: 'China University of Geoscience in Beijing',
        degree: 'Bachelor'
      }
    ],
    researchInterests: [
      'Perovskite/Silicon Tandem Solar Cells',
      'Device Architecture Design',
      'Interface Engineering'
    ],
    imageUrl: '/images/team/lina-wang.jpg'
  },
  
  'liangchen-qian': {
    id: 'liangchen-qian',
    name: 'QIAN Liangchen',
    title: 'PhD Student',
    email: 'lcqian2-c@my.cityu.edu.hk',
    orcid: 'https://orcid.org/0009-0000-1662-9776',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Qian Liangchen graduated with a Bachelor's degree from the Department of Chemistry at Renmin University of China in 2022. In 2023, he began his PhD studies in the Department of Chemistry at City University of Hong Kong.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Renmin University of China',
        degree: 'Bachelor in Chemistry'
      }
    ],
    researchInterests: [
      'Chemistry',
      'Materials Science',
      'Renewable Energy'
    ],
    imageUrl: '/images/team/liangchen-qian.jpg'
  },
  
  'ning-wang': {
    id: 'ning-wang',
    name: 'WANG Ning',
    title: 'PhD Student',
    email: 'nwang87-c@my.cityu.edu.hk',
    orcid: 'https://orcid.org/0009-0001-2236-2964',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Wang Ning graduated with a Bachelor's degree from Nanjing University and Master's degree from City University of Hong Kong. He has professional experience in new energy and power investment. His current research focuses on perovskite/silicon tandem solar cells development and the application of AI for materials science, particularly in accelerating the discovery and optimization of photovoltaic materials.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'City University of Hong Kong',
        degree: 'Master in Chemistry'
      },
      {
        institution: 'Nanjing University',
        degree: 'Bachelor in Materials Physics'
      }
    ],
    researchInterests: [
      'Materials Science',
      'Perovskite/Silicon Tandem Solar Cells',
      'Power Investment'
    ],
    imageUrl: '/images/team/ning-wang.jpg'
  },
  
  'zexin-yu': {
    id: 'zexin-yu',
    name: 'YU Zexin',
    title: 'PhD Student',
    email: 'zexinyu2-c@my.cityu.edu.hk',
    orcid: 'https://orcid.org/0009-0008-5922-8954',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Yu Zexin graduated from the Department of Chemistry at Renmin University of China, earning his Bachelor's degree in Chemistry in 2022. Since graduating, Yu has been actively engaged in research within the field of optoelectronics, particularly focusing on solar energy technologies and their environmental impacts. His current research areas include characterization techniques for optoelectronic materials, space photovoltaic technologies, the development of high-performance perovskite solar cells, and the environmental issues associated with these technologies.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Renmin University of China',
        degree: 'Bachelor in Chemistry'
      }
    ],
    researchInterests: [
      'Optoelectronics',
      'Perovskite Solar Cells',
      'Space Photovoltaic Technologies'
    ],
    imageUrl: '/images/team/zexin-yu.jpg'
  },
  
  'francesco-vanin': {
    id: 'francesco-vanin',
    name: 'Francesco Vanin',
    title: 'PhD Student',
    email: 'fvanin2-c@my.cityu.edu.hk',
    orcid: 'https://orcid.org/0009-0003-3581-3642',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Francesco was born in Treviso (a small town near Venice) and moved to London in 2009. In the following years, he also lived in Istanbul and Dubai and hopes to continue travelling the world doing some good chemistry along the way. Francesco completed his MChem degree in Manchester, carrying out his final year project studying lanthanide covalency in the Mills group. He later moved to Imperial College for an MRes degree in the Long group, focusing on developing organometallic compounds for high-efficiency perovskite solar cells. He is now a PhD student in the Zhu group at City University of Hong Kong, focusing on developing chemical approaches to boost perovskite solar cell efficiency and stability.

When not in the lab, you're likely to find him cooking food from around the world for friends and family. You might also find him running at the park in less-than-optimal weather conditions or just relaxing with a good book and a cup of coffee.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Imperial College London',
        degree: 'MRes'
      },
      {
        institution: 'The University of Manchester',
        degree: 'MChem'
      }
    ],
    researchInterests: [
      'Perovskite Solar Cells',
      'Chemical Approaches for Solar Cell Stability',
      'Organometallic Compounds'
    ],
    imageUrl: '/images/team/francesco-vanin.jpg'
  },
  
  'weidong-tian': {
    id: 'weidong-tian',
    name: 'TIAN Weidong',
    title: 'PhD Student',
    email: 'wdtian2-c@my.cityu.edu.hk',
    orcid: 'https://orcid.org/0000-0002-8980-697X',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Tian Weidong received his B.S. degree (2020) from Dalian University of Technology, and M.S. degree (2023) from Shandong University. His research interest is high-performance perovskite/organic tandem solar cells.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'Shandong University',
        degree: 'Master of Science'
      },
      {
        institution: 'Dalian University of Technology',
        degree: 'Bachelor of Science'
      }
    ],
    researchInterests: [
      'Perovskite/Organic Tandem Solar Cells',
      'High-Performance Photovoltaics'
    ],
    imageUrl: '/images/team/weidong-tian.jpg'
  },
  
  'chang-chen': {
    id: 'chang-chen',
    name: 'CHEN Chang',
    title: 'PhD Student',
    email: 'c976631792@outlook.com',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Chen Chang received his M.Eng. degree in Resources and Environmental Engineering at South China University of Technology. He is currently a Ph.D candidate with research focused on high-performance perovskite-based tandem solar cells.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'South China University of Technology',
        degree: 'M.Eng. in Resources and Environmental Engineering'
      }
    ],
    researchInterests: [
      'Perovskite-based Tandem Solar Cells',
      'High-Performance Photovoltaics',
      'Materials Science'
    ],
    imageUrl: '/images/team/chang-chen.jpg'
  },
  
  'junjie-huang': {
    id: 'junjie-huang',
    name: 'HUANG Junjie',
    title: 'PhD Student',
    email: 'junjieh2000@hotmail.com',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Huang Junjie was born in Chengdu, Sichuan Province, China in 2000. He received his Bachelor's degree from Wuhan University of Technology, School of Materials Science and Engineering, and his Master's degree from the University of Chinese Academy of Sciences, School of Materials Science and Optoelectronic Technology. He began his PhD studies at City University of Hong Kong in the fall of 2025. His research focuses on novel photovoltaic devices, primarily including the preparation of tin-based perovskite solar cells and organic photovoltaic devices. He has published one academic paper as the first author in an SCI journal.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'University of Chinese Academy of Sciences',
        degree: 'Master in Materials Science'
      },
      {
        institution: 'Wuhan University of Technology',
        degree: 'Bachelor in New Energy Materials and Devices'
      }
    ],
    researchInterests: [
      'Tin-based Perovskite Solar Cells',
      'Organic Photovoltaic Devices',
      'Novel Photovoltaic Technologies'
    ],
    imageUrl: '/images/team/junjie-huang.jpg'
  },
  
  'long-sun': {
    id: 'long-sun',
    name: 'SUN Long',
    title: 'PhD Student',
    email: 'longsun909@163.com',
    affiliations: [
      'PhD Student',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Sun Long is currently pursuing a PhD degree in the Department of Chemistry at City University of Hong Kong, focusing on organic electrochemical synthesis. During his master's studies, he concentrated on the preparation and performance of catalytic materials, surface defect construction, and characterization analysis. He has received several awards including the National Scholarship, Academic Star of the College, and Outstanding Thesis Award. His interests are diverse, including reading, art (sketching and Chinese painting), and badminton. In his leisure time, he enjoys quietly appreciating scenery.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry'
      },
      {
        institution: 'University of Science and Technology Beijing',
        degree: 'Master in Environmental Science and Engineering'
      },
      {
        institution: 'Nanjing Tech University',
        degree: 'Bachelor in Environmental Engineering'
      }
    ],
    researchInterests: [
      'Organic Electrochemical Synthesis',
      'Catalytic Materials',
      'Surface Defect Construction'
    ],
    imageUrl: '/images/team/long-sun.jpg'
  }
}

export const alumni: Record<string, TeamMember> = {
  'libo': {
    id: 'libo',
    name: 'Prof. LI Bo',
    title: 'Former Postdoctoral Fellow',
    currentPosition: 'Professor @ Central South University',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  },
  'zhen-li': {
    id: 'zhen-li',
    name: 'Dr. LI Zhen',
    title: 'Former PhD Student',
    currentPosition: 'ARC DECRA Research Fellow @ University of New South Wales',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  },
  'meng-liao': {
    id: 'meng-liao',
    name: 'Prof. LIAO Meng',
    title: 'Former Postdoctoral Fellow',
    currentPosition: 'Tenure-Track Associate Professor @ Fudan University',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  },
  'yizhe-liu': {
    id: 'yizhe-liu',
    name: 'Prof. LIU Yizhe',
    title: 'Former PhD Student',
    currentPosition: 'Assistant Professor @ Beijing Institute of Petrochemical Technology',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  },
  'qidi-sun': {
    id: 'qidi-sun',
    name: 'Dr. SUN Qidi',
    title: 'Former PhD Student',
    currentPosition: 'Research Fellow @ Shengli Oilfield Engineering Institute, Sinopec',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  },
  'xianglang-sun': {
    id: 'xianglang-sun',
    name: 'Prof. SUN Xianglang',
    title: 'Former Postdoctoral Fellow',
    currentPosition: 'Associate Professor @ Huazhong University of Science and Technology',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  },
  'jing-wang': {
    id: 'jing-wang',
    name: 'Prof. WANG Jing',
    title: 'Former PhD Student',
    currentPosition: 'Associate Professor @ Guangdong University of Technology',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  },
  'shoufeng-zhang': {
    id: 'shoufeng-zhang',
    name: 'Prof. ZHANG Shoufeng',
    title: 'Former Postdoctoral Fellow',
    currentPosition: 'Professor @ Guangxi University of Science and Technology',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  },
  'dan-zhao': {
    id: 'dan-zhao',
    name: 'Prof. ZHAO Dan',
    title: 'Former Postdoctoral Fellow',
    currentPosition: 'Associate Professor @ University of Electronic Science and Technology of China',
    email: '',
    affiliations: [],
    biography: '',
    education: [],
    researchInterests: [],
    isAlumni: true
  }
}

export function getMemberById(id: string): TeamMember | undefined {
  return teamMembers[id] || alumni[id]
}

export function getAllMembers(): TeamMember[] {
  return Object.values(teamMembers)
}

export function getAllAlumni(): TeamMember[] {
  return Object.values(alumni)
} 