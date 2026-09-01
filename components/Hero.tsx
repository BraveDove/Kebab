'use client';

import Image from 'next/image';
import heroBg from '../public/background.jpg';

export default function Hero() {
  return (
    <section className="relative h-[75svh] min-h-[500px] sm:h-[85vh] md:h-[90vh] lg:h-[95vh] w-full flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Gemüse Corner Kebab"
          fill
          className="object-cover object-center md:object-[center_40%] scale-100 transition-transform duration-700 ease-out"
          priority
          quality={90}
          referrerPolicy="no-referrer"
        />
        {/* Minimal top gradient for navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
        
        {/* Soft bottom transition into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      </div>

      <h1 className="sr-only">Gemüse Corner Kebab</h1>
    </section>
  );
}
