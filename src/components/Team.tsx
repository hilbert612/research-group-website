import Link from 'next/link'
import { getAllMembers, getAllAlumni } from '@/lib/teamData'

const Team = () => {
  // Principal Investigator information
  const director = {
    name: "Prof. ZHU Zonglong",
    title: "Chair Professor & Principal Investigator",
    positions: [
      "Chair Professor of Chemistry and Photovoltaic Technology",
      "City University of Hong Kong", 
      "Research Grants Coordinator (CSCI)",
    ],
    description: "Prof. Zonglong Zhu is Chair Professor of Chemistry and Photovoltaic Technology at City University of Hong Kong. He holds a Ph.D. from HKUST and Bachelor's from Nanjing University, with postdoctoral experience at University of Washington. Prof. Zhu has published over 150 SCI-indexed publications, which have collectively garnered more than 18,000 citations. His portfolio includes 110 articles in prestigious, top-tier journals, with impactful contributions to the journal Science in 2022, 2023, and 2024. He is a Clarivate Highly Cited Researcher (2022-2024) and ranked among Stanford's top 2% scientists worldwide (2021-2024). He has secured over HK$45 million in competitive research grants, with HK$30+ million as Principal Investigator, from prestigious funding programs including RGC, NSFC, and various cross-border collaboration schemes.",
    imageUrl: "/images/team/zonglong-zhu.jpg",
    email: "zonglzhu@cityu.edu.hk"
  }

  // 动态获取团队成员和校友
  const teamMembers = getAllMembers().filter(m => !m.isPrincipalInvestigator)
  const postdocs = teamMembers.filter(member => member.title.includes('Postdoctoral') || member.title.includes('Research Fellow') || member.title.includes('JC STEM') || member.title.includes('RGC'))
  const phdStudents = teamMembers.filter(member => member.title.includes('PhD Student'))
  const alumni = getAllAlumni()

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Principal Investigator Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Principal Investigator</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <img 
                src={director.imageUrl} 
                alt={director.name}
                className="w-48 h-56 bg-gray-200 rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <Link href="/team/zonglong-zhu" className="hover:text-primary-600 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">{director.name}</h3>
              </Link>
              <p className="text-primary-600 font-medium mb-4">{director.title}</p>
              
              <ul className="mb-4 space-y-1">
                {director.positions.map((position, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <span className="mr-2">•</span>
                    <span>{position}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {director.description}
              </p>
              
              <a 
                href={`mailto:${director.email}`}
                className="text-primary-600 text-sm hover:text-primary-700 transition-colors duration-200"
              >
                {director.email}
              </a>
            </div>
          </div>
        </div>

        {/* Postdoctoral Fellows Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Postdoctoral Fellow</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {postdocs.map((member, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 text-sm font-medium mb-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PhD Students Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">PhD Student</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {phdStudents.map((member, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 text-sm font-medium mb-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Alumni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {alumni.map((alumnus, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-base font-semibold text-gray-900 mb-1">{alumnus.name}</h4>
                <p className="text-primary-600 text-sm font-medium mb-1">{alumnus.currentPosition}</p>
                <p className="text-gray-500 text-xs font-medium">{alumnus.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruitment Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            We welcome applications from motivated individuals who wish to join our team. To apply for positions in our group, please reach out to us via the contact details below and attach your CV. We regularly have funded opportunities available, and additional scholarship schemes and fellowships are offered by the University.
          </p>
          <p className="text-gray-700 text-sm">
            For more information on how to join us, you can review our{' '}
            <a href="#contact" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
              recruitment page
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Team 