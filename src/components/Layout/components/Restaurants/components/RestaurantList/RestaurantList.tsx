import { useFetchRestaurants } from "@shared/hooks/useFetchRestaurants";
import { FC, useContext } from "react";
import { RestaurantListItem } from "./components/RestaurantListItem";
import { useLogError } from "@shared/hooks/useLogError";
import { RestaurantsFormContext } from "../../shared/contexts/RestaurantsFormContext";

export const RestaurantList: FC = () => {
  const { selectedCity, selectedState } = useContext(RestaurantsFormContext);

  const {
    state: restaurantsState,
    data: restaurants,
    error,
  } = useFetchRestaurants(selectedState!.short, selectedCity!.name);

  useLogError(error);

  return <>
  {restaurantsState === "failed" && (
        <div className="restaurant">{error.toString()}</div>
      )}
      {restaurantsState === "loading" && (
        <div className="restaurant loading"></div>
      )}
      {restaurantsState === "loaded" &&
        restaurants.map((restaurant) => (
          <RestaurantListItem key={restaurant.slug} restaurant={restaurant} />
        ))}
  </>
};
