import { motion } from 'framer-motion';
import { FiTarget, FiCompass } from 'react-icons/fi';

const VisionMission = () => {
  const cards = [
    {
      icon: FiCompass,
      title: 'Our Vision',
      content:
        'To become Africa\'s leading talent and sports management company, shaping globally recognized talents and creating platforms that connect African excellence to the world.',
    },
    {
      icon: FiTarget,
      title: 'Our Mission',
      content:
        'To empower talents with strategic representation, media visibility, and commercial opportunities while building long-term value through intentional brand growth and global partnerships.',
    },
  ];

  return (
    <section
      id="vision-mission"
      data-testid="vision-mission-section"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-black"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-lmg-dark-grey p-8 md:p-12 border border-lmg-white/10 hover:border-lmg-yellow transition-colors duration-300"
              data-testid={`${card.title.toLowerCase().replace(' ', '-')}-card`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-lmg-yellow flex items-center justify-center">
                  <card.icon className="text-lmg-black text-2xl" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-lmg-white uppercase tracking-wide">
                  {card.title}
                </h3>
              </div>
              
              <p className="font-body text-base md:text-lg text-lmg-white/80 leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
