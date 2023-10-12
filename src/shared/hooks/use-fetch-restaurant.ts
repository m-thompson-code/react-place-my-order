import path from "path-browserify";
import { useFetch } from "usehooks-ts";
import { Restaurant } from "../types/restaurant";
import { API_URL } from "./api-constants";

export const useFetchRestaurant = (id: string) => {
  const { data, error } = useFetch<Restaurant>(path.join(API_URL, 'restaurants', id));

  return [data, error] as const;
};
