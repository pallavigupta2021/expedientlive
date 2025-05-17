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





function Achievements() {
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
              Our Achievments
            </motion.h1>
          </div>
        </div>
      </div>
      

     

    
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
            <h2 className="text-3xl font-bold mb-4 text-white">Awards & Achievments</h2>
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

export default Achievements






