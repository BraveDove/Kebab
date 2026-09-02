'use client';

import Image from 'next/image';
import heroBg from '../public/background.jpg';
import { logoUrl } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-24 pb-16">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF0000]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Massive Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[450px] md:max-w-[550px] lg:max-w-full">
              <Image
                src={logoUrl}
                alt="Gemüse Corner Kebab"
                width={800}
                height={400}
                className="w-full h-auto drop-shadow-[0_0_40px_rgba(255,0,0,0.15)]"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Side - Packaged Food Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] md:max-w-[500px] aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 group">
              <Image
                src={heroBg}
                alt="Gemüse Corner Kebab"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
                quality={100}
                referrerPolicy="no-referrer"
              />
              {/* Inner glass reflection/border for premium feel */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      <h1 className="sr-only">Gemüse Corner Kebab</h1>
    </section>
  );
}
