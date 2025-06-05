import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown, FaTwitter, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'
import logo from '/headerlogo.svg';

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
    console.log('Route changed, closing dropdowns')
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target)) {
        console.log('Click outside detected, closing dropdown')
        setActiveDropdown(null)
      }
    }

    // Only add the event listener for desktop dropdowns, not mobile
    if (activeDropdown && !activeDropdown.startsWith('mobile')) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  // Debug activeDropdown state changes
  useEffect(() => {
    console.log('activeDropdown state changed to:', activeDropdown)
  }, [activeDropdown])

  // Toggle dropdown menu
  const toggleDropdown = (name) => {
    console.log('Toggling dropdown:', name, 'Current active:', activeDropdown)
    setActiveDropdown(prevActive => {
      const newValue = prevActive === name ? null : name
      console.log('Setting activeDropdown from', prevActive, 'to:', newValue)
      return newValue
    })
  }

  return (
    <header className={`fixed md:fixed sm:fixed  w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-black/95 backdrop-blur-md shadow-lg'
      : 'bg-black/90 backdrop-blur-sm'
      }`}>
      {/* Top contact bar - only on desktop */}
      <div className="hidden lg:block md:block py-1 border-b border-border-color" style={{ backgroundColor: 'var(--color-gray-900)' }}>
        <div className="container mx-auto px-4 flex justify-between items-center" >
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
          <img src={logo} alt="Expedient Live Logo" />
          <div>
            {/* <span className="text-xl sm:text-2xl font-extrabold text-white">EXPEDIENT</span> */}
            {/* <span className="text-xl sm:text-2xl font-bold text-accent-color ml-1 animate-pulse duration-2000">LIVE</span> */}
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
              className={`px-3 xl:px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center ${location.pathname.startsWith('/about')
                ? 'text-black bg-[#FFC607]'
                : 'text-white hover:text-black hover:bg-[#FFC607]'
                }`}
            >
              About
              <FaChevronDown className={`ml-2 text-xs transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-1 w-40 shadow-lg overflow-hidden animate-fadeIn z-50 bg-black border border-border-color rounded-md">
                <div className="py-1">
                  <DropdownLink to="/about/ethics">Ethics & Values</DropdownLink>
                  <DropdownLink to="/about/mission-vision">Mission & Vision</DropdownLink>
                  <DropdownLink to="/about/services">Services</DropdownLink>
                </div>
              </div>
            )}
          </div>

          {/* Sectros Dropdown */}

          {/* <div className="relative" ref={el => dropdownRefs.current.sectors = el}>
            <button
              onClick={() => toggleDropdown('sectors')}
              className={`px-3 xl:px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center ${location.pathname.startsWith('/sectors')
                ? 'text-black bg-[#FFC607]'
                : 'text-white hover:text-black hover:bg-[#FFC607]'
                }`}
            >
              Sectors
              <FaChevronDown className={`ml-2 text-xs transition-transform ${activeDropdown === 'sectors' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'sectors' && (
              <div className="absolute top-full left-0 mt-1 w-64 shadow-lg overflow-hidden animate-fadeIn z-50 bg-black border border-border-color rounded-md">
                <div className="py-1">
                  <DropdownLink to="/sectors/highway-rural-roads">Highways & Rural Roads</DropdownLink>
                  <DropdownLink to="/sectors/bridge">Bridges, ROBs and Flyovers</DropdownLink>
                  <DropdownLink to="/sectors/human-resource">Human Resource Development</DropdownLink>
                  <DropdownLink to="/sectors/building-structures">Building & Structures</DropdownLink>
                  <DropdownLink to="/sectors/airports">Airports</DropdownLink>
                  <DropdownLink to="/sectors/urban-infrastructure">Urban Infrastructure</DropdownLink>
                  <DropdownLink to="/sectors/traffic-transportation">Traffic and Transportation</DropdownLink>
                  <DropdownLink to="/sectors/water-sewerage">Water Supply & Sewerage</DropdownLink>
                  <DropdownLink to="/sectors/geotechnical">Geo-technical Investigation</DropdownLink>
                  <DropdownLink to="/sectors/quality-control">Quality Control & Material Testing</DropdownLink>
                </div>
              </div>
            )}
          </div> */}

           <NavLink to="/sectors">Sectors</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/career">Career</NavLink>
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
            <Link to="/" className={`py-3 px-4 text-base font-medium border-b border-border-color transition-colors ${location.pathname === '/' ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}>
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div className="border-b border-border-color">
              <button
                onClick={(e) => {
                  console.log('Mobile About button clicked')
                  e.preventDefault()
                  e.stopPropagation()
                  setTimeout(() => {
                    toggleDropdown('mobileAbout')
                  }, 0)
                }}
                className={`py-3 px-4 text-base font-medium w-full text-left flex justify-between items-center transition-colors focus:outline-none focus:bg-[#FFC607] focus:text-black ${location.pathname.startsWith('/about') ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}
                type="button"
              >
                <span>About</span>
                <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === 'mobileAbout' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'mobileAbout' && (
                <div className="animate-fadeIn" style={{ background: "#111111" }}>
                  <Link
                    to="/about/ethics"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-8 text-sm border-b border-border-color/50 transition-colors ${location.pathname === '/about/ethics' ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}
                  >
                    Ethics & Values
                  </Link>
                  <Link
                    to="/about/mission-vision"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-8 text-sm border-b border-border-color/50 transition-colors ${location.pathname === '/about/mission-vision' ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    to="/about/services"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-8 text-sm border-b border-border-color/50 transition-colors ${location.pathname === '/about/services' ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}
                  >
                    Services
                  </Link>
                </div>
              )}
            </div>



           

             <Link to="/sectors" className={`py-3 px-4 text-base font-medium border-b border-border-color transition-colors ${location.pathname.startsWith('/sectors') ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}>
              Sectors
            </Link>

            <Link to="/projects" className={`py-3 px-4 text-base font-medium border-b border-border-color transition-colors ${location.pathname.startsWith('/projects') ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}>
              Projects
            </Link>

            <Link to="/career" className={`py-3 px-4 text-base font-medium border-b border-border-color transition-colors ${location.pathname.startsWith('/career') ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}>
              Career
            </Link>

            <Link to="/contact" className={`py-3 px-4 text-base font-medium border-b border-border-color transition-colors ${location.pathname.startsWith('/contact') ? 'text-black bg-[#FFC607]' : 'text-white hover:text-black hover:bg-[#FFC607]'}`}>
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
      className={`px-3 xl:px-4 py-2 rounded-md font-medium transition-all duration-300 relative ${isActive
        ? 'text-black bg-[#FFC607]'
        : 'text-white hover:text-black hover:bg-[#FFC607]'
        } ${className}`}
    >
      {children}
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
      className={`block px-4 py-2 text-sm transition-colors ${isActive
        ? 'text-black bg-[#FFC607] font-medium'
        : 'text-white hover:text-black hover:bg-[#FFC607]'
        }`}
    >
      {children}
    </Link>
  )
}



export default Header


