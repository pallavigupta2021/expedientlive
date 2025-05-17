import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBuilding } from 'react-icons/fa'

function TunnelServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-background-dark text-text-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaBuilding size={60} className="text-accent-color" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Tunnel Engineering
            </motion.h1>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-xl text-text-light max-w-3xl mx-auto mb-12"
          >
            Our tunnel engineering services provide comprehensive solutions for underground infrastructure projects, including design, analysis, and construction supervision.
          </motion.p>

          <div className="text-center">
            <p className="text-accent-color">Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TunnelServices