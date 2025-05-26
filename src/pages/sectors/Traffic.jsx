import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTrafficLight } from 'react-icons/fa'

function Traffic() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-background-dark text-text-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaTrafficLight size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Traffic and Transportation
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
            className="text-center text-xl text-text-light  mx-auto mb-12"
          >
            Our Traffic and Transportation services provide comprehensive solutions for planning, designing, and managing transportation systems that are safe, efficient, and sustainable.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Traffic Engineering</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Traffic impact studies and analysis</li>
                <li>• Traffic signal design and optimization</li>
                <li>• Intersection design and improvement</li>
                <li>• Traffic calming measures</li>
                <li>• Road safety audits and improvements</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Transportation Planning</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Transportation master plans</li>
                <li>• Public transit planning and design</li>
                <li>• Multi-modal transportation systems</li>
                <li>• Travel demand forecasting</li>
                <li>• Transportation policy development</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-card-bg p-6 rounded-lg shadow-md border border-border-color max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Intelligent Transportation Systems</h3>
            <p className="text-text-light mb-4">
              Expedient Live specializes in the implementation of Intelligent Transportation Systems (ITS) that leverage advanced technologies to improve the safety, efficiency, and sustainability of transportation networks. Our ITS solutions include traffic management systems, traveler information systems, and advanced public transportation systems.
            </p>
            <p className="text-text-light">
              We employ state-of-the-art traffic modeling and simulation tools to analyze complex transportation problems and develop effective solutions. Our team works closely with government agencies, municipalities, and private developers to create transportation systems that meet the needs of all users while minimizing environmental impacts.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Traffic
