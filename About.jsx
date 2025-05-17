import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { FaAward, FaUsers, FaHistory, FaLightbulb } from 'react-icons/fa'

// Team member component with animations
const TeamMember = ({ image, name, title, description, delay = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Truncate description if not expanded
  const shortDescription = description.length > 100 
    ? description.substring(0, 100) + "..." 
    : description;
  
  return (
    <motion.div
      className="bg-card-bg rounded-lg overflow-hidden shadow-md text-center border border-border-color"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
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
        <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
        <p className="text-accent-color font-medium mb-3">{title}</p>
        <p className="text-text-light text-sm">{expanded ? description : shortDescription}</p>
        {description.length > 100 && (
          <button 
            onClick={toggleExpand}
            className="text-primary-color hover:text-accent-color mt-2 text-sm font-medium transition-colors"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        )}
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
    <div className="pt-16 overflow-hidden bg-background-dark text-text-dark"> {/* Add padding to account for fixed header */}
      {/* Hero Section */}
      <div className="relative h-[400px] bg-black">
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
      <section className="py-16 relative bg-background-dark">
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
                  className="rounded-lg shadow-lg w-full border border-border-color"
                />
              </motion.div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-white">Our Story</h2>
                  <p className="text-text-light mb-4">
                    Established in 2018, Expedient Live Research and Consultancy Private Limited (CIN: U74999UP2018PTC105630) has grown to become a leading consultancy firm specializing in infrastructure development projects. What started as a small team of dedicated professionals has now evolved into a comprehensive consultancy with expertise across various domains of civil engineering and infrastructure development.
                  </p>
                  <p className="text-text-light mb-6">
                    Based in Uttar Pradesh, our team of experienced engineers and professionals has successfully completed numerous projects across the country, earning a reputation for excellence, reliability, and innovation. Our commitment to quality and client satisfaction has been the cornerstone of our growth and success.
                  </p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--accent-color) 1px, transparent 1px)',
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
            <h2 className="text-3xl font-bold mb-4 text-white">Mission & Vision</h2>
            <p className="text-text-light  mx-auto">Guided by our core values, we strive to deliver excellence in every project we undertake.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card-bg p-8 rounded-lg shadow-md border border-border-color"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div
                className="text-primary-color mb-4 flex justify-center"
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
              <h3 className="text-xl font-bold mb-4 text-center text-white">Our Mission</h3>
              <p className="text-text-light">
                To provide innovative, sustainable, and cost-effective construction and consultancy solutions that meet the highest standards of quality and safety. We are committed to delivering projects that contribute to the development of infrastructure and improve the quality of life for communities across India.
              </p>
            </motion.div>

            <motion.div
              className="bg-card-bg p-8 rounded-lg shadow-md border border-border-color"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
              }}
            >
              <motion.div
                className="text-accent-color mb-4 flex justify-center"
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
              <h3 className="text-xl font-bold mb-4 text-center text-white">Our Vision</h3>
              <p className="text-text-light">
                To be recognized as a leading research and consultancy firm in India's construction sector, known for our technical expertise, innovative solutions, and commitment to sustainability. We aim to expand our footprint across the country while maintaining our core values of integrity, excellence, and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 relative bg-background-dark">
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
            <h2 className="text-3xl font-bold mb-4 text-white">Our Leadership</h2>
            <p className="text-text-light  mx-auto">Meet the team of experienced professionals who lead our company towards excellence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              name="Shilpy Gupta"
              title="Non-Executive Director"
              description="Mrs. Shilpy holds a Bachelor’s degree in Home Science and a double Master’s degree with a specialization in English. While she is not actively involved in the day-to-day operations of the company, she plays a supportive role as a Non-Executive Director."
              delay={0.1}
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              name="Akash Gupta"
              title="Director"
              description="Akash oversees our operations with a focus on efficiency, quality, and client satisfaction across all our projects in Uttar Pradesh."
              delay={0.2}
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              name="Rajesh Patel"
              title="Technical Director"
              description="Rajesh brings technical innovation and engineering excellence to all our construction and consultancy projects."
              delay={0.3}
            />

            <TeamMember
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              name="Sunita Verma"
              title="Finance Director"
              description="Sunita ensures our financial stability and growth through strategic planning and management in the competitive Indian market."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-black relative overflow-hidden">
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
            <h2 className="text-3xl font-bold mb-4 text-white">Awards & Recognition</h2>
            <p className="text-text-light mx-auto">Our commitment to excellence has been recognized through various awards and accolades.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AwardCard
              title="Excellence in Construction Consultancy"
              description="Awarded by the Uttar Pradesh Construction Association for our innovative approach to infrastructure projects."
              year="2022"
              delay={0.1}
            />

            <AwardCard
              title="Best Research & Development"
              description="Recognized for our research contributions to construction methodologies and materials in Northern India."
              year="2021"
              delay={0.3}
            />

            <AwardCard
              title="Sustainable Construction Award"
              description="Honored for our commitment to environmental sustainability in construction and infrastructure development."
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
      className="bg-card-bg p-6 rounded-lg shadow-md text-center border border-border-color"
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
        className="text-primary-color mb-4 flex justify-center"
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
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-text-light">{description}</p>
      <motion.p
        className="text-accent-color font-medium mt-2"
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






