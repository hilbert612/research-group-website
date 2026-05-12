import { Info } from 'lucide-react'

const Notice = () => {
  return (
    <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-b border-blue-200">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border-2 border-blue-300 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 flex items-center">
            <Info className="text-white mr-3 flex-shrink-0" size={24} />
            <h2 className="text-white text-lg md:text-xl font-bold tracking-wide">
              声明
            </h2>
          </div>
          <div className="px-6 py-5 md:px-8 md:py-6">
            <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
              <p>
                近期，有人多次通过邮件向我的朋友、同事及同行散布关于我本人及课题组的不实信息，涉嫌恶意造谣和诽谤。经核实，此事涉及其他课题组个别人员，相关导师已知悉情况，并会作出相应的批评和处理。具体情况也已向学校进行了汇报。
              </p>
              <p>
                对于相关造谣、诽谤行为，我们保留依法追究责任的权利，并将坚决维护本人及课题组的合法权益。
              </p>
              <p>
                感谢一直以来信任、理解和支持我的朋友、同事及同行，也感谢大家在此事中的理性判断与支持。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notice
