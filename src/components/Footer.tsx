const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">CARE Lab</h3>
            <p className="text-gray-300 mb-4">
              Chemistry and Artificial Intelligence for Renewable Energy Lab - Pioneering the future of sustainable energy technologies
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 CARE Lab. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#research" className="text-gray-300 hover:text-white transition-colors">Research</a></li>
              <li><a href="#publications" className="text-gray-300 hover:text-white transition-colors">Publications</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>zonglzhu@cityu.edu.hk</li>
              <li>+852 3442-0522</li>
              <li>Department of Chemistry</li>
              <li>City University of Hong Kong</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 