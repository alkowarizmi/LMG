import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const interestOptions = [
  { value: '', label: 'Select Interest' },
  { value: 'Talent Management', label: 'Talent Management' },
  { value: 'Sports Management', label: 'Sports Management' },
  { value: 'Brand Partnership', label: 'Brand Partnership' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
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
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-black uppercase tracking-tight mb-6"
              data-testid="contact-headline"
            >
              Work <span className="text-lmg-yellow">With Us</span>
            </h2>

            <p 
              className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed mb-10"
              data-testid="contact-subheadline"
            >
              Whether you're a creative, athlete, public figure, or brand, 
              Lemieux Management Group is positioned to help you grow, connect, 
              and scale globally.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lmg-yellow flex items-center justify-center">
                  <FiMail className="text-lmg-black text-xl" />
                </div>
                <div>
                  <p className="font-body text-sm text-lmg-black/60 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:info@wearelemieux.com"
                    className="font-body text-lg text-lmg-black hover:text-lmg-yellow transition-colors"
                    data-testid="contact-email"
                  >
                    info@wearelemieux.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lmg-yellow flex items-center justify-center">
                  <FiMapPin className="text-lmg-black text-xl" />
                </div>
                <div>
                  <p className="font-body text-sm text-lmg-black/60 uppercase tracking-wider">
                    Location
                  </p>
                  <p 
                    className="font-body text-lg text-lmg-black"
                    data-testid="contact-location"
                  >
                    Africa | Global Reach
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              data-testid="contact-form"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2"
                  >
                    Name *
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
                  <label
                    htmlFor="email"
                    className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2"
                  >
                    Email *
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
                  <label
                    htmlFor="phone"
                    className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2"
                  >
                    Phone
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
                  <label
                    htmlFor="interest"
                    className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2"
                  >
                    Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border-2 border-lmg-black/20 px-4 py-3 font-body text-lmg-black focus:border-lmg-yellow transition-colors appearance-none cursor-pointer"
                    data-testid="contact-interest-select"
                  >
                    {interestOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-body text-sm text-lmg-black/60 uppercase tracking-wider block mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-2 border-lmg-black/20 px-4 py-3 font-body text-lmg-black focus:border-lmg-yellow transition-colors resize-none"
                  placeholder="Tell us about yourself..."
                  data-testid="contact-message-textarea"
                />
              </div>

              {/* Submit Button */}
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
                    Get In Touch
                  </>
                )}
              </button>

              {/* Status Messages */}
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
