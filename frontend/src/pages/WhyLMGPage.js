import { motion } from 'framer-motion';
import { FiGlobe, FiUsers, FiShare2, FiSettings, FiShield } from 'react-icons/fi';

const reasons = [
  {
    icon: FiGlobe,
    number: '01',
    title: 'Africa-Focused, Globally Minded',
    description: 'LMG is rooted in Africa with a clear understanding of the continent\'s creative, cultural, and sports ecosystems. At the same time, we operate with a global outlook — positioning African talent for opportunities across international markets. Our approach bridges local relevance with global standards, ensuring our talents are competitive, visible, and respected on the world stage.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop',
  },
  {
    icon: FiUsers,
    number: '02',
    title: 'Integrated Talent + Media Approach',
    description: 'We go beyond traditional talent management by combining representation with media strategy. LMG develops talent brands through structured storytelling, digital content, publicity, and audience engagement. By controlling both talent positioning and media output, we help our clients build influence, not just visibility — turning talent into long-term brands.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: FiShare2,
    number: '03',
    title: 'Strong Industry Networks Across Entertainment, Sports, and Brands',
    description: 'LMG maintains active relationships across entertainment, sports, media platforms, corporate brands, event organizers, and international partners. These networks allow us to open doors to endorsements, appearances, collaborations, sponsorships, and performance opportunities that align with each client\'s career goals.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    icon: FiSettings,
    number: '04',
    title: 'Flexible, Growth-Driven Management Models',
    description: 'We understand that every talent is at a different stage of growth. Our management models are adaptable — ranging from project-based representation to long-term management and non-exclusive partnerships. This flexibility allows us to support talents without limiting existing relationships, while still driving structured growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    icon: FiShield,
    number: '05',
    title: 'Strategic, Not Transactional Representation',
    description: 'At LMG, we do not focus on one-off deals. Our representation is strategy-led, with an emphasis on long-term value creation. Every opportunity is evaluated based on brand alignment, career sustainability, and future growth potential. We act as career partners, not just agents — protecting the integrity and future of the talents we represent.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop',
  },
];

const WhyLMGPage = () => {
  return (
    <div data-testid="why-lmg-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-white uppercase tracking-tight mb-6">
              Why Choose <span className="text-lmg-yellow">LMG</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-lmg-white/80 max-w-2xl mx-auto">
              Strategic Representation. Global Networks. Proven Results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 md:py-32">
        {reasons.map((reason, index) => (
          <div
            key={reason.number}
            className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${
              index % 2 === 0 ? 'bg-lmg-white' : 'bg-lmg-light-grey'
            }`}
          >
            <div className="max-w-screen-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="font-heading text-5xl md:text-6xl font-bold text-lmg-yellow">
                      {reason.number}
                    </span>
                    <div className="w-14 h-14 bg-lmg-black flex items-center justify-center mt-2">
                      <reason.icon className="text-lmg-yellow text-2xl" />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-lmg-black uppercase tracking-tight mb-6">
                    {reason.title}
                  </h2>
                  <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                <div className={`aspect-video overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhyLMGPage;
