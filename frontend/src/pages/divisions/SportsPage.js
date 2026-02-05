import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const services = [
  'Player representation and career management',
  'Contract advisory and negotiations',
  'Media visibility and personal branding for athletes',
  'Endorsements and commercial partnerships',
  'Transition support beyond active playing careers',
  'Elite athlete development programs',
  'International sports tournaments and exhibitions',
  'Stadium and training facility partnerships',
];

const SportsPage = () => {
  return (
    <div data-testid="sports-page">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1936&auto=format&fit=crop"
            alt="LMG Sports"
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
            <div className="inline-block bg-lmg-yellow px-4 py-2 mb-6">
              <span className="font-body text-sm font-medium text-lmg-black uppercase tracking-wider">
                LMG Division
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-white uppercase tracking-tight mb-4">
              LMG <span className="text-lmg-yellow">Sports</span>
            </h1>
            <p className="font-heading text-xl md:text-2xl text-lmg-white/90 mb-4">
              Elevating Athletes to Global Excellence
            </p>
            <p className="font-body text-base md:text-lg text-lmg-white/70 max-w-2xl mx-auto">
              Lemieux Sports Management (LSM) is the sports management arm of LMG, dedicated to representing and managing professional athletes, with a strong focus on football.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-lmg-black uppercase tracking-tight mb-6">
                Our <span className="text-lmg-yellow">Focus</span>
              </h2>
              <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed mb-8">
                Athlete management, sports marketing, event organization, and training academies. We provide comprehensive support for athletes at every stage of their career.
              </p>
              <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                LSM operates under the same vision and standards as LMG, ensuring athletes benefit from both professional representation and strong media positioning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop"
                alt="Sports Management"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-black">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-lmg-white uppercase tracking-tight mb-4">
              Our <span className="text-lmg-yellow">Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-lmg-dark-grey p-6 border border-lmg-white/10 hover:border-lmg-yellow transition-colors duration-300"
              >
                <FiCheckCircle className="text-lmg-yellow text-2xl mb-4" />
                <p className="font-body text-base text-lmg-white/80">
                  {service}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Message Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-yellow">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-lg md:text-xl text-lmg-black leading-relaxed max-w-3xl mx-auto mb-8">
              "By integrating sports management into the LMG ecosystem, we ensure athletes benefit from both professional representation and strong media positioning."
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-lmg-black text-lmg-white font-body font-medium px-8 py-4 text-base uppercase tracking-wider hover:bg-lmg-dark-grey transition-all duration-300"
            >
              Join LMG Sports <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SportsPage;
