import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCity } from 'react-icons/fa'

function UrbanInfrastructure() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-background-dark text-text-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaCity size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Urban Infrastructure
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
            Our Urban Infrastructure services focus on developing sustainable, resilient, and integrated solutions for cities and urban areas to enhance quality of life and support economic growth.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Urban Planning</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Master planning for urban areas</li>
                <li>• Land use planning and zoning</li>
                <li>• Transit-oriented development</li>
                <li>• Urban renewal and redevelopment</li>
                <li>• Smart city planning and implementation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Urban Facilities</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Public spaces and recreational facilities</li>
                <li>• Urban drainage and flood management</li>
                <li>• Street lighting and urban furniture</li>
                <li>• Pedestrian and cycling infrastructure</li>
                <li>• Waste management systems</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-card-bg p-6 rounded-lg shadow-md border border-border-color max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Sustainable Urban Development</h3>
            <p className="text-text-light mb-4">
              At Expedient Live, we are committed to creating sustainable urban environments that balance economic development, social equity, and environmental protection. Our approach integrates innovative technologies and best practices to address the complex challenges facing modern cities.
            </p>
            <p className="text-text-light">
              We work closely with local governments, communities, and other stakeholders to develop context-specific solutions that respond to the unique needs and characteristics of each urban area. Our designs prioritize resilience, inclusivity, and long-term sustainability to create vibrant, livable cities for current and future generations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default UrbanInfrastructure
