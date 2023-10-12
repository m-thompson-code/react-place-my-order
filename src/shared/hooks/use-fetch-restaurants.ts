import { Restaurant } from "../types/restaurant";
import { useFetchFromPlaceMyOrderApi } from "./use-fetch-from-place-my-order-api";

export const useFetchRestaurants = () => useFetchFromPlaceMyOrderApi<Restaurant[]>('restaurants');
