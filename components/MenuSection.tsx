'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { menuData } from '@/lib/content';
import { motion, AnimatePresence } from 'motion/react';
import { Drumstick, Utensils, Leaf, Plus, CupSoda, Droplet } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  drumstick: <Drumstick size={24} />,
  cheese: <Utensils size={24} />,
  leaf: <Leaf size={24} />,
  fries: <Plus size={24} />,
  cup: <CupSoda size={24} />,
  bottle: <Droplet size={24} />,
};

export default function MenuSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(menuData[0].category);

  const activeCategory = menuData.find(cat => cat.category === activeTab);

  return (
    <section id="menu" className="py-16 md:py-20 bg-[#F7F6F6] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase text-[#0A0A0A] mb-4">
            {t('menu.title')}
          </h2>
          <div className="w-24 h-2 bg-[#FF0000] mx-auto" />
        </motion.div>

        {/* Custom Tab Navigation */}
        <div className="relative mb-8 md:mb-12">
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-y-4 px-2">
            {menuData.map((category) => {
              const isActive = activeTab === category.category;
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveTab(category.category)}
                  className={`relative px-2 sm:px-6 py-4 flex flex-col items-center gap-2 transition-colors z-10 cursor-pointer ${
                    isActive ? 'text-[#0A0A0A]' : 'text-gray-500 hover:text-[#0A0A0A]'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <span className="mb-1">{iconMap[category.icon]}</span>
                  <span className="font-bold uppercase tracking-wider text-[10px] sm:text-sm text-center">{category.category}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF0000]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 md:gap-y-8"
            >
              {activeCategory?.items.map((item, index) => (
                <div key={index} className="flex items-baseline w-full">
                  <span className="font-medium text-lg text-[#0A0A0A]">
                    {typeof item.name === 'object' ? item.name[language] : item.name}
                  </span>
                  <div className="flex-grow mx-4 border-b-2 border-dotted border-gray-300 relative top-[-6px]" />
                  <span className="font-bold text-lg text-[#0A0A0A]">
                    {item.price ? `${item.price} Kč` : '-'}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
