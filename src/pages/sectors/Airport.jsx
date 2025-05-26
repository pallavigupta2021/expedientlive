import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlane } from 'react-icons/fa'

function Airport() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-background-dark text-text-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaPlane size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Airports
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
            className="text-center text-xl text-text-light mx-auto mb-12"
          >
            Our Airport services encompass planning, design, and engineering solutions for airport infrastructure development, from runways and terminals to support facilities.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Airport Planning & Design</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Master planning and feasibility studies</li>
                <li>• Runway and taxiway design</li>
                <li>• Terminal building design</li>
                <li>• Air traffic control facilities</li>
                <li>• Cargo handling facilities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Airport Systems</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Airfield lighting systems</li>
                <li>• Navigation and communication systems</li>
                <li>• Baggage handling systems</li>
                <li>• Security and surveillance systems</li>
                <li>• Fuel storage and distribution</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-card-bg p-6 rounded-lg shadow-md border border-border-color max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Our Approach</h3>
            <p className="text-text-light mb-4">
              Expedient Live approaches airport projects with a comprehensive understanding of the complex requirements and regulations governing aviation infrastructure. We work closely with aviation authorities, airport operators, and other stakeholders to ensure that our designs meet all applicable standards and operational requirements.
            </p>
            <p className="text-text-light">
              Our team brings expertise in both airside and landside facilities, creating integrated solutions that enhance passenger experience, operational efficiency, and safety. We incorporate sustainable design principles to minimize environmental impact and reduce long-term operational costs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Airport
