import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Import images from assets
import ayodhyaImage from '../assets/ProjectsImages/District Ayodhya.jpg'
import ayodhyaImage1 from '../assets/ProjectsImages/District Ayodhya1.jpg'
import moradabadImage from '../assets/ProjectsImages/Moradabad - Chandausi.jpg'
import shahjahanpurImage from '../assets/ProjectsImages/Shahjahanpur.jpg'
import shahjahanpurImage1 from '../assets/ProjectsImages/Shahjahanpur1.jpg'
import serviceImage from '../assets/service.PNG'

import {
  FaBuilding,
  FaSearch,
  FaRoad,
  FaArchway,
  FaChartLine,
  FaLeaf,
  FaShip,
  FaArrowRight,
  FaCheck,
  FaAward,
  FaUsers,
  FaHistory,
  FaLightbulb,
  FaFileContract,
  FaUserGraduate,
  FaProjectDiagram,
  FaDraftingCompass,
  FaCheckCircle,
  FaShieldAlt,
  FaClipboardCheck,
  FaSearchDollar,
  FaHardHat
} from 'react-icons/fa'

import { useInView, useAnimation, motion } from 'framer-motion'

const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
            ease: "easeOut"
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}




function Home() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Create a copy of the current refs for cleanup
    const currentRefs = [...observerRefs.current];

    currentRefs.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Add ref to the list of elements to observe
  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200, // Slower transitions for better image viewing
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Longer display time to read content
    arrows: true,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    lazyLoad: 'progressive', // Add lazy loading for better performance
    adaptiveHeight: true, // Adjust height based on slide content
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300"></div>
    )
  }

  // Custom arrow components for better styling
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
        style={{ display: "flex" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
        style={{ display: "flex" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  }


  return (
    <div className="pt-16 overflow-hidden"> {/* Add padding to account for fixed header */}
      {/* Hero Slider */}
      <div className="w-full relative">
        {/* Decorative elements */}
        {/* <div className="absolute top-0 left-0 w-32 h-32 bg-accent-color opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse duration-2000"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-color opacity-10 rounded-full translate-x-1/3 translate-y-1/3 z-0 animate-float"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-white opacity-10 rounded-full z-0 animate-float duration-1500 delay-500"></div>
        <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-accent-light opacity-10 rounded-full z-0 animate-pulse duration-2000 delay-300"></div> */}

        <Slider {...sliderSettings}>
          <div className="relative h-[650px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${ayodhyaImage1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'contrast(1.2) brightness(1.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl px-4 stagger-children">

                    <div className="bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl">
                      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight animate-slideInLeft text-white">
                        ROB Construction <br />
                        <span className="text-[#FFC607] animate-pulse duration-2000">in Ayodhya</span>
                      </h1>

                      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg animate-fadeIn delay-300 border border-[#FFC607]/20">
                        <div className="flex items-center mb-2">
                          <span className="text-[#FFC607] font-semibold mr-2">Client:</span>
                          <span className="text-white">U.P. State Bridge Corporation Ltd.</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-[#FFC607] font-semibold mr-2">Duration:</span>
                          <span className="text-white">18 Months (01.09.23 - 28.02.25)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="relative h-[650px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${shahjahanpurImage1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'contrast(1.2) brightness(1.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl px-4 stagger-children">

                    <div className="bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl">
                      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight animate-slideInLeft text-white">
                        ROB in Shahjahanpur <br />
                        <span className="text-[#FFC607] animate-float">Katra-Nigohi Road</span>
                      </h1>

                      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg animate-fadeIn delay-300 border border-[#FFC607]/20">
                        <div className="flex items-center mb-2">
                          <span className="text-[#FFC607] font-semibold mr-2">Client:</span>
                          <span className="text-white">U.P. State Bridge Corporation Ltd.</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-[#FFC607] font-semibold mr-2">Duration:</span>
                          <span className="text-white">18 Months (14.09.24 - 13.03.26)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[650px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${moradabadImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'contrast(1.2) brightness(1.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl px-4 stagger-children">

                    <div className="bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl">
                      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight animate-slideInLeft text-white">
                        ROB on Moradabad <br />
                        <span className="text-[#FFC607] animate-shimmer">Chandausi Section</span>
                      </h1>

                      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg animate-fadeIn delay-300 border border-[#FFC607]/20">
                        <div className="flex items-center mb-2">
                          <span className="text-[#FFC607] font-semibold mr-2">Client:</span>
                          <span className="text-white">U.P. State Bridge Corporation Ltd.</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-[#FFC607] font-semibold mr-2">Duration:</span>
                          <span className="text-white">18 Months (18.10.24 - 17.04.26)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="relative h-[650px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${moradabadImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'contrast(1.2) brightness(1.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl px-4 stagger-children">

                    <div className="bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl">
                      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight animate-slideInLeft text-white">
                        ROB in Sambhal <br />
                        <span className="text-[#FFC607] animate-pulse duration-2000">Moradabad-Aligarh</span>
                      </h1>
                      {/* <p className="text-lg md:text-xl mb-4 text-gray-200 max-w-2xl animate-slideInRight">
                        Project Monitoring Consultancy for Supervision, Monitoring, Quality Control for construction of railway over bridge (ROB) on railway crossing no.-36B on Moradabad-Aligarh/Chandausi rail section in district Sambhal.
                      </p> */}
                      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg animate-fadeIn delay-300 border border-[#FFC607]/20">
                        <div className="flex items-center mb-2">
                          <span className="text-[#FFC607] font-semibold mr-2">Client:</span>
                          <span className="text-white">U.P. State Bridge Corporation Ltd.</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-[#FFC607] font-semibold mr-2">Duration:</span>
                          <span className="text-white">18 Months (18.10.24 - 17.04.26)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </Slider>
      </div>





      {/* Company Overview */}
      <section className="py-10 relative" style={{ background: "#000000" }}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <span className="text-[#FFC607] font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">Who We Are</span>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mt-2  text-white"
            >
              About Us
            </motion.h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={ayodhyaImage}
                alt="About Our Company"
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.1) brightness(0.9)' }}
              />
            </motion.div>
            <div className="md:w-1/2 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#FFC607]">Engineering Excellence Since 2018</h3>
                <p className="text-gray-300 mb-4">
                  Expedient Live Research Consultancy Pvt. Ltd. is a premier civil engineering multi-disciplinary consultancy organization established with the vision of contributing to India's infrastructure development through professional engineering services.
                </p>

                <p className="text-gray-300 mb-4">
                  With our corporate headquarters in Noida and registered office in Lucknow, Uttar Pradesh, we have successfully expanded our operations across the nation. Our strategic presence enables us to serve clients throughout India with localized expertise and national resources.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                    <h4 className="text-[#FFC607] font-bold text-lg mb-1">100+</h4>
                    <p className="text-sm text-gray-300">Qualified Engineers & Designers</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-800 hover:border-[#FFC607] transition-all duration-300">
                    <h4 className="text-[#FFC607] font-bold text-lg mb-1">Since 2018</h4>
                    <p className="text-sm text-gray-300">Delivering Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>











      {/* Expertise Section */}
      <section id="expertise" className="py-10 relative" style={{ background: "var(--color-gray-900)" }}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4">
          <div
            ref={el => addToRefs(el)}
            id="expertise-title"
            className={`text-center mb-16 ${isVisible['expertise-title'] ? 'animate-slideInUp' : 'opacity-0'}`}
          >
            <span className="text-[#FFC607] font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">What We Do Best</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white animate-zoomIn delay-200">Our Services</h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-4 animate-slideInRight delay-400"></div>

          </div>

          {/* Services Layout - Image Left, Services Right */}
          <div className="flex flex-col lg:flex-row items-left ">


            {/* Right Side - Services List */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 ">
                {/* Service 1 */}
                <div className="flex items-baseline  space-x-4  hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaSearch className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Survey & Investigation Works</h5>
                </div>

                {/* Service 2 */}
                <div className="flex items-baseline  space-x-4  hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaFileContract className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Settlement of Claims</h5>
                </div>

                {/* Service 3 */}
                <div className="flex items-baseline  space-x-4 hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaUserGraduate className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Reformation and Training</h5>
                </div>

                {/* Service 4 */}
                <div className="flex items-baseline space-x-4  hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaChartLine className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Techni Economic Feasibility Studies</h5>
                </div>

                {/* Service 5 */}
                <div className="flex items-baseline  space-x-4  hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaProjectDiagram className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Project Management Consultancy</h5>
                </div>

                {/* Service 6 */}
                <div className="flex items-baseline  space-x-4 hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaDraftingCompass className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Detailed Project Engineering</h5>
                </div>

                {/* Service 7 */}
                <div className="flex items-baseline  space-x-4 hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaCheckCircle className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Quality Assurance</h5>
                </div>

                {/* Service 8 */}
                <div className="flex items-baseline  space-x-4 hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaShieldAlt className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Safety Audit</h5>
                </div>

                {/* Service 9 */}
                <div className="flex items-baseline  space-x-4 hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaClipboardCheck className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Quality Audit</h5>
                </div>

                {/* Service 10 */}
                <div className="flex items-baseline space-x-4 hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaSearchDollar className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Feasibility Studies</h5>
                </div>

                {/* Service 11 */}
                <div className="flex items-baseline  space-x-4 hover:bg-gray-900/50 rounded-lg transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-[#FFC607]/10 flex items-center justify-center group-hover:bg-[#FFC607]/20 transition-all duration-300">
                    <FaHardHat className="text-[#FFC607]" size={10} />
                  </div>
                  <h5 className="text-lg font-semibold text-white group-hover:text-[#FFC607] transition-all duration-300">Construction Supervision</h5>
                </div>
              </div>
            </div>


            {/* Left Side - Service Image */}
            <div className="lg:w-1/2 " >
              <div className="relative">
                {/* <p className="text-text-light text-center text-lg mb-8 leading-relaxed  mx-auto">
              At Expedient Live, we follow a fundamental principle of 'designing a superlative construction experience'.
              We offer collective expertise in construction design, project management, DPR, authority engineering and quality control services.
            </p> */}
                <img
                  src={serviceImage}
                  alt="Our Services"
                  className="w-full h-auto rounded-xl"
                  style={{ filter: 'contrast(1.1) brightness(1.0)', background: "#121212" }}

                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div> */}
              
              </div>
            </div>


          </div>
  <div className="text-center animate-slideInUp delay-700 pt-6">
                  <Link to="/about/services" className="px-6 py-3 bg-[#FFC607] text-black font-medium rounded-full hover:bg-white transition-all duration-300 inline-flex items-center group">
                    View All Services <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

        </div>
      </section>





      {/* Projects Highlight */}
      <section id="projects" className="py-10 relative" style={{ background: "#000000" }}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4">
          <div className="text-center  mb-8">
            <span className="text-[#FFC607] font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">Projects</h2>
         <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-4 animate-slideInRight delay-400"></div>
            <p className="text-gray-300 text-center text-lg leading-relaxed mx-auto">
              Expedient Live has worked on more projects for various eminent departments of the Construction Ministry.
              With government and private sector clients, we are proud to have worked on construction projects
              that have helped bring about positive development in many areas of the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-[#FFC607] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={ayodhyaImage}
                  alt="ROB Construction in Ayodhya"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#FFC607] text-black text-xs font-semibold rounded-full">BRIDGE ENGINEERING</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">ROB Construction in Ayodhya</h3>
                <p className="text-gray-400 mb-4">Consultant Services for Supervision of Construction of multiple ROBs in the District Ayodhya on EPC in the state of Uttar Pradesh.</p>
                <Link to="/projects" className="inline-flex items-center text-[#FFC607] hover:text-white font-medium group">
                  View Project <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-[#FFC607] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={shahjahanpurImage}
                  alt="Railway Over Bridge in Shahjahanpur"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#FFC607] text-black text-xs font-semibold rounded-full">RAILWAY OVER BRIDGE</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">ROB in Shahjahanpur</h3>
                <p className="text-gray-400 mb-4">Project Monitoring Consultancy for construction of railway over bridge on level crossing no. 341-SPL in Distt. Shahjahanpur.</p>
                <Link to="/projects" className="inline-flex items-center text-[#FFC607] hover:text-white font-medium group">
                  View Project <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-[#FFC607] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={moradabadImage}
                  alt="ROB on Moradabad-Chandausi"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#FFC607] text-black text-xs font-semibold rounded-full">RAILWAY OVER BRIDGE</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">ROB on Moradabad-Chandausi</h3>
                <p className="text-gray-400 mb-4">Project Monitoring Consultancy for construction of railway over bridge (ROB) on railway crossing no.-1A in district Moradabad.</p>
                <Link to="/projects" className="inline-flex items-center text-[#FFC607] hover:text-white font-medium group">
                  View Project <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10  mb-10">
            <Link to="/projects" className="px-6 py-3 bg-[#FFC607] text-black font-medium rounded-full hover:bg-white transition-all duration-300 inline-flex items-center group">
              View All Projects <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home







