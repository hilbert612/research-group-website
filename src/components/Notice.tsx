import { AlertTriangle } from 'lucide-react'

const Notice = () => {
  return (
    <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 border-b border-red-200">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border-2 border-red-400 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 flex items-center">
            <AlertTriangle className="text-white mr-3 flex-shrink-0" size={24} />
            <h2 className="text-white text-lg md:text-xl font-bold tracking-wide">
              严正声明
            </h2>
          </div>
          <div className="px-6 py-5 md:px-8 md:py-6">
            <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
              <p>
                近期，有人恶意散布关于我和课题组的不实言论，已严重影响我及相关成员的正常工作与生活。
              </p>
              <p>
                案件已报案，律师正配合警方调查。<span className="font-semibold">我们将依法维权，追究造谣者法律责任。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notice
