import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGlobe, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const contactTypeOptions = [
  { value: '', label: 'I am a...' },
  { value: 'Talent/Artist', label: 'Talent/Artist' },
  { value: 'Athlete', label: 'Athlete' },
  { value: 'Brand/Company', label: 'Brand/Company' },
  { value: 'Government Entity', label: 'Government Entity' },
  { value: 'Investor', label: 'Investor' },
  { value: 'Media Outlet', label: 'Media Outlet' },
  { value: 'Other', label: 'Other' },
];

const serviceInterests = [
  'Talent Management',
  'Sports Management',
  'Media & Content',
  'Brand Partnerships',
  'Investment Opportunities',
];

const offices = [
  'Africa',
  'United Kingdom',
  'Canada',
  'United States',
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    contactType: '',
    interests: [],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${API}/contact`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        interest: formData.contactType + (formData.interests.length > 0 ? ` - ${formData.interests.join(', ')}` : ''),
        message: `Company: ${formData.company || 'N/A'}\n\n${formData.message}`,
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        contactType: '',
        interests: [],
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-white uppercase tracking-tight mb-6">
              Work <span className="text-lmg-yellow">With Us</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-lmg-white/80 max-w-2xl mx-auto">
              Let's Build Something Great Together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 md:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-2 border-lmg-black/20 px-4 py-3 font-body text-lmg-black focus:border-lmg-yellow transition-colors"
                      placeholder="Your Name"
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-2 border-lmg-black/20 px-4 py-3 font-body text-lmg-black focus:border-lmg-yellow transition-colors"
                      placeholder="your@email.com"
                      data-testid="contact-email-input"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-2 border-lmg-black/20 px-4 py-3 font-body text-lmg-black focus:border-lmg-yellow transition-colors"
                      placeholder="+1 234 567 890"
                      data-testid="contact-phone-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-2 border-lmg-black/20 px-4 py-3 font-body text-lmg-black focus:border-lmg-yellow transition-colors"
                      placeholder="Your Company"
                      data-testid="contact-company-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactType" className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2">
                    I am a... *
                  </label>
                  <select
                    id="contactType"
                    name="contactType"
                    value={formData.contactType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border-2 border-lmg-black/20 px-4 py-3 font-body text-lmg-black focus:border-lmg-yellow transition-colors appearance-none cursor-pointer"
                    data-testid="contact-type-select"
                  >
                    {contactTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-4">
                    Service Interest
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {serviceInterests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestChange(interest)}
                        className={`px-4 py-2 font-body text-sm border-2 transition-colors ${
                          formData.interests.includes(interest)
                            ? 'bg-lmg-yellow border-lmg-yellow text-lmg-black'
                            : 'border-lmg-black/20 text-lmg-black hover:border-lmg-yellow'
                        }`}
                        data-testid={`interest-${interest.toLowerCase().replace(/ /g, '-')}`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border-2 border-lmg-black/20 px-4 py-3 font-body text-lmg-black focus:border-lmg-yellow transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    data-testid="contact-message-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-lmg-yellow text-lmg-black font-body font-medium px-8 py-4 text-lg uppercase tracking-wider hover:bg-lmg-black hover:text-lmg-yellow transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="contact-submit-button"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend className="text-xl" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-body text-center"
                    data-testid="contact-success-message"
                  >
                    Thank you! We'll be in touch soon.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 font-body text-center"
                    data-testid="contact-error-message"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-lmg-black uppercase mb-6">
                  Contact <span className="text-lmg-yellow">Information</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lmg-yellow flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-lmg-black text-xl" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-lmg-black/60 uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:info@wearelemieux.com" className="font-body text-lg text-lmg-black hover:text-lmg-yellow transition-colors">
                        info@wearelemieux.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lmg-yellow flex items-center justify-center flex-shrink-0">
                      <FiGlobe className="text-lmg-black text-xl" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-lmg-black/60 uppercase tracking-wider mb-1">Website</p>
                      <span className="font-body text-lg text-lmg-black">www.wearelemieux.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lmg-yellow flex items-center justify-center flex-shrink-0">
                      <FiPhone className="text-lmg-black text-xl" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-lmg-black/60 uppercase tracking-wider mb-1">Phone</p>
                      <p className="font-body text-lg text-lmg-black">+234 703 472 0462</p>
                      <p className="font-body text-lg text-lmg-black">+1 262 709 8704</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-lmg-black uppercase mb-4">
                  Global <span className="text-lmg-yellow">Offices</span>
                </h3>
                <div className="space-y-3">
                  {offices.map((office) => (
                    <div key={office} className="flex items-center gap-3">
                      <FiMapPin className="text-lmg-yellow" />
                      <span className="font-body text-base text-lmg-black/80">{office}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
