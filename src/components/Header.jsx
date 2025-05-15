import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaRocket, FaPhone, FaEnvelope } from 'react-icons/fa'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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
  }, [location])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-black shadow-lg py-2'
        : 'bg-black/90 backdrop-blur-sm py-4'
    }`}>
      {/* Top contact bar */}
      <div className="hidden md:block bg-primary-dark py-1 border-b border-border-color">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm text-white">
            <a href="tel:999777028" className="flex items-center hover:text-accent-color transition-colors">
              <FaPhone className="mr-2 text-accent-color" />
              <span>999-777-028</span>
            </a>
            <a href="mailto:info@expedientlive.com" className="flex items-center hover:text-accent-color transition-colors">
              <FaEnvelope className="mr-2 text-accent-color" />
              <span>info@expedientlive.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-accent-color rounded-full flex items-center justify-center group-hover:bg-primary-color transition-colors duration-300">
            <FaRocket className="text-white text-xl group-hover:animate-bounce" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-white">EXPEDIENT</span>
            <span className="text-2xl font-bold text-accent-color ml-1 animate-pulse duration-2000">LIVE</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="text-accent-color" />
          ) : (
            <FaBars size={24} className="hover:text-accent-color transition-colors" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3 stagger-children">
          <NavLink to="/" className="animate-fadeIn">Home</NavLink>
          <NavLink to="/about" className="animate-fadeIn">About</NavLink>
          <NavLink to="/services" className="animate-fadeIn">Services</NavLink>
          <NavLink to="/projects" className="animate-fadeIn">Projects</NavLink>
          <NavLink to="/contact" isButton className="animate-fadeIn animate-pulse duration-3000">Contact Us</NavLink>
        </nav>
      </div>

      {/* Mobile Navigation - Slide in from right */}
      <div className={`fixed top-0 right-0 h-full w-full md:hidden transform transition-transform duration-300 ease-in-out z-40 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute top-0 right-0 h-full w-4/5 bg-black shadow-2xl flex flex-col animate-slideInRight border-l border-primary-dark">
          <div className="flex justify-end p-4">
            {/* Spacer for the close button that's already in the header */}
            <div className="w-6 h-6"></div>
          </div>
          <div className="px-6 pt-4 pb-6 bg-primary-dark">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-color rounded-full flex items-center justify-center">
                <FaRocket className="text-white text-sm" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">EXPEDIENT</span>
                <span className="text-xl font-bold text-accent-color ml-1">LIVE</span>
              </div>
            </div>
          </div>
          <nav className="flex flex-col pt-6 stagger-children">
            <MobileNavLink to="/" className="animate-slideInRight delay-100">Home</MobileNavLink>
            <MobileNavLink to="/about" className="animate-slideInRight delay-200">About</MobileNavLink>
            <MobileNavLink to="/services" className="animate-slideInRight delay-300">Services</MobileNavLink>
            <MobileNavLink to="/projects" className="animate-slideInRight delay-400">Projects</MobileNavLink>
            <MobileNavLink to="/contact" className="animate-slideInRight delay-500">Contact</MobileNavLink>
          </nav>
          <div className="mt-auto p-6 border-t border-border-color animate-fadeIn delay-700">
            <div className="flex flex-col space-y-4 mb-6">
              <a href="tel:999777028" className="flex items-center text-white hover:text-accent-color transition-colors">
                <FaPhone className="mr-3 text-accent-color" />
                <span>999-777-028</span>
              </a>
              <a href="mailto:info@expedientlive.com" className="flex items-center text-white hover:text-accent-color transition-colors">
                <FaEnvelope className="mr-3 text-accent-color" />
                <span>info@expedientlive.com</span>
              </a>
            </div>
            <p className="text-sm text-text-light">© {new Date().getFullYear()} Expedient Live</p>
          </div>
        </div>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      </div>
    </header>
  )
}

// Desktop navigation link component
function NavLink({ to, children, isButton = false, className = '' }) {
  const location = useLocation()
  const isActive = location.pathname === to

  if (isButton) {
    return (
      <Link
        to={to}
        className={`ml-4 px-6 py-2 rounded-full bg-accent-color text-white font-medium hover:bg-primary-color transition-all shadow-md hover:shadow-lg ${className}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md font-medium transition-all relative ${
        isActive
          ? 'text-accent-color'
          : 'text-white hover:text-accent-color'
      } ${className}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-color rounded-full animate-slideInRight"></span>
      )}
    </Link>
  )
}

// Mobile navigation link component
function MobileNavLink({ to, children, className = '' }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`py-4 px-4 text-lg font-medium border-b border-border-color ${
        isActive
          ? 'text-accent-color'
          : 'text-white'
      } ${className} hover:bg-card-bg transition-colors`}
    >
      {children}
    </Link>
  )
}

export default Header