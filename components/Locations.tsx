'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { locationsData } from '@/lib/content';
import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';

function isLocationOpen(schedule: any) {
  // Use Prague time specifically
  const pragueDate = new Date().toLocaleString("en-US", { timeZone: "Europe/Prague" });
  const now = new Date(pragueDate);
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const todaySchedule = schedule[currentDay];
  if (!todaySchedule || !todaySchedule.open || !todaySchedule.close) return false;

  const [openHour, openMin] = todaySchedule.open.split(':').map(Number);
  const [closeHour, closeMin] = todaySchedule.close.split(':').map(Number);

  const currentTotalMins = currentHour * 60 + currentMinute;
  const openTotalMins = openHour * 60 + openMin;
  const closeTotalMins = closeHour * 60 + closeMin;

  return currentTotalMins >= openTotalMins && currentTotalMins < closeTotalMins;
}

export default function Locations() {
  const { t, language } = useLanguage();
  const [openStatuses, setOpenStatuses] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const updateStatuses = () => {
      const statuses: Record<string, boolean> = {};
      locationsData.forEach(loc => {
        statuses[loc.id] = isLocationOpen(loc.schedule);
      });
      setOpenStatuses(statuses);
    };

    updateStatuses();
    const interval = setInterval(updateStatuses, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="locations" className="py-24 bg-[#0A0A0A] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-4">
            {t('locations.title')}
          </h2>
          <div className="w-24 h-2 bg-[#FF0000] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locationsData.map((location, idx) => {
            const isOpen = openStatuses[location.id];
            
            return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-sm flex flex-col group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-600">
                    {location.neighborhood}
                  </div>
                  <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 ${
                    isOpen ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                    {isOpen ? t('locations.open') : t('locations.closed')}
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-display text-3xl uppercase text-[#0A0A0A] mb-4 flex items-center gap-2">
                    <MapPin className="text-[#FF0000]" size={24} />
                    {location.address}
                  </h3>
                  <div className="flex items-start gap-2 text-gray-600 mb-8 font-medium">
                    <Clock className="text-gray-400 mt-1 shrink-0" size={18} />
                    <p className="leading-relaxed">
                      {location.hoursText[language]}
                    </p>
                  </div>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] font-bold uppercase tracking-wider hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300"
                >
                  {t('locations.directions')}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
