import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const sportsServices = [
  'Player representation and career management',
  'Contract advisory and negotiations',
  'Media visibility and personal branding',
  'Endorsements and commercial partnerships',
  'Transition support beyond active playing careers',
];

const Sports = () => {
  return (
    <section
      id="sports"
      data-testid="sports-section"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-light-grey"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1738980420952-56cc02acd17f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHw0fHxzb2NjZXIlMjBwbGF5ZXIlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nJTIwcG9ydHJhaXQlMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzcwMjY2NzI4fDA&ixlib=rb-4.1.0&q=85"
                alt="Sports Management"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-lmg-yellow -z-10 hidden md:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="inline-block bg-lmg-yellow px-4 py-2 mb-6">
              <span className="font-body text-sm font-medium text-lmg-black uppercase tracking-wider">
                A Division of LMG
              </span>
            </div>

            <h2 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-black uppercase tracking-tight mb-6"
              data-testid="sports-headline"
            >
              Lemieux Sports
              <br />
              <span className="text-lmg-yellow">Management</span>
            </h2>

            <p 
              className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed mb-4"
              data-testid="sports-description"
            >
              Lemieux Sports Management (LSM) is the sports management arm of LMG, 
              dedicated to representing and managing professional athletes, with a 
              strong focus on football.
            </p>

            <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed mb-8">
              LSM operates under the same vision and standards as LMG, providing:
            </p>

            {/* Services List */}
            <div className="space-y-4 mb-8">
              {sportsServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="text-lmg-yellow text-xl mt-1 flex-shrink-0" />
                  <span className="font-body text-base text-lmg-black/80">{service}</span>
                </motion.div>
              ))}
            </div>

            <p className="font-body text-base md:text-lg text-lmg-black/70 italic border-l-4 border-lmg-yellow pl-4">
              By integrating sports management into the LMG ecosystem, we ensure athletes 
              benefit from both professional representation and strong media positioning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
