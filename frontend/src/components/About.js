import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-lmg-white"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Content */}
          <div>
            <h2 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-lmg-black uppercase tracking-tight mb-8"
              data-testid="about-headline"
            >
              About Lemieux
              <br />
              <span className="text-lmg-yellow">Management Group</span>
            </h2>
            
            <div className="space-y-6">
              <p 
                className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed"
                data-testid="about-content"
              >
                Lemieux Management Group (LMG) is a 360° talent management and media company 
                focused on discovering, managing, and positioning exceptional talents across 
                Africa for global opportunities.
              </p>
              
              <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                We represent creatives, public figures, and professionals across entertainment, 
                media, lifestyle, and sports — providing strategic career management, brand 
                positioning, media visibility, and international exposure.
              </p>
              
              <p className="font-body text-base md:text-lg text-lmg-black/80 leading-relaxed">
                Our work sits at the intersection of talent management, storytelling, and media 
                influence, enabling our clients to build sustainable careers beyond borders.
              </p>
              
              <div className="pt-6 border-t border-lmg-black/10">
                <p 
                  className="font-body text-lg md:text-xl text-lmg-black font-medium italic"
                  data-testid="about-closing"
                >
                  "At LMG, we don't just manage talent — we build brands, amplify voices, 
                  and create pathways to global relevance."
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwY3JlYXRpdmUlMjBvZmZpY2UlMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMHRlYW18ZW58MHx8fHwxNzcwMjY2NzMzfDA&ixlib=rb-4.1.0&q=85"
                alt="LMG Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lmg-yellow -z-10 hidden md:block" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
