import { Coffee } from "../data/coffee";

export type RootStackParamList = {
  Onboarding: undefined;
  MainTabs: undefined;
  Details: { coffee: Coffee };
  Order: undefined;
  Delivery: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Cart: undefined;
  Notifications: undefined;
};
