'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${
              isScrolled || isOpen ? 'text-blue-900' : 'text-white'
            }`}>
              Suraksha Dental
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Team', href: '/team' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-blue-50 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || isOpen
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Team', href: '/team' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 mx-4 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
