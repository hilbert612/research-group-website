import { 
  SolarPanelIcon, 
  AIChipIcon, 
  MolecularIcon, 
  EnergyStorageIcon, 
  PerovskiteIcon, 
  LabEquipmentIcon, 
  NeuralNetworkIcon, 
  InterfaceIcon 
} from './icons/CustomIcons'

const IconShowcase = () => {
  const icons = [
    { component: SolarPanelIcon, name: 'Solar Panel', description: 'Perovskite solar cells' },
    { component: AIChipIcon, name: 'AI Chip', description: 'Artificial intelligence' },
    { component: MolecularIcon, name: 'Molecular', description: 'Materials structure' },
    { component: EnergyStorageIcon, name: 'Energy Storage', description: 'Battery systems' },
    { component: PerovskiteIcon, name: 'Perovskite', description: 'Crystal structure' },
    { component: LabEquipmentIcon, name: 'Lab Equipment', description: 'Research tools' },
    { component: NeuralNetworkIcon, name: 'Neural Network', description: 'Machine learning' },
    { component: InterfaceIcon, name: 'Interface', description: 'Engineering layers' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Research Icons Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Custom designed icons representing our core research areas in materials science and clean energy
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {icons.map((icon, index) => {
            const IconComponent = icon.component
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200 text-center"
              >
                <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-xl mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{icon.name}</h3>
                <p className="text-sm text-gray-600">{icon.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            These icons are specifically designed to represent the cutting-edge research in perovskite solar cells, 
            AI-driven materials design, energy storage systems, and interface engineering conducted at AIMCE Lab.
          </p>
        </div>
      </div>
    </section>
  )
}

export default IconShowcase 