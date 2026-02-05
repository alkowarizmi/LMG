import { motion } from 'framer-motion';

const Approach = () => {
  return (
    <section
      id="approach"
      data-testid="approach-section"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-black"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-white uppercase tracking-tight mb-8"
            data-testid="approach-headline"
          >
            Our <span className="text-lmg-yellow">Approach</span>
          </h2>

          <div className="space-y-8">
            <p 
              className="font-body text-xl md:text-2xl text-lmg-white leading-relaxed"
              data-testid="approach-statement-1"
            >
              "We believe talent success is built on{' '}
              <span className="text-lmg-yellow font-medium">strategy</span>,{' '}
              <span className="text-lmg-yellow font-medium">visibility</span>, and{' '}
              <span className="text-lmg-yellow font-medium">opportunity</span>."
            </p>

            <div className="w-24 h-1 bg-lmg-yellow mx-auto" />

            <p 
              className="font-body text-lg md:text-xl text-lmg-white/80 leading-relaxed"
              data-testid="approach-statement-2"
            >
              Every client receives a customized growth plan designed to align with 
              their goals, values, and long-term vision.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-lmg-white/10"
          >
            <div>
              <span className="font-heading text-4xl md:text-5xl font-bold text-lmg-yellow">
                360°
              </span>
              <p className="font-body text-sm md:text-base text-lmg-white/70 mt-2 uppercase tracking-wider">
                Full Service
              </p>
            </div>
            <div>
              <span className="font-heading text-4xl md:text-5xl font-bold text-lmg-yellow">
                Global
              </span>
              <p className="font-body text-sm md:text-base text-lmg-white/70 mt-2 uppercase tracking-wider">
                Reach
              </p>
            </div>
            <div>
              <span className="font-heading text-4xl md:text-5xl font-bold text-lmg-yellow">
                100%
              </span>
              <p className="font-body text-sm md:text-base text-lmg-white/70 mt-2 uppercase tracking-wider">
                Dedicated
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
