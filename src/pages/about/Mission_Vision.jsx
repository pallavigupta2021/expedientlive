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





function MissionVision() {
  return (
    <div className="pt-16 overflow-hidden bg-background-dark text-text-dark"> {/* Add padding to account for fixed header */}
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaUsers size={60} className="text-accent-color" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Our Mission & Vision
            </motion.h1>
          </div>
        </div>
      </div>
      
    
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


     

     
    </div>
  )
}


export default MissionVision;






