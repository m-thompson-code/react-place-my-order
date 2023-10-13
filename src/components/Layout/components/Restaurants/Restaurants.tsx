import { FC, useState } from "react";
import { useFetchRestaurants } from "@shared/hooks/useFetchRestaurants";
import { RestaurantListItem } from "./components/RestaurantListItem";
import { City } from "@shared/types/city";
import { State } from "@shared/types/state";
import { RestaurantsForm } from "./components/RestaurantsForm";

export const Restaurants: FC = () => {
  const [city, setCity] = useState<City | null>(null);
  const [state, setState] = useState<State | null>(null);

  const {
    state: restaurantsState,
    data: restaurants,
    error: restaurantsError,
  } = useFetchRestaurants();

  return (
    <div className="restaurants">
      <h2 className="page-header">Restaurants</h2>
      <RestaurantsForm selectedCity={city} setSelectedCity={setCity} selectedState={state} setSelectedState={setState}/>

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
  );
};
