import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            CONTACT
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our research group is located at the Department of Chemistry, City University of Hong Kong, in the vibrant heart of Hong Kong.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our full address is:</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Department of Chemistry</p>
                  <p>City University of Hong Kong</p>
                  <p>83 Tat Chee Avenue, Kowloon Tong</p>
                  <p>Hong Kong SAR</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>zonglzhu@cityu.edu.hk</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span>+852 3442-0522</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:zonglzhu@cityu.edu.hk"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  zonglzhu@cityu.edu.hk
                </a>
                <a
                  href="https://maps.google.com/?q=City+University+of+Hong+Kong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Address
                </a>
              </div>
              
              {/* Academic Profile Link */}
              <a
                href="https://www.cityu.edu.hk/chem/people/academic-staff/ZZHU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Academic Profile
              </a>
            </div>
          </div>

          {/* Right side - Images */}
          <div className="space-y-6">
            {/* Building Exterior Image */}
            <div className="relative">
              <img
                src="/images/contact/building-exterior.jpg"
                alt="City University of Hong Kong Building"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-medium">
                City University of Hong Kong
              </div>
            </div>

            {/* Campus Overview Image */}
            <div className="relative">
              <img
                src="/images/contact/campus-overview.jpg"
                alt="Hong Kong City Overview"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-medium">
                Hong Kong City Overview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 