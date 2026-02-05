import { motion } from 'framer-motion';

const reasons = [
  {
    number: '01',
    title: 'Africa-Focused, Globally Minded',
    description:
      'LMG is rooted in Africa with a clear understanding of the continent\'s creative, cultural, and sports ecosystems. At the same time, we operate with a global outlook — positioning African talent for opportunities across international markets.',
  },
  {
    number: '02',
    title: 'Integrated Talent + Media Approach',
    description:
      'We go beyond traditional talent management by combining representation with media strategy. LMG develops talent brands through structured storytelling, digital content, publicity, and audience engagement.',
  },
  {
    number: '03',
    title: 'Strong Industry Networks',
    description:
      'LMG maintains active relationships across entertainment, sports, media platforms, corporate brands, event organizers, and international partners — opening doors to endorsements, appearances, collaborations, sponsorships, and performance opportunities.',
  },
  {
    number: '04',
    title: 'Flexible, Growth-Driven Management Models',
    description:
      'We understand that every talent is at a different stage of growth. Our management models are adaptable — ranging from project-based representation to long-term management and non-exclusive partnerships.',
  },
  {
    number: '05',
    title: 'Strategic, Not Transactional Representation',
    description:
      'At LMG, we do not focus on one-off deals. Our representation is strategy-led, with an emphasis on long-term value creation. We act as career partners, not just agents.',
  },
];

const WhyLMG = () => {
  return (
    <section
      id="why-lmg"
      data-testid="why-lmg-section"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-black uppercase tracking-tight mb-6"
            data-testid="why-lmg-headline"
          >
            Why <span className="text-lmg-yellow">LMG</span>
          </h2>
          <p className="font-body text-base md:text-lg text-lmg-black/70 max-w-2xl mx-auto">
            What sets us apart in the talent management industry.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 border border-lmg-black/10 hover:border-lmg-yellow transition-colors duration-300 ${
                index === 4 ? 'lg:col-span-1 md:col-span-2 lg:col-start-2' : ''
              }`}
              data-testid={`why-lmg-card-${index + 1}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-heading text-4xl font-bold text-lmg-yellow">
                  {reason.number}
                </span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-lmg-black uppercase tracking-wide mb-4">
                {reason.title}
              </h3>
              <p className="font-body text-base text-lmg-black/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLMG;
