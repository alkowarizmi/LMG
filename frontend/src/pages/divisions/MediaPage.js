import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTv, FiRadio, FiMonitor, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    icon: FiTv,
    title: 'TV/Radio Broadcasting Networks',
    description: 'Building and operating broadcast networks that reach millions of viewers and listeners.',
  },
  {
    icon: FiMonitor,
    title: 'Original Programming & News Platforms',
    description: 'Creating compelling content and news coverage that informs and entertains.',
  },
  {
    icon: FiRadio,
    title: 'Digital Media Expansion',
    description: 'Podcasts, OTT platforms, and digital-first content strategies for modern audiences.',
  },
];

const MediaPage = () => {
  return (
    <div data-testid="media-page">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop"
            alt="LMG Media"
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
              LMG <span className="text-lmg-yellow">Media</span>
            </h1>
            <p className="font-heading text-xl md:text-2xl text-lmg-white/90 mb-4">
              Amplifying Stories, Connecting Audiences
            </p>
            <p className="font-body text-base md:text-lg text-lmg-white/70 max-w-2xl mx-auto">
              Television, radio, streaming, and digital content — building media platforms that inform, entertain, and inspire.
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
                Television, radio, streaming, and digital content. We build and operate media platforms that reach audiences across Africa and beyond.
              </p>
              <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                From traditional broadcasting to cutting-edge digital platforms, LMG Media is at the forefront of content creation and distribution.
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
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop"
                alt="Media Production"
                className="w-full h-full object-cover"
              />
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
              Ready to Amplify Your Story?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-lmg-black text-lmg-white font-body font-medium px-8 py-4 text-base uppercase tracking-wider hover:bg-lmg-dark-grey transition-all duration-300"
            >
              Partner With Us <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
