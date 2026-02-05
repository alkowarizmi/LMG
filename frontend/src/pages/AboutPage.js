import { motion } from 'framer-motion';
import { FiEye, FiTarget, FiMapPin } from 'react-icons/fi';

const offices = [
  { name: 'Africa', flag: '🌍' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'United States', flag: '🇺🇸' },
];

const missionPoints = [
  'To discover, develop, and manage elite talent across sports, music, film, modeling, and broadcasting',
  'To produce high-quality, culturally relevant content that engages audiences worldwide',
  'To empower talents with strategic representation, media visibility, and commercial opportunities',
  'To establish state-of-the-art facilities and infrastructure that support creative and athletic excellence',
  'To foster public-private partnerships that enhance local economies and cultural ecosystems',
];

const AboutPage = () => {
  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-white uppercase tracking-tight mb-6">
              About <span className="text-lmg-yellow">LMG</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-lmg-white/80 max-w-2xl mx-auto">
              Building Brands. Amplifying Voices. Creating Global Pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-lmg-light-grey p-8 md:p-12 border-l-4 border-lmg-yellow"
              data-testid="vision-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-lmg-yellow flex items-center justify-center">
                  <FiEye className="text-lmg-black text-2xl" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-lmg-black uppercase">
                  Our Vision
                </h2>
              </div>
              <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                To be the world's premier integrated management and media powerhouse, shaping the future of sports, entertainment, and digital content on a global scale — while becoming Africa's leading talent and sports management company that connects African excellence to the world.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-lmg-black p-8 md:p-12"
              data-testid="mission-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-lmg-yellow flex items-center justify-center">
                  <FiTarget className="text-lmg-black text-2xl" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-lmg-white uppercase">
                  Our Mission
                </h2>
              </div>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lmg-yellow mt-1">•</span>
                    <span className="font-body text-base text-lmg-white/80">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
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
              Our <span className="text-lmg-yellow">Approach</span>
            </h2>
            <div className="space-y-8">
              <p className="font-body text-xl md:text-2xl text-lmg-white leading-relaxed">
                "We believe talent success is built on{' '}
                <span className="text-lmg-yellow font-medium">strategy</span>,{' '}
                <span className="text-lmg-yellow font-medium">visibility</span>, and{' '}
                <span className="text-lmg-yellow font-medium">opportunity</span>."
              </p>
              <div className="w-24 h-1 bg-lmg-yellow mx-auto" />
              <p className="font-body text-lg md:text-xl text-lmg-white/80 leading-relaxed">
                Every client receives a customized growth plan designed to align with their goals, values, and long-term vision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
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
              Global <span className="text-lmg-yellow">Presence</span>
            </h2>
            <p className="font-body text-base md:text-lg text-lmg-black/70 max-w-2xl mx-auto">
              With offices across four continents, we bring a truly global perspective to talent management.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-lmg-light-grey p-6 md:p-8 text-center border hover:border-lmg-yellow transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-lmg-black flex items-center justify-center mx-auto mb-4">
                  <FiMapPin className="text-lmg-yellow text-2xl" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-lmg-black uppercase">
                  {office.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
          alt="LMG Global Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-lmg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-lmg-white uppercase tracking-tight text-center px-6"
          >
            Excellence Knows <span className="text-lmg-yellow">No Borders</span>
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
