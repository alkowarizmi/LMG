import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1699379012687-7da0cd15f3cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxhZnJpY2FuJTIwZmFzaGlvbiUyMG1vZGVsJTIwZWRpdG9yaWFsJTIwc3R1ZGlvJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzcwMjY2NzI0fDA&ixlib=rb-4.1.0&q=85"
          alt="LMG Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-lmg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-lmg-white uppercase tracking-tighter leading-[0.9] mb-6"
            data-testid="hero-headline"
          >
            Talent. Media.
            <br />
            <span className="text-lmg-yellow">Global Representation.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-body text-base md:text-lg lg:text-xl text-lmg-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
          data-testid="hero-subheadline"
        >
          Lemieux Management Group (LMG) is a 360° talent management and media company 
          focused on discovering, managing, and positioning exceptional talents across 
          Africa for global opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <button
            onClick={scrollToContact}
            className="bg-lmg-yellow text-lmg-black font-body font-medium px-10 py-4 text-lg uppercase tracking-wider hover:bg-lmg-white transition-all duration-300 btn-pulse"
            data-testid="hero-cta-button"
          >
            Work With Us
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
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
  );
};

export default Hero;
