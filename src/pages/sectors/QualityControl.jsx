import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaClipboardCheck } from 'react-icons/fa'

function QualityControl() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-background-dark text-text-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaClipboardCheck size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Quality Control & Material Testing
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
            Our Quality Control & Material Testing services ensure that construction materials and workmanship meet specified standards and requirements, contributing to the safety, durability, and performance of infrastructure projects.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Material Testing</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Concrete testing (slump, air content, strength)</li>
                <li>• Soil compaction and density testing</li>
                <li>• Asphalt testing and mix design</li>
                <li>• Aggregate testing and gradation</li>
                <li>• Steel and reinforcement testing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Quality Control Services</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Construction quality assurance</li>
                <li>• Quality control plan development</li>
                <li>• Field inspection and monitoring</li>
                <li>• Non-destructive testing</li>
                <li>• Compliance verification and reporting</li>
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
              Expedient Live employs a proactive approach to quality control, focusing on prevention rather than detection of defects. Our team of qualified technicians and engineers works closely with project stakeholders to establish clear quality requirements, implement effective control measures, and provide timely feedback on construction quality.
            </p>
            <p className="text-text-light">
              We utilize state-of-the-art testing equipment and follow standardized procedures to ensure accurate and reliable results. Our comprehensive documentation and reporting systems provide clients with clear, detailed information on material properties and construction quality, supporting informed decision-making and regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default QualityControl
