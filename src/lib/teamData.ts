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
      'Chair Professor of Department of Chemistry',
      'City University of Hong Kong',
      'Research Grants Coordinator (CSCI)'
    ],
    biography: `Professor ZHU Zonglong is a Chair Professor at the Department of Chemistry, City University of Hong Kong, and Principal Investigator of the Materials Research Lab.

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
    name: 'Dr. Gao Danpeng',
    title: 'Research Fellow',
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