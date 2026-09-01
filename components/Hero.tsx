'use client';

import Image from 'next/image';
import heroBg from '../public/background.png';

export default function Hero() {
  return (
    <section className="relative h-[70svh] min-h-[480px] sm:h-[80vh] md:h-[90vh] lg:h-[100dvh] w-full flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Gemüse Corner Kebab Atmosphere"
          fill
          className="object-cover object-[58%_100%] sm:object-[52%_100%] md:object-bottom"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/15 to-transparent" />
      </div>

      <h1 className="sr-only">Gemüse Corner Kebab</h1>
    </section>
  );
}