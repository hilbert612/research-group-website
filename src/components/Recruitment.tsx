'use client'

import { Briefcase, Mail, FileText, CheckCircle, Award, TrendingUp } from 'lucide-react'

const Recruitment = () => {

  return (
    <section id="recruitment" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are looking for talented individuals to join our research group at the Department of Chemistry, 
            City University of Hong Kong.
          </p>
        </div>

        {/* Position Details */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-blue-200">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 md:p-8">
            <div className="flex items-center mb-3">
              <Briefcase className="text-white mr-3" size={32} />
              <h3 className="text-3xl font-bold text-white">
                Research Assistant Professor (RAP)
              </h3>
            </div>
            <p className="text-blue-50 text-lg">
              Department of Chemistry, City University of Hong Kong & Joint Research Center for High-Efficiency 
              Photovoltaic Materials and Smart Energy Collaborative Innovation
            </p>
          </div>

          <div className="p-6 md:p-8">
            {/* Research Directions */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="mr-2 text-blue-600" size={22} />
                Research Directions
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Theoretical simulation and computational chemistry',
                  'AI-driven design and fabrication of perovskite materials',
                  'Large-area high-efficiency and stable perovskite solar modules',
                  'Smart energy storage materials and system integration'
                ].map((direction, idx) => (
                  <div key={idx} className="flex items-start bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <CheckCircle size={18} className="mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{direction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-2 text-red-600" size={22} />
                Requirements
              </h4>
              <ul className="space-y-3">
                {[
                  'PhD degree in a relevant discipline (Chemistry, Materials Science, Physics, Electronic Engineering, Computer Science, etc.)',
                  'Applicants must possess 2 years or more of research work experience (exceptions may be considered for particularly outstanding candidates)',
                  'Demonstrated ability and history of publishing high-level research papers in top international journals in the field',
                  'Good communication skills, team spirit, experience in supervising PhD students, and project management capabilities',
                  'Strong proficiency in listening, speaking, reading, and writing in English'
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle size={18} className="mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Remuneration and Benefits */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="mr-2 text-green-600" size={22} />
                Remuneration and Benefits
              </h4>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200 space-y-2">
                <p className="text-gray-700 flex items-start">
                  <CheckCircle size={18} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Salary and benefits will be <strong>competitive</strong>, determined based on the applicant's 
                  qualifications and experience, and administered in accordance with University regulations</span>
                </p>
                <p className="text-gray-700 flex items-start">
                  <CheckCircle size={18} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                  <span><strong>Contract Duration:</strong> The initial contract period is 2 years</span>
                </p>
              </div>
            </div>

            {/* Application Method */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="mr-2 text-blue-600" size={22} />
                Application Method
              </h4>
              <p className="text-gray-700 mb-4">
                Interested applicants should send the following materials:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6 list-disc mb-4">
                <li>English CV</li>
                <li>Representative papers</li>
                <li>Names and email addresses of two referees</li>
              </ul>
              <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Send to:</strong></p>
                <p className="text-blue-600 font-medium">
                  <a href="mailto:zonglzhu@cityu.edu.hk" className="hover:underline">zonglzhu@cityu.edu.hk</a>
                  {' '}and{' '}
                  <a href="mailto:dp.gao@cityu.edu.hk" className="hover:underline">dp.gao@cityu.edu.hk</a>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Email Subject:</strong> <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    RAP Application – [Name] – [Current Affiliation]
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:zonglzhu@cityu.edu.hk?subject=RAP Application – [Your Name] – [Your Affiliation]"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Mail size={20} className="mr-2" />
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recruitment
