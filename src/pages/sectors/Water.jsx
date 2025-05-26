import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWater, FaTint, FaToilet, FaRecycle } from 'react-icons/fa'
import waterImage1 from '../../assets/SectorsImages/Water-Supply&Sewerage&Sanitation1.jpg'
import waterImage2 from '../../assets/SectorsImages/WaterSupply&Sewerage&Sanitation2.jpg'

function Water() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${waterImage1})` }}>
        </div>

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaWater size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Water Supply & Sewerage
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Sustainable water management solutions for communities
            </motion.p> */}
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-xl text-gray-300 mb-12"
            >
              Our Water Supply & Sewerage services provide comprehensive solutions for the planning, design, and management of water infrastructure systems to ensure clean water supply and effective wastewater management.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black p-6 rounded-lg shadow-md border border-gray-800 hover:border-[#FFC607] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4">
                  <FaTint className="text-[#FFC607]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Water Supply Systems</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Water resource assessment and planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Water treatment plant design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Water distribution network design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Pumping stations and storage facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Water quality monitoring systems</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black p-6 rounded-lg shadow-md border border-gray-800 hover:border-[#FFC607] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4">
                  <FaToilet className="text-[#FFC607]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sewerage Systems</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Sewage collection network design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Sewage treatment plant design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Sewage pumping stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Sludge management and disposal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Effluent reuse and recycling systems</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-black p-6 rounded-lg shadow-md border border-gray-800 hover:border-[#FFC607] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4">
                  <FaRecycle className="text-[#FFC607]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Sustainable Water Management</h3>
                <p className="text-gray-400 mb-4">
                  Expedient Live is committed to developing sustainable water management solutions that address the growing challenges of water scarcity, pollution, and climate change.
                </p>
                <p className="text-gray-400">
                  Our approach integrates innovative technologies and best practices to optimize water use, minimize waste, and protect water resources.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 h-full"
              >
                <img
                  src={waterImage2}
                  alt="Water Treatment Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Water Treatment Solutions</h3>
                  <p className="text-gray-300">
                    We design and implement advanced water treatment solutions for municipalities and industries, ensuring clean and safe water for communities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Water
