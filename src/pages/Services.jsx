import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { FaRoad, FaArchway, FaBuilding, FaChartLine, FaLeaf, FaWater, FaCity, FaShieldAlt } from 'react-icons/fa'

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
  return (
    <div className="pt-16 overflow-hidden"> {/* Add padding to account for fixed header */}
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80')" }}>
        </div>

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-color opacity-10 rounded-full"
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
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-color opacity-10 rounded-full"
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
          <div className="text-center text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Comprehensive engineering and consultancy services for infrastructure development
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-primary-color opacity-5 rounded-full"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                What We Offer
              </motion.h2>
              <motion.p
                className="text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We provide a wide range of engineering and consultancy services tailored to meet the specific needs of infrastructure development projects. Our team of experts brings together decades of experience to deliver innovative and sustainable solutions.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highway Design */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--primary-color) 1px, transparent 1px)',
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
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-blue-600 mb-4"
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaRoad size={48} />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4">Highway Design</h2>
                <p className="text-gray-600 mb-4">
                  Our highway design services encompass all aspects of road infrastructure development, from conceptualization to detailed engineering design. We specialize in creating safe, efficient, and sustainable road networks that connect communities and facilitate economic growth.
                </p>
                <motion.ul
                  className="text-gray-600 space-y-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >• Geometric design of highways and expressways</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  >• Pavement design and rehabilitation</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  >• Traffic engineering and safety analysis</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    viewport={{ once: true }}
                  >• Drainage design and stormwater management</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    viewport={{ once: true }}
                  >• Intersection and interchange design</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 }}
                    viewport={{ once: true }}
                  >• Road safety audits and assessments</motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Highway Design"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bridge Engineering */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <div className="text-blue-600 mb-4">
                <FaArchway size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Bridge Engineering</h2>
              <p className="text-gray-600 mb-4">
                Our bridge engineering services cover the design, analysis, and rehabilitation of various types of bridges. We combine technical expertise with innovative approaches to create structures that are not only functional but also aesthetically pleasing and environmentally sustainable.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Structural design of bridges and viaducts</li>
                <li>• Bridge inspection and condition assessment</li>
                <li>• Rehabilitation and strengthening of existing bridges</li>
                <li>• Seismic analysis and design</li>
                <li>• Construction supervision and quality control</li>
                <li>• Bridge management systems</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
                alt="Bridge Engineering"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="text-blue-600 mb-4">
                <FaBuilding size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Project Management</h2>
              <p className="text-gray-600 mb-4">
                Our project management services ensure the successful execution of infrastructure projects from inception to completion. We employ proven methodologies and best practices to deliver projects on time, within budget, and to the highest quality standards.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Project planning and scheduling</li>
                <li>• Cost estimation and budgeting</li>
                <li>• Risk management and mitigation</li>
                <li>• Quality assurance and control</li>
                <li>• Contract administration and management</li>
                <li>• Construction supervision and monitoring</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Project Management"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feasibility Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <div className="text-blue-600 mb-4">
                <FaChartLine size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Feasibility Studies</h2>
              <p className="text-gray-600 mb-4">
                Our feasibility studies provide comprehensive analysis of the technical, economic, and environmental viability of infrastructure projects. We help clients make informed decisions by evaluating various alternatives and identifying the most optimal solution.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Technical feasibility assessment</li>
                <li>• Economic and financial analysis</li>
                <li>• Environmental impact assessment</li>
                <li>• Social impact assessment</li>
                <li>• Risk analysis and mitigation strategies</li>
                <li>• Cost-benefit analysis</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Feasibility Studies"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary-color opacity-5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-color opacity-5 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond our core services, we offer specialized expertise in various areas of infrastructure development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<FaLeaf size={48} />}
              title="Environmental Services"
              description="Environmental impact assessments, sustainability planning, and green infrastructure design."
              delay={0.1}
            />

            <ServiceCard
              icon={<FaWater size={48} />}
              title="Water Resources"
              description="Hydraulic design, flood management, and water infrastructure development."
              delay={0.3}
            />

            <ServiceCard
              icon={<FaCity size={48} />}
              title="Urban Planning"
              description="Integrated urban development, smart city solutions, and transportation planning."
              delay={0.5}
            />

            <ServiceCard
              icon={<FaShieldAlt size={48} />}
              title="Safety & Quality"
              description="Safety audits, quality assurance, and compliance with international standards."
              delay={0.7}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

// Service card component with animations
const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <motion.div
        className="text-blue-600 mb-4 flex justify-center"
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
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default Services



