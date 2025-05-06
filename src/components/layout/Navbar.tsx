import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-purple-500 to-pink-600 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Code 
            size={30} 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`} 
          />
          <span 
            className={`ml-2 font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
          >
            XplowizSolutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-pink-300 ${
                location.pathname === item.path
                  ? 'text-white'
                  : 'text-white'
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
              className="bg-white text-purple-600 px-5 py-2 rounded-md text-sm font-medium hover:bg-purple-100 transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-600 shadow-md py-4 px-6"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-white'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-5 py-2 rounded-md text-sm font-medium hover:bg-purple-100 transition-colors duration-300 text-center"
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