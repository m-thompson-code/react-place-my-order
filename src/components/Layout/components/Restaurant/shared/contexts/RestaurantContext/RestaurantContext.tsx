import { Restaurant } from "@shared/types/restaurant";
import { createContext } from "react";

export const RestaurantContext = createContext({
  get restaurant(): Restaurant {
    throw new Error('Unexpected `RestaurantContext` is not provided');
  }
});
