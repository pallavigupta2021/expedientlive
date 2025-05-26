import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { FaAward, FaUsers, FaHistory, FaLightbulb, FaBuilding, FaRoad, FaBullseye, FaHandshake } from 'react-icons/fa'

// Animated section component
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
            ease: "easeOut"
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

function MissionVision() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaBullseye size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Mission & Vision
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-300"
            >
              Building the future of infrastructure with purpose and excellence
            </motion.p> */}
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              At Expedient Live Research and Consultancy, we are driven by a clear mission and vision that guide our work in the construction and infrastructure sector. Our purpose goes beyond building structures – we aim to create lasting impact through excellence in engineering consultancy.
            </motion.p>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #FFC607 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                borderColor: "#FFC607"
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-4">
                  <FaLightbulb size={30} className="text-[#FFC607]" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                To provide innovative, sustainable, and cost-effective infrastructure consultancy solutions that meet the highest standards of quality and safety. We are committed to participating in the infrastructure development of the Nation by providing professional engineering consultancy services that improve the quality of life for communities across India.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="text-[#FFC607] mr-3 mt-1">
                    <FaBuilding size={18} />
                  </div>
                  <p className="text-gray-400 text-sm">Deliver excellence in infrastructure development</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#FFC607] mr-3 mt-1">
                    <FaUsers size={18} />
                  </div>
                  <p className="text-gray-400 text-sm">Improve quality of life for communities</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#FFC607] mr-3 mt-1">
                    <FaRoad size={18} />
                  </div>
                  <p className="text-gray-400 text-sm">Create sustainable infrastructure solutions</p>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#FFC607] mr-3 mt-1">
                    <FaHandshake size={18} />
                  </div>
                  <p className="text-gray-400 text-sm">Foster collaborative partnerships</p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                borderColor: "#FFC607"
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-4">
                  <FaHistory size={30} className="text-[#FFC607]" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                To be the leading civil engineering consultancy in India, recognized for our technical expertise, innovative solutions, and unwavering commitment to quality. We aspire to set new standards in the industry through our dedication to excellence, integrity, and sustainable development.
              </p>
              
              <div className="bg-black/30 p-6 rounded-lg border border-gray-700 mt-8">
                <h3 className="text-xl font-bold text-[#FFC607] mb-4 text-center">"Our Vision Statement"</h3>
                <p className="text-white text-center italic">
                  "To be the leading civil consultant by providing high quality service, cost leadership, uncompromising integrity, timely delivery, pride and ownership."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Strategic Objectives</h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 mx-auto">
              Our mission and vision are supported by clear strategic objectives that guide our operations and growth in the construction and infrastructure sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaAward size={24} className="text-[#FFC607]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 text-center">Technical Excellence</h3>
              <p className="text-gray-400 text-center text-sm">
                Continuously enhance our technical capabilities and stay at the forefront of engineering innovations in the construction industry.
              </p>
            </motion.div>

         
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaUsers size={24} className="text-[#FFC607]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 text-center">Client Satisfaction</h3>
              <p className="text-gray-400 text-center text-sm">
                Exceed client expectations through responsive service, timely delivery, and solutions that address their specific infrastructure needs.
              </p>
            </motion.div>

            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaBuilding size={24} className="text-[#FFC607]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 text-center">Sustainable Growth</h3>
              <p className="text-gray-400 text-center text-sm">
                Expand our presence across India while maintaining our commitment to quality, integrity, and sustainable infrastructure development.
              </p>
            </motion.div>

          
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaHandshake size={24} className="text-[#FFC607]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 text-center">Community Impact</h3>
              <p className="text-gray-400 text-center text-sm">
                Create positive social impact through infrastructure projects that improve quality of life, enhance safety, and support economic development.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default MissionVision;
