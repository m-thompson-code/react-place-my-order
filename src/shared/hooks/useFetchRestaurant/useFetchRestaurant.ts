import { Restaurant } from "../../types/restaurant";
import { useFetchFromPlaceMyOrderApi } from "../useFetchFromPlaceMyOrderApi/useFetchFromPlaceMyOrderApi";

export const useFetchRestaurant = (id: string) => useFetchFromPlaceMyOrderApi<Restaurant>(`restaurants/${id}`);
