'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { logoUrl } from '@/lib/content';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: t('nav.menu') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#locations', label: t('nav.locations') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'cz' ? 'en' : 'cz');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-[#0A0A0A] py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex-shrink-0 z-[90]">
          <Image
            src={logoUrl}
            alt="Gemüse Corner Kebab"
            width={120}
            height={48}
            className="w-24 md:w-32 h-auto"
            priority
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#FF0000] transition-colors uppercase tracking-wider text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all font-bold uppercase cursor-pointer"
            aria-label={`Switch to ${language === 'cz' ? 'English' : 'Czech'}`}
          >
            {language === 'cz' ? 'EN' : 'CZ'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-[90]">
          <button
            onClick={toggleLanguage}
            className="text-white font-bold uppercase cursor-pointer"
          >
            {language === 'cz' ? 'EN' : 'CZ'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0A0A0A] border-t border-white/10 md:hidden"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white py-4 text-center uppercase tracking-wider border-b border-white/5 hover:text-[#FF0000] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
