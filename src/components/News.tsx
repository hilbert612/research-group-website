const News = () => {
  const newsItems = [
    {
      title: "Academic Milestone Celebration",
      content: "Congratulations to Dr. Sun Xianglang for obtaining an associate professor position at Huazhong University of Science and Technology, and congratulations to Zhang Chunlei for receiving his doctoral degree - celebration dinner.",
      date: "2025-05-15",
      category: "Event",
      image: "/images/news/zhangchunlei.jpg" // Placeholder image path
    },
    {
      title: "Gold Medal at the 50th International Exhibition of Inventions Geneva",
      content: "Congratulations to Professor Zhu Zonglong's team for winning the gold award at the 50th Geneva International Invention Exhibition.",
      date: "2025-04-15",
      category: "award",
      image: "/images/news/geneva50.jpg" // Placeholder image path
    },
    {
      title: "Triple Academic Achievement Celebration",
      content: "Congratulations to Dr. Li Bo for obtaining a professor position at Central South University, and congratulations to Gao Danpeng and Li Xintong for receiving their doctoral degrees - celebration dinner.",
      date: "2025-01-20",
      category: "event",
      image: "/images/news/liboprofessor.jpg" // Placeholder image path
    }
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our recent achievements and announcements
          </p>
        </div>

        <div className="space-y-12">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 relative">
                <div className="w-full h-full overflow-hidden rounded-xl shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ 
                      backgroundImage: `url(${item.image})`,
                      backgroundColor: '#f3f4f6' // Fallback color if image fails to load
                    }}
                  >
                    {/* Fallback for missing images */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-lg">{!item.image && 'News Image'}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 bg-gray-50 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News 