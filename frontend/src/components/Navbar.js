import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Divisions', 
    href: '#',
    dropdown: [
      { name: 'LMG Sports', href: '/divisions/sports' },
      { name: 'LMG Entertainment', href: '/divisions/entertainment' },
      { name: 'LMG Media', href: '/divisions/media' },
      { name: 'LMG Studios', href: '/divisions/studios' },
    ]
  },
  { name: 'Services', href: '/services' },
  { name: 'Why LMG', href: '/why-lmg' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lmg-black/95 backdrop-blur-sm shadow-lg' : 'bg-lmg-black'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            data-testid="navbar-logo"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_talent-global/artifacts/ww4d367c_Screenshot%202026-02-05%20at%2000.29.28.png"
              alt="LMG Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 font-body text-sm uppercase tracking-wider transition-colors duration-300 ${
                        location.pathname.includes('/divisions')
                          ? 'text-lmg-yellow'
                          : 'text-lmg-white hover:text-lmg-yellow'
                      }`}
                      data-testid={`nav-link-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                      <FiChevronDown className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-lmg-black border border-lmg-white/10 shadow-xl"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block px-4 py-3 font-body text-sm transition-colors ${
                                isActive(item.href)
                                  ? 'bg-lmg-yellow text-lmg-black'
                                  : 'text-lmg-white hover:bg-lmg-yellow hover:text-lmg-black'
                              }`}
                              data-testid={`nav-dropdown-${item.name.toLowerCase().replace(' ', '-')}`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-body text-sm uppercase tracking-wider transition-colors duration-300 ${
                      isActive(link.href)
                        ? 'text-lmg-yellow'
                        : 'text-lmg-white hover:text-lmg-yellow'
                    }`}
                    data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-lmg-yellow text-lmg-black font-body font-medium px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-lmg-white transition-colors duration-300"
              data-testid="nav-cta-button"
            >
              Work With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-lmg-white p-2"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-lmg-black border-t border-lmg-white/10"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-8 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full font-body text-lg text-lmg-white uppercase tracking-wider py-2"
                      >
                        {link.name}
                        <FiChevronDown className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 border-l-2 border-lmg-yellow ml-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={`block py-2 font-body text-base ${
                                  isActive(item.href) ? 'text-lmg-yellow' : 'text-lmg-white/80'
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={`block font-body text-lg uppercase tracking-wider py-2 ${
                          isActive(link.href) ? 'text-lmg-yellow' : 'text-lmg-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-lmg-yellow text-lmg-black font-body font-medium px-6 py-3 text-center uppercase tracking-wider mt-4"
                data-testid="mobile-nav-cta-button"
              >
                Work With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
