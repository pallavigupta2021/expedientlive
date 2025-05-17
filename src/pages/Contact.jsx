import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax, FaClock } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="pt-16 bg-background-dark"> {/* Add padding to account for fixed header */}
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80')" }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">Get in touch with our team for inquiries, collaborations, or support</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information */}
            <div className="lg:w-1/3 mb-12 lg:mb-0 lg:pr-8">
              <h2 className="text-3xl font-bold mb-6 text-text-dark">Get In Touch</h2>
              <p className="text-text-light mb-8">
                We're here to answer any questions you may have about our services, projects, or career opportunities. Feel free to reach out to us using any of the contact methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-color mr-4 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark mb-1">Head Office</h3>
                    <p className="text-text-light">
                      Anil Associates<br />

                      Ground Floor, H.No. 208/9 State Bank Colony Station Road India, Bareilly Uttar Pradesh, 243001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-color mr-4 mt-1">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark mb-1">Phone</h3>
                    <p className="text-text-light">
                      999-777-0728
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-color mr-4 mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark mb-1">Email</h3>
                    <p className="text-text-light">
                      info@expedientlive.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-color mr-4 mt-1">
                    <FaFax size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark mb-1">Fax</h3>
                    <p className="text-text-light">
                      999-777-0728
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-color mr-4 mt-1">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark mb-1">Working Hours</h3>
                    <p className="text-text-light">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 lg:pl-8 lg:border-l border-border-color">
              <h2 className="text-3xl font-bold mb-6 text-text-dark">Send Us a Message</h2>

              {formSubmitted ? (
                <div className="bg-green-900/20 border border-green-600 text-green-400 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! We will get back to you shortly.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-text-dark font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card-bg border border-border-color text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-text-dark font-medium mb-2">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card-bg border border-border-color text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-text-dark font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card-bg border border-border-color text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-text-dark font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card-bg border border-border-color text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-dark font-medium mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-2 bg-card-bg border border-border-color text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-primary-color hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 mb-5 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-text-dark">Our Location</h2>
          <div className="w-full h-[400px] bg-card-bg rounded-lg overflow-hidden border border-border-color">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9681963471!2d79.4066195!3d28.3599499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a0a0a0a0a0a0a%3A0x0a0a0a0a0a0a0a0a!2sGround%20Floor%2C%20H.No.%20208%2F9%20State%20Bank%20Colony%20Station%20Road%2C%20Bareilly%2C%20Uttar%20Pradesh%2C%20243001!5e0!3m2!1sen!2sin!4v1718194825037!5m2!1sen!2sin"
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
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/t7hjDEZskqXEA3sL8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-color hover:text-accent-color transition-colors"
            >
              <span>View on Google Maps</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
