import { Restaurant } from "../../types/restaurant";
import { useFetchFromPlaceMyOrderApi } from "../useFetchFromPlaceMyOrderApi/useFetchFromPlaceMyOrderApi";

export const useFetchRestaurant = (slug: string) => useFetchFromPlaceMyOrderApi<Restaurant>(`restaurants/${slug}`);
