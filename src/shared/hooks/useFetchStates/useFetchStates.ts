import { useFetchFromPlaceMyOrderApi } from "../useFetchFromPlaceMyOrderApi";
import { State } from "@shared/types/state";

export const useFetchStates = () => useFetchFromPlaceMyOrderApi<State[]>('states');
