import { Cpu, Battery, Target, Microscope, Zap, Beaker, BookOpen, Users, Award, Lightbulb } from 'lucide-react'
import { SolarPanelIcon, MolecularIcon } from './icons/CustomIcons'
import Link from 'next/link'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About ICARE Lab
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Intelligent Chemistry and Advanced Materials for Renewable Energy Laboratory - Pioneering the future of sustainable energy technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to revolutionizing renewable energy technologies through the intelligent integration 
              of artificial intelligence and advanced materials science. Our focus on perovskite solar cells 
              and energy storage systems aims to accelerate the global transition to sustainable energy solutions.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900">Research Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in the transformative power of AI-driven materials discovery. By combining computational 
              prediction with experimental validation, we create a synergistic approach that accelerates 
              innovation and enables breakthroughs in renewable energy materials and devices.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <a 
                href="https://scholar.google.com/citations?user=_HSF3-oAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">150+</div>
                <div className="text-gray-600 text-sm">Publications</div>
              </a>
              <a 
                href="https://scholars.cityu.edu.hk/en/persons/zonglzhu/projects/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-2">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">28</div>
                <div className="text-gray-600 text-sm">Research Projects</div>
              </a>
              <a 
                href="#team"
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">30+</div>
                <div className="text-gray-600 text-sm">Team Members</div>
              </a>
              <a 
                href="https://scholars.cityu.edu.hk/en/persons/zonglzhu/publications/?type=%2Fdk%2Fatira%2Fpure%2Fresearchoutput%2Fresearchoutputtypes%2Fpatent%2Fpatent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">10+</div>
                <div className="text-gray-600 text-sm">Patents</div>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 p-8 rounded-xl border border-green-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Research Focus</h4>
              <div className="space-y-4">
                                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 p-2 rounded-lg mr-3">
                      <SolarPanelIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">High-Efficiency Perovskite Solar Cells</span>
                  </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-2 rounded-lg mr-3">
                    <Cpu className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">AI-Driven Materials Design</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-2 rounded-lg mr-3">
                    <Battery className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Advanced Energy Storage Systems</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-2 rounded-lg mr-3">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Interface Engineering & Stability</span>
                </div>
                                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 p-2 rounded-lg mr-3">
                      <MolecularIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Machine Learning for Energy Materials</span>
                  </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Principal Investigator</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Prof. ZHU Zonglong</strong> - Chair Professor at City University of Hong Kong, 
                leading innovative research in perovskite solar cells, organic photovoltaics, and 
                AI-enhanced materials discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 