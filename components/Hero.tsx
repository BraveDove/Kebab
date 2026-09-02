'use client';

import Image from 'next/image';
import heroBg from '../public/background.jpg';
import { logoUrl } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Image Layer (Mobile: Bottom half, Desktop: Absolute Right) */}
      <div className="absolute bottom-0 right-0 w-full h-[60vh] md:h-full md:top-0 md:w-[90%] lg:w-[70%] z-0">
        <Image
          src={heroBg}
          alt="Gemüse Corner Kebab"
          fill
          className="object-cover object-top md:object-[center_30%]"
          priority
          quality={100}
          referrerPolicy="no-referrer"
        />
        {/* Gradients for seamless cinematic dissolve */}
        {/* 1. Heavy dissolve from left to right (Desktop only) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 lg:via-[#0A0A0A]/70 to-transparent" />
        
        {/* 2. Soft fade from top to bottom (Mobile only - blends image into the top black section) */}
        <div className="md:hidden absolute inset-x-0 top-0 h-[30vh] bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />

        {/* 3. Soft fade from bottom (for smooth scroll transition into content) */}
        <div className="absolute inset-x-0 bottom-0 h-[20vh] md:h-[30vh] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>

      {/* Ambient glow behind logo */}
      <div className="absolute top-[25%] md:top-1/2 left-1/2 md:left-[15%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FF0000]/15 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Content Container (Massive Logo Only) */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full flex-grow flex flex-col justify-start md:justify-center pt-[20vh] md:pt-0">
        <div className="flex flex-col items-center md:items-start justify-center w-full max-w-[500px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[850px] mx-auto md:mx-0">
          <Image
            src={logoUrl}
            alt="Gemüse Corner Kebab"
            width={900}
            height={450}
            className="w-[90%] md:w-full h-auto drop-shadow-[0_10px_40px_rgba(255,0,0,0.15)]"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <h1 className="sr-only">Gemüse Corner Kebab</h1>
    </section>
  );
}
