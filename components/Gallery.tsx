'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { galleryImages } from '@/lib/content';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % galleryImages.length);
    }
  }, [lightboxIndex]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  // Touch handlers for swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) showNext();
    if (touchStart - touchEnd < -50) showPrev();
  };

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <p className="text-gray-700 text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-10 text-balance leading-relaxed">
            {t('hero.tagline')}
          </p>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-[#0A0A0A] mb-4">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-2 bg-[#FF0000] mx-auto" />
        </motion.div>

        {/* Masonry Grid (CSS Columns approach for simplicity and performance) */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx % 4 * 0.1 }}
              className="relative overflow-hidden break-inside-avoid cursor-pointer group rounded-sm"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={600}
                height={800} // Approximate height to give next/image a ratio, object-cover handles the rest
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-[110] transition-colors cursor-pointer"
              aria-label="Close gallery"
            >
              <X size={36} />
            </button>
            
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-[110] transition-colors p-2 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-[110] transition-colors p-2 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl max-h-[85vh] h-full mx-12 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={galleryImages[lightboxIndex]}
                alt={`Enlarged image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
