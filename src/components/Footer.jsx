import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaRocket, FaArrowRight, FaChevronRight } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background-dark to-black text-white pt-16 pb-6 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-color via-accent-color to-primary-color"></div>

      {/* Wave shape divider */}
      <div className="absolute -top-10 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 text-background-dark">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:pr-8">
            <div className="flex items-center space-x-2 mb-6">
              <FaRocket className="text-accent-color text-3xl" />
              <div>
                <span className="text-2xl font-extrabold text-white">EXPEDIENT</span>
                <span className="text-2xl font-bold text-accent-color ml-1">LIVE</span>
              </div>
            </div>
            <p className="mb-6 text-text-light leading-relaxed">Expedient Consultancy Services is one of India’s fastest growing projects management consultancy firm in the field of infrastructure design.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-white hover:bg-accent-color transition-all duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-white hover:bg-accent-color transition-all duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-white hover:bg-accent-color transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-white hover:bg-accent-color transition-all duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-color rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>



          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent-color rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-accent-color" />
                <span className="text-text-light">Vashi Railway Station, Sector 30, Vashi<br />Navi Mumbai, Maharashtra 400703</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-accent-color" />
                <span className="text-text-light">999-777-028</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent-color" />
                <span className="text-text-light">info@expedientlive.com</span>
              </li>
            </ul>

            <Link to="/contact" className="inline-flex items-center mt-6 text-white bg-accent-color hover:bg-accent-dark px-4 py-2 rounded-md transition-all duration-300">
              Get in Touch <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="border-t border-border-color mt-12 pt-8 text-center">
          <p className="text-text-light">&copy; {new Date().getFullYear()} Expedient Live. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Footer link component
function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-text-light hover:text-accent-color transition-colors duration-300 flex items-center">
        <FaChevronRight className="mr-2 text-accent-color text-xs" />
        {children}
      </Link>
    </li>
  )
}

export default Footer