import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaRoad } from 'react-icons/fa'

function RoadServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-background-dark text-text-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaRoad className="text-white text-5xl" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-2"
            >
              Highway Development
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-1 w-20 bg-accent-color mx-auto"></div>
            </motion.div>
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
            Our highway development services cover all aspects of road infrastructure, from planning and design to construction supervision and maintenance.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent-color">Design Services</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Geometric design of highways and expressways</li>
                <li>• Pavement design and rehabilitation</li>
                <li>• Traffic engineering and safety analysis</li>
                <li>• Drainage design and stormwater management</li>
                <li>• Intersection and interchange design</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card-bg p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent-color">Construction Services</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Construction supervision and management</li>
                <li>• Quality assurance and control</li>
                <li>• Schedule and cost monitoring</li>
                <li>• Environmental compliance</li>
                <li>• Safety management</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card-bg p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4 text-accent-color text-center">Our Approach</h3>
            <p className="text-text-light mb-4">
              We take a comprehensive approach to highway development, considering all aspects of the project lifecycle. Our team of experienced engineers and consultants work closely with clients to understand their specific needs and deliver tailored solutions that meet the highest standards of quality, safety, and sustainability.
            </p>
            <p className="text-text-light">
              From initial feasibility studies to detailed design and construction supervision, we provide end-to-end services that ensure successful project delivery. Our expertise in modern design techniques, innovative construction methods, and advanced project management tools enables us to handle complex highway projects efficiently and effectively.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RoadServices
