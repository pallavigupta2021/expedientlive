import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// Import sector images
import highwayImage from '../assets/SectorsImages/Highways.jpg'
import bridgeImage from '../assets/SectorsImages/Bridges&Flyovers.jpg'
import buildingImage from '../assets/SectorsImages/Building&Structures.jpg'
import airportImage from '../assets/SectorsImages/Airports.jpg'
import urbanImage from '../assets/SectorsImages/Urbannfrastructure.jpg'
import trafficImage from '../assets/SectorsImages/Traffic&TransportationStudies.jpg'
import waterImage from '../assets/SectorsImages/Water-Supply&Sewerage&Sanitation1.jpg'
import geoImage from '../assets/SectorsImages/Geo-technicalInvestigation1.jpg'
import hrImage from '../assets/SectorsImages/HumanResourceDevelopment.jpg'

function Sectors() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-black text-white"> {/* Changed to match website theme */}
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Sectors
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"
            ></motion.div>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Our expertise across various infrastructure sectors
            </motion.p> */}
          </div>
        </div>
      </div>


 {/* Projects Section */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center ">
            {/* <span className="text-[#FFC607] font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">Our Portfolio</span> */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white"
            >
              Our Sectors
            </motion.h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300 mx-auto"
            >
             Our expertise across various infrastructure sectors
            </motion.p>
          </div>
          </div>
          </section>


      {/* Sectors Grid */}
      <section className="pb-16  px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {/* Highways & Rural Roads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/highway-rural-roads" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={highwayImage}
                      alt="Highways & Rural Roads"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Highways & Rural Roads
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Comprehensive highway and rural road development projects including design, construction supervision, and quality assurance for sustainable transportation infrastructure.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Bridges/ROBs/Flyovers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/bridge" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={bridgeImage}
                      alt="Bridges/ROBs/Flyovers"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Bridges/ROBs/Flyovers
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Expert design and construction supervision of bridges, railway over bridges (ROBs), and flyovers ensuring structural integrity and safety standards.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Human Resource Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/human-resource" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={hrImage}
                      alt="Human Resource Development"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Human Resource Development
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Professional training and capacity building programs for engineering professionals to enhance technical skills and project management capabilities.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Buildings & Structures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/building-structures" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={buildingImage}
                      alt="Buildings & Structures"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Buildings & Structures
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Comprehensive building design and structural engineering services for residential, commercial, and industrial projects with focus on safety and sustainability.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Airports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/airports" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={airportImage}
                      alt="Airports"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Airports
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Airport infrastructure development including runway design, terminal buildings, and aviation facility planning with international standards compliance.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Urban Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/urban-infrastructure" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={urbanImage}
                      alt="Urban Infrastructure"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Urban Infrastructure
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Smart city development and urban planning solutions including utilities, transportation networks, and sustainable infrastructure systems.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Traffic & Transportation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/traffic-transportation" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={trafficImage}
                      alt="Traffic & Transportation"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Traffic & Transportation
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Traffic engineering and transportation planning services including traffic impact studies, signal design, and intelligent transportation systems.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Water Supply & Sewerage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/water-sewerage" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={waterImage}
                      alt="Water Supply & Sewerage"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Water Supply & Sewerage
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Water infrastructure development including water treatment plants, distribution networks, sewerage systems, and wastewater management solutions.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Geo-technical Investigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/geotechnical" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={geoImage}
                      alt="Geo-technical Investigation"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Geo-technical Investigation
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Comprehensive soil investigation, foundation design, and geotechnical analysis services for safe and economical construction projects.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Quality Control & Material Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="group cursor-pointer"
            >
              <Link to="/sectors/quality-control" className="block">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                      alt="Quality Control & Material Testing"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFC607]">
                      Quality Control & Material Testing
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Advanced material testing and quality control services ensuring compliance with industry standards and project specifications for construction excellence.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Sectors
