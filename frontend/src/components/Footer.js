import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';

const socialLinks = [
  { name: 'Instagram', icon: FiInstagram, href: '#' },
  { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { name: 'Twitter', icon: FiTwitter, href: '#' },
  { name: 'Facebook', icon: FiFacebook, href: '#' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Sports Management', href: '#sports' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      data-testid="footer"
      className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-lmg-black overflow-hidden"
    >
      {/* Large Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-heading text-[20rem] md:text-[30rem] font-bold text-lmg-dark-grey/30 uppercase tracking-tighter select-none">
          LMG
        </span>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <a
              href="#"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-3 mb-6"
              data-testid="footer-logo"
            >
              <img
                src="https://customer-assets.emergentagent.com/job_talent-global/artifacts/dut0y30b_Screenshot%202026-02-04%20at%2023.43.33.png"
                alt="LMG Logo"
                className="h-14 w-14 object-contain"
              />
              <span className="font-heading text-2xl font-bold text-lmg-white tracking-wider">
                LMG
              </span>
            </a>
            <p className="font-body text-base text-lmg-white/70 max-w-xs">
              Talent. Media. Global Representation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-lmg-yellow uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="font-body text-base text-lmg-white/70 hover:text-lmg-yellow transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-lmg-yellow uppercase tracking-wider mb-6">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-lmg-white/20 flex items-center justify-center text-lmg-white hover:bg-lmg-yellow hover:border-lmg-yellow hover:text-lmg-black transition-all duration-300"
                  data-testid={`footer-social-${social.name.toLowerCase()}`}
                  aria-label={social.name}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-lmg-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p 
              className="font-body text-sm text-lmg-white/50"
              data-testid="footer-copyright"
            >
              © 2024 Lemieux Management Group. All rights reserved.
            </p>
            <p className="font-body text-sm text-lmg-white/50 italic">
              Talent. Media. Global Representation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
