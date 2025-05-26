import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

// Import About components
import Ethics from './pages/about/Ethics'
import MissionVision from './pages/about/MissionVision'
import Services from './pages/about/Services'

// Import sector components
import Road from './pages/sectors/Road'
import Bridge from './pages/sectors/Bridge'
import HumanResource from './pages/sectors/HumanResource'
import Building from './pages/sectors/Building'
import Airport from './pages/sectors/Airport'
import UrbanInfrastructure from './pages/sectors/UrbanInfrastructure'
import Traffic from './pages/sectors/Traffic'
import Water from './pages/sectors/Water'
import Geotechnical from './pages/sectors/Geotechnical'
import QualityControl from './pages/sectors/QualityControl'

import Sectors from './pages/Sectors'
import Projects from './pages/Projects'
import Career from './pages/Career'
import Contact from './pages/Contact'

import './App.css'

// Page transition wrapper component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      {loading ? (
        <motion.div
          className="fixed inset-0 bg-background-dark flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-accent-color rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <motion.h2
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-3xl font-bold text-white"
            >
              EXPEDIENT LIVE
            </motion.h2>
          </motion.div>
        </motion.div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />

            {/* About routes */}

            <Route path="/about/ethics" element={<PageTransition><Ethics /></PageTransition>} />
            <Route path="/about/mission-vision" element={<PageTransition><MissionVision /></PageTransition>} />
            <Route path="/about/services" element={<PageTransition><Services /></PageTransition>} />



            {/* Sectors routes */}
            <Route path="/sectors/highway-rural-roads" element={<PageTransition><Road /></PageTransition>} />
            <Route path="/sectors/bridge" element={<PageTransition><Bridge /></PageTransition>} />
            <Route path="/sectors/human-resource" element={<PageTransition><HumanResource /></PageTransition>} />
            <Route path="/sectors/building-structures" element={<PageTransition><Building /></PageTransition>} />
            <Route path="/sectors/airports" element={<PageTransition><Airport /></PageTransition>} />
            <Route path="/sectors/urban-infrastructure" element={<PageTransition><UrbanInfrastructure /></PageTransition>} />
            <Route path="/sectors/traffic-transportation" element={<PageTransition><Traffic /></PageTransition>} />
            <Route path="/sectors/water-sewerage" element={<PageTransition><Water /></PageTransition>} />
            <Route path="/sectors/geotechnical" element={<PageTransition><Geotechnical /></PageTransition>} />
            <Route path="/sectors/quality-control" element={<PageTransition><QualityControl /></PageTransition>} />


            <Route path="/sectors" element={<PageTransition><Sectors /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}

export default App





