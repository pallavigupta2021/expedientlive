import { useState } from 'react'
import { FaMapMarkerAlt, FaUserTie, FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Import project images
import ayodhyaImage from '../assets/ProjectsImages/District Ayodhya.jpg'
import ayodhyaImage1 from '../assets/ProjectsImages/District Ayodhya1.jpg'
import moradabadImage from '../assets/ProjectsImages/Moradabad - Chandausi.jpg'
import shahjahanpurImage from '../assets/ProjectsImages/Shahjahanpur.jpg'
import shahjahanpurImage1 from '../assets/ProjectsImages/Shahjahanpur1.jpg'

function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "ROB Construction in Ayodhya",
      category: "bridge",
      image: ayodhyaImage,
      detailImage: ayodhyaImage1,
      description: "Consultant Services for Supervision of Construction of (Main Bridge Railway Section) 02 Lane ROB at LC No. 105, 04 Lane ROB LC No. 107A/2T, 04 Lane ROB LC No. 111-B, 02 Lane ROB LC No. 112, and 02 Lane ROB LC No. 118-A in the District Ayodhya on EPC in the state of Uttar Pradesh.",
      client: "U.P. State Bridge Corporation Ltd.",
      awardDate: "01.09.23",
      completionDate: "28.02.25",
      duration: "18 Months",
      location: "Ayodhya, Uttar Pradesh",
      status: "Ongoing"
    },
    {
      id: 2,
      title: "Railway Over Bridge in Shahjahanpur",
      category: "bridge",
      image: shahjahanpurImage,
      detailImage: shahjahanpurImage1,
      description: "Project Monitoring Consultancy for Supervision, Monitoring, Quality Control etc. for construction of railway over bridge on level crossing no. 341-SPL between Katra - Nigohi on Lucknow - Delhi - Moradabad Rail Rout under Katra Development Block in Distt. Shahjahanpur.",
      client: "U.P. State Bridge Corporation Ltd.",
      awardDate: "14.09.24",
      completionDate: "13.03.26",
      duration: "18 Months",
      location: "Shahjahanpur, Uttar Pradesh",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "ROB on Moradabad-Chandausi",
      category: "bridge",
      image: moradabadImage,
      detailImage: moradabadImage,
      description: "Project Monitoring Consultancy for Supervision, Monitoring, Quality Control etc. for construction of railway over bridge (ROB) on railway crossing no.-1A on Moradabad- Chandausi in district Moradabad under CRIF scheme.",
      client: "U.P. State Bridge Corporation Ltd.",
      awardDate: "18.10.24",
      completionDate: "17.04.26",
      duration: "18 Months",
      location: "Moradabad, Uttar Pradesh",
      status: "Ongoing"
    },
    {
      id: 4,
      title: "ROB on Moradabad-Aligarh/Chandausi",
      category: "bridge",
      image: moradabadImage,
      detailImage: moradabadImage,
      description: "Project Monitoring Consultancy for Supervision, Monitoring, Quality Control etc. for construction of railway over bridge (ROB) on railway crossing no.-36B on Moradabad- Aligarh/Chandausi rail section in district Sambhal under CRIF scheme.",
      client: "U.P. State Bridge Corporation Ltd.",
      awardDate: "18.10.24",
      completionDate: "17.04.26",
      duration: "18 Months",
      location: "Sambhal, Uttar Pradesh",
      status: "Ongoing"
    }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <div className="pt-24 bg-black text-white"> {/* Add padding to account for fixed header */}
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
              Our Projects
            </motion.h1>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Showcasing our expertise and commitment to excellence in infrastructure development
            </motion.p> */}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#FFC607] font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">Our Portfolio</span>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white"
            >
              Ongoing Projects
            </motion.h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300  align-left text-left"
            >
              Details of Completed / Ongoing Projects (Supervision Consultant)
            </motion.p>
          </div>

          {/* Projects Cards */}
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      style={{ minHeight: '300px', maxHeight: '400px' }}
                    />
                    <div className="absolute top-0 left-0 bg-[#FFC607] text-black px-4 py-2 font-bold">
                      {project.status}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-6 text-sm md:text-base">{project.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center bg-black/30 p-3 rounded-lg border border-gray-800">
                          <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-3">
                            <FaUserTie className="text-[#FFC607]" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Client</p>
                            <p className="text-white">{project.client}</p>
                          </div>
                        </div>

                        <div className="flex items-center bg-black/30 p-3 rounded-lg border border-gray-800">
                          <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-3">
                            <FaMapMarkerAlt className="text-[#FFC607]" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Location</p>
                            <p className="text-white">{project.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4 mt-auto">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="flex flex-col bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center mb-1">
                            <div className="w-6 h-6 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-2">
                              <FaCalendarAlt className="text-[#FFC607]" size={12} />
                            </div>
                            <p className="text-gray-400">Award Date</p>
                          </div>
                          <p className="text-[#FFC607] ml-8">{project.awardDate}</p>
                        </div>
                        <div className="flex flex-col bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center mb-1">
                            <div className="w-6 h-6 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-2">
                              <FaCalendarAlt className="text-[#FFC607]" size={12} />
                            </div>
                            <p className="text-gray-400">Completion</p>
                          </div>
                          <p className="text-[#FFC607] ml-8">{project.completionDate}</p>
                        </div>
                        <div className="flex flex-col bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center mb-1">
                            <div className="w-6 h-6 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-2">
                              <FaClock className="text-[#FFC607]" size={12} />
                            </div>
                            <p className="text-gray-400">Duration</p>
                          </div>
                          <p className="text-[#FFC607] ml-8">{project.duration}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-6 px-6 py-2 bg-[#FFC607] text-black font-medium rounded-full hover:bg-white transition-all duration-300 inline-flex items-center"
                      >
                        View Project Details <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-[#FFC607] text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition-all z-10"
              >
                ✕
              </button>

              <div className="h-[300px] md:h-[400px] relative">
                <img
                  src={selectedProject.detailImage || selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <div className="inline-block px-3 py-1 bg-[#FFC607] text-black text-sm font-bold rounded mb-3">
                    {selectedProject.status}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center bg-black/30 p-4 rounded-lg border border-gray-800">
                    <div className="w-12 h-12 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-4">
                      <FaUserTie className="text-[#FFC607]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Client</p>
                      <p className="text-white font-medium">{selectedProject.client}</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-black/30 p-4 rounded-lg border border-gray-800">
                    <div className="w-12 h-12 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="text-[#FFC607]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{selectedProject.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-black/30 p-4 rounded-lg border border-gray-800">
                    <div className="w-12 h-12 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-4">
                      <FaClock className="text-[#FFC607]" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white font-medium">{selectedProject.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 bg-black/30 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-[#FFC607] mb-4">Project Description</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-3">
                        <FaCalendarAlt className="text-[#FFC607]" size={16} />
                      </div>
                      <p className="text-white font-medium">Award Date</p>
                    </div>
                    <p className="text-[#FFC607] font-medium ml-13 pl-13">{selectedProject.awardDate}</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-3">
                        <FaCalendarAlt className="text-[#FFC607]" size={16} />
                      </div>
                      <p className="text-white font-medium">Scheduled Completion</p>
                    </div>
                    <p className="text-[#FFC607] font-medium ml-13 pl-13">{selectedProject.completionDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Projects


