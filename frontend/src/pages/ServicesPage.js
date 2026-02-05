import { motion } from 'framer-motion';
import { FiUsers, FiFilm, FiBriefcase, FiCheckCircle } from 'react-icons/fi';

const services = [
  {
    id: 'talent-management',
    icon: FiUsers,
    title: 'Talent Management & Representation',
    intro: 'We provide end-to-end talent management services tailored to the unique needs of each client.',
    bgColor: 'bg-lmg-white',
    textColor: 'text-lmg-black',
    subServices: [
      {
        title: 'Career Strategy and Brand Positioning',
        description: 'We work closely with talents to define their career direction, clarify their brand identity, and position them effectively within their industry. This includes identifying growth opportunities, target markets, and long-term objectives.',
      },
      {
        title: 'Contract Negotiation and Deal Structuring',
        description: 'LMG represents talents in negotiations to ensure fair value, clear terms, and professional deal structures. We focus on protecting our clients\' interests while maximizing commercial and career benefits.',
      },
      {
        title: 'Brand Partnerships and Endorsements',
        description: 'We connect talents with brands that align with their image and values. From endorsements to ambassador roles, we structure partnerships that enhance credibility, visibility, and revenue potential.',
      },
      {
        title: 'Media Placements and Visibility Opportunities',
        description: 'Through our media connections and content strategy, we help talents secure interviews, features, digital appearances, and other visibility opportunities that strengthen their public profile and relevance.',
      },
      {
        title: 'Long-Term Career Planning and Advisory',
        description: 'Beyond immediate opportunities, we provide ongoing advisory support — helping talents make informed decisions, manage transitions, and build sustainable careers over time.',
      },
    ],
    closingStatement: 'Our management approach is collaborative, strategic, and growth-focused, ensuring that talents remain actively involved while benefiting from professional guidance and industry expertise.',
  },
  {
    id: 'media-content',
    icon: FiFilm,
    title: 'Media & Content Development',
    intro: 'At LMG, we are a media-driven talent company that leverages storytelling to expand your influence and visibility.',
    bgColor: 'bg-lmg-black',
    textColor: 'text-lmg-white',
    subServices: [
      {
        title: 'Podcast & Digital Content Development',
        description: 'We help you create engaging podcasts, videos, and digital content that showcase your expertise and personality. From concept and production to editing and optimization, we ensure your content resonates with your audience.',
      },
      {
        title: 'Interview Placements & Media Features',
        description: 'Gain credibility and exposure through strategic media placements. We connect you with top media outlets, prepare you for interviews, and help you shine on every platform.',
      },
      {
        title: 'Social Media Strategy & Content Direction',
        description: 'We design tailored social media strategies to grow your audience and boost engagement. From content planning to performance analysis, we ensure your online presence reflects your unique brand.',
      },
      {
        title: 'Brand Storytelling & Narrative Positioning',
        description: 'Your story is your power. We craft compelling narratives that communicate who you are, what you stand for, and what makes you unique — positioning you as a trusted authority in your field.',
      },
      {
        title: 'Digital Footprint & Brand Ownership',
        description: 'We help you take control of your story across all digital platforms. From profile optimization to consistent messaging, we ensure your brand is visible, authentic, and impactful.',
      },
    ],
    tagline: "We don't just create content — we help you own your story, grow your influence, and leave a lasting digital footprint.",
  },
  {
    id: 'brand-partnerships',
    icon: FiBriefcase,
    title: 'Brand & Corporate Partnerships',
    intro: 'We create strategic partnerships that connect brands with the right talent and platforms, driving visibility, engagement, and impact.',
    bgColor: 'bg-lmg-light-grey',
    textColor: 'text-lmg-black',
    subServices: [
      {
        title: 'Influencer & Ambassador Campaigns',
        description: 'We match brands with the perfect influencers and ambassadors to authentically promote products, services, and campaigns.',
      },
      {
        title: 'Event Partnerships & Activations',
        description: 'From live events to experiential activations, we design partnerships that create memorable brand experiences and meaningful audience engagement.',
      },
      {
        title: 'Product Placement & Sponsored Content',
        description: 'We integrate brands seamlessly into content, ensuring organic exposure that resonates with audiences and drives results.',
      },
      {
        title: 'Joint Marketing & Visibility Campaigns',
        description: 'We collaborate on marketing initiatives that amplify brand presence and strengthen the connection between talents and target audiences.',
      },
    ],
  },
];

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

      {/* Services Sections */}
      {services.map((service, serviceIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 ${service.bgColor}`}
          data-testid={`service-section-${serviceIndex + 1}`}
        >
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${service.bgColor === 'bg-lmg-black' ? 'bg-lmg-yellow' : 'bg-lmg-black'} flex items-center justify-center`}>
                  <service.icon className={`${service.bgColor === 'bg-lmg-black' ? 'text-lmg-black' : 'text-lmg-yellow'} text-2xl`} />
                </div>
                <h2 className={`font-heading text-2xl md:text-3xl lg:text-4xl font-bold ${service.textColor} uppercase tracking-tight`}>
                  {service.title}
                </h2>
              </div>
              <p className={`font-body text-base md:text-lg ${service.bgColor === 'bg-lmg-black' ? 'text-lmg-white/80' : 'text-lmg-black/80'} max-w-3xl`}>
                {service.intro}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.subServices.map((subService, index) => (
                <motion.div
                  key={subService.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 md:p-8 ${
                    service.bgColor === 'bg-lmg-black'
                      ? 'bg-lmg-dark-grey border border-lmg-white/10'
                      : 'bg-lmg-white border border-lmg-black/10'
                  } hover:border-lmg-yellow transition-colors duration-300`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <FiCheckCircle className="text-lmg-yellow text-xl mt-1 flex-shrink-0" />
                    <h3 className={`font-heading text-lg font-bold ${service.textColor} uppercase`}>
                      {subService.title}
                    </h3>
                  </div>
                  <p className={`font-body text-sm ${service.bgColor === 'bg-lmg-black' ? 'text-lmg-white/70' : 'text-lmg-black/70'} leading-relaxed`}>
                    {subService.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {service.closingStatement && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`mt-12 font-body text-base md:text-lg italic text-center ${service.bgColor === 'bg-lmg-black' ? 'text-lmg-white/80' : 'text-lmg-black/80'} max-w-4xl mx-auto`}
              >
                "{service.closingStatement}"
              </motion.p>
            )}

            {service.tagline && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 font-heading text-xl md:text-2xl font-bold text-lmg-yellow text-center"
              >
                {service.tagline}
              </motion.p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;
