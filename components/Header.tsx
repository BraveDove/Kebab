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
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-[#0e0d0b]/40 backdrop-blur-lg border-b border-white/10 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo with slight hover scale */}
        <a href="#" className="flex-shrink-0 z-[100] transition-transform hover:scale-105">
          <Image
            src={logoUrl}
            alt="Gemüse Corner Kebab"
            width={120}
            height={48}
            className={`h-auto transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${
              isScrolled ? 'w-20 md:w-28' : 'w-24 md:w-32'
            }`}
            priority
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[#F5F2EB]/90 hover:text-amber-300 font-semibold uppercase tracking-wider text-xs md:text-[13px] transition-colors py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Language Switcher Pill */}
          <div className="flex items-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-full p-1 shadow-inner">
            <button
              onClick={() => setLanguage('cz')}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                language === 'cz'
                  ? 'bg-amber-400 text-black shadow-[0_2px_8px_rgba(251,191,36,0.4)]'
                  : 'text-[#F5F2EB]/70 hover:text-white'
              }`}
            >
              CZ
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                language === 'en'
                  ? 'bg-amber-400 text-black shadow-[0_2px_8px_rgba(251,191,36,0.4)]'
                  : 'text-[#F5F2EB]/70 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3 z-[100]">
          {/* Quick Language Toggle Pill on Mobile */}
          <div className="flex items-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-full p-0.5">
            <button
              onClick={() => setLanguage('cz')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase transition-all cursor-pointer ${
                language === 'cz'
                  ? 'bg-amber-400 text-black'
                  : 'text-[#F5F2EB]/70'
              }`}
            >
              CZ
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-amber-400 text-black'
                  : 'text-[#F5F2EB]/70'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#F5F2EB] hover:text-amber-400 hover:border-amber-400/40 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
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

