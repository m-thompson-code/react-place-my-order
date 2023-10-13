import { Restaurant } from "../../types/restaurant";
import { useFetchFromPlaceMyOrderApi } from "../useFetchFromPlaceMyOrderApi/useFetchFromPlaceMyOrderApi";

export const useFetchRestaurants = (state: string, city: string) => useFetchFromPlaceMyOrderApi<Restaurant[]>('restaurants', { 'filter[address.state]': state, ['filter[address.city]']: city });
