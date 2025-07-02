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
    years: string
  }>
  researchInterests: string[]
  imageUrl: string
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
      'Chair Professor of of Chemistry and Photovoltaic Technology',
      'City University of Hong Kong',
      'Research Grants Coordinator (CSCI)'
    ],
    biography: `Professor ZHU Zonglong is a Chair Professor of Chemistry and Photovoltaic Technology at the Department of Chemistry, City University of Hong Kong, and Principal Investigator of the Materials Research Lab.

Dr. Zhu obtained his B.S. degree (Chemistry) in 2010 from Nanjing University (China). In 2015, he earned his Ph.D. degree from Hong Kong University of Science and Technology (HKUST). Then he moved to the department of materials science and engineering in University of Washington, Seattle and worked as a postdoctoral fellow during 2015-2017. He moved back to HKUST as visiting scholar in 2017. Dr. Zhu joined the City University of Hong Kong as an Assistant Professor in June 2018 and has since been promoted to Chair Professor.

His research mainly focuses on the design of inorganic/organic materials, as well as connecting the materials synthesis, physical properties and device performance for optoelectronics application. The current application interests include solar cells, transistors, light-emitting diodes, and electrochemical devices (e.g. batteries, supercapacitors).

Dr. Zhu has published extensively in top-tier journals including Science, Nature Energy, Nature Nanotechnology, Nature Communications, and Advanced Materials. His work has significantly contributed to the advancement of perovskite solar cells and organic photovoltaic devices, with particular focus on interface engineering and materials innovation for renewable energy applications.`,
    education: [
      {
        institution: 'Hong Kong University of Science and Technology (HKUST)',
        degree: 'PhD',
        years: '2011-2015'
      },
      {
        institution: 'Nanjing University',
        degree: 'B.S. degree (Chemistry)',
        years: '2006-2010'
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
        degree: 'PhD in Chemistry',
        years: '2021-2024'
      }
    ],
    researchInterests: [
      'Chemistry',
      'Materials Science',
      'Renewable Energy',
      'Nanotechnology'
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
        degree: 'PhD',
        years: '2019-2022'
      },
      {
        institution: 'Beihang University',
        degree: 'Master in Chemistry',
        years: '2016-2019'
      },
      {
        institution: 'Beihang University',
        degree: 'Bachelor in Chemistry',
        years: '2012-2016'
      }
    ],
    researchInterests: [
      'Perovskite Materials',
      'Tandem Solar Cells',
      'Carbon-based Perovskite Solar Cells',
      'Inverted Perovskite Solar Cells'
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
        degree: 'PhD in Chemistry',
        years: '2020-2024'
      },
      {
        institution: 'Tianjin University',
        degree: 'Master in Chemical Engineering',
        years: '2017-2020'
      },
      {
        institution: 'Tianjin University',
        degree: 'Bachelor in Chemical Engineering and Technology',
        years: '2013-2017'
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
    biography: `Dr. Gong Jie is focused on materials engineering for photovoltaics and batteries, with research interests in advanced materials design, interface engineering, and energy device optimization. He has published 7 SCI papers as first author in prestigious journals such as ACS Nano and Advanced Functional Materials. His work emphasizes the development of high-efficiency, stable energy conversion and storage systems through innovative materials and device architectures. Current efforts aim to advance next-generation materials for sustainable energy technologies.`,
    education: [
      {
        institution: 'Shandong University',
        degree: 'PhD in Materials Science and Engineering',
        years: ''
      }
    ],
    researchInterests: [
      'Materials Engineering for Photovoltaics',
      'Battery Technologies'
     
    ],
    imageUrl: '/images/team/jie-gong.jpg'
  },
  
  'meng-liao': {
    id: 'meng-liao',
    name: 'Dr. LIAO Meng',
    title: 'Postdoctoral Fellow',
    email: 'mengliao@cityu.edu.hk',
    googleScholar: 'https://scholar.google.com/citations?hl=en&user=h-Z_zg4AAAAJ',
    affiliations: [
      'Research Fellow',
      'Department of Chemistry',
      'City University of Hong Kong'
    ],
    biography: `Dr. Liao Meng's research centers on the development of flexible and scalable polymer-based technologies for energy storage and conversion, with a particular emphasis on addressing the challenge of combining high electrochemical performance with mechanical adaptability. These efforts are especially relevant for emerging applications such as wearable electronics and intelligent textiles. By utilizing the structural versatility, low-cost processing, and environmental benefits of polymers, he works on constructing integrated and flexible battery systems—from the molecular design of active materials to interface engineering at the mesoscale and device-level fabrication.`,
    education: [
      {
        institution: 'Fudan University',
        degree: 'PhD in Polymer Chemistry and Physics',
        years: 'To be confirmed'
      },
      {
        institution: 'Sichuan University',
        degree: 'Bachelor in Polymer Materials and Engineering',
        years: 'To be confirmed'
      }
    ],
    researchInterests: [
      'Flexible Energy Storage',
      'Polymer-based Technologies',
      'Wearable Electronics'
      
    ],
    imageUrl: '/images/team/meng-liao.jpg'
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
        degree: 'PhD in Materials Science',
        years: 'To be confirmed'
      },
      {
        institution: 'Liaoning University',
        degree: 'Bachelor in Materials Chemistry',
        years: 'To be confirmed'
      }
    ],
    researchInterests: [
      'Organic Semiconductor Materials',
      'Molecular Design',
      'Chemical Synthesis',
      'Optoelectronic Devices'
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
        degree: 'PhD in Chemistry',
        years: 'To be confirmed'
      },
      {
        institution: 'Zhejiang University',
        degree: 'Master in Materials Engineering',
        years: 'To be confirmed'
      },
      {
        institution: 'Zhejiang University',
        degree: 'Bachelor in Materials Science and Engineering',
        years: 'To be confirmed'
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
        degree: 'PhD',
        years: 'To be confirmed'
      },
      {
        institution: 'University of Electronic Science and Technology of China',
        degree: 'Master of Science',
        years: 'To be confirmed'
      },
      {
        institution: 'University of Electronic Science and Technology of China',
        degree: 'Bachelor of Science',
        years: 'To be confirmed'
      }
    ],
    researchInterests: [
      'Perovskite Photovoltaics',
      'Functional Materials Design'
      
    ],
    imageUrl: '/images/team/bingyao-shao.jpg'
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
        degree: 'PhD in Chemistry',
        years: 'Current'
      },
      {
        institution: 'Chongqing University',
        degree: 'Master in Mechanical Engineering',
        years: '2017-2020'
      },
      {
        institution: 'Chongqing University',
        degree: 'Bachelor in Mechanical Design, Manufacturing and Automation',
        years: '2013-2017'
      }
    ],
    researchInterests: [
      'Perovskite/Organic Tandem Solar Cells',
      'Photovoltaic Devices',
      'Device Fabrication'
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
        degree: 'PhD in Chemistry',
        years: '2022-Present'
      },
      {
        institution: 'East China University of Science and Technology',
        degree: 'Master',
        years: 'To be confirmed'
      },
      {
        institution: 'East China University of Science and Technology',
        degree: 'Bachelor',
        years: 'To be confirmed'
      }
    ],
    researchInterests: [
      'Flexible Perovskite Solar Cells',
      'Compositional Engineering',
      'Interface Passivation',
      'Crystallization Control'
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
        degree: 'PhD in Chemistry',
        years: '2022-Present'
      },
      {
        institution: 'South China University of Technology',
        degree: 'Master in Materials Science and Engineering',
        years: '2019-2022'
      },
      {
        institution: 'Central South University',
        degree: 'Bachelor in Materials Chemistry',
        years: '2015-2019'
      }
    ],
    researchInterests: [
      'Perovskite Solar Cells',
      'Compositional Engineering',
      'Crystallization Control',
      'Device Stability'
    ],
    imageUrl: '/images/team/shuai-li.jpg'
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
        degree: 'PhD in Chemistry',
        years: '2023-Present'
      },
      {
        institution: 'Central South University',
        degree: 'Bachelor in Physics',
        years: '2018-2022'
      }
    ],
    researchInterests: [
      'Perovskite/Organic Photovoltaics',
      'Tandem Solar Cells',
      'Device Stability',
      'Materials Science'
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
        degree: 'PhD in Chemistry',
        years: 'Current'
      },
      {
        institution: 'Beijing Institute of Technology',
        degree: 'Master',
        years: 'To be confirmed'
      },
      {
        institution: 'China University of Geoscience in Beijing',
        degree: 'Bachelor',
        years: 'To be confirmed'
      }
    ],
    researchInterests: [
      'Perovskite/Silicon Tandem Solar Cells',
      'Device Architecture Design',
      'Interface Engineering',
      'Long-term Stability'
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
        degree: 'PhD in Chemistry',
        years: '2023-Present'
      },
      {
        institution: 'Renmin University of China',
        degree: 'Bachelor in Chemistry',
        years: '2018-2022'
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
    biography: `Wang Ning graduated with a Bachelor's degree from Nanjing University and Master's degree from City University of Hong Kong. He has professional experience at POWERCHINA RESOURCES LIMITED in new energy and power investment.`,
    education: [
      {
        institution: 'City University of Hong Kong',
        degree: 'PhD in Chemistry',
        years: 'Current'
      },
      {
        institution: 'City University of Hong Kong',
        degree: 'Master in Chemistry',
        years: 'To be confirmed'
      },
      {
        institution: 'Nanjing University',
        degree: 'Bachelor in Materials Physics',
        years: 'To be confirmed'
      }
    ],
    researchInterests: [
      'Materials Science',
      'New Energy',
      'Power Investment',
      'Renewable Energy'
    ],
    imageUrl: '/images/team/ning-wang.jpg'
  }
}

export const alumni: Record<string, TeamMember> = {
  'libo': {
    id: 'libo',
    name: 'Prof. LI Bo (李博)',
    title: 'Former Postdoctoral Fellow',
    currentPosition: 'Professor @ Central South University',
    email: 'boli72@csu.edu.cn',
    affiliations: [
      'Professor',
      'School of Materials Science and Engineering',
      'Central South University'
    ],
    biography: `Prof. LI Bo is currently a Professor at the School of Materials Science and Engineering, Central South University. He serves as a supervisor for both PhD and Master's students and was selected for the National Overseas High-level Young Talents Program (Overseas Young Talents) in 2024.

During his time at ICARE Lab, Prof. Li focused on advanced materials research with particular emphasis on energy applications. His work contributed significantly to the understanding of material interfaces and their role in renewable energy devices.

Prof. Li's research has been widely recognized in the materials science community, and his selection for the prestigious national talent program reflects his outstanding contributions to the field.`,
    education: [
      {
        institution: 'University (Details to be added)',
        degree: 'PhD in Materials Science',
        years: 'To be confirmed'
      }
    ],
    researchInterests: [
      'Materials Science and Engineering',
      'Energy Materials',
      'Advanced Characterization'
    ],
    imageUrl: '/images/team/libo.jpg',
    isAlumni: true
  },
  'dan-zhao': {
    id: 'dan-zhao',
    name: 'Assoc. Prof. ZHAO Dan',
    title: 'Former Postdoctoral Fellow',
    currentPosition: 'Associate Professor @ University of Electronic Science and Technology of China',
    email: 'danzhao@uestc.edu.cn',
    affiliations: [
      'Associate Professor',
      'School of Automation Engineering',
      'University of Electronic Science and Technology of China'
    ],
    biography: `Dr. Zhao Dan received his PhD from the University of Electronic Science and Technology of China under the supervision of Prof. Yu Junsheng. During his doctoral studies, he spent two years as a joint PhD student in Prof. Tobin Marks' group (Member of the US National Academy of Sciences and National Academy of Engineering) at Northwestern University. After graduation, he worked as a postdoctoral researcher for two years in Prof. Zhu Zonglong's group at City University of Hong Kong.

Currently, he is an Associate Professor at the University of Electronic Science and Technology of China. He has been selected for the National Overseas High-level Talents Program and the Shandong Province Taishan Scholars Young Expert Program. He leads several research projects, including a sub-project of the National Key R&D Program, a Sichuan Province General Project, and a China Aviation Science Foundation project.

His research focuses on optoelectronic detection and intelligent sensing. He has published over 30 papers in SCI journals, with 15 papers as first author or corresponding author in prestigious international journals such as Advanced Materials, JACS, and Advanced Functional Materials. He also holds 4 invention patents.`,
    education: [
      {
        institution: 'University of Electronic Science and Technology of China',
        degree: 'PhD in Optical Engineering',
        years: 'To be confirmed'
      }
    ],
    researchInterests: [
      'Optoelectronic Detection',
      'Intelligent Sensing',
      'Materials Science',
      'Device Physics'
    ],
    imageUrl: '/images/team/dan-zhao.jpg',
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