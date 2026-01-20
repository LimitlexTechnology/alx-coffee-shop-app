import { create } from 'zustand';
import { CartItem, Coffee } from '../types';

interface StoreState {
  cart: CartItem[];
  favorites: string[]; // List of Coffee IDs
  addToCart: (item: Coffee, size: 'S' | 'M' | 'L') => void;
  removeFromCart: (itemId: string, size: 'S' | 'M' | 'L') => void;
  incrementQuantity: (itemId: string, size: 'S' | 'M' | 'L') => void;
  decrementQuantity: (itemId: string, size: 'S' | 'M' | 'L') => void;
  toggleFavorite: (itemId: string) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  favorites: [],
  addToCart: (item, size) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.id === item.id && i.size === size
      );
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id && i.size === size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1, size }] };
    }),
  removeFromCart: (itemId, size) =>
    set((state) => ({
      cart: state.cart.filter((i) => !(i.id === itemId && i.size === size)),
    })),
  incrementQuantity: (itemId, size) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === itemId && i.size === size
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ),
    })),
  decrementQuantity: (itemId, size) =>
    set((state) => ({
      cart: state.cart
        .map((i) =>
          i.id === itemId && i.size === size
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0),
    })),
  toggleFavorite: (itemId) =>
    set((state) => {
      if (state.favorites.includes(itemId)) {
        return { favorites: state.favorites.filter((id) => id !== itemId) };
      }
      return { favorites: [...state.favorites, itemId] };
    }),
  clearCart: () => set({ cart: [] }),
}));
