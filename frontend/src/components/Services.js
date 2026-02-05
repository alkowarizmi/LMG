import { motion } from 'framer-motion';
import { FiUsers, FiFilm, FiBriefcase } from 'react-icons/fi';

const services = [
  {
    icon: FiUsers,
    title: 'Talent Management & Representation',
    image: 'https://images.unsplash.com/photo-1697924293303-34488b60bf36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwZmFzaGlvbiUyMG1vZGVsJTIwZWRpdG9yaWFsJTIwc3R1ZGlvJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzcwMjY2NzI0fDA&ixlib=rb-4.1.0&q=85',
    description:
      'We provide end-to-end talent management services tailored to the unique needs of each client. Our management approach is collaborative, strategic, and growth-focused.',
    features: [
      'Career Strategy and Brand Positioning',
      'Contract Negotiation and Deal Structuring',
      'Brand Partnerships and Endorsements',
      'Media Placements and Visibility Opportunities',
      'Long-Term Career Planning and Advisory',
    ],
  },
  {
    icon: FiFilm,
    title: 'Media & Content Development',
    image: 'https://images.unsplash.com/photo-1572014788455-fdd2bc0e9e51?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwY3JlYXRpdmUlMjBvZmZpY2UlMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMHRlYW18ZW58MHx8fHwxNzcwMjY2NzMzfDA&ixlib=rb-4.1.0&q=85',
    description:
      "We don't just create content — we help you own your story, grow your influence, and leave a lasting digital footprint.",
    features: [
      'Podcast & Digital Content Development',
      'Interview Placements & Media Features',
      'Social Media Strategy & Content Direction',
      'Brand Storytelling & Narrative Positioning',
      'Digital Footprint & Brand Ownership',
    ],
  },
  {
    icon: FiBriefcase,
    title: 'Brand & Corporate Partnerships',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    description:
      'We create strategic partnerships that connect brands with the right talent and platforms, driving visibility, engagement, and impact.',
    features: [
      'Influencer & Ambassador Campaigns',
      'Event Partnerships & Activations',
      'Product Placement & Sponsored Content',
      'Joint Marketing & Visibility Campaigns',
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
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
            data-testid="services-headline"
          >
            Our <span className="text-lmg-yellow">Services</span>
          </h2>
          <p className="font-body text-base md:text-lg text-lmg-black/70 max-w-2xl mx-auto">
            Comprehensive solutions for talent management, media development, and brand partnerships.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden bg-lmg-black aspect-[3/4] card-hover-border"
              data-testid={`service-card-${index + 1}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 img-zoom">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-lmg-black via-lmg-black/60 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-lmg-yellow flex items-center justify-center mb-4">
                    <service.icon className="text-lmg-black text-xl" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-lmg-white uppercase tracking-wide mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-lmg-white/80 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features - Shown on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="font-body text-xs text-lmg-white/70 flex items-start gap-2"
                      >
                        <span className="text-lmg-yellow mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
