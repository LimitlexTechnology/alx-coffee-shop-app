export interface Coffee {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  rating: number;
  image: any; // Using any for require() images, or string for URIs
  category: string;
}

export interface CartItem extends Coffee {
  quantity: number;
  size: 'S' | 'M' | 'L';
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'processing' | 'delivered';
}
