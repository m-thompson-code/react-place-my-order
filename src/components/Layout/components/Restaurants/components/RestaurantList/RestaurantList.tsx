import { FC } from "react";
import { RestaurantListItem } from "./components/RestaurantListItem";
import { useLogError } from "@shared/hooks/useLogError";
import { useRestaurantsFormContext } from "../../shared/contexts/RestaurantsFormContext";
import { useMoo } from "@shared/hooks/useMoo";
import { fetchRestaurants } from "@shared/services/placeMyOrderApiService/placeMyOrderApiService";

export const RestaurantList: FC = () => {
  const { selectedCity, selectedState } = useRestaurantsFormContext();

  const {
    status: restaurantsState,
    value: restaurants,
    error,
  } = useMoo((stateShort?: string | undefined, cityName?: string | null) => {
    if (!stateShort || !cityName) {
      return { status: 'idle' };
    }

    return fetchRestaurants(stateShort, cityName);
  }, [selectedState?.short, selectedCity?.name]);

  useLogError(error);

  return (
    <>
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
  );
};
