import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiHeart, FiMic, FiUsers, FiHome, FiAward, FiFilm, FiGift } from 'react-icons/fi';

const benefits = [
  {
    icon: FiTrendingUp,
    title: 'Economic Growth',
    description: 'Job creation, tourism boosts, and infrastructure development',
  },
  {
    icon: FiHeart,
    title: 'Cultural Enrichment',
    description: 'Support for local talent and creative industries',
  },
  {
    icon: FiMic,
    title: 'Media & Brand Exposure',
    description: "Global reach through LMG's media platforms",
  },
  {
    icon: FiUsers,
    title: 'Public-Private Synergy',
    description: 'Alignment with national development goals in sports, entertainment, and technology',
  },
];

const opportunities = [
  {
    icon: FiHome,
    title: 'Infrastructure Development',
    description: 'Stadiums, studios, broadcast centers',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005&auto=format&fit=crop',
  },
  {
    icon: FiAward,
    title: 'Talent Development Programs',
    description: 'Sports academies, artist incubators',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: FiFilm,
    title: 'Content Production & Distribution',
    description: 'Films, music, live broadcasts',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: FiGift,
    title: 'Sponsorship & Brand Integration',
    description: 'Events, media placements, endorsements',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  },
];

const PartnersPage = () => {
  return (
    <div data-testid="partners-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-white uppercase tracking-tight mb-6">
              Partner With <span className="text-lmg-yellow">LMG</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-lmg-white/80 max-w-2xl mx-auto">
              Driving Economic Growth, Cultural Development & Global Impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-lmg-black uppercase tracking-tight mb-6">
              Why Partner With <span className="text-lmg-yellow">LMG</span>
            </h2>
            <p className="font-body text-base md:text-lg text-lmg-black/80 max-w-3xl mx-auto">
              LMG seeks government endorsements, corporate sponsorships, and strategic investments to expand its global footprint and execute high-impact projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-lmg-light-grey p-8 text-center border hover:border-lmg-yellow transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-lmg-yellow flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-lmg-black text-2xl" />
                </div>
                <h3 className="font-heading text-xl font-bold text-lmg-black uppercase mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-lmg-black/70">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-lmg-white uppercase tracking-tight mb-6">
              Investment & Partnership <span className="text-lmg-yellow">Opportunities</span>
            </h2>
            <p className="font-body text-base md:text-lg text-lmg-white/80 max-w-3xl mx-auto">
              LMG invites governments, corporations, and investors to collaborate on:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-lmg-yellow flex items-center justify-center">
                    <opportunity.icon className="text-lmg-black text-lg" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-lmg-white uppercase">
                    {opportunity.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-lmg-white/70">
                  {opportunity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-light-grey">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed mb-6">
              As a forward-thinking leader in sports, entertainment, and media, Lemieux Management Group is positioned to drive transformative projects that benefit communities, economies, and industries.
            </p>
            <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed mb-10">
              We welcome discussions with government entities, corporate partners, and investors to explore mutually beneficial collaborations that elevate talent, content, and infrastructure on a global scale.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-lmg-yellow text-lmg-black font-body font-medium px-10 py-4 text-lg uppercase tracking-wider hover:bg-lmg-black hover:text-lmg-yellow transition-all duration-300"
              data-testid="partner-cta"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
