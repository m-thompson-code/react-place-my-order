import { useFetchCities } from "@shared/hooks/useFetchCities";
import { useLogError } from "@shared/hooks/useLogError";
import { City } from "@shared/types/city";
import { State } from "@shared/types/state";
import { FC } from "react";

interface CitiesSelectProps {
  selectedState: State;
  selectedCity: City | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
}

export const CitiesSelect: FC<CitiesSelectProps> = ({
  selectedState,
  selectedCity,
  setSelectedCity,
}) => {
  const {
    state: citiesState,
    data: cities,
    error,
  } = useFetchCities(selectedState.short);

  useLogError(error);

  const onCityChange = (cityName: string) => {
    setSelectedCity(cities?.find((city) => city.name === cityName) ?? null);
  };

  return (
    <>
      <label htmlFor="cities">City</label>
      <select id="cities" className="formControl" onChange={(event) => onCityChange(event.target.value)}>
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
