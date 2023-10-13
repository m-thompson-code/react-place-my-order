import { City } from "@shared/types/city";
import { useFetchFromPlaceMyOrderApi } from "../useFetchFromPlaceMyOrderApi";

export const useFetchCities = (state: string) => useFetchFromPlaceMyOrderApi<City[]>('cities', {
  state
});
