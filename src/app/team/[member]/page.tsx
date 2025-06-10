import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getMemberById } from '@/lib/teamData'

interface MemberPageProps {
  params: {
    member: string
  }
}

export default function MemberPage({ params }: MemberPageProps) {
  const member = getMemberById(params.member)
  
  if (!member) {
    notFound()
  }

  const socialLinks = [
    { 
      label: 'Home Page', 
      url: member.homePage
    },
    { 
      label: 'Google Scholar', 
      url: member.googleScholar
    },
    { 
      label: 'LinkedIn', 
      url: member.linkedin
    },
    { 
      label: 'GitHub', 
      url: member.github
    },
    { 
      label: 'ORCID', 
      url: member.orcid
    }
  ].filter(link => link.url)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#team" className="hover:text-primary-600 transition-colors">
              Team
            </Link>
            <span>/</span>
            <span className="text-gray-900">{member.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          href="/#team" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors mb-8"
        >
          <span className="mr-2">←</span>
          Back to Team
        </Link>

        {/* Member Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-shrink-0">
            <img 
              src={member.imageUrl} 
              alt={member.name}
              className="w-48 h-48 bg-gray-200 rounded-lg object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
            <p className="text-xl text-primary-600 font-medium mb-6">{member.title}</p>
            
            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a 
                href={`mailto:${member.email}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                Email
              </a>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Affiliations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Affiliations</h2>
            <ul className="space-y-2">
              {member.affiliations.map((affiliation, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>{affiliation}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Biography */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Biography</h2>
            <div className="prose prose-gray max-w-none">
              {member.biography.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Research Interests */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Interests</h2>
            <div className="flex flex-wrap gap-2">
              {member.researchInterests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-4">
              {member.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary-200 pl-6">
                  <h3 className="font-semibold text-gray-900">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.years}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Alumni Current Position (if applicable) */}
          {member.isAlumni && member.currentPosition && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Position</h2>
              <p className="text-gray-700 text-lg">{member.currentPosition}</p>
            </section>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 AI Research Laboratory | University
          </p>
        </div>
      </footer>
    </div>
  )
}

// Generate metadata for each member page
export async function generateMetadata({ params }: MemberPageProps) {
  const member = getMemberById(params.member)
  
  if (!member) {
    return {
      title: 'Member not found'
    }
  }

  return {
    title: `${member.name} | AI Research Lab`,
    description: `Learn more about ${member.name}, ${member.title} at the AI Research Laboratory.`
  }
} 