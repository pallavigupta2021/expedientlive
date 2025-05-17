import { useState } from 'react'
import { FaRoad, FaArchway, FaBuilding, FaFilter } from 'react-icons/fa'

function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "National Highway Development",
      category: "highway",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Design and supervision of 120km highway connecting major cities, including complex terrain navigation and environmental considerations.",
      client: "National Highway Authority",
      year: "2021",
      location: "Western Region"
    },
    {
      id: 2,
      title: "Metropolitan Bridge Reconstruction",
      category: "bridge",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      description: "Rehabilitation and strengthening of a major metropolitan bridge, improving structural integrity and extending service life by 50 years.",
      client: "City Transportation Department",
      year: "2020",
      location: "Capital City"
    },
    {
      id: 3,
      title: "Urban Infrastructure Development",
      category: "urban",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Comprehensive urban infrastructure development project including roads, drainage systems, and public spaces for a growing metropolitan area.",
      client: "Urban Development Authority",
      year: "2022",
      location: "Eastern District"
    },
    {
      id: 4,
      title: "Coastal Highway Extension",
      category: "highway",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Extension of coastal highway with special considerations for environmental protection and resilience against coastal erosion and flooding.",
      client: "Regional Development Board",
      year: "2019",
      location: "Southern Coast"
    },
    {
      id: 5,
      title: "River Crossing Bridge",
      category: "bridge",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Design and construction of a major river crossing bridge, connecting previously isolated communities and boosting regional economic development.",
      client: "State Infrastructure Department",
      year: "2021",
      location: "Central Region"
    },
    {
      id: 6,
      title: "Industrial Zone Development",
      category: "urban",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Planning and development of infrastructure for a new industrial zone, including roads, utilities, and environmental management systems.",
      client: "Industrial Development Corporation",
      year: "2020",
      location: "Northern Industrial Region"
    }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <div className="pt-16 bg-background-dark text-text-dark"> {/* Add padding to account for fixed header */}
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">Showcasing our expertise and commitment to excellence in infrastructure development</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-16 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-text-dark">Featured Projects</h2>
              <p className="text-text-light max-w-2xl">
                Explore our portfolio of successful projects that demonstrate our expertise in various domains of infrastructure development.
              </p>
            </div>

            {/* Filter */}
            <div className="mt-6 md:mt-0">
              <div className="flex items-center space-x-2 bg-card-bg p-2 rounded-lg shadow-md border border-border-color">
                <FaFilter className="text-accent-color" />
                <select
                  className="bg-transparent border-none focus:outline-none text-text-dark"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all" className="bg-card-bg text-text-dark">All Projects</option>
                  <option value="highway" className="bg-card-bg text-text-dark">Highways</option>
                  <option value="bridge" className="bg-card-bg text-text-dark">Bridges</option>
                  <option value="urban" className="bg-card-bg text-text-dark">Urban Development</option>
                </select>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-card-bg rounded-lg overflow-hidden shadow-md border border-border-color">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-dark">{project.title}</h3>
                  <p className="text-text-light mb-4">{project.description}</p>
                  <div className="border-t border-border-color pt-4">
                    <div className="flex justify-between text-sm text-text-light">
                      <span><strong className="text-primary-color">Client:</strong> {project.client}</span>
                      <span><strong className="text-primary-color">Year:</strong> {project.year}</span>
                    </div>
                    <div className="mt-2 text-sm text-text-light">
                      <span><strong className="text-primary-color">Location:</strong> {project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-text-dark">Our Impact</h2>
            <p className="text-text-light mx-auto">
              Our projects have made a significant impact on infrastructure development and community well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card-bg p-6 rounded-lg shadow-md text-center border border-border-color">
              <div className="text-primary-color mb-4 flex justify-center">
                <FaRoad size={48} />
              </div>
              <div className="text-4xl font-bold text-accent-color mb-2">4,500+</div>
              <p className="text-text-light">Kilometers of Highways</p>
            </div>

            <div className="bg-card-bg p-6 rounded-lg shadow-md text-center border border-border-color">
              <div className="text-primary-color mb-4 flex justify-center">
                <FaArchway size={48} />
              </div>
              <div className="text-4xl font-bold text-accent-color mb-2">250+</div>
              <p className="text-text-light">Bridges Constructed</p>
            </div>

            <div className="bg-card-bg p-6 rounded-lg shadow-md text-center border border-border-color">
              <div className="text-primary-color mb-4 flex justify-center">
                <FaBuilding size={48} />
              </div>
              <div className="text-4xl font-bold text-accent-color mb-2">175+</div>
              <p className="text-text-light">Projects Completed</p>
            </div>

            <div className="bg-card-bg p-6 rounded-lg shadow-md text-center border border-border-color">
              <div className="text-primary-color mb-4 flex justify-center">
                <FaBuilding size={48} />
              </div>
              <div className="text-4xl font-bold text-accent-color mb-2">50+</div>
              <p className="text-text-light">Ongoing Projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects


