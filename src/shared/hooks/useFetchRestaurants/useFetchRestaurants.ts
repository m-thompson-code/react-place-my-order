import { Restaurant } from "../../types/restaurant";
import { useFetchFromPlaceMyOrderApi } from "../useFetchFromPlaceMyOrderApi/useFetchFromPlaceMyOrderApi";

export const useFetchRestaurants = () => useFetchFromPlaceMyOrderApi<Restaurant[]>('restaurants');
