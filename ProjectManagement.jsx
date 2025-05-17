import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaChartLine } from 'react-icons/fa'

function ProjectManagement() {
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
              <FaChartLine size={60} className="text-accent-color" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Project Management
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
            Our project management services ensure the successful execution of infrastructure projects from inception to completion. We employ proven methodologies and best practices to deliver projects on time, within budget, and to the highest quality standards.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color">
              <h3 className="text-xl font-bold mb-4 text-text-dark">Planning & Scheduling</h3>
              <p className="text-text-light">
                Comprehensive project planning and scheduling services to ensure efficient resource allocation and timely project delivery.
              </p>
            </div>
            
            <div className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color">
              <h3 className="text-xl font-bold mb-4 text-text-dark">Cost Management</h3>
              <p className="text-text-light">
                Detailed cost estimation, budgeting, and financial control to maximize value and minimize cost overruns.
              </p>
            </div>
            
            <div className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color">
              <h3 className="text-xl font-bold mb-4 text-text-dark">Risk Management</h3>
              <p className="text-text-light">
                Proactive identification, assessment, and mitigation of project risks to ensure smooth project execution.
              </p>
            </div>
            
            <div className="bg-card-bg p-6 rounded-lg shadow-md border border-border-color">
              <h3 className="text-xl font-bold mb-4 text-text-dark">Quality Assurance</h3>
              <p className="text-text-light">
                Rigorous quality control processes to ensure all deliverables meet or exceed industry standards and client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectManagement