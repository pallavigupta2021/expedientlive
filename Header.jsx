import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaRocket, FaBars, FaTimes, FaChevronDown, FaTwitter, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownRefs = useRef({})

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

  // Toggle dropdown menu
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className={`fixed md:fixed sm:absolute  w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-black/95 backdrop-blur-md shadow-lg py-2'
      : 'bg-black/90 backdrop-blur-sm py-3'
      }`}>
      {/* Top contact bar - only on desktop */}
      <div className="hidden lg:block md:block bg-primary-dark/90 py-1 border-b border-border-color">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-card-bg flex items-center justify-center text-white hover:bg-accent-color transition-all duration-300">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-card-bg flex items-center justify-center text-white hover:bg-accent-color transition-all duration-300">
              <FaLinkedin size={16} />
            </a>
          </div>
          <div className="flex items-center space-x-6 text-sm text-white">
            <a href="tel:9997770728" className="flex items-center hover:text-accent-color transition-colors">
              <FaPhone className="mr-2 text-accent-color" size={14} />
              <span>999-777-0728</span>
            </a>
            <a href="mailto:info@expedientlive.com" className="flex items-center hover:text-accent-color transition-colors">
              <FaEnvelope className="mr-2 text-accent-color" size={14} />
              <span>info@expedientlive.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - smaller on mobile */}
        <Link to="/" className="flex items-center space-x-2 group py-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-color rounded-full flex items-center justify-center group-hover:bg-primary-color transition-colors duration-300">
            <FaRocket className="text-white text-sm sm:text-xl group-hover:animate-bounce" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-extrabold text-white">EXPEDIENT</span>
            <span className="text-xl sm:text-2xl font-bold text-accent-color ml-1 animate-pulse duration-2000">LIVE</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="text-accent-color" />
          ) : (
            <FaBars size={24} className="hover:text-accent-color transition-colors" />
          )}
        </button>

        {/* Desktop Navigation - hidden on mobile, visible from lg breakpoint */}
        <nav className="hidden lg:flex md:flex items-center space-x-1 xl:space-x-3">
          <NavLink to="/">Home</NavLink>

          {/* About Dropdown */}
          <div className="relative" ref={el => dropdownRefs.current.about = el}>
            <button
              onClick={() => toggleDropdown('about')}
              className={`px-3 xl:px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center hover:bg-card-bg/30 ${location.pathname.startsWith('/about')
                ? 'text-accent-color bg-card-bg/30'
                : 'text-white hover:text-accent-color'
                }`}
            >
              About
              <FaChevronDown className={`ml-2 text-xs transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-1 w-40 shadow-lg overflow-hidden animate-fadeIn z-50 bg-black border border-border-color rounded-md">
                <div className="py-1">
                  <DropdownLink to="/about/team">Our Team</DropdownLink>
                  <DropdownLink to="/about/ethics">Ethics & Values</DropdownLink>
                  <DropdownLink to="/about/achievments">Achievements</DropdownLink>
                  <DropdownLink to="/about/mission-vision">Mission & Vision</DropdownLink>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative" ref={el => dropdownRefs.current.services = el}>
            <button
              onClick={() => toggleDropdown('services')}
              className={`px-3 xl:px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center hover:bg-card-bg/30 ${location.pathname.startsWith('/services')
                ? 'text-accent-color bg-card-bg/30'
                : 'text-white hover:text-accent-color'
                }`}
            >
              Services
              <FaChevronDown className={`ml-2 text-xs transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 mt-1 w-48 shadow-lg overflow-hidden animate-fadeIn z-50 bg-black border border-border-color rounded-md">
                <div className="py-1">
                  <DropdownLink to="/services/allservice">All Services</DropdownLink>
                  <DropdownLink to="/services/bridge">Bridge </DropdownLink>
                  <DropdownLink to="/services/road"> Highway & Road </DropdownLink>
                  <DropdownLink to="/services/tunnel"> Building Work</DropdownLink>
                  <DropdownLink to="/services/project-management">Hotel</DropdownLink>
                  <DropdownLink to="/services/project-management">Real State</DropdownLink>


                </div>
              </div>
            )}
          </div>

          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact" isButton>Contact</NavLink>
        </nav>
      </div>

      {/* Mobile Navigation - Slide in from right */}
      <div className={`fixed top-0 right-0  w-full lg:hidden  md:hidden  z-20 ${isMenuOpen ? 'visible' : 'invisible'
        }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          style={{ zIndex: 1 }}
        ></div>

        <div
          className={`absolute right-0 w-4/5 max-w-sm shadow-2xl flex flex-col border-l border-primary-dark transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ background: "#000000", zIndex: 2, marginTop: "64px" }}
        >

          <nav className="flex flex-col" style={{ background: "#000000" }}>
            <Link to="/" className="py-3 px-4 text-base font-medium border-b border-border-color text-white hover:bg-card-bg transition-colors">
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div className="border-b border-border-color">
              <button
                onClick={() => toggleDropdown('mobileAbout')}
                className="py-3 px-4 text-base font-medium w-full text-left flex justify-between items-center text-white hover:bg-card-bg transition-colors"
              >
                <span>About</span>
                <FaChevronDown className={`transition-transform ${activeDropdown === 'mobileAbout' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'mobileAbout' && (
                <div style={{ background: "#111111" }}>
                  <Link to="/about/team" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">
                    Our Team
                  </Link>
                  <Link to="/about/ethics" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">
                    Ethics & Values
                  </Link>
                  <Link to="/about/ethics" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">Achievements</Link>

                  <Link to="/about/mission-vision" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">Mission & Vision </Link>
                </div>

              )}
            </div>

            {/* Mobile Services Dropdown */}
            <div className="border-b border-border-color">
              <button
                onClick={() => toggleDropdown('mobileServices')}
                className="py-3 px-4 text-base font-medium w-full text-left flex justify-between items-center text-white hover:bg-card-bg transition-colors"
              >
                <span>Services</span>
                <FaChevronDown className={`transition-transform ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'mobileServices' && (
                <div style={{ background: "#111111" }}>
                  <Link to="/services/allservice" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">
                    All Services
                  </Link>
                  <Link to="/services/bridge" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">
                    Bridge
                  </Link>
                  <Link to="/services/road" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">
                    Highway & Road
                  </Link>

                  <Link to="/services/tunnel" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">
                    Building Work
                  </Link>

                  <Link to="/services/hotel" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">
                    Hotel
                  </Link>

                  <Link to="/services/real-state" className="block py-3 px-8 text-sm border-b border-border-color/50 text-white hover:text-accent-color">
                    Real State
                  </Link>

                </div>
              )}
            </div>

            <Link to="/projects" className="py-3 px-4 text-base font-medium border-b border-border-color text-white hover:bg-card-bg transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="py-3 px-4 text-base font-medium border-b border-border-color text-white hover:bg-card-bg transition-colors">
              Contact
            </Link>
          </nav>
          <div className="mt-auto p-6 border-t border-border-color" style={{ background: "#000000" }}>
            <div className="flex flex-col space-y-4 mb-6">
              <a href="tel:9997770728" className="flex items-center text-white hover:text-accent-color transition-colors">
                <FaPhone className="mr-3 text-accent-color" />
                <span>999-777-0728</span>
              </a>
              <a href="mailto:info@expedientlive.com" className="flex items-center text-white hover:text-accent-color transition-colors">
                <FaEnvelope className="mr-3 text-accent-color" />
                <span>info@expedientlive.com</span>
              </a>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-8 h-8 rounded-full bg-card-bg flex items-center justify-center text-white hover:bg-accent-color transition-all duration-300">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-card-bg flex items-center justify-center text-white hover:bg-accent-color transition-all duration-300">
                <FaLinkedin size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

// Desktop navigation link component
function NavLink({ to, children, isButton = false, className = '' }) {
  const location = useLocation()
  const isActive = location.pathname === to ||
    (location.pathname === '/' && to === '/') ||
    (location.pathname.startsWith(to) && to !== '/')

  if (isButton) {
    return (
      <Link
        to={to}
        className={`ml-2 xl:ml-4 px-4 xl:px-6 py-2 rounded-full bg-accent-color text-white font-medium hover:bg-primary-color transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${className}`}
      >
        <span className="flex items-center">
          {children}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </Link>
    )
  }

  return (
    <Link
      to={to}
      className={`px-3 xl:px-4 py-2 rounded-md font-medium transition-all duration-300 relative hover:bg-card-bg/30 ${isActive
        ? 'text-accent-color bg-card-bg/30'
        : 'text-white hover:text-accent-color'
        } ${className}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-color rounded-full"></span>
      )}
    </Link>
  )
}

// Dropdown link component
function DropdownLink({ to, children, exact = false }) {
  const location = useLocation()
  const isActive = exact
    ? location.pathname === to
    : location.pathname.startsWith(to)

  return (
    <Link
      to={to}
      className={`block px-4 py-2 text-sm hover:bg-primary-dark transition-colors ${isActive ? 'text-accent-color font-medium' : 'text-white'
        }`}
    >
      {children}
    </Link>
  )
}

// Mobile navigation link component
function MobileNavLink({ to, children, className = '' }) {
  const location = useLocation()
  const isActive = location.pathname === to ||
    (location.pathname === '/' && to === '/') ||
    (location.pathname.startsWith(to) && to !== '/')

  return (
    <Link
      to={to}
      className={`py-3 px-4 text-base font-medium border-b border-border-color ${isActive
        ? 'text-accent-color bg-card-bg'
        : 'text-white hover:bg-card-bg'
        } ${className} transition-colors`}
    >
      {children}
      {isActive && (
        <span className="ml-2 text-accent-color">•</span>
      )}
    </Link>
  )
}

// Mobile dropdown link component
function MobileDropdownLink({ to, children, exact = false }) {
  const location = useLocation()
  const isActive = exact
    ? location.pathname === to
    : location.pathname.startsWith(to)

  return (
    <Link
      to={to}
      className={`block py-2 px-8 text-sm border-b border-border-color/50 ${isActive ? 'text-accent-color bg-card-bg/50' : 'text-text-light hover:text-white'
        }`}
    >
      {children}
    </Link>
  )
}

export default Header























