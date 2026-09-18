import { MenuItem, TastingCourse, GalleryItem, PartnerFarm, FAQItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'One Ten',
  subtitle: 'Restaurant & Cellar',
  tagline: 'An ode to seasonal provenance, quiet luxury, and modern hospitality.',
  address: '110 Mercer Street, New York, NY 10012',
  neighborhood: 'SoHo / Historic Cast Iron District',
  phone: '+1 (212) 555-0110',
  email: 'reservations@onetenrestaurant.com',
  conciergeEmail: 'events@onetenrestaurant.com',
  hours: [
    { days: 'Wednesday – Sunday', service: 'Lunch Service', hours: '12:00 PM – 2:30 PM' },
    { days: 'Tuesday – Sunday', service: 'Dinner Service', hours: '5:30 PM – 10:30 PM' },
    { days: 'Tuesday – Sunday', service: 'The Cellar Bar & Lounge', hours: '5:00 PM – Late' },
    { days: 'Monday', service: 'Culinary Research & Private Buyouts', hours: 'Closed to Public' }
  ],
  awards: [
    'Michelin Guide Selected 2024',
    'Wine Spectator Best of Award of Excellence',
    'James Beard Foundation Semi-Finalist — Best Chef: New York'
  ]
};

export const TASTING_COURSES: TastingCourse[] = [
  {
    courseNumber: 1,
    title: 'Amuse-Bouche',
    dish: 'Golden Chinquapin Chestnut & Roasted Kelp Tartlet',
    description: 'Caramelized onion emulsion, fermented mushroom garum, sea aster',
    winePairing: '2018 Pierre Péters ‘Cuvée de Réserve’ Blanc de Blancs, Champagne, FR',
    origin: 'Catskill Foraged Chestnuts & Montauk Wild Kelp',
    dietary: ['VG']
  },
  {
    courseNumber: 2,
    title: 'Crudo',
    dish: 'Wild Line-Caught Fluke with Preserved Calamansi',
    description: 'Fennel pollen, cold-pressed olive oil from Agrigento, dashi jelly, sea grapes',
    winePairing: '2021 Domaine Vacheron Sancerre Blanc, Loire Valley, FR',
    origin: 'Montauk Day-Boat Fishery, Long Island',
    dietary: ['GF', 'DF']
  },
  {
    courseNumber: 3,
    title: 'Garden',
    dish: 'Charred Spigarello with Cured Egg Yolk & Rye Miso',
    description: 'Warm smoked whey reduction, toasted buckwheat crisps, shaved winter black truffles',
    winePairing: '2020 Keller Riesling Trocken ‘Von der Fels’, Rheinhessen, DE',
    origin: 'Norwich Meadows Organic Farm, NY',
    dietary: ['GF']
  },
  {
    courseNumber: 4,
    title: 'Pasta',
    dish: 'Agnolotti del Plin filled with Braised Artichoke & Robiola',
    description: 'Brown butter infused with mountain sage, aged balsamic di Modena 25-year',
    winePairing: '2019 Vietti Barolo ‘Castiglione’, Piedmont, IT',
    origin: 'Stone-Ground Einkorn from Farmer Ground Flour, NY',
    dietary: ['VG']
  },
  {
    courseNumber: 5,
    title: 'Sea & Embers',
    dish: 'Dry-Aged Striped Bass over Birch Wood Charcoal',
    description: 'Sunchoke purée, glazed winter chanterelles, sauce vin jaune',
    winePairing: '2019 Domaine de Montille Meursault ‘Les Narvaux’, Burgundy, FR',
    origin: 'Narragansett Bay Sustainable Fleet',
    dietary: ['GF']
  },
  {
    courseNumber: 6,
    title: 'Land',
    dish: 'Pasture-Raised Venison Loin with Roasted Juniper',
    description: 'Parsnip mille-feuille, fermented red currants, bone marrow jus',
    winePairing: '2016 Château Léoville Barton, Saint-Julien, Bordeaux, FR',
    origin: 'Highland Farm Heritage Meats, Germantown, NY',
    dietary: ['GF']
  },
  {
    courseNumber: 7,
    title: 'Finale',
    dish: 'Smoked Birch Bark Ice Cream & Caramelized Honey Tuile',
    description: 'Compressed quince, candied pine nuts, bee pollen crisp from our rooftop apiary',
    winePairing: '2017 Château d’Yquem Sauternes (30ml pour), Bordeaux, FR',
    origin: 'Hudson Valley Apiary & Rooftop Garden',
    dietary: ['GF', 'VG']
  }
];

export const DINNER_ITEMS: MenuItem[] = [
  {
    id: 'd1',
    name: 'Maine Diver Scallop Crudo',
    description: 'Kohlrabi ribbon, finger lime pearls, elderflower vinaigrette, cold-pressed hazelnut oil',
    price: '$32',
    category: 'dinner',
    courseCategory: 'starter',
    dietary: ['GF', 'DF'],
    provenance: 'Bar Harbor, Maine'
  },
  {
    id: 'd2',
    name: 'Heirloom Beet Tartare & Smoked Creme Fraiche',
    description: 'Black garlic reduction, shaved horse radish, caraway seed cracker, winter purslane',
    price: '$26',
    category: 'dinner',
    courseCategory: 'starter',
    dietary: ['GF', 'VG'],
    provenance: 'Lancaster Farm Sanctuary'
  },
  {
    id: 'd3',
    name: 'Glazed Sweetbreads & Salsify',
    description: 'Charred allium purée, preserved morel mushrooms, madeira pan glaze, nasturtium',
    price: '$34',
    category: 'dinner',
    courseCategory: 'starter',
    provenance: 'Kinderhook Heritage Farm'
  },
  {
    id: 'd4',
    name: 'Dry-Aged Rohan Duck Breast',
    description: 'Spiced lavender honey lacquer, braised endive, roasted sunchoke, black currant jus',
    price: '$58',
    category: 'dinner',
    courseCategory: 'main',
    dietary: ['GF'],
    provenance: 'Hudson Valley Duck Farm',
    recommended: true
  },
  {
    id: 'd5',
    name: 'Wild Atlantic Halibut En Papillote',
    description: 'Baby leeks, saffron broth, Manila clams, sea beans, preserved Meyer lemon',
    price: '$54',
    category: 'dinner',
    courseCategory: 'main',
    dietary: ['GF', 'DF'],
    provenance: 'Georges Bank'
  },
  {
    id: 'd6',
    name: 'A5 Wagyu Striploin from Miyazaki',
    description: 'Charred spring onion chimichurri, smoked bone marrow butter, potato dauphinoise',
    price: '$95',
    category: 'dinner',
    courseCategory: 'main',
    dietary: ['GF'],
    provenance: 'Miyazaki Prefecture, Japan'
  },
  {
    id: 'd7',
    name: 'Wood-Roasted Lion’s Mane Steak',
    description: 'Porcini and fermented grain risotto, crispy shallots, black winter truffle',
    price: '$44',
    category: 'dinner',
    courseCategory: 'main',
    dietary: ['GF', 'V'],
    provenance: 'Catskill Fungi, NY',
    recommended: true
  },
  {
    id: 'd8',
    name: 'Roasted Fig & Goat Milk Curd',
    description: 'Pistachio dacquoise, wild thyme blossom sorbet, olive oil cake crumbs',
    price: '$22',
    category: 'dinner',
    courseCategory: 'dessert',
    dietary: ['VG'],
    provenance: 'Riverside Creamery'
  },
  {
    id: 'd9',
    name: 'Warm 72% Venezuelan Criollo Tart',
    description: 'Single-estate dark chocolate, sea salt flakes, smoked cedar wood gelato',
    price: '$24',
    category: 'dinner',
    courseCategory: 'dessert',
    dietary: ['VG'],
    provenance: 'Direct Trade Criollo Cacao'
  }
];

export const LUNCH_ITEMS: MenuItem[] = [
  {
    id: 'l1',
    name: 'Warm Sourdough & Cultured Butter',
    description: 'Naturally leavened 36-hour sourdough, house-churned butter with sea salt crystals',
    price: '$14',
    category: 'lunch',
    courseCategory: 'starter',
    dietary: ['VG'],
    provenance: 'House-Milled Grains'
  },
  {
    id: 'l2',
    name: 'Castelfranco Chicory & Asian Pear',
    description: 'Shaved pecorino stagionato, candied walnuts, cider-shallot vinaigrette',
    price: '$24',
    category: 'lunch',
    courseCategory: 'starter',
    dietary: ['GF', 'VG']
  },
  {
    id: 'l3',
    name: 'Hand-Cut Tagliolini with White Alba Truffle',
    description: 'Cultured butter, 36-month Parmigiano Reggiano, cracked Tasmanian pepper',
    price: '$48',
    category: 'lunch',
    courseCategory: 'main',
    dietary: ['VG'],
    recommended: true
  },
  {
    id: 'l4',
    name: 'Crispy Skin Dorade Royale',
    description: 'Braised fennel, caper leaves, roasted cherry tomatoes, saffron emulsion',
    price: '$42',
    category: 'lunch',
    courseCategory: 'main',
    dietary: ['GF']
  },
  {
    id: 'l5',
    name: 'Charcoal-Grilled Prime Bavette',
    description: 'Pommes frites, charred bone marrow béarnaise, wild watercress salad',
    price: '$46',
    category: 'lunch',
    courseCategory: 'main',
    dietary: ['GF']
  },
  {
    id: 'l6',
    name: 'Meyer Lemon Posset & Rosemary Shortbread',
    description: 'Blackberry compote, citrus oil, candied rosemary sprig',
    price: '$18',
    category: 'lunch',
    courseCategory: 'dessert',
    dietary: ['VG']
  }
];

export const BEVERAGE_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'The Mercer 110',
    description: 'Rye whiskey, smoked fig aperitif, amaro nonino, charred orange mist',
    price: '$24',
    category: 'beverage',
    courseCategory: 'cocktail',
    recommended: true
  },
  {
    id: 'b2',
    name: 'Cast Iron Old Fashioned',
    description: 'Single barrel bourbon, Demerara, Angostura, cherrywood smoke, expressed orange',
    price: '$26',
    category: 'beverage',
    courseCategory: 'cocktail'
  },
  {
    id: 'b3',
    name: 'Botanical Clarified Milk Punch',
    description: 'Earl grey infused gin, bergamot, clarified oat whey, clarified lemon, cardamom',
    price: '$23',
    category: 'beverage',
    courseCategory: 'cocktail'
  },
  {
    id: 'b4',
    name: 'No. 110 Zero-Proof Aperitivo',
    description: 'Distilled botanicals, charred rosemary, gentian root, blood orange tonic',
    price: '$17',
    category: 'beverage',
    courseCategory: 'cocktail',
    dietary: ['V', 'GF']
  },
  {
    id: 'b5',
    name: '2020 Domaine Roulot Meursault',
    description: 'Burgundy, France — Intense minerality, toasted almond, white blossoms',
    price: '$42 / Glass · $210 / Btl',
    category: 'beverage',
    courseCategory: 'wine'
  },
  {
    id: 'b6',
    name: '2017 Bruno Giacosa Barolo Falletto',
    description: 'Piedmont, Italy — Rose petals, dried cherries, earthy leather, structured tannins',
    price: '$55 / Glass · $275 / Btl',
    category: 'beverage',
    courseCategory: 'wine',
    recommended: true
  },
  {
    id: 'b7',
    name: 'Sommelier’s Tasting Flight',
    description: 'Four 75ml pairings curated to match current tasting and dinner selections',
    price: '$95 / Guest',
    category: 'beverage',
    courseCategory: 'wine'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Dining Room at Dusk',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Natural plaster walls, warm linen, and muted amber table lighting in the Main Dining Room.'
  },
  {
    id: 'g2',
    title: 'Montauk Fluke Crudo',
    category: 'cuisine',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    caption: 'Line-caught day-boat fluke with preserved citrus, fennel pollen, and cold-pressed olive oil.'
  },
  {
    id: 'g3',
    title: 'The Subterranean Cellar',
    category: 'cellar',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    caption: 'Housing over 1,400 low-intervention, biodynamic, and classical estate vintages.'
  },
  {
    id: 'g4',
    title: 'Hand-Rolled Agnolotti',
    category: 'cuisine',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d628120a?q=80&w=1200&auto=format&fit=crop',
    caption: 'Filled with braised artichoke and Robiola, tossed in sage-infused brown butter.'
  },
  {
    id: 'g5',
    title: 'The Chef’s Counter',
    category: 'craft',
    imageUrl: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1200&auto=format&fit=crop',
    caption: 'Eight bespoke soapstone seats overlooking our wood-fire hearth and expediting pass.'
  },
  {
    id: 'g6',
    title: 'The Solarium at Midday',
    category: 'ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    caption: 'Sunlight filtering through cast-iron skylights onto olive trees and handcrafted stone tables.'
  },
  {
    id: 'g7',
    title: 'Dry-Aged Rohan Duck',
    category: 'cuisine',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    caption: 'Hanging for 18 days in our salt-brick aging chamber before wood-fire roasting.'
  },
  {
    id: 'g8',
    title: 'Signature Mixology',
    category: 'craft',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Botanical extractions, single-estate spirits, and hand-carved crystal ice blocks.'
  }
];

export const PARTNER_FARMS: PartnerFarm[] = [
  {
    name: 'Norwich Meadows Farm',
    location: 'Norwich, New York',
    specialty: 'Heirloom Roots & Brassicas',
    description: 'Certified organic vegetables cultivated on certified glacial silt loam soils, delivered within 24 hours of harvest.'
  },
  {
    name: 'Montauk Day-Boat Collaborative',
    location: 'Montauk, Long Island',
    specialty: 'Line-Caught Fluke & Black Sea Bass',
    description: 'Sustainably landed fish harvested by small independent crews prioritizing zero-bycatch hook-and-line traditions.'
  },
  {
    name: 'Farmer Ground Flour',
    location: 'Trumansburg, New York',
    specialty: 'Stone-Milled Heritage Grains',
    description: 'Slow, water-powered granite mill yielding unbleached heritage wheat that forms the backbone of our sourdough and pastas.'
  },
  {
    name: 'Catskill Heritage Mushrooms',
    location: 'Andes, New York',
    specialty: 'Wild & Cultivated Fungi',
    description: 'Forest-foraged morels, chanterelles, and log-grown lion’s mane nourished strictly on native hardwood chips.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is the dress code at One Ten?',
    answer: 'We kindly request smart casual to elegant attire. We ask guests to refrain from athletic wear, beachwear, flip-flops, or baseball caps in the main dining room and chef’s counter.'
  },
  {
    question: 'How far in advance can reservations be booked?',
    answer: 'Reservations open precisely 30 days in advance at 10:00 AM EST on a rolling daily basis. For parties of 7 or more, or private room buyouts, inquiries are welcomed up to 6 months in advance.'
  },
  {
    question: 'Can dietary requirements and allergies be accommodated?',
    answer: 'Yes. With at least 48 hours notice prior to your reservation, our culinary team will gladly tailor both the tasting menu and à la carte dishes for vegetarian, pescatarian, gluten-free, and most severe nut or dairy allergies.'
  },
  {
    question: 'What is your corkage and cake service policy?',
    answer: 'Guests may bring up to two 750ml bottles of wine not currently represented on our cellar list. The corkage fee is $75 per bottle. Dessert service for outside cakes is $15 per guest.'
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Due to our intimate seating and seasonal ingredient sourcing, cancellations or reductions in party size must be made at least 24 hours prior to the reservation. Late cancellations within 24 hours incur a $50 per guest fee.'
  },
  {
    question: 'Is valet parking or public transit available?',
    answer: 'We are situated in the historic SoHo Cast Iron District at 110 Mercer Street, moments from the Prince St (N, Q, R, W) and Spring St (C, E, 6) subway stations. Dedicated valet service is provided directly at our front entrance every evening beginning at 5:00 PM.'
  }
];
