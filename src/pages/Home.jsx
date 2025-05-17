import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  FaBuilding,
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
  FaLightbulb
} from 'react-icons/fa'

import { motion, useInView, useAnimation } from 'framer-motion'

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
  const expertiseScrollRef = useRef(null);

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
    speed: 1000, // Increased from 700 to 1000 for slower transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, // Increased from 6000 to 8000 for longer display time
    arrows: true,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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

  const scrollExpertise = (direction) => {
    if (expertiseScrollRef.current) {
      const { current } = expertiseScrollRef;
      const scrollAmount = direction === 'left'
        ? -current.offsetWidth / 1.5
        : current.offsetWidth / 1.5;

      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16 overflow-hidden"> {/* Add padding to account for fixed header */}
      {/* Hero Slider */}
      <div className="w-full relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-color opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse duration-2000"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-color opacity-10 rounded-full translate-x-1/3 translate-y-1/3 z-0 animate-float"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-white opacity-10 rounded-full z-0 animate-float duration-1500 delay-500"></div>
        <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-accent-light opacity-10 rounded-full z-0 animate-pulse duration-2000 delay-300"></div>

        <Slider {...sliderSettings}>
          <div className="relative h-[650px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl text-white px-4 stagger-children">
                    <span className="inline-block px-4 py-1 bg-accent-color text-white text-sm font-semibold rounded-full mb-4 animate-slideInDown">ENGINEERING EXCELLENCE</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-slideInLeft">
                      Bridge Engineering <br />
                      <span className="text-accent-color animate-pulse duration-2000">That Connects</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl animate-slideInRight">We design bridges that make accessibility possible, connecting communities and transforming landscapes.</p>
                    {/* <div className="flex flex-wrap gap-4 animate-slideInUp">
                      <Link to="/projects" className="btn btn-accent group">
                        View Case Study <FaArrowRight className="ml-2 group-hover:animate-bounce" />
                      </Link>
                      <Link to="/services" className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
                        Our Services
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[650px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl text-white px-4 stagger-children">
                    <span className="inline-block px-4 py-1 bg-primary-color text-white text-sm font-semibold rounded-full mb-4 animate-flipInX">INFRASTRUCTURE DEVELOPMENT</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-slideInRight">
                      Highway Development <br />
                      <span className="text-primary-light animate-float">For The Future</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl animate-slideInLeft">We chart highways that bring cities and people closer, creating pathways to progress and prosperity.</p>
                    {/* <div className="flex flex-wrap gap-4 animate-zoomIn">
                      <Link to="/services" className="btn btn-primary group">
                        Explore Services <FaArrowRight className="ml-2 group-hover:animate-slideInRight" />
                      </Link>
                      <Link to="/projects" className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
                        View Projects
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[650px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl text-white px-4 stagger-children">
                    <span className="inline-block px-4 py-1 bg-accent-color text-white text-sm font-semibold rounded-full mb-4 animate-flipInY">INNOVATIVE SOLUTIONS</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-slideInUp">
                      Tunnel Construction <br />
                      <span className="text-accent-color animate-shimmer">Breaking Barriers</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl animate-slideInDown">We create new routes that make your journeys captivating, connecting the impossible and redefining accessibility.</p>
                    {/* <div className="flex flex-wrap gap-4 animate-fadeIn duration-1000">
                      <Link to="/services" className="btn btn-accent group">
                        Our Expertise <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link to="/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 animate-pulse duration-2000">
                        Get In Touch
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>


      {/* Company Overview */}
      <section className="py-16 relative bg-background-dark">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/2 left-0 w-64 h-64 bg-primary-color opacity-5 rounded-full"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-color opacity-5 rounded-full"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-4 relative">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="About Our Company"
                  className="rounded-lg shadow-lg w-full border border-border-color"
                />
              </motion.div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4 text-white">Our Story</h2>
                  <p className="text-text-light mb-4">
                    Established in 2018, Expedient Live Research and Consultancy Private Limited (CIN: U74999UP2018PTC105630) has grown to become a leading consultancy firm specializing in infrastructure development projects. What started as a small team of dedicated professionals has now evolved into a comprehensive consultancy with expertise across various domains of civil engineering and infrastructure development.
                  </p>
                  <p className="text-text-light mb-6">
                    Based in Uttar Pradesh, our team of experienced engineers and professionals has successfully completed numerous projects across the country, earning a reputation for excellence, reliability, and innovation. Our commitment to quality and client satisfaction has been the cornerstone of our growth and success.
                  </p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* About Company  */}

   {/* <section id="building-nation" className="mb-10  relative overflow-hidden" >
   

        <div className="container mx-auto px-4">

          <div
            ref={el => addToRefs(el)}
            id="nation-content"
            className={`px-5 mx-auto ${isVisible['nation-content'] ? 'animate-fadeIn' : 'opacity-0'}`}
          >
            <h4 className="text-2xl font-semibold text-white mb-2">Who We Are ?</h4>
            <p className="mb-6">
              ERACPL is a privately held, non-government company registered with the Registrar of Companies, Kanpur. With an authorized capital of ₹10 lakhs and a paid-up capital of ₹1 lakh, our foundation is built on integrity, expertise, and a passion for excellence. Our team comprises dedicated professionals who bring a wealth of experience and knowledge to every project we undertake.
            </p>


            <div className="mb-6">
              <p className="font-semibold mb-1">Sources:</p>
              <ul className="list-disc list-inside text-white">
                <li><a href="#" target="_blank">The Company Check</a></li>
                <li><a href="#" target="_blank">Zauba Corp</a></li>
                <li><a href="#" target="_blank">Registrationwala</a></li>
                <li><a href="#" target="_blank">Tracxn</a></li>
                <li><a href="#" target="_blank">Economic Times</a></li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2">What We Do ?</h3>
            <p className="mb-4">
              At ERACPL, we offer a comprehensive range of business services designed to meet the diverse needs of our clients. Our areas of expertise include:
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Strategic Business Consulting:</strong> Providing actionable insights and strategies to enhance business performance.</li>
              <li><strong>Market Research and Analysis:</strong> Delivering in-depth market studies to inform decision-making.</li>
              <li><strong>Project Management:</strong> Ensuring efficient planning and execution of projects across various domains.</li>
              <li><strong>Training and Development:</strong> Offering programs to upskill teams and foster organizational growth.</li>
            </ul>


          </div>
        </div>
      </section> */}


      {/* Building a Nation Section */}
      <section id="building-nation" className="py-10  relative overflow-hidden" style={{ background: "#000000" }}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-color opacity-5 rounded-full animate-float duration-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-color opacity-5 rounded-full -translate-x-1/2 translate-y-1/2 animate-pulse duration-3000"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-primary-light opacity-5 rounded-full animate-spin"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-accent-light opacity-5 rounded-full animate-float duration-1500 delay-500"></div>

        <div className="container mx-auto px-4">
          <div
            ref={el => addToRefs(el)}
            id="nation-title"
            className={`text-center mb-10 ${isVisible['nation-title'] ? 'animate-zoomIn' : 'opacity-0'}`}
          >
            <span className="text-accent-color font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            {/* <h2 className="text-4xl md:text-5xl font-bold mt-10 mb-4 text-accent-color animate-shimmer">Building a Nation</h2> */}
            {/* <div className="w-24 h-1 bg-accent-color mx-auto rounded-full"></div>
            <p className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white animate-zoomIn delay-200"></p> */}
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white animate-zoomIn delay-200">Connecting Lives & Communities </h2>
            <div className="w-24 h-1 bg-accent-color mx-auto rounded-full mb-6 animate-slideInRight delay-400"></div>
          </div>

          <div
            ref={el => addToRefs(el)}
            id="nation-content"
            className={`mx-auto ${isVisible['nation-content'] ? 'animate-fadeIn' : 'opacity-0'}`}
          >
            <p className="text-text-light text-center text-lg mb-12 leading-relaxed">
              Infrastructure is a nation's lifeline. It is what moves people, goods and dreams to their desired destinations.
              Our mission is to optimize this connectivity and boost livelihood for 1.3 billion people of our country, building a stronger, more connected nation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 stagger-children">
              <div className="p-6 bg-card-bg rounded-xl shadow-custom hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-flipInY border border-border-color" style={{ background: "#121212" }}>
                <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4 animate-pulse duration-2000">
                  <FaCheck className="text-primary-color" />
                </div>
                <p className="font-bold text-primary-color text-center">FREEDOM TO DREAM</p>
              </div>

              <div className="p-6 bg-card-bg rounded-xl background-light shadow-custom hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-flipInY border border-border-color" style={{ background: "#121212" }}>
                <div className="w-12 h-12 rounded-full  flex items-center justify-center mx-auto mb-4 animate-pulse duration-2000">
                  <FaCheck className="text-primary-color" />
                </div>
                <p className="font-bold text-primary-color text-center">FREEDOM TO CONNECT</p>
              </div>

              <div className="p-6 bg-card-bg rounded-xl shadow-custom hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-flipInY border border-border-color" style={{ background: "#121212" }}>
                <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4 animate-pulse duration-2000">
                  <FaCheck className="text-primary-color" />
                </div>
                <p className="font-bold text-primary-color text-center">FREEDOM TO GROW</p>
              </div>

              <div className="p-6 bg-card-bg rounded-xl shadow-custom hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-flipInY border border-border-color" style={{ background: "#121212" }}>
                <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4 animate-pulse duration-2000">
                  <FaCheck className="text-primary-color" />
                </div>
                <p className="font-bold text-primary-color text-center">FREEDOM TO COLLABORATE</p>
              </div>
            </div>

            <div className="text-center animate-slideInUp delay-500">
              <Link to="/about/mission-vision" className="btn btn-primary inline-flex items-center group">
                Learn More About Our Vision <FaArrowRight className="ml-2 group-hover:animate-bounce" />
              </Link>
            </div>
          </div>
        </div>
      </section>










      {/* Expertise Section */}
      <section id="expertise" className="py-10  relative">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4">
          <div
            ref={el => addToRefs(el)}
            id="expertise-title"
            className={`text-center mb-16 ${isVisible['expertise-title'] ? 'animate-slideInUp' : 'opacity-0'}`}
          >
            <span className="text-accent-color font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">What We Do Best</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white animate-zoomIn delay-200">Our Expertise</h2>
            <div className="w-24 h-1 bg-accent-color mx-auto rounded-full mb-6 animate-slideInRight delay-400"></div>
            <p className="text-text-light text-center text-lg mb-12 leading-relaxed">
              At Expedient Live, we follow a fundamental principle of 'designing a superlative construction experience'.
              We offer collective expertise in construction design, project management, DPR, authority engineering and quality control services.
            </p>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollExpertise('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-color/80 hover:bg-primary-color text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform -translate-x-6 transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Previous expertise"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollExpertise('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent-color/80 hover:bg-accent-color text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform translate-x-6 transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Next expertise"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              ref={expertiseScrollRef}
              className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-8 px-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              <div className="min-w-[300px] md:min-w-[400px] snap-center">
                <div className="  card h-full  from-custom-dark to-gray-800 p-8 rounded-2xl shadow-xl border border-primary-light/30 hover:shadow-primary-color/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#000000' }}>
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 animate-pulse duration-2000">
                      <FaRoad size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Highway Design</h3>
                      <div className="w-12 h-0.5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">Comprehensive highway design services including alignment, geometric design, pavement design, and safety analysis.</p>
                  <div className="mt-auto">
                    <Link to="/services" className="text-white font-medium flex items-center group">
                      Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="min-w-[300px] md:min-w-[400px] snap-center">
                <div className="card h-full bg-gradient-to-br p-8 rounded-2xl shadow-xl border border-accent-light/30 hover:shadow-accent-color/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#000000' }}>
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 animate-pulse duration-2000">
                      <FaArchway size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Bridge Engineering</h3>
                      <div className="w-12 h-0.5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">Innovative bridge design, structural analysis, and rehabilitation services for all types of bridges and structures.</p>
                  <div className="mt-auto">
                    <Link to="/services" className="text-white font-medium flex items-center group">
                      Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="min-w-[300px] md:min-w-[400px] snap-center">
                <div className="card h-full bg-gradient-to-br  p-8 rounded-2xl shadow-xl border border-primary-light/30 hover:shadow-primary-color/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#000000' }}>
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 animate-pulse duration-2000">
                      <FaBuilding size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Tunnel Construction</h3>
                      <div className="w-12 h-0.5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">Specialized tunnel design and construction management for complex underground infrastructure projects.</p>
                  <div className="mt-auto">
                    <Link to="/services" className="text-white font-medium flex items-center group">
                      Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="min-w-[300px] md:min-w-[400px] snap-center">
                <div className="card h-full bg-gradient-to-br  p-8 rounded-2xl shadow-xl border border-accent-light/30 hover:shadow-accent-color/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#000000' }}>
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 animate-pulse duration-2000">
                      <FaChartLine size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Project Management</h3>
                      <div className="w-12 h-0.5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">Comprehensive project management services ensuring on-time, on-budget delivery with quality assurance.</p>
                  <div className="mt-auto">
                    <Link to="/services" className="text-white font-medium flex items-center group">
                      Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="min-w-[300px] md:min-w-[400px] snap-center">
                <div className="card h-full bg-gradient-to-br  p-8 rounded-2xl shadow-xl border border-primary-light/30 hover:shadow-primary-color/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#000000' }} >
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 animate-pulse duration-2000">
                      <FaLeaf size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Environmental Services</h3>
                      <div className="w-12 h-0.5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">Environmental impact assessments, sustainability planning, and green infrastructure design solutions.</p>
                  <div className="mt-auto">
                    <Link to="/services" className="text-white font-medium flex items-center group">
                      Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="min-w-[300px] md:min-w-[400px] snap-center">
                <div className="card h-full bg-gradient-to-br from-accent-dark/90 to-accent-color/70 p-8 rounded-2xl shadow-xl border border-accent-light/30 hover:shadow-accent-color/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ backgroundColor: '#000000' }}>
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 animate-pulse duration-2000">
                      <FaShip size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Port Development</h3>
                      <div className="w-12 h-0.5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6">Specialized port infrastructure design, coastal engineering, and maritime facility development services.</p>
                  <div className="mt-auto">
                    <Link to="/services" className="text-white font-medium flex items-center group">
                      Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-slideInUp delay-700">
            <Link to="/services/allservice" className="btn btn-primary inline-flex items-center group">
              View All Services <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>





      {/* Projects Highlight */}
      <section id="projects" className="py-10 mb-10 relative" style={{ background: "#000000" }}>
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 w-32 h-32 bg-primary-color opacity-5 rounded-full animate-float duration-2000"></div>
        <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-accent-color opacity-5 rounded-full animate-pulse duration-3000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-light opacity-5 rounded-full animate-pulse duration-5000"></div>

        <div className="container mx-auto px-4" >
          <div
            ref={el => addToRefs(el)}
            id="projects-title"
            className={`text-center mb-16 ${isVisible['projects-title'] ? 'animate-slideInUp' : 'opacity-0'}`}
          >
            <span className="text-accent-color font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-text-dark animate-zoomIn delay-200">Projects</h2>
            <div className="w-24 h-1 bg-accent-color mx-auto rounded-full mb-6 animate-slideInRight delay-400"></div>
            <p className="text-text-light text-center text-lg mb-12 leading-relaxed">
              Expedient Live has worked on more than 170 projects for various eminent departments of the Construction Ministry.
              With government and private sector clients, we are proud to have worked on construction projects
              that have helped bring about positive development in many areas of the country.
            </p>
          </div>

          <div
            ref={el => addToRefs(el)}
            id="projects-grid"
            className={`grid grid-cols-1 md:grid-cols-3 gap-10 stagger-children ${isVisible['projects-grid'] ? 'animate-fadeIn' : 'opacity-0'}`}
          >
            <div className="card hover-zoom overflow-hidden group animate-flipInY  rounded-xl border border-border-color" style={{ background: "#121212" }}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Highway Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent-color text-white text-xs font-semibold rounded-full mb-2 animate-pulse duration-2000">BRIDGE ENGINEERING</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text-dark group-hover:text-accent-color transition-colors">Savitri River Bridge</h3>
                <p className="text-text-light mb-4">An award-winning consultancy project that showcases our engineering excellence and innovative approach.</p>
                <Link to="/projects" className="inline-flex items-center text-accent-color hover:text-accent-dark font-medium group">
                  View Case Study <FaArrowRight className="ml-2 group-hover:ml-3 transition-all group-hover:animate-bounce" />
                </Link>
              </div>
            </div>

            <div className="card hover-zoom overflow-hidden group animate-flipInY  rounded-xl border border-border-color" style={{ background: "#121212" }}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Bridge Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary-color text-white text-xs font-semibold rounded-full mb-2 animate-pulse duration-2000">HIGHWAY DEVELOPMENT</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text-dark group-hover:text-primary-color transition-colors">Mumbai-Pune Corridor</h3>
                <p className="text-text-light mb-4">Capacity augmentation of the Mumbai-Pune corridor to enhance connectivity and reduce travel time.</p>
                <Link to="/projects" className="inline-flex items-center text-primary-color hover:text-primary-dark font-medium group">
                  View Case Study <FaArrowRight className="ml-2 group-hover:ml-3 transition-all group-hover:animate-bounce" />
                </Link>
              </div>
            </div>

            <div className="card hover-zoom overflow-hidden group animate-flipInY rounded-xl border border-border-color" style={{ background: "#121212" }}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Infrastructure Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent-color text-white text-xs font-semibold rounded-full mb-2 animate-pulse duration-2000">INSPECTION SERVICES</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text-dark group-hover:text-accent-color transition-colors">Bridge Inspection</h3>
                <p className="text-text-light mb-4">Comprehensive inspection of bridges on National Highways using Mobile Bridge Inspection Units (MBIU).</p>
                <Link to="/projects" className="inline-flex items-center text-accent-color hover:text-accent-dark font-medium group">
                  View Case Study <FaArrowRight className="ml-2 group-hover:ml-3 transition-all group-hover:animate-bounce" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-slideInUp delay-700">
            <Link to="/projects" className="btn btn-primary inline-flex items-center group">
              View All Projects <FaArrowRight className="ml-2 group-hover:animate-bounce" />
            </Link>
          </div>
        </div>
      </section>




      {/* Growth Stats Section */}

      <section id="growth-stats" className="py-24 bg-background-dark relative overflow-hidden">
       
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-color/5 -skew-x-12 transform origin-top-right animate-pulse duration-3000"></div>
        <div className="absolute left-1/4 top-1/4 w-16 h-16 rounded-full bg-accent-color/10 animate-float"></div>
        <div className="absolute right-1/4 bottom-1/4 w-24 h-24 rounded-full bg-primary-color/10 animate-pulse duration-2000"></div>

        <div className="container mx-auto px-4 relative">
          <div
            ref={el => addToRefs(el)}
            id="growth-content"
            className={`flex flex-col md:flex-row items-center justify-between gap-12 ${isVisible['growth-content'] ? 'animate-fadeIn' : 'opacity-0'}`}
          >
            <div className="md:w-1/3 z-10 animate-slideInLeft delay-300">
              <span className="text-primary-color font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">Financial Performance</span>
              <h2 className="text-4xl font-bold mt-2 mb-6 text-text-dark">Current<br />Stock Performance</h2>
              <div className="w-16 h-1 bg-accent-color rounded-full mb-6 animate-slideInRight delay-500"></div>
              <p className="text-text-light mb-8">
                Our financial growth reflects our commitment to excellence and the trust our clients place in us.
                Download our latest annual report to learn more about our financial performance.
              </p>
              <Link to="/about" className="btn btn-primary inline-flex items-center group">
                DOWNLOAD ANNUAL REPORT <FaArrowRight className="ml-2 group-hover:animate-bounce" />
              </Link>
            </div>

            <div className="md:w-2/3 animate-slideInRight delay-300">
              <div className="bg-gradient-to-br from-card-bg to-background-dark p-10 rounded-2xl shadow-custom border border-border-color hover:shadow-lg transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold mr-4 animate-pulse duration-2000">
                    31%
                  </div>
                  <h3 className="text-3xl font-bold text-text-dark animate-slideInRight delay-200">Year-over-Year Growth</h3>
                </div>

                <div className="bg-card-bg p-6 rounded-xl mb-8 shadow-sm border border-border-color hover:shadow-md transition-all duration-300 animate-fadeIn delay-500">
                  <p className="text-text-light text-lg leading-relaxed mb-4">
                    Our growth is the testimony to the country's progress. Every single success to us is just another step further for the country in its road to being a $1 trillion economy.
                  </p>
                  <p className="text-text-light text-lg leading-relaxed">
                    <span className="font-bold text-primary-color animate-pulse duration-2000">Expedient Live is currently holding 32.60% market share</span> in this segment with works of 3189 kms.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 animate-slideInUp delay-700">
                  <Link to="/about" className="btn btn-accent inline-flex items-center group">
                    VIEW FINANCIALS <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="btn btn-outline group">
                    INVESTOR RELATIONS <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Stats Section */}

      <section id="stats" className="py-24 bg-gradient-to-r from-primary-color to-primary-dark text-white relative overflow-hidden" style={{ background: "#000000" }}>
       
        <div className="absolute inset-0 opacity-10 animate-pulse duration-3000">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-white/5 animate-float duration-3000"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 rounded-full bg-white/5 animate-float duration-2000 delay-500"></div>

        <div className="container mx-auto px-4 relative">
          <div
            ref={el => addToRefs(el)}
            id="stats-content"
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 stagger-children ${isVisible['stats-content'] ? 'animate-fadeIn' : 'opacity-0'}`}
          >
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-zoomIn">
              <div className="text-5xl font-extrabold mb-4 text-white animate-shimmer">175<span className="text-accent-color animate-pulse duration-2000">+</span></div>
              <div className="w-12 h-1 bg-accent-color mx-auto rounded-full mb-4 animate-slideInRight delay-300"></div>
              <p className="text-white/90 uppercase font-medium tracking-wider">PROJECTS<br />COMPLETED</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-zoomIn">
              <div className="text-5xl font-extrabold mb-4 text-white animate-shimmer">4793</div>
              <div className="w-12 h-1 bg-accent-color mx-auto rounded-full mb-4 animate-slideInRight delay-300"></div>
              <p className="text-white/90 uppercase font-medium tracking-wider">KM. DPR<br />PROJECTS<br />COMPLETED</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-zoomIn">
              <div className="text-5xl font-extrabold mb-4 text-white animate-shimmer">53<span className="text-accent-color animate-pulse duration-2000">+</span></div>
              <div className="w-12 h-1 bg-accent-color mx-auto rounded-full mb-4 animate-slideInRight delay-300"></div>
              <p className="text-white/90 uppercase font-medium tracking-wider">ONGOING<br />PROJECTS</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-zoomIn">
              <div className="text-5xl font-extrabold mb-4 text-white animate-shimmer">1958</div>
              <div className="w-12 h-1 bg-accent-color mx-auto rounded-full mb-4 animate-slideInRight delay-300"></div>
              <p className="text-white/90 uppercase font-medium tracking-wider">KM. ONGOING<br />PROJECT<br />SUPERVISION</p>
            </div>
          </div>
        </div>
      </section>




      {/* Clients Section */}
      <section id="clients" className="py-24 bg-background-dark relative">
      
      
        <div className="container mx-auto px-4 relative">
          <div
            ref={el => addToRefs(el)}
            id="clients-title"
            className={`text-center mb-16 ${isVisible['clients-title'] ? 'animate-slideInUp' : 'opacity-0'}`}
          >
            <span className="text-primary-color font-semibold text-sm uppercase tracking-wider animate-pulse duration-2000">Who We Work With</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-text-dark animate-zoomIn delay-200">Our Clients</h2>
            <div className="w-24 h-1 bg-primary-color mx-auto rounded-full mb-6 animate-slideInRight delay-400"></div>
            <p className="text-text-light text-center mx-auto   text-lg animate-fadeIn delay-500">
              We are proud to partner with leading government agencies and organizations to deliver construction projects that make a difference.
            </p>
          </div>

          <div
            ref={el => addToRefs(el)}
            id="clients-grid"
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 stagger-children ${isVisible['clients-grid'] ? 'animate-fadeIn' : 'opacity-0'}`}
          >
            <div className="flex items-center justify-center p-8 bg-card-bg rounded-xl shadow-sm border border-border-color hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-flipInY" style={{ background: "#000000" }}>
              <p className="text-2xl font-bold text-primary-color animate-pulse">MoRTH</p>
            </div>
            <div className="flex items-center justify-center p-8 bg-card-bg rounded-xl shadow-sm border border-border-color hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-flipInY" style={{ background: "#000000" }}  >
              <p className="text-2xl font-bold text-accent-color animate-pulse">NHAI</p>
            </div>
            <div className="flex items-center justify-center p-8 bg-card-bg rounded-xl shadow-sm border border-border-color hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-flipInY" style={{ background: "#000000" }}>
              <p className="text-2xl font-bold text-primary-color animate-pulse">PWD</p>
            </div>
            <div className="flex items-center justify-center p-8 bg-card-bg rounded-xl shadow-sm border border-border-color hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-flipInY" style={{ background: "#000000" }}>
              <p className="text-2xl font-bold text-accent-color animate-pulse">MSRDC</p>
            </div>
            <div className="flex items-center justify-center p-8 bg-card-bg rounded-xl shadow-sm border border-border-color hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-flipInY" style={{ background: "#000000" }}>
              <p className="text-2xl font-bold text-primary-color animate-pulse">CIDCO</p>
            </div>
            <div className="flex items-center justify-center p-8 bg-card-bg rounded-xl shadow-sm border border-border-color hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-flipInY" style={{ background: "#000000" }}>
              <p className="text-2xl font-bold text-accent-color animate-pulse">JNPT</p>
            </div>
          </div>

          <div className="text-center mt-12 animate-slideInUp delay-700">
            <Link to="/contact" className="btn btn-outline inline-flex items-center group">
              Become Our Client <FaArrowRight className="ml-2 group-hover:animate-bounce" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home







