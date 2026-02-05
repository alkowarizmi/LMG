import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGlobe, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { FaFutbol, FaMusic, FaBroadcastTower, FaMicrophone } from 'react-icons/fa';

const divisions = [
  {
    icon: FaFutbol,
    title: 'LMG Sports',
    subtitle: 'Athlete Management & Development',
    brief: 'Elite athlete representation, sports marketing, and world-class training facilities.',
    href: '/divisions/sports',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1936&auto=format&fit=crop',
  },
  {
    icon: FaMusic,
    title: 'LMG Entertainment',
    subtitle: 'Music, Film & Live Events',
    brief: 'Recording studios, artist development, and high-profile entertainment productions.',
    href: '/divisions/entertainment',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: FaBroadcastTower,
    title: 'LMG Media',
    subtitle: 'Broadcast & Digital Content',
    brief: 'Television, radio, streaming platforms, and original programming.',
    href: '/divisions/media',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: FaMicrophone,
    title: 'LMG Studios',
    subtitle: 'Recording & Post-Production',
    brief: 'Cutting-edge music recording, sound design, and audio innovation.',
    href: '/divisions/studios',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
  },
];

const whyLMG = [
  {
    icon: FiGlobe,
    title: 'Africa-Focused, Globally Minded',
    description: 'LMG is rooted in Africa with a clear understanding of the continent\'s creative, cultural, and sports ecosystems. At the same time, we operate with a global outlook — positioning African talent for opportunities across international markets.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop',
  },
  {
    icon: FiUsers,
    title: 'Integrated Talent + Media Approach',
    description: 'We go beyond traditional talent management by combining representation with media strategy, helping our clients build influence, not just visibility — turning talent into long-term brands.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: FiTrendingUp,
    title: 'Strong Industry Networks',
    description: 'LMG maintains active relationships across entertainment, sports, media platforms, corporate brands, and international partners — opening doors to global opportunities.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
  },
];

const stats = [
  { value: '4', label: 'Global Offices' },
  { value: '4', label: 'Specialized Divisions' },
  { value: '3', label: 'Core Service Areas' },
  { value: 'Global', label: 'Reach' },
];

const HomePage = () => {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1699379012687-7da0cd15f3cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxhZnJpY2FuJTIwZmFzaGlvbiUyMG1vZGVsJTIwZWRpdG9yaWFsJTIwc3R1ZGlvJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzcwMjY2NzI0fDA&ixlib=rb-4.1.0&q=85"
            alt="LMG Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-lmg-black/70" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lmg-white uppercase tracking-tight leading-tight mb-4">
              Lemieux Management Group
            </h1>
            <p className="font-heading text-xl md:text-2xl text-lmg-yellow mb-4">
              Talent. Media. Sports. Global Representation.
            </p>
            <p className="font-body text-base md:text-lg text-lmg-white/80 max-w-2xl mx-auto mb-10">
              A premier global management and multimedia corporate group specializing in sports, entertainment, media, and creative production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/services"
              className="bg-lmg-yellow text-lmg-black font-body font-medium px-8 py-4 text-base uppercase tracking-wider hover:bg-lmg-white transition-all duration-300"
              data-testid="hero-cta-primary"
            >
              Explore Our Services
            </Link>
            <Link
              to="/partners"
              className="border-2 border-lmg-yellow text-lmg-yellow font-body font-medium px-8 py-4 text-base uppercase tracking-wider hover:bg-lmg-yellow hover:text-lmg-black transition-all duration-300"
              data-testid="hero-cta-secondary"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-lmg-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-lmg-yellow rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-lmg-black uppercase tracking-tight mb-8">
                Shaping Excellence <span className="text-lmg-yellow">Across Borders</span>
              </h2>
              <div className="space-y-6">
                <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                  LMG (Lemieux Management Group) is a premier global management and multimedia corporate group specializing in sports, entertainment, media, and creative production. We operate at the intersection of talent management, content creation, and broadcast innovation, delivering world-class experiences and commercial success across multiple industries.
                </p>
                <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                  With offices in Africa, United Kingdom, Canada, and United States, Lemieux Management Group is committed to fostering excellence, innovation, and strategic partnerships with governments, corporations, and investors to drive economic growth, cultural development, and employment opportunities in the regions where we operate.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="LMG Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lmg-yellow -z-10 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Dark */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-lmg-white uppercase tracking-tight mb-8">
              What We <span className="text-lmg-yellow">Do</span>
            </h2>
            <div className="space-y-6">
              <p className="font-body text-base md:text-lg text-lmg-white/80 leading-relaxed">
                Lemieux Management Group is a 360° talent management and media company focused on discovering, managing, and positioning exceptional talents across Africa for global opportunities. We represent creatives, public figures, and professionals across entertainment, media, lifestyle, and sports — providing strategic career management, brand positioning, media visibility, and international exposure.
              </p>
              <p className="font-body text-base md:text-lg text-lmg-white/80 leading-relaxed">
                Our work sits at the intersection of talent management, storytelling, and media influence, enabling our clients to build sustainable careers beyond borders. At LMG, we don't just manage talent — we build brands, amplify voices, and create pathways to global relevance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-lmg-black uppercase tracking-tight mb-4">
              Our <span className="text-lmg-yellow">Divisions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={division.href}
                  className="group block h-full bg-lmg-white border border-lmg-black/10 hover:border-lmg-yellow transition-all duration-300 overflow-hidden"
                  data-testid={`division-card-${index + 1}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={division.image}
                      alt={division.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-lmg-yellow flex items-center justify-center mb-4">
                      <division.icon className="text-lmg-black text-xl" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-lmg-black uppercase mb-2">
                      {division.title}
                    </h3>
                    <p className="font-body text-sm text-lmg-black/60 mb-2">
                      {division.subtitle}
                    </p>
                    <p className="font-body text-sm text-lmg-black/80 mb-4">
                      {division.brief}
                    </p>
                    <span className="inline-flex items-center gap-2 font-body text-sm text-lmg-yellow group-hover:gap-3 transition-all">
                      Learn More <FiArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LMG Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-light-grey">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-lmg-black uppercase tracking-tight mb-4">
              Why Choose <span className="text-lmg-yellow">LMG</span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {whyLMG.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-lmg-yellow flex items-center justify-center">
                      <item.icon className="text-lmg-black text-xl" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-lmg-black uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className={`aspect-video overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-lmg-yellow">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-black">
                  {stat.value}
                </span>
                <p className="font-body text-sm md:text-base text-lmg-black/80 mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-lmg-white uppercase tracking-tight mb-6">
              Ready to Build Your <span className="text-lmg-yellow">Global Brand?</span>
            </h2>
            <p className="font-body text-base md:text-lg text-lmg-white/80 max-w-2xl mx-auto mb-10">
              Whether you're a creative, athlete, public figure, or brand — LMG is positioned to help you grow, connect, and scale globally.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-lmg-yellow text-lmg-black font-body font-medium px-10 py-4 text-lg uppercase tracking-wider hover:bg-lmg-white transition-all duration-300"
              data-testid="cta-get-started"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
