export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'Boiler' | 'Plumbing' | 'Heating' | 'Bathroom';
}
