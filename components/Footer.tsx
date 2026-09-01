'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { logoUrl } from '@/lib/content';
import Image from 'next/image';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-amber-500/15 pt-16 pb-12 text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src={logoUrl}
            alt="Gemüse Corner Kebab"
            width={160}
            height={64}
            className="w-32 md:w-40 h-auto mb-2 opacity-90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left text-gray-400 text-xs sm:text-sm">
            <span>{t('footer.allergens')}</span>
            <span className="hidden sm:inline text-amber-500/40">•</span>
            <span>{t('footer.alcohol')}</span>
          </div>
          <div className="text-center md:text-right text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} Gemüse Corner Kebab. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
}
