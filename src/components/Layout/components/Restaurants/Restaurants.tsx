import { FC, useState } from "react";
import { useFetchRestaurants } from "@shared/hooks/use-fetch-restaurants";
import { RestaurantListItem } from "./components/RestaurantListItem";
import { City } from "@shared/types/city";
import { State } from "@shared/types/state";

interface RestaurantsProps {
  // restaurants: Restaurant[];
}

export const Restaurants: FC<RestaurantsProps> = () => {
  const [city, setCity] = useState<City | null>(null);
  const [state, setState] = useState<State | null>(null);

  const {
    state: restaurantsState,
    data: restaurants,
    error: restaurantsError,
  } = useFetchRestaurants();

  const { statesState, states, statesError } = {
    statesState: "loaded",
    states: [
      { name: "Illinois", short: "IL" },
      { name: "Wisconsin", short: "WI" },
    ],
    statesError: undefined,
  };

  const { citiesState, cities, citiesError } = {
    citiesState: "loaded",
    cities: [{ name: "Springfield" }, { name: "Madison" }],
    citiesError: undefined,
  };

  const onCityChange = (cityName: string) => {
    setCity(cities?.find(city => city.name === cityName) ?? null);
  };

  const onStateChange = (stateShortName: string) => {
    setState(states?.find(state => state.short === stateShortName) ?? null);
  };

  return (
    <div className="restaurants">
      <h2 className="page-header">Restaurants</h2>
      {JSON.stringify(state)} {JSON.stringify(city)}

      <form className="form">
        <div className="form-group">
          <label htmlFor="states">State</label>
          <select id="states" className="formControl" onChange={(event) => onStateChange(event.target.value)}>
            {statesState === "loading" && <option value="">Loading...</option>}
            {statesState === "loaded" && (
              <>
                <option value="">Choose a state</option>
                {states.map((state) => (
                  <option key={state.short} value={state.short}>
                    {state.name}
                  </option>
                ))}
              </>
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cities">City</label>
          <select id="cities" className="formControl" onChange={(event) => onCityChange(event.target.value)}>
            {citiesState === "loading" && <option value="">Loading...</option>}
            {citiesState === "loaded" && (
              <option value="">Choose a city</option>
            )}
            <>
                <option value="">Choose a city</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </>
          </select>
        </div>
      </form>

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
