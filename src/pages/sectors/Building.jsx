import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBuilding, FaHome, FaIndustry, FaHospital } from 'react-icons/fa'
import buildingImage from '../../assets/SectorsImages/Building&Structures.jpg'

function Building() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${buildingImage})` }}>
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
              <FaBuilding size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Building & Structures
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Creating sustainable and innovative building solutions
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
              Our Building & Structures services provide comprehensive solutions for the design, analysis, and construction supervision of various building types and structural systems.
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
                  <FaHome className="text-[#FFC607]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Building Design</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Architectural design and planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Structural engineering and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>MEP (Mechanical, Electrical, Plumbing) systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Green building design and LEED certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Seismic design and retrofitting</span>
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
                  <FaIndustry className="text-[#FFC607]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Structure Types</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Commercial and office buildings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Institutional and educational facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Industrial structures and warehouses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Healthcare facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC607] mr-2 mt-1">•</span>
                    <span>Residential complexes and townships</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800 hover:border-[#FFC607] transition-all duration-300 mt-8"
            >
              <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaHospital className="text-[#FFC607]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Our Expertise</h3>
              <p className="text-gray-400 mb-4 text-center">
                Expedient Live brings extensive expertise in building design and structural engineering to every project. Our team of architects and engineers work collaboratively to create buildings that are not only aesthetically pleasing but also structurally sound, energy-efficient, and sustainable.
              </p>
              <p className="text-gray-400 text-center">
                We employ advanced modeling and analysis techniques to optimize structural systems, reduce material usage, and enhance building performance. Our designs prioritize safety, functionality, and sustainability while meeting all applicable codes and standards.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-900 p-3 rounded border border-gray-800 text-center">
                  <p className="text-white">Structural Design</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border border-gray-800 text-center">
                  <p className="text-white">Retrofitting</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border border-gray-800 text-center">
                  <p className="text-white">Sustainability</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border border-gray-800 text-center">
                  <p className="text-white">Construction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Building
