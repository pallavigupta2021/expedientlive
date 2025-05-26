import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaUserTie, FaCogs, FaClipboardList, FaHandshake, FaEnvelope } from 'react-icons/fa';
import careerImage from '../assets/career.jpg'

function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
         <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>

        
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Careers
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Join our team of professionals building the infrastructure of tomorrow
            </motion.p> */}
          </div>
        </div>
      </div>

      {/* Career Categories Section */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#FFC607] font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">Join Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">Careers at Expedient Live</h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <p className="text-gray-300  mx-auto">
              We're looking for talented individuals to join our team in the following areas:
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Career 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaUserTie className="text-[#FFC607]" size={20} />
              </div>
              <h5 className="text-xl font-bold text-white mb-3 text-center">Team Leaders</h5>
              <p className="text-gray-400 text-center text-sm">
                Experienced professionals who can lead teams and manage projects efficiently.
              </p>
            </motion.div>

            {/* Career 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
                <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaCogs className="text-[#FFC607]" size={20} />
              </div>
              <h5 className="text-xl font-bold text-white mb-3 text-center">Technical</h5>
              <p className="text-gray-400 text-center text-sm">
                Engineers and technical experts with specialized knowledge in infrastructure development.
              </p>
            </motion.div>

            {/* Career 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
               <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaClipboardList className="text-[#FFC607]" size={20} />
              </div>
              <h5 className="text-xl font-bold text-white mb-3 text-center">Supervisory</h5>
              <p className="text-gray-400 text-center text-sm">
                Site supervisors and project coordinators who ensure quality and timely execution.
              </p>
            </motion.div>

            {/* Career 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaUsers className="text-[#FFC607]" size={20} />
              </div>
              <h5 className="text-xl font-bold text-white mb-3 text-center">Administrative</h5>
              <p className="text-gray-400 text-center text-sm">
                Administrative professionals who support our operations and ensure smooth functioning.
              </p>
            </motion.div>

            {/* Career 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1"
            >
                <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mb-4 mx-auto">
                <FaHandshake className="text-[#FFC607]" size={20} />
              </div>
              <h5 className="text-xl font-bold text-white mb-3 text-center">Liaison</h5>
              <p className="text-gray-400 text-center text-sm">
                Professionals who manage relationships with clients, government bodies, and other stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-black p-8 rounded-lg border border-gray-800">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center mb-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#FFC607]/10 flex items-center justify-center">
                  <FaEnvelope size={30} className="text-[#FFC607]" />
                </div>
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-4">Build Your Future With Us</h2>
              <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-300 mb-8">
                At Expedient Live Research and Consultancy Pvt. Ltd, we believe in building not just structures, but careers. We're always looking for skilled, passionate, and driven individuals to join our growing team.
                If you're interested in working with us, simply send your resume to the email address below. When we have a requirement, our team will reach out.
              </p>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300 inline-block">
                <a
                  href="mailto:careers@expedientlive.com"
                  className="text-xl font-medium text-[#FFC607] hover:text-white transition-colors flex items-center justify-center"
                >
                  <FaEnvelope className="mr-2" /> careers@expedientlive.com
                </a>
                <p className="text-gray-400 mt-2">Send us your resume. We'll contact you when there's an opportunity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career
