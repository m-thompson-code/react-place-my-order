import { FC, useState } from "react";
import { useFetchRestaurants } from "@shared/hooks/useFetchRestaurants";
import { RestaurantListItem } from "./components/RestaurantListItem";
import { City } from "@shared/types/city";
import { State } from "@shared/types/state";
import { RestaurantsForm } from "./components/RestaurantsForm";
import { RestaurantsFormContext } from "./shared/contexts/RestaurantsFormContext";

export const Restaurants: FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);

  const {
    state: restaurantsState,
    data: restaurants,
    error: restaurantsError,
  } = useFetchRestaurants();

  return (
    <RestaurantsFormContext.Provider
      value={{ selectedCity, setSelectedCity, selectedState, setSelectedState }}
    >
    <div className="restaurants">
      <h2 className="page-header">Restaurants</h2>
      <RestaurantsForm />

      {restaurantsState === "failed" && (
        <div className="restaurant">{restaurantsError.toString()}</div>
      )}
      {restaurantsState === "loading" && (
        <div className="restaurant loading"></div>
      )}
      {restaurantsState === "loaded" &&
        restaurants.map((restaurant) => (
          <RestaurantListItem key={restaurant.slug} restaurant={restaurant} />
        ))}
    </div>
    </RestaurantsFormContext.Provider>
  );
};
