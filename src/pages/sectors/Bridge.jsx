import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArchway, FaRoad, FaBuilding, FaArrowRight } from 'react-icons/fa'
import bridgeImage from '../../assets/SectorsImages/Bridges&Flyovers.jpg'

function BridgeServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-white text-gray-800">
      {/* Hero Section - Full width image */}
      <div className="relative h-[300px] w-full">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bridgeImage})` }}>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="items-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Bridges
              </h1>
              <div className="w-24 h-1 bg-[#FFC607] rounded-full mb-6"></div>
              {/* <p className="text-xl text-white">
                Connecting communities with innovative bridge engineering solutions
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="border-b border-gray-300 my-0"></div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-700 mb-10 mx-auto">
            Bridges are vital infrastructure components that connect communities, facilitate transportation, and drive economic growth. Expedient Live Research and Consultancy Pvt. Ltd. offers comprehensive <strong>bridge engineering services</strong> for various types of bridges, including highway bridges, railway over bridges (ROBs), river bridges, and pedestrian bridges.
          </p>

          <p className="text-lg text-gray-700 mb-10 mx-auto">
            Our team of experienced bridge engineers and specialists provides innovative and cost-effective solutions for bridge design, construction, rehabilitation, and maintenance. We utilize advanced engineering techniques and technologies to ensure the safety, durability, and functionality of bridge structures.
          </p>

          <div className="max-w-4xl mx-auto">
            <h5 className="text-xl font-bold text-gray-800 mb-6">
              <strong>Our bridge engineering services include:</strong>
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-12">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Bridge Feasibility Studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Detailed Project Reports (DPR)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Structural Analysis and Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Foundation Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Construction Supervision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Bridge Rehabilitation and Retrofitting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Bridge Inspection and Assessment</span>
                </li>
              </ul>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Railway Over Bridges (ROBs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Road Over Bridges (ROBs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Flyovers and Interchanges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>River Bridges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Pedestrian Bridges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Culverts and Small Bridges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Bridge Maintenance Programs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="overflow-hidden">
              <img
                src={bridgeImage}
                alt="Railway Over Bridge"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
           
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default BridgeServices