import { motion } from 'framer-motion';
import { FiUsers, FiFilm, FiBriefcase, FiCheckCircle } from 'react-icons/fi';

const ServicesPage = () => {
  return (
    <div data-testid="services-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-white uppercase tracking-tight mb-6">
              Our <span className="text-lmg-yellow">Services</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-lmg-white/80 max-w-2xl mx-auto">
              Comprehensive Solutions for Talent, Brands & Partners
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service 1: Talent Management */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white" data-testid="service-section-1">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-lmg-black flex items-center justify-center">
                <FiUsers className="text-lmg-yellow text-2xl" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-lmg-black uppercase tracking-tight">
                Talent Management & Representation
              </h2>
            </div>
            <p className="font-body text-base md:text-lg text-lmg-black/80 max-w-3xl">
              We provide end-to-end talent management services tailored to the unique needs of each client.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Career Strategy and Brand Positioning"
              description="We work closely with talents to define their career direction, clarify their brand identity, and position them effectively within their industry."
            />
            <ServiceCard 
              title="Contract Negotiation and Deal Structuring"
              description="LMG represents talents in negotiations to ensure fair value, clear terms, and professional deal structures."
            />
            <ServiceCard 
              title="Brand Partnerships and Endorsements"
              description="We connect talents with brands that align with their image and values, structuring partnerships that enhance credibility and revenue."
            />
            <ServiceCard 
              title="Media Placements and Visibility"
              description="Through our media connections and content strategy, we help talents secure interviews, features, and visibility opportunities."
            />
            <ServiceCard 
              title="Long-Term Career Planning"
              description="Beyond immediate opportunities, we provide ongoing advisory support — helping talents make informed decisions and build sustainable careers."
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 font-body text-base md:text-lg italic text-center text-lmg-black/80 max-w-4xl mx-auto"
          >
            "Our management approach is collaborative, strategic, and growth-focused, ensuring that talents remain actively involved while benefiting from professional guidance and industry expertise."
          </motion.p>
        </div>
      </section>

      {/* Service 2: Media & Content */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-black" data-testid="service-section-2">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-lmg-yellow flex items-center justify-center">
                <FiFilm className="text-lmg-black text-2xl" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-lmg-white uppercase tracking-tight">
                Media & Content Development
              </h2>
            </div>
            <p className="font-body text-base md:text-lg text-lmg-white/80 max-w-3xl">
              At LMG, we are a media-driven talent company that leverages storytelling to expand your influence and visibility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCardDark 
              title="Podcast & Digital Content"
              description="We help you create engaging podcasts, videos, and digital content that showcase your expertise and personality."
            />
            <ServiceCardDark 
              title="Interview Placements & Media Features"
              description="Gain credibility and exposure through strategic media placements. We connect you with top media outlets."
            />
            <ServiceCardDark 
              title="Social Media Strategy"
              description="We design tailored social media strategies to grow your audience and boost engagement."
            />
            <ServiceCardDark 
              title="Brand Storytelling"
              description="Your story is your power. We craft compelling narratives that communicate who you are and what makes you unique."
            />
            <ServiceCardDark 
              title="Digital Footprint & Brand Ownership"
              description="We help you take control of your story across all digital platforms with consistent, authentic messaging."
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 font-heading text-xl md:text-2xl font-bold text-lmg-yellow text-center"
          >
            We don't just create content — we help you own your story, grow your influence, and leave a lasting digital footprint.
          </motion.p>
        </div>
      </section>

      {/* Service 3: Brand Partnerships */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-light-grey" data-testid="service-section-3">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-lmg-black flex items-center justify-center">
                <FiBriefcase className="text-lmg-yellow text-2xl" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-lmg-black uppercase tracking-tight">
                Brand & Corporate Partnerships
              </h2>
            </div>
            <p className="font-body text-base md:text-lg text-lmg-black/80 max-w-3xl">
              We create strategic partnerships that connect brands with the right talent and platforms, driving visibility, engagement, and impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard 
              title="Influencer & Ambassador Campaigns"
              description="We match brands with the perfect influencers and ambassadors to authentically promote products, services, and campaigns."
            />
            <ServiceCard 
              title="Event Partnerships & Activations"
              description="From live events to experiential activations, we design partnerships that create memorable brand experiences."
            />
            <ServiceCard 
              title="Product Placement & Sponsored Content"
              description="We integrate brands seamlessly into content, ensuring organic exposure that resonates with audiences."
            />
            <ServiceCard 
              title="Joint Marketing & Visibility Campaigns"
              description="We collaborate on marketing initiatives that amplify brand presence and strengthen talent-audience connections."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="p-6 md:p-8 bg-lmg-white border border-lmg-black/10 hover:border-lmg-yellow transition-colors duration-300"
  >
    <div className="flex items-start gap-3 mb-4">
      <FiCheckCircle className="text-lmg-yellow text-xl mt-1 flex-shrink-0" />
      <h3 className="font-heading text-lg font-bold text-lmg-black uppercase">
        {title}
      </h3>
    </div>
    <p className="font-body text-sm text-lmg-black/70 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const ServiceCardDark = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="p-6 md:p-8 bg-lmg-dark-grey border border-lmg-white/10 hover:border-lmg-yellow transition-colors duration-300"
  >
    <div className="flex items-start gap-3 mb-4">
      <FiCheckCircle className="text-lmg-yellow text-xl mt-1 flex-shrink-0" />
      <h3 className="font-heading text-lg font-bold text-lmg-white uppercase">
        {title}
      </h3>
    </div>
    <p className="font-body text-sm text-lmg-white/70 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default ServicesPage;
