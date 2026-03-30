'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'أسطولنا', href: '/cars' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 h-[72px] flex items-center ${
        isScrolled ? 'bg-green-dk/92 backdrop-blur-xl border-b border-green/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Right: Logo */}
        <Link href="/" className="flex flex-col items-start">
          <span className="text-2xl font-bold tracking-wider font-logo text-snow">AURUM</span>
          <span className="text-[10px] tracking-[4px] text-green uppercase leading-none">Luxury Cars</span>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-soft hover:text-green transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Left: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-snow/10 flex items-center justify-center text-snow hover:border-green hover:text-green transition-all"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <Link
            href="/cars"
            className="hidden md:block px-6 py-2 border border-green text-green hover:bg-green hover:text-snow transition-all duration-300 text-sm font-medium"
          >
            احجز الآن
          </Link>
          
          <button
            className="md:hidden text-snow"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-forest z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-medium text-snow hover:text-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/cars"
              className="px-10 py-4 green-gradient-btn text-white text-xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              احجز الآن
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
