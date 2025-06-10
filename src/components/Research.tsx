import { SolarPanelIcon, AIChipIcon, MolecularIcon, EnergyStorageIcon } from './icons/CustomIcons'

const Research = () => {
  const researchAreas = [
    {
      icon: SolarPanelIcon,
      title: "High-Efficiency Stable Perovskite Solar Cells",
      description: "Developing advanced perovskite solar cell technologies with breakthrough efficiency and long-term stability for commercial applications.",
      projects: ["p-i-n Inverted Structure", "Interface Engineering", "Novel Transport Materials", "Stability Enhancement"]
    },
    {
      icon: AIChipIcon,
      title: "AI-Driven Perovskite Materials Design & Fabrication",
      description: "Leveraging artificial intelligence and machine learning to accelerate perovskite material discovery and optimize fabrication processes.",
      projects: ["ML Composition Optimization", "Smart Fabrication Process", "Performance Prediction", "Automated Synthesis Platform"]
    },
    {
      icon: MolecularIcon,
      title: "Energy Materials Design",
      description: "Designing innovative energy materials through advanced synthesis strategies and precise nanostructure control for enhanced performance.",
      projects: ["Multi-element Alloy Design", "Nanostructure Control", "Interface Innovation", "Material-Device Integration"]
    },
    {
      icon: EnergyStorageIcon,
      title: "Smart Energy Storage Materials & System Integration",
      description: "Developing intelligent energy storage systems with advanced battery materials and AI-powered energy management solutions.",
      projects: ["Advanced Battery Materials", "Electrochemical Storage", "Smart Energy Management", "Device Integration"]
    }
  ]

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Research Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our research integrates artificial intelligence with advanced materials science to revolutionize 
            clean energy technologies, from perovskite solar cells to intelligent energy storage systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-xl mr-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">{area.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Key Research Focus
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.projects.map((project, projectIndex) => (
                      <div 
                        key={projectIndex}
                        className="text-sm text-gray-700 bg-gradient-to-r from-blue-50 to-green-50 px-3 py-2 rounded-lg border border-green-100"
                      >
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Pioneering the Future of Clean Energy
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through the synergy of AI and advanced materials, we&apos;re accelerating the development 
              of next-generation energy technologies for a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a
                href="#publications"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg"
              >
                View Our Publications
              </a>
              <a
                href="#team"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research 