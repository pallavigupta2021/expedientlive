import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaRoad, FaCarSide, FaTruckMoving, FaTools, FaCheck } from 'react-icons/fa'
import highwayImage from '../../assets/SectorsImages/Highways.jpg'
import ruralRoadsImage from '../../assets/SectorsImages/RuralRoads.jpg'

function RoadServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 bg-white text-gray-800">
      {/* Hero Section - Full width image */}
      <div className="relative h-[300px] w-full">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${highwayImage})` }}>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Roads & Highways
              </h1>
              <div className="w-24 h-1 bg-[#FFC607] rounded-full mb-6"></div>
              {/* <p className="text-xl text-white">
                Connecting communities through world-class road infrastructure
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
            With the continuously expanding population along with cities getting bigger and faster, the pressure on road infrastructure is immense. Hence, to meet the growing demands of the communities, upgradation in road infrastructure, transportation & highway facilities has become the need of the hour. Expedient Live Research and Consultancy Pvt. Ltd., being one of the most reputed and experienced <strong>roads & highway consultants</strong> in India, is apprised of these ever-demanding advancements.
          </p>

          <p className="text-lg text-gray-700 mb-10  mx-auto">
            Expedient Live, with the help of latest engineering technologies, provides best-in-class roads & <strong>highway consultancy</strong> services for the development, expansion, reconstruction and reconditioning of Highways, Expressways, Urban Roads and Rural Roads, etc. for all projects executed on BOT/ DBFOT/ PPP/ EPC/ HAM / OPRC basis.
          </p>

          <div className="max-w-4xl mx-auto">
            <h5 className="text-xl font-bold text-gray-800 mb-6">
              <strong>Our services across roads & highways include:</strong>
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-12">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Pre-Feasibility and Feasibility Studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Detailed Project Reports (DPR)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Detailed Engineering/Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Value Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Construction Supervision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Project Management Consultancy (PMC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Contract Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Authority Engineer</span>
                </li>
              </ul>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Road Safety Studies/ Audit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Economic and Financial Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Environment Impact Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Geo-technical Investigations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Pavement Investigations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Construction Material Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC607] mr-2">•</span>
                  <span>Traffic and Transportation Studies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="overflow-hidden">
              <img
                src={highwayImage}
                alt="Highway Project"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={ruralRoadsImage}
                alt="Rural Roads Project"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoadServices
