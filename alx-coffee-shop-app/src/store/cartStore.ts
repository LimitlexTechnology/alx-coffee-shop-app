import { create } from 'zustand';
import { Coffee } from '../data/coffee';

interface CartItem extends Coffee {
  quantity: number;
  size: 'S' | 'M' | 'L';
}

interface CartState {
  items: CartItem[];
  addToCart: (coffee: Coffee, size: 'S' | 'M' | 'L') => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (coffee, size) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === coffee.id && item.size === size
      );
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === coffee.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...coffee, quantity: 1, size }] };
    });
  },
  removeFromCart: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  incrementQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrementQuantity: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
