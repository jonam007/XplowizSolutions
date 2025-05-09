import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' }, // Added Products section
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
            <img 
              src="src/assets/images/Xplowiz_Logo.png" 
              alt="XplowizSolutions Logo" 
              className="h-16 w-36 transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <span 
            className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
            }`}
          >
          
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-500 ${
                location.pathname === item.path
                  ? isScrolled || !isHomePage ? 'text-blue-600' : 'text-blue-400'
                  : isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-800'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300 text-center"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;