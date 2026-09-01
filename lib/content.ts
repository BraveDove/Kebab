export type Language = 'cz' | 'en';

export const dictionary = {
  cz: {
    'nav.menu': 'Menu',
    'nav.gallery': 'Galerie',
    'nav.locations': 'Pobočky',
    'hero.tagline': 'Ze stánku v Podolí na 4 pobočky po celé Praze. Žádné kompromisy, jen tisícovkami hostů prověřený kebab v nejvyšší kvalitě.',
    'hero.cta.menu': 'Zobrazit menu',
    'hero.cta.locations': 'Najít pobočku',
    'menu.title': 'Menu',
    'gallery.title': 'Galerie',
    'locations.title': 'Naše pobočky',
    'locations.directions': 'Trasa na Google Maps',
    'locations.open': 'Otevřeno',
    'locations.closed': 'Zavřeno',
    'footer.allergens': 'Jídelní lístek s alergeny u obsluhy',
    'footer.alcohol': 'Zákaz prodeje alkoholu osobám mladším 18 let',
  },
  en: {
    'nav.menu': 'Menu',
    'nav.gallery': 'Gallery',
    'nav.locations': 'Locations',
    'hero.tagline': 'From a stall in Podolí to 4 locations across Prague. No compromises — just kebab tested and approved by thousands of guests.',
    'hero.cta.menu': 'View Menu',
    'hero.cta.locations': 'Find a Location',
    'menu.title': 'Menu',
    'gallery.title': 'Gallery',
    'locations.title': 'Our Locations',
    'locations.directions': 'Get Directions',
    'locations.open': 'Open now',
    'locations.closed': 'Closed now',
    'footer.allergens': 'Allergen list upon request',
    'footer.alcohol': 'Alcohol is not sold to persons under 18',
  }
};

export const menuData = [
  {
    category: 'Chicken',
    icon: 'drumstick',
    items: [
      { name: 'Chicken Sandwich', price: 185 },
      { name: 'Chicken Dürüm', price: 200 },
      { name: 'Chicken Box', price: 205 },
    ]
  },
  {
    category: 'Halloumi',
    icon: 'cheese',
    items: [
      { name: 'Halloumi Sandwich', price: 185 },
      { name: 'Halloumi Dürüm', price: 200 },
      { name: 'Halloumi Box', price: 205 },
    ]
  },
  {
    category: 'Falafel',
    icon: 'leaf',
    items: [
      { name: 'Falafel Sandwich', price: 185 },
      { name: 'Falafel Dürüm', price: 200 },
      { name: 'Falafel Box', price: 205 },
    ]
  },
  {
    category: 'Extra',
    icon: 'fries',
    items: [
      { name: 'Fries', price: 60 },
      { name: 'Chicken', price: 60 },
      { name: 'Halloumi', price: 60 },
      { name: 'Falafel', price: 60 },
      { name: 'Bread', price: 20 },
      { name: 'Cheese', price: 10 },
      { name: 'Bag', price: 10 },
      { name: 'Box', price: 10 },
    ]
  },
  {
    category: 'Drinks',
    icon: 'cup',
    items: [
      { name: 'Homemade Limo', price: 65 },
      { name: 'Limo 0,5l', price: 65 },
      { name: 'Limo 0,3l', price: 45 },
      { name: 'Ayran', price: 45 },
      { name: 'Beer Matuška', price: 80 },
      { name: 'Beer', price: 60 },
      { name: 'Water', price: 30 },
    ]
  },
  {
    category: 'Sauces',
    icon: 'bottle',
    items: [
      { name: { cz: 'Bylinková', en: 'Herbs' }, price: null },
      { name: { cz: 'Česneková', en: 'Garlic' }, price: null },
      { name: { cz: 'Pálivá', en: 'Spicy' }, price: null },
      { name: { cz: 'Koprová', en: 'Dill' }, price: null },
      { name: { cz: 'Hummus', en: 'Hummus' }, price: null },
      { name: { cz: 'Ajvar', en: 'Ajvar' }, price: null },
      { name: { cz: 'Kari', en: 'Curry' }, price: null },
    ]
  }
];

export const locationsData = [
  {
    id: 'podoli',
    neighborhood: 'Podolí',
    address: 'Podolské nábřeží',
    mapUrl: 'https://maps.app.goo.gl/Tfva4pqK4n5YJymC8',
    schedule: {
      1: { open: '11:00', close: '21:00' }, // Mon
      2: { open: '11:00', close: '21:00' }, // Tue
      3: { open: '11:00', close: '21:00' }, // Wed
      4: { open: '11:00', close: '21:00' }, // Thu
      5: { open: '11:00', close: '21:00' }, // Fri
      6: { open: '11:00', close: '21:00' }, // Sat
      0: { open: '11:00', close: '21:00' }, // Sun
    },
    hoursText: {
      cz: 'Po–Ne 11:00–21:00',
      en: 'Mon–Sun 11:00–21:00',
    }
  },
  {
    id: 'vinohrady',
    neighborhood: 'Vinohrady',
    address: 'Rumunská 26',
    mapUrl: 'https://maps.app.goo.gl/cESWK8VE3k6K8ZVw9',
    schedule: {
      1: { open: '11:00', close: '22:00' },
      2: { open: '11:00', close: '22:00' },
      3: { open: '11:00', close: '22:00' },
      4: { open: '11:00', close: '22:00' },
      5: { open: '11:00', close: '22:00' },
      6: { open: '11:00', close: '22:00' },
      0: { open: '11:00', close: '22:00' },
    },
    hoursText: {
      cz: 'Po–Ne 11:00–22:00',
      en: 'Mon–Sun 11:00–22:00',
    }
  },
  {
    id: 'holesovice',
    neighborhood: 'Holešovice',
    address: 'Veletržní 46',
    mapUrl: 'https://maps.app.goo.gl/3MwNBCAvbCtaeEr87',
    schedule: {
      1: { open: '11:00', close: '21:30' },
      2: { open: '11:00', close: '21:30' },
      3: { open: '11:00', close: '21:30' },
      4: { open: '11:00', close: '21:30' },
      5: { open: '11:00', close: '21:30' },
      6: { open: '11:00', close: '21:30' },
      0: { open: '11:00', close: '21:30' },
    },
    hoursText: {
      cz: 'Po–Ne 11:00–21:30',
      en: 'Mon–Sun 11:00–21:30',
    }
  },
  {
    id: 'karlin',
    neighborhood: 'Karlín',
    address: 'Sokolovská 79',
    mapUrl: 'https://maps.app.goo.gl/TiTaxmRzYNTKbCbM7',
    schedule: {
      1: { open: '11:00', close: '22:00' },
      2: { open: '11:00', close: '22:00' },
      3: { open: '11:00', close: '22:00' },
      4: { open: '11:00', close: '22:00' },
      5: { open: '11:00', close: '22:00' },
      6: { open: '11:00', close: '21:00' },
      0: { open: '11:00', close: '21:00' },
    },
    hoursText: {
      cz: 'Po–Pá 11:00–22:00, So–Ne 11:00–21:00',
      en: 'Mon–Fri 11:00–22:00, Sat–Sun 11:00–21:00',
    }
  }
];

export const galleryImages = [
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-4.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/04/pexels-pixabay-274192-1-1920x1920.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-12.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-11.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/04/michael-discenza-MxfcoxycH_Y-unsplash-3-1920x2639-v2.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-18.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-1.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-10.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-17.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-2.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-13.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-5.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-15.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-19.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-9.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-7.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-20.jpg',
  'https://gemusecornerkebab.cz/wp-content/uploads/2026/05/gemuse-corner-kebab-praha-6.jpg'
];

export const heroImage = '/hero-bg.jpg';
export const logoUrl = 'https://gemusecornerkebab.cz/wp-content/uploads/2026/04/gemuse-corner-kebab-logo.svg';
