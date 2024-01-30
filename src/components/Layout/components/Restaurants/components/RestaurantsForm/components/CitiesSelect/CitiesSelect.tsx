import { useRestaurantsFormContext } from "@components/Layout/components/Restaurants/shared/contexts/RestaurantsFormContext";
import { useLogError } from "@shared/hooks/useLogError";
import { useMoo } from "@shared/hooks/useMoo";
import { fetchCities } from "@shared/services/placeMyOrderApiService/placeMyOrderApiService";
import { FC } from "react";

export const CitiesSelect: FC = () => {
  const { selectedCity, setSelectedCity, selectedState } = useRestaurantsFormContext();

  const {
    status: citiesState,
    value: cities,
    error,
  } = useMoo((stateShort?: string | undefined) => {
    if (!stateShort) {
      return { status: 'idle' };
    }

    return fetchCities(stateShort);
  }, [selectedState?.short]);

  useLogError(error);

  const onCityChange = (cityName: string) => {
    setSelectedCity(cities?.find((city) => city.name === cityName) ?? null);
  };

  return (
    <>
      <label htmlFor="cities">City</label>
      <select
        id="cities"
        className="formControl"
        onChange={(event) => onCityChange(event.target.value)}
      >
        {citiesState === "failed" && <option value="">Error :(</option>}
        {citiesState === "loading" && <option value="">Loading...</option>}
        {citiesState === "loaded" && (
          <>
            {!selectedCity && <option value="">Choose a city</option>}
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </>
        )}
      </select>
    </>
  );
};
