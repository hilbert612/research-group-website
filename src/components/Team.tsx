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
    description: "Professor ZHU Zonglong is a Chair Professor of Chemistry and Photovoltaic Technology at the Department of Chemistry, City University of Hong Kong, and Principal Investigator of the Intelligent Chemistry and Advanced Materials for Renewable Energy. His research addresses challenges at the intersection of materials innovation and renewable energy applications.",
    imageUrl: "/images/team/zonglong-zhu.jpg",
    email: "zonglzhu@cityu.edu.hk"
  }

  // 动态获取团队成员和校友
  const teamMembers = getAllMembers().filter(m => !m.isPrincipalInvestigator)
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

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {member.imageUrl && !member.imageUrl.includes('placeholder') ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-24 h-28 bg-gray-200 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-24 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Photo</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    {member.id ? (
                      <Link href={`/team/${member.id}`} className="hover:text-primary-600 transition-colors">
                        <h4 className="text-base font-semibold text-gray-900 mb-1 hover:text-primary-600 transition-colors">{member.name}</h4>
                      </Link>
                    ) : (
                      <h4 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h4>
                    )}
                    <p className="text-primary-600 text-sm font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{member.researchInterests?.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Alumni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {alumni.map((alumnus, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {alumnus.imageUrl && !alumnus.imageUrl.includes("placeholder") ? (
                      <img 
                        src={alumnus.imageUrl} 
                        alt={alumnus.name}
                        className="w-24 h-28 bg-gray-200 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-24 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Photo</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* Add link for Alumni who have detailed pages */}
                    {alumnus.id === "libo" ? (
                      <Link href="/team/libo" className="hover:text-primary-600 transition-colors">
                        <h4 className="text-base font-semibold text-gray-900 mb-1 hover:text-primary-600 transition-colors">{alumnus.name}</h4>
                      </Link>
                    ) : (
                      <h4 className="text-base font-semibold text-gray-900 mb-1">{alumnus.name}</h4>
                    )}
                    <p className="text-primary-600 text-sm font-medium mb-2">{alumnus.currentPosition}</p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-1">{alumnus.researchInterests?.join(', ')}</p>
                    <p className="text-gray-500 text-xs font-medium">{alumnus.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruitment Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            We are always looking for new members to our team. We will advertise any funded opportunities 
            specific to our group on LinkedIn, as well as in relevant academic mailing lists, while several 
            scholarship schemes and fellowships are offered by the University.
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