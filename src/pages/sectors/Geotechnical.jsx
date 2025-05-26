import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMountain } from 'react-icons/fa'

function Geotechnical() {
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
              <FaMountain size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Geo-technical Investigation
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
            Our Geo-technical Investigation services provide comprehensive assessment and analysis of subsurface conditions to support the safe and efficient design and construction of infrastructure projects.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Field Investigations</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Soil boring and sampling</li>
                <li>• Standard Penetration Tests (SPT)</li>
                <li>• Cone Penetration Tests (CPT)</li>
                <li>• Groundwater monitoring</li>
                <li>• In-situ testing and instrumentation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Laboratory Testing</h3>
              <ul className="space-y-2 text-text-light">
                <li>• Soil classification and index properties</li>
                <li>• Strength testing (triaxial, direct shear)</li>
                <li>• Consolidation and compaction testing</li>
                <li>• Chemical analysis of soil and groundwater</li>
                <li>• Rock mechanics testing</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-card-bg p-6 rounded-lg shadow-md border border-border-color max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Geotechnical Analysis and Design</h3>
            <p className="text-text-light mb-4">
              Expedient Live provides comprehensive geotechnical analysis and design services to address a wide range of engineering challenges. Our team of experienced geotechnical engineers uses advanced analytical methods and software to develop safe, cost-effective foundation solutions and earth retention systems.
            </p>
            <p className="text-text-light">
              We prepare detailed geotechnical reports that include site characterization, engineering analyses, and specific recommendations for foundation design, slope stability, earth retention, ground improvement, and construction considerations. Our goal is to identify and mitigate geotechnical risks early in the project lifecycle to avoid costly delays and design changes during construction.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Geotechnical
