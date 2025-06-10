const News = () => {
  const newsItems = [
    {
      title: "Research Paper Accepted at NeurIPS 2024",
      content: "Our latest work on efficient neural architectures has been accepted at NeurIPS 2024.",
      date: "2024-01-15",
      category: "publication"
    },
    {
      title: "Dr. Johnson Receives Excellence in AI Research Award",
      content: "Dr. Sarah Johnson has been recognized for her outstanding contributions to deep learning research.",
      date: "2024-01-10",
      category: "award"
    },
    {
      title: "New Collaboration with Tech Industry Partners",
      content: "We are excited to announce new partnerships with leading technology companies.",
      date: "2024-01-05",
      category: "event"
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

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm capitalize">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News 