import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBalanceScale, FaHandshake, FaShieldAlt, FaLeaf, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa'

function Ethics() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <FaBalanceScale size={60} className="text-[#FFC607]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ethics & Values
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-300"
            >
              The foundation of our construction consultancy excellence
            </motion.p> */}
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              At Expedient Live Research and Consultancy, our ethics and values form the cornerstone of our business.
              We believe that integrity, excellence, and responsibility are not just words, but principles that guide
              every decision we make and every project we undertake in the construction and infrastructure sector.
            </motion.p>
          </div>
        </div>
      </section> */}

      {/* Core Values Section */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300  mx-auto">
              These principles guide our approach to every construction and infrastructure project,
              shaping how we interact with clients, partners, and communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-6 mx-auto">
                <FaHandshake size={30} className="text-[#FFC607]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Integrity</h3>
              <p className="text-gray-400 text-center">
                We maintain the highest standards of honesty and transparency in all our dealings.
                In the construction industry, where trust is paramount, we ensure that our word is our bond.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-6 mx-auto">
                <FaAward size={30} className="text-[#FFC607]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Excellence</h3>
              <p className="text-gray-400 text-center">
                We strive for excellence in every aspect of our work, from initial planning to final delivery.
                Our commitment to quality ensures that we deliver infrastructure projects that stand the test of time.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-6 mx-auto">
                <FaShieldAlt size={30} className="text-[#FFC607]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Safety</h3>
              <p className="text-gray-400 text-center">
                Safety is non-negotiable in construction. We prioritize the well-being of workers, end-users,
                and the public in every project we undertake, ensuring that all safety standards are not just met but exceeded.
              </p>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-6 mx-auto">
                <FaLeaf size={30} className="text-[#FFC607]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Sustainability</h3>
              <p className="text-gray-400 text-center">
                We are committed to environmentally responsible practices in all our infrastructure projects.
                By integrating sustainable solutions, we create structures that minimize environmental impact while maximizing efficiency.
              </p>
            </motion.div>

            {/* Value 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-6 mx-auto">
                <FaUsers size={30} className="text-[#FFC607]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Collaboration</h3>
              <p className="text-gray-400 text-center">
                We believe in the power of teamwork and partnership. By fostering strong relationships with clients,
                contractors, and stakeholders, we create an environment where construction projects can thrive.
              </p>
            </motion.div>

            {/* Value 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-6 mx-auto">
                <FaLightbulb size={30} className="text-[#FFC607]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Innovation</h3>
              <p className="text-gray-400 text-center">
                We embrace innovation in construction methodologies and technologies. By staying at the forefront of industry
                advancements, we deliver infrastructure solutions that are both cutting-edge and practical.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ethical Commitment Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Ethical Commitment</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                In the complex world of construction and infrastructure development, ethical considerations are paramount.
                At Expedient Live Research and Consultancy, we are committed to:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Maintaining transparency in all client communications and project documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Adhering to all relevant laws, regulations, and industry standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Ensuring fair treatment of all stakeholders, from workers to suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Avoiding conflicts of interest and maintaining professional independence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-3 mt-1">•</span>
                  <span>Respecting the communities and environments in which we work</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ethics