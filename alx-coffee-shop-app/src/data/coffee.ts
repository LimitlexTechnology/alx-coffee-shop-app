import { Coffee } from '../types';

export const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano'];

export const coffeeData: Coffee[] = [
  {
    id: '1',
    name: 'Caffe Mocha',
    type: 'Deep Foam',
    price: 4.53,
    description: 'Deep Foam Caffe Mocha with chocolate and milk. A perfect blend for chocolate lovers.',
    rating: 4.8,
    image: require('../assets/images/Image Onboarding.png'), // Placeholder, replace with actual assets
    category: 'Machiato',
  },
  {
    id: '2',
    name: 'Flat White',
    type: 'Espresso',
    price: 3.53,
    description: 'Smooth Flat White with a thin layer of microfoam.',
    rating: 4.5,
    image: require('../assets/images/Image Onboarding.png'), // Placeholder
    category: 'Latte',
  },
  {
    id: '3',
    name: 'Mochaccino',
    type: 'Chocolate',
    price: 5.53,
    description: 'A delicious Mochaccino with extra chocolate syrup.',
    rating: 4.9,
    image: require('../assets/images/Image Onboarding.png'), // Placeholder
    category: 'Americano',
  },
  {
    id: '4',
    name: 'Cappuccino',
    type: 'Steamed Milk',
    price: 4.00,
    description: 'Classic Cappuccino with equal parts espresso, steamed milk, and foam.',
    rating: 4.7,
    image: require('../assets/images/Image Onboarding.png'), // Placeholder
    category: 'Latte',
  },
];
