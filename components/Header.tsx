'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { logoUrl } from '@/lib/content';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger header animation on the second scroll tick (~150px)
      const threshold = 150;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: t('nav.menu') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#locations', label: t('nav.locations') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#0e0d0b]/40 backdrop-blur-lg border-b border-white/10 py-2 shadow-lg'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center w-full">
        
        {/* Animated Logo Container */}
        <div
          className={`flex-shrink-0 flex items-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? 'w-20 md:w-28 opacity-100 translate-y-0' : 'w-0 opacity-0 -translate-y-8 pointer-events-none'
          }`}
        >
          <a href="#" className="block w-[80px] md:w-[112px] transition-transform hover:scale-105">
            <Image
              src={logoUrl}
              alt="Gemüse Corner Kebab"
              width={120}
              height={48}
              className="w-full h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              priority
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Spacer 1: Grows on scroll to push Nav to right */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? 'flex-grow' : 'w-0'
          }`}
        />

        {/* Desktop Nav & Lang Switcher Group */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-6">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[#F5F2EB]/90 hover:text-white font-semibold uppercase tracking-wider text-xs md:text-[13px] transition-colors py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>
          
          {/* Single Pill Lang Switcher (Desktop) */}
          <button
            onClick={() => setLanguage(language === 'cz' ? 'en' : 'cz')}
            className="px-4 py-1.5 rounded-full border border-white/20 text-[#F5F2EB]/90 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer shadow-sm"
            aria-label={`Switch language. Current is ${language}`}
          >
            {language === 'cz' ? 'CZ' : 'EN'}
          </button>
        </div>

        {/* Spacer 2: Shrinks on scroll. Grows at top to push Controls right */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? 'w-4 md:w-8' : 'flex-grow'
          }`}
        />

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 flex-shrink-0 z-[100]">
          
          <div className="md:hidden flex items-center gap-3">
            {/* Single Pill Lang Switcher (Mobile) */}
            <button
              onClick={() => setLanguage(language === 'cz' ? 'en' : 'cz')}
              className="px-3 py-1.5 rounded-full border border-white/20 text-[#F5F2EB]/90 hover:text-white hover:bg-white/10 transition-colors text-[11px] font-bold uppercase tracking-widest cursor-pointer"
            >
              {language === 'cz' ? 'CZ' : 'EN'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full border border-white/20 text-[#F5F2EB]/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden bg-[#0e0d0b]/95 backdrop-blur-2xl border-b border-amber-500/20 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col px-6 py-5 divide-y divide-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#F5F2EB] py-3.5 text-base font-semibold uppercase tracking-wider flex items-center justify-between hover:text-amber-300 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-amber-400/50 text-xs">→</span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

