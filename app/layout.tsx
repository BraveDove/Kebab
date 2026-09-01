import type { Metadata } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

const anton = Anton({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-anton',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Gemüse Corner Kebab',
  description: 'Ze stánku v Podolí na 4 pobočky po celé Praze. Žádné kompromisy, jen tisícovkami hostů prověřený kebab v nejvyšší kvalitě.',
  icons: {
    icon: 'https://gemusecornerkebab.cz/wp-content/uploads/2026/04/cropped-favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${anton.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F7F6F6] text-[#000000] antialiased selection:bg-[#FF0000] selection:text-white">
        <LanguageProvider>
          <div className="overflow-x-hidden flex flex-col min-h-screen">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
