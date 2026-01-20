import { ImageSourcePropType } from "react-native";

export interface Coffee {
  id: string;
  name: string;
  type: string;
  price: number;
  rating: number;
  description: string;
  image: ImageSourcePropType;
}

export const coffeeData: Coffee[] = [
  {
    id: "1",
    name: "Cappuccino",
    type: "With Chocolate",
    price: 4.53,
    rating: 4.8,
    description: "A cappuccino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam.",
    image: require("../assets/images/Property 1=Coffee, Property 2=1.png"),
  },
  {
    id: "2",
    name: "Cappuccino",
    type: "With Oat Milk",
    price: 3.90,
    rating: 4.5,
    description: "A cappuccino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam.",
    image: require("../assets/images/Property 1=Coffee, Property 2=2.png"),
  },
  {
    id: "3",
    name: "Cappuccino",
    type: "With Chocolate",
    price: 4.53,
    rating: 4.8,
    description: "A cappuccino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam.",
    image: require("../assets/images/Property 1=Coffee, Property 2=3.png"),
  },
  {
    id: "4",
    name: "Cappuccino",
    type: "With Oat Milk",
    price: 3.90,
    rating: 4.5,
    description: "A cappuccino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam.",
    image: require("../assets/images/Property 1=Coffee, Property 2=4.png"),
  },
  {
    id: "5",
    name: "Cappuccino",
    type: "With Chocolate",
    price: 4.53,
    rating: 4.8,
    description: "A cappuccino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam.",
    image: require("../assets/images/Property 1=Coffee, Property 2=5.png"),
  },
  {
    id: "6",
    name: "Cappuccino",
    type: "With Oat Milk",
    price: 3.90,
    rating: 4.5,
    description: "A cappuccino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam.",
    image: require("../assets/images/Property 1=Coffee, Property 2=6.png"),
  },
];
