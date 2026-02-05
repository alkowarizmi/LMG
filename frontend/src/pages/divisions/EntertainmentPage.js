import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMusic, FiFilm, FiCamera, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    icon: FiMusic,
    title: 'Recording & Film Production Studios',
    description: 'State-of-the-art facilities for music recording and film production.',
  },
  {
    icon: FiCamera,
    title: 'Talent Scouting & Artist Development',
    description: 'Discovering and nurturing the next generation of creative talent.',
  },
  {
    icon: FiFilm,
    title: 'High-Profile Entertainment Events',
    description: 'Concerts, fashion shows, film festivals, and award ceremonies.',
  },
];

const EntertainmentPage = () => {
  return (
    <div data-testid="entertainment-page">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
            alt="LMG Entertainment"
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
              LMG <span className="text-lmg-yellow">Entertainment</span>
            </h1>
            <p className="font-heading text-xl md:text-2xl text-lmg-white/90 mb-4">
              Crafting Cultural Moments
            </p>
            <p className="font-body text-base md:text-lg text-lmg-white/70 max-w-2xl mx-auto">
              Music, film, modeling, and live events — creating unforgettable entertainment experiences that resonate globally.
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
              className="order-2 md:order-1 aspect-[4/3] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
                alt="Entertainment Production"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-lmg-black uppercase tracking-tight mb-6">
                Our <span className="text-lmg-yellow">Focus</span>
              </h2>
              <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed mb-8">
                Music, film, modeling, and live events. We create and curate entertainment experiences that captivate audiences and elevate artists to new heights.
              </p>
              <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                From artist development to large-scale productions, LMG Entertainment delivers excellence across all entertainment verticals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
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
              Key <span className="text-lmg-yellow">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-lmg-dark-grey p-8 border border-lmg-white/10 hover:border-lmg-yellow transition-colors duration-300 text-center"
              >
                <div className="w-16 h-16 bg-lmg-yellow flex items-center justify-center mx-auto mb-6">
                  <project.icon className="text-lmg-black text-2xl" />
                </div>
                <h3 className="font-heading text-xl font-bold text-lmg-white uppercase mb-4">
                  {project.title}
                </h3>
                <p className="font-body text-base text-lmg-white/70">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-yellow">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-lmg-black uppercase tracking-tight mb-6">
              Ready to Create Something Extraordinary?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-lmg-black text-lmg-white font-body font-medium px-8 py-4 text-base uppercase tracking-wider hover:bg-lmg-dark-grey transition-all duration-300"
            >
              Work With Us <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EntertainmentPage;
