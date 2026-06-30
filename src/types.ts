export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starter' | 'main' | 'dessert' | 'beverage';
  image: string;
  isChefSpecial?: boolean;
  isSignature?: boolean;
  notes?: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequest?: string;
  tablePreference: 'standard' | 'window' | 'chef-counter' | 'private-alcove';
  status: 'pending' | 'confirmed';
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'interior' | 'dish' | 'chef' | 'wine';
}
