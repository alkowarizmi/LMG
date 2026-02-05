import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiYoutube, FiMail, FiPhone } from 'react-icons/fi';

const socialLinks = [
  { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { name: 'Instagram', icon: FiInstagram, href: '#' },
  { name: 'Twitter', icon: FiTwitter, href: '#' },
  { name: 'Facebook', icon: FiFacebook, href: '#' },
  { name: 'YouTube', icon: FiYoutube, href: '#' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Why LMG', href: '/why-lmg' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
];

const divisions = [
  { name: 'LMG Sports', href: '/divisions/sports' },
  { name: 'LMG Entertainment', href: '/divisions/entertainment' },
  { name: 'LMG Media', href: '/divisions/media' },
  { name: 'LMG Studios', href: '/divisions/studios' },
];

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="bg-lmg-black pt-16 md:pt-24"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Column 1: Logo & Tagline */}
          <div>
            <Link to="/" className="flex items-center mb-6" data-testid="footer-logo">
              <img
                src="https://customer-assets.emergentagent.com/job_talent-global/artifacts/ww4d367c_Screenshot%202026-02-05%20at%2000.29.28.png"
                alt="LMG Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-heading text-lg text-lmg-yellow mb-2">
              Talent. Media. Sports.
            </p>
            <p className="font-heading text-lg text-lmg-yellow mb-4">
              Global Representation.
            </p>
            <p className="font-body text-sm text-lmg-white/60">
              Premier global management and multimedia corporate group
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-lmg-yellow uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-base text-lmg-white/70 hover:text-lmg-yellow transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Divisions */}
          <div>
            <h4 className="font-heading text-lg font-bold text-lmg-yellow uppercase tracking-wider mb-6">
              Divisions
            </h4>
            <ul className="space-y-3">
              {divisions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-base text-lmg-white/70 hover:text-lmg-yellow transition-colors"
                    data-testid={`footer-division-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold text-lmg-yellow uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMail className="text-lmg-yellow mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@wearelemieux.com"
                  className="font-body text-base text-lmg-white/70 hover:text-lmg-yellow transition-colors"
                >
                  info@wearelemieux.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-lmg-yellow mt-1 flex-shrink-0" />
                <div className="font-body text-base text-lmg-white/70">
                  <p>+234 703 472 0462</p>
                  <p>+1 262 709 8704</p>
                </div>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
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

        {/* Footer Bottom */}
        <div className="border-t border-lmg-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-lmg-white/50" data-testid="footer-copyright">
              © 2024 Lemieux Management Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-sm text-lmg-white/50 hover:text-lmg-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-lmg-white/50 hover:text-lmg-yellow transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
