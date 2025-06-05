
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax, FaClock } from 'react-icons/fa'

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   subject: '',
  //   message: ''
  // })

  // const [formSubmitted, setFormSubmitted] = useState(false)

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // In a real application, you would send the form data to a server here
  //   console.log('Form submitted:', formData)
  //   setFormSubmitted(true)
  //   // Reset form after submission
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     subject: '',
  //     message: ''
  //   })
  // }

  return (
    <div className="pt-16 bg-black"> {/* Add padding to account for fixed header */}

      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80')" }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            {/* <p className="text-xl leading-relaxed">Get in touch with our team for inquiries, collaborations, or support</p> */}
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <section className="py-16 bg-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32">
            {/* Card 1 - Address */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-4">
                  <FaMapMarkerAlt size={24} className="text-[#FFC607]" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Location</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Expedient Live Research and Consultancy Pvt. Ltd.<br />
                301, 3rd Floor, C-76, Sector - 63,<br />

                Noida, Uttar Pradesh 201301

              </p>
              {/* <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0456869175397!2d77.385178!3d28.6175177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjjCsDM3JzAzLjEiTiA3N8KwMjMnMDYuNiJF!5e0!3m2!1sen!2sin!4v1718194825037!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#FFC607] hover:text-white transition-colors"
              >
                <span>View on Google Maps</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a> */}
            </div>

            {/* Card 2 - Contact */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-4">
                  <FaPhone size={24} className="text-[#FFC607]" />
                </div>
                <h3 className="text-xl font-bold text-white">Contact Details</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-[#FFC607] mr-3" />
                  <p className="text-gray-400">999-777-0728</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-[#FFC607] mr-3" />
                  <a href="mailto:info@expedientlive.com" className="text-gray-400 hover:text-[#FFC607] transition-colors">
                    info@expedientlive.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaFax className="text-[#FFC607] mr-3" />
                  <p className="text-gray-400">999-777-0728</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Hours */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-800 hover:border-[#FFC607] transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#FFC607]/10 flex items-center justify-center mr-4">
                  <FaClock size={24} className="text-[#FFC607]" />
                </div>
                <h3 className="text-xl font-bold text-white">Working Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Us On The Map</h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400  mx-auto mb-4">
              Visit our office in Noida to discuss your project requirements. Conveniently located in Sector 63.
            </p>
            <a
              href="https://www.google.com/maps/place/Plot+No+C,+76,+Sector+63+Rd,+C+Block,+Sector+63,+Noida,+Hazratpur+Wajidpur,+Uttar+Pradesh+201301/@28.6177413,77.3804198,17z/data=!3m1!4b1!4m10!1m2!2m1!1sC-+76,+Sector+63+Rd+C+Block,+Sector+63+Noida,+Hazratpur+Wajidpur,+Uttar+Pradesh+201301!3m6!1s0x390ceff3427f6a17:0xb06a2d3f7237b807!8m2!3d28.6177367!4d77.3850332!15sClZDLSA3NiwgU2VjdG9yIDYzIFJkIEMgQmxvY2ssIFNlY3RvciA2MyBOb2lkYSwgSGF6cmF0cHVyIFdhamlkcHVyLCBVdHRhciBQcmFkZXNoIDIwMTMwMZIBCnN1YnByZW1pc2XgAQA!16s%2Fg%2F11s195s0yg?hl=en&entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFC607] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition"
            >
              View on Google Maps
            </a>
          </div>

          <div className="w-full h-[500px] bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.810104028597!2d77.37452489159274!3d28.616556829162932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5538f8142ef%3A0xd9fc1d637d601f94!2sC-76%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1717665433000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Expedient Live Location"
              className="filter invert-[.85] hue-rotate-180"
            ></iframe>
          </div>
        </div>
      </section>


      {/* Get In Touch Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-[#FFC607] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 mb-8">
              We're here to answer any questions you may have about our services, projects, or career opportunities.
              Feel free to reach out to us using any of the contact methods above.
            </p>

            <a
              href="mailto:info@expedientlive.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#FFC607] text-black font-medium rounded-full hover:bg-white transition-all duration-300"
            >
              <FaEnvelope className="mr-2" />
              Email Us Now
            </a>
          </div>
        </div>
      </section> */}

    </div>
  )
}

export default Contact
