import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { FaAward, FaUsers, FaHistory, FaLightbulb } from 'react-icons/fa'

// Team member component with animations
const TeamMember = ({ image, name, title, description, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{title}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </motion.div>
    </motion.div>
  )
}

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

function About() {
  return (
    <div className="pt-16 overflow-hidden"> {/* Add padding to account for fixed header */}
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
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
              About Us
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Building the infrastructure of tomorrow with innovation and excellence
            </motion.p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/2 left-0 w-64 h-64 bg-primary-color opacity-5 rounded-full"
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

        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-color opacity-5 rounded-full"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="About Our Company"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    Established in 2005, our company has grown to become a leading engineering consultancy firm specializing in infrastructure development projects. What started as a small team of dedicated engineers has now evolved into a comprehensive consultancy with expertise across various domains of civil engineering and infrastructure development.
                  </p>
                  <p className="text-gray-600 mb-6">
                    With a team of experienced engineers and professionals, we have successfully completed numerous projects across the country, earning a reputation for excellence, reliability, and innovation. Our commitment to quality and client satisfaction has been the cornerstone of our growth and success.
                  </p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
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
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Guided by our core values, we strive to deliver excellence in every project we undertake.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                  ease: "easeInOut"
                }}
              >
                <FaLightbulb size={48} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative, sustainable, and cost-effective engineering solutions that meet the highest standards of quality and safety. We are committed to delivering projects that contribute to the development of infrastructure and improve the quality of life for communities.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div
                className="text-blue-600 mb-4 flex justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FaHistory size={48} />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a global leader in infrastructure consultancy, known for our technical expertise, innovative solutions, and commitment to sustainability. We aim to expand our footprint across regions while maintaining our core values of integrity, excellence, and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-72 h-72 bg-primary-color opacity-5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
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
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Meet the team of experienced professionals who lead our company towards excellence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              name="John Smith"
              title="Chief Executive Officer"
              description="With over 25 years of experience in infrastructure development, John leads our company with vision and expertise."
              delay={0.1}
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
              name="Sarah Johnson"
              title="Chief Operations Officer"
              description="Sarah oversees our operations with a focus on efficiency, quality, and client satisfaction."
              delay={0.2}
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              name="Michael Chen"
              title="Chief Technical Officer"
              description="Michael brings technical innovation and engineering excellence to all our projects."
              delay={0.3}
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              name="Emily Rodriguez"
              title="Chief Financial Officer"
              description="Emily ensures our financial stability and growth through strategic planning and management."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-color opacity-5 rounded-full"
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

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our commitment to excellence has been recognized through various awards and accolades.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AwardCard
              title="Excellence in Engineering"
              description="Awarded by the National Association of Engineering Consultants for our innovative approach to highway design."
              year="2022"
              delay={0.1}
            />

            <AwardCard
              title="Best Infrastructure Project"
              description="Recognized for the successful completion of the National Highway Development Project."
              year="2021"
              delay={0.3}
            />

            <AwardCard
              title="Sustainable Design Award"
              description="Honored for our commitment to environmental sustainability in infrastructure development."
              year="2020"
              delay={0.5}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

// Award card component with animations
const AwardCard = ({ title, description, year, delay = 0 }) => {
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
          rotateY: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut"
        }}
      >
        <FaAward size={48} />
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <motion.p
        className="text-blue-600 font-medium mt-2"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      >
        {year}
      </motion.p>
    </motion.div>
  )
}

export default About
