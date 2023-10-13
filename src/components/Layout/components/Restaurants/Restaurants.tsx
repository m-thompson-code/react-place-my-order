import { FC, useState } from "react";
import { City } from "@shared/types/city";
import { State } from "@shared/types/state";
import { RestaurantsForm } from "./components/RestaurantsForm";
import { RestaurantsFormContext } from "./shared/contexts/RestaurantsFormContext";
import { RestaurantList } from "./components/RestaurantList";

export const Restaurants: FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);

  return (
    <RestaurantsFormContext.Provider
      value={{ selectedCity, setSelectedCity, selectedState, setSelectedState }}
    >
    <div className="restaurants">
      <h2 className="page-header">Restaurants</h2>
      <RestaurantsForm />

      {selectedCity && selectedState && <RestaurantList />}
    </div>
    </RestaurantsFormContext.Provider>
  );
};
