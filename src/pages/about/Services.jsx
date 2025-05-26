import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import {
  FaSearch,
  FaFileContract,
  FaUserGraduate,
  FaChartLine,
  FaProjectDiagram,
  FaDraftingCompass,
  FaCheckCircle,
  FaShieldAlt,
  FaClipboardCheck,
  FaSearchDollar,
  FaHardHat
} from 'react-icons/fa'

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

function Services() {
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

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FFC607] opacity-10 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FFC607] opacity-10 rounded-full"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Our Services
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Comprehensive engineering and consultancy services for infrastructure development
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
              At Expedient Live Research and Consultancy, we offer a comprehensive range of specialized services designed to meet the diverse needs of infrastructure and construction projects. Our team of experts brings decades of combined experience to deliver exceptional results across all phases of project development.
            </motion.p>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Specialized Services</h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 mx-auto">
              We provide a wide range of services tailored to meet the specific needs of each project, ensuring successful outcomes through our expertise and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <ServiceCard
              icon={<FaSearch size={40} className="text-[#FFC607]" />}
              title="Survey & Investigation Works"
              description="Comprehensive site surveys, topographic mapping, and detailed investigations to establish baseline data for infrastructure projects."
              delay={0.1}
            />

            {/* Service 2 */}
            <ServiceCard
              icon={<FaFileContract size={40} className="text-[#FFC607]" />}
              title="Settlement of Claims"
              description="Expert analysis and resolution of contractual claims, ensuring fair and timely settlements for all project stakeholders."
              delay={0.2}
            />

            {/* Service 3 */}
            <ServiceCard
              icon={<FaUserGraduate size={40} className="text-[#FFC607]" />}
              title="Reformation and Training"
              description="Specialized training programs and process improvement initiatives to enhance organizational capabilities and project outcomes."
              delay={0.3}
            />

            {/* Service 4 */}
            <ServiceCard
              icon={<FaChartLine size={40} className="text-[#FFC607]" />}
              title="Techno-Economic Feasibility"
              description="Comprehensive analysis of technical viability and economic sustainability of infrastructure projects to support investment decisions."
              delay={0.4}
            />

            {/* Service 5 */}
            <ServiceCard
              icon={<FaProjectDiagram size={40} className="text-[#FFC607]" />}
              title="Project Management Consultancy"
              description="End-to-end project management consultancy ensuring on-time, within-budget delivery with the highest quality standards."
              delay={0.5}
            />

            {/* Service 6 */}
            <ServiceCard
              icon={<FaDraftingCompass size={40} className="text-[#FFC607]" />}
              title="Detailed Project Engineering"
              description="Comprehensive engineering design services covering all aspects of infrastructure projects from concept to construction drawings."
              delay={0.6}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 7 */}
            <ServiceCard
              icon={<FaCheckCircle size={40} className="text-[#FFC607]" />}
              title="Quality Assurance"
              description="Rigorous quality control processes and methodologies to ensure all deliverables meet or exceed industry standards and client expectations."
              delay={0.7}
            />

            {/* Service 8 */}
            <ServiceCard
              icon={<FaShieldAlt size={40} className="text-[#FFC607]" />}
              title="Safety Audit"
              description="Comprehensive safety assessments and audits to identify potential hazards and ensure compliance with safety regulations and standards."
              delay={0.8}
            />

            {/* Service 9 */}
            <ServiceCard
              icon={<FaClipboardCheck size={40} className="text-[#FFC607]" />}
              title="Quality Audit"
              description="Independent quality audits to verify compliance with quality management systems and identify opportunities for continuous improvement."
              delay={0.9}
            />

            {/* Service 10 */}
            <ServiceCard
              icon={<FaSearchDollar size={40} className="text-[#FFC607]" />}
              title="Feasibility Studies"
              description="Detailed feasibility assessments covering technical, financial, environmental, and social aspects to support informed decision-making."
              delay={1.0}
              className="lg:col-end-2"
            />

            {/* Service 11 */}
            <ServiceCard
              icon={<FaHardHat size={40} className="text-[#FFC607]" />}
              title="Construction Supervision"
              description="Expert on-site supervision to ensure construction works are executed according to design specifications, quality standards, and project timelines."
              delay={1.1}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Services</h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300  mx-auto">
              Our commitment to excellence, innovation, and client satisfaction sets us apart in the infrastructure consultancy industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Our Expertise</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Team of highly qualified engineers and specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Extensive experience across diverse infrastructure projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>In-depth knowledge of industry standards and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Cutting-edge technologies and methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Proven track record of successful project delivery</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Our Approach</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Client-centric focus with tailored solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Commitment to quality and excellence in every project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Transparent communication and collaborative partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Innovative problem-solving and value engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Sustainable and environmentally responsible practices</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Service card component with animations
const ServiceCard = ({ icon, title, description, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={`bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 hover:border-[#FFC607] transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
      }}
    >
      <motion.div
        className="mb-4 flex justify-center"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-white text-center">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </motion.div>
  )
}

export default Services




