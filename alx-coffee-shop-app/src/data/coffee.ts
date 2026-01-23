import { Coffee } from '../types';

export const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano'];

export const coffeeData: Coffee[] = [
  {
    id: '1',
    name: 'Caffe Mocha',
    type: 'Deep Foam',
    price: 4.53,
    description: 'A rich, full-bodied espresso combined with bittersweet chocolate sauce and steamed milk, then topped with sweetened whipped cream. The perfect balance of coffee and chocolate.',
    rating: 4.8,
    image: require('../assets/images/caffe-mocha.png'),
    category: 'Machiato',
  },
  {
    id: '2',
    name: 'Flat White',
    type: 'Espresso',
    price: 3.53,
    description: 'Smooth Flat White with a thin layer of microfoam. Made with a double shot of espresso and steamed milk for a velvety texture.',
    rating: 4.5,
    image: require('../assets/images/flat-white.png'),
    category: 'Latte',
  },
  {
    id: '3',
    name: 'Americano',
    type: 'Espresso',
    price: 3.20,
    description: 'Rich Americano made with hot water and espresso. A bold and smooth coffee experience with deep flavor notes.',
    rating: 4.6,
    image: require('../assets/images/americano.png'),
    category: 'Americano',
  },
  {
    id: '4',
    name: 'Cappuccino',
    type: 'Steamed Milk',
    price: 4.00,
    description: 'Classic Cappuccino with equal parts espresso, steamed milk, and foam. A perfect balance of bold coffee and creamy texture.',
    rating: 4.7,
    image: require('../assets/images/cappuccino.png'),
    category: 'Latte',
  },
];
