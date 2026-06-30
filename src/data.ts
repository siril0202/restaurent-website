import { Dish, Review, GalleryItem } from './types';

export const DISHES: Dish[] = [
  {
    id: 'starter-1',
    name: 'Bay Scallops with Saffron Bisque',
    description: 'Seared coastal scallops, kashmiri saffron foam, compressed melon, roasted coriander oil, and micro-herbs.',
    price: 1250,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    notes: 'Signature starter featuring direct coastal catch'
  },
  {
    id: 'starter-2',
    name: 'Anise Duck Galette',
    description: 'Crisp pastry parcel filled with slow-braised duck confit, perfumed with local star anise, accompanied by Madurai ginger-fig jam.',
    price: 1150,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    notes: 'A French-Tamil luxury crossover'
  },
  {
    id: 'starter-3',
    name: 'Truffled Chettinad Arancini',
    description: 'Crispy risotto spheres loaded with black truffle and local buffalo mozzarella, resting on an aromatic heirloom tomato confit.',
    price: 950,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    notes: 'Smoked mozzarella and Perigord truffles'
  },
  {
    id: 'main-1',
    name: 'The Velvet Flame Lamb Loin',
    description: 'Slow-cooked Nilgiri lamb in a pistachio and native herb crust, with roasted aubergine purée, caramelized shallots, and rich black cardamom reduction.',
    price: 2450,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    isChefSpecial: true,
    notes: 'Our namesake dish, cooked for 36 hours'
  },
  {
    id: 'main-2',
    name: 'Guntur Spice Wagyu Ribeye',
    description: 'A5 Wagyu beef grilled to medium-rare, sweet potato purée, charcoal-roasted heritage carrots, and Guntur chili infused bone marrow glaze.',
    price: 4850,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    notes: 'Served with pure gold leaf adornment'
  },
  {
    id: 'main-3',
    name: 'Saffron Coastal Lobster',
    description: 'Butter-poached jumbo coastal lobster tails, nested on hand-turned saffron risotto, wild sea asparagus, and Meyer lemon emulsion.',
    price: 2850,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true,
    notes: 'Infused with premium saffron strings'
  },
  {
    id: 'main-4',
    name: 'Mille-Feuille of Smoked Aubergine',
    description: 'Crisp layered pastry, roasted aubergine caviar, whipped goat cheese, heirloom tomatoes, and coconut-curry leaf velouté.',
    price: 1650,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    notes: 'Vegetarian masterwork'
  },
  {
    id: 'dessert-1',
    name: 'The Madurai Jasmine Dome',
    description: 'White chocolate spherical shell infused with local jasmine oil, filled with wild raspberry confit, melted tableside with hot buttered gold caramel sauce.',
    price: 950,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    isChefSpecial: true,
    notes: 'Tableside spectacular performance dessert'
  },
  {
    id: 'dessert-2',
    name: 'Molten Cardamom Fondant',
    description: 'Rich Single-Origin dark chocolate molten lava cake infused with freshly ground green cardamom, served with organic Madagascar vanilla pod gel.',
    price: 850,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    notes: 'Decadent chocolate with warm southern spices'
  },
  {
    id: 'beverage-1',
    name: 'Velvet Rose & Gold Elixir',
    description: 'Organic damask rose petal water, cold-pressed pomegranate seed nectar, wild blossom honey, finished with fine 24-karat gold leaf.',
    price: 750,
    category: 'beverage',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    notes: 'Alcohol-free, served in premium crystal'
  },
  {
    id: 'beverage-2',
    name: 'Smoked Oak & Cocoa Nectar',
    description: 'Cold-brewed single estate roasted cacao nibs, light molasses, organic citrus oils, cold-smoked with applewood before tableside glass dome removal.',
    price: 650,
    category: 'beverage',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    notes: 'Rich, dry, and spectacularly smoky'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Elena Rostova',
    role: 'Michelin Guide Inspector',
    rating: 5,
    comment: 'An absolute masterpiece of modern culinary architecture. The Madurai Jasmine Dome is an exquisite sensory poem. Melding rigorous French technique with the soulful spices of Southern India is a pure revelation of genius.',
    date: 'May 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-2',
    name: 'Vikram Sethi',
    role: 'Culinary Critic, The Fine Palate',
    rating: 5,
    comment: 'The Velvet Flame sets a daunting new standard for luxury dining in India. Every detail from the gold-trimmed crystal glasses to the melt-in-your-mouth Wagyu ribeye with Guntur-spiced bone marrow is flawless. Breathtaking.',
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-3',
    name: 'Priya Rajendran',
    role: 'Epicurean Connoisseur',
    rating: 5,
    comment: 'Having dined at Michelin establishments worldwide, I was stunned to find such unmatched precision in my hometown. The Nilgiri Lamb Loin is cooked to absolute perfection. The service is incredibly warm, intuitive, and majestic.',
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    caption: 'The Grand Imperial Dining Room with plush velvet velvet-red banquettes and soft golden candle lights.',
    category: 'interior'
  },
  {
    id: 'g-2',
    url: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80',
    caption: 'Meticulous plating of the Velvet Flame Lamb Loin by our culinary artists.',
    category: 'dish'
  },
  {
    id: 'g-3',
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    caption: 'Chef Vignesh supervising the gourmet preparations in the thermal kitchen.',
    category: 'chef'
  },
  {
    id: 'g-4',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    caption: 'Decanting our exclusive vintage grape mocktails and gold leaf infusions.',
    category: 'wine'
  },
  {
    id: 'g-5',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    caption: 'The intimate Private Alcove for exclusive private group dining events.',
    category: 'interior'
  },
  {
    id: 'g-6',
    url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    caption: 'The Madurai Jasmine Dome before the hot caramel pour is performed.',
    category: 'dish'
  }
];

export const CHEF_INFO = {
  name: 'Chef Vignesh Sundaram',
  title: 'Executive Culinary Director',
  bio: 'Hailing from Tamil Nadu and trained under culinary icons in Paris and London, Chef Vignesh returns home to merge Michelin-star precision with the vibrant culinary heritage of Madurai. His philosophy values pristine local ingredients, rigorous French slow-cooking, and multi-sensory plating.',
  quote: "Gastronomy is a high art, and like any art, it must speak to the soul. With Velvet Flame, our vision is to honor our ancestral culinary roots with unparalleled royal luxury.",
  image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&h=800&q=80'
};
