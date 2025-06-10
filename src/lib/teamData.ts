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
  isDirector?: boolean
  isAlumni?: boolean
  currentPosition?: string // For alumni
}

export const teamMembers: Record<string, TeamMember> = {
  'zonglong-zhu': {
    id: 'zonglong-zhu',
    name: 'Prof. ZHU Zonglong',
    title: 'Chair Professor & Lab Director',
    email: 'zonglzhu@cityu.edu.hk',
    homePage: 'https://zhugroupcityu.wixsite.com/zhugroup',
    googleScholar: 'https://scholar.google.com.ua/citations?user=_HSF3-oAAAAJ&hl=en',
    orcid: 'https://orcid.org/0000-0002-8285-9665',
    affiliations: [
      'Chair Professor of Department of Chemistry',
      'City University of Hong Kong',
      'Director of Materials Research Lab',
      'PhD(HKUST)'
    ],
    biography: `Professor ZHU Zonglong is a Chair Professor at the Department of Chemistry, City University of Hong Kong, and Director of the Materials Research Lab.

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
    isDirector: true
  },
  
  'emily-williams': {
    id: 'emily-williams',
    name: 'Dr. Emily Williams',
    title: 'Research Fellow',
    email: 'emily.williams@university.edu',
    googleScholar: 'https://scholar.google.com/citations?user=example2',
    linkedin: 'https://www.linkedin.com/in/emily-williams-cv',
    affiliations: [
      'Research Fellow in Computer Vision',
      'Member, Medical AI Research Group',
      'Affiliate, Centre for Healthcare AI'
    ],
    biography: `Dr. Emily Williams is a Research Fellow specializing in computer vision and medical AI applications. Her work focuses on developing novel deep learning architectures for medical image analysis and diagnostic systems.

She has extensive experience in collaborating with healthcare professionals to translate cutting-edge AI research into practical clinical applications. Her recent work includes developing AI systems for early cancer detection and automated medical imaging analysis.

Emily has published extensively in top-tier computer vision and medical AI conferences, and her work has been adopted by several major hospitals for clinical trials.`,
    education: [
      {
        institution: 'Oxford University',
        degree: 'PhD in Computer Vision',
        years: '2015-2019'
      },
      {
        institution: 'Cambridge University',
        degree: 'MEng in Engineering Science',
        years: '2011-2015'
      }
    ],
    researchInterests: [
      'Computer Vision',
      'Medical AI',
      'Deep Learning',
      'Image Analysis',
      'Clinical Applications'
    ],
    imageUrl: '/api/placeholder/200/200'
  },

  'michael-chen': {
    id: 'michael-chen',
    name: 'Prof. Michael Chen',
    title: 'Lecturer',
    email: 'michael.chen@university.edu',
    homePage: 'https://www.university.edu/faculty/michael-chen',
    googleScholar: 'https://scholar.google.com/citations?user=example3',
    linkedin: 'https://www.linkedin.com/in/michael-chen-nlp',
    affiliations: [
      'Lecturer in Natural Language Processing',
      'Member, AI Ethics Committee',
      'Affiliate, Centre for Digital Humanities'
    ],
    biography: `Professor Michael Chen is a Lecturer specializing in natural language processing and AI ethics. His research addresses fundamental challenges in language understanding, generation, and the ethical implications of AI systems.

He has been at the forefront of research into bias detection and mitigation in language models, and has contributed significantly to the development of fair and transparent AI systems. His work bridges technical innovation with societal impact.

Michael regularly consults for major technology companies on AI ethics and responsible AI deployment strategies.`,
    education: [
      {
        institution: 'Carnegie Mellon University',
        degree: 'PhD in Language Technologies',
        years: '2012-2017'
      },
      {
        institution: 'University of Toronto',
        degree: 'MSc in Computer Science',
        years: '2010-2012'
      }
    ],
    researchInterests: [
      'Natural Language Processing',
      'AI Ethics',
      'Machine Learning',
      'Bias Detection',
      'Language Models'
    ],
    imageUrl: '/api/placeholder/200/200'
  }
}

export const alumni: Record<string, TeamMember> = {
  'thomas-anderson': {
    id: 'thomas-anderson',
    name: 'Dr. Thomas Anderson',
    title: 'Former Research Fellow',
    currentPosition: 'Ass. Prof @ MIT',
    email: 'thomas.anderson@mit.edu',
    affiliations: [
      'Assistant Professor at MIT',
      'Former Research Fellow, AI Research Lab'
    ],
    biography: `Dr. Thomas Anderson is now an Assistant Professor at MIT. During his time at our lab, he focused on reinforcement learning and autonomous systems.`,
    education: [
      {
        institution: 'University',
        degree: 'PhD in Machine Learning',
        years: '2018-2022'
      }
    ],
    researchInterests: [
      'Reinforcement Learning',
      'Autonomous Systems',
      'Multi-agent Systems'
    ],
    imageUrl: '/api/placeholder/200/200',
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