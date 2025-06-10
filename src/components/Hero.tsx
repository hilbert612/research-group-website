import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Intelligent Chemistry and Advanced Materials
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
              for Renewable Energy
            </span>
          </h1>
          
                      <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are pioneering the integration of artificial intelligence with advanced materials science 
            to revolutionize renewable energy technologies, focusing on perovskite solar cells and 
            intelligent energy storage systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#research"
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg"
            >
              Explore Perovskite Research
            </a>
            <a
              href="#publications"
              className="border-2 border-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-border text-transparent bg-clip-text px-8 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-200"
              style={{
                borderImage: 'linear-gradient(to right, #2563eb, #059669) 1'
              }}
            >
              View Energy Materials
            </a>
          </div>
          
          <div className="mt-16">
            <a href="#about" className="inline-flex items-center text-gray-500 hover:text-green-600 transition-colors duration-200">
              <span className="mr-2">Discover ICARE Lab</span>
              <ArrowDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 