import { useFetchStates } from "@shared/hooks/useFetchStates";
import { City } from "@shared/types/city";
import { State } from "@shared/types/state";
import { FC } from "react";
import { CitiesSelect } from "./components/CitiesSelect";
import { DisabledCitiesSelect } from "./components/DisabledCitiesSelect";
import { useLogError } from "@shared/hooks/useLogError";

interface RestaurantsFormProps {
  selectedCity: City | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
  selectedState: State | null;
  setSelectedState: React.Dispatch<React.SetStateAction<State | null>>;
}

export const RestaurantsForm: FC<RestaurantsFormProps> = ({
  selectedCity,
  setSelectedCity,
  selectedState,
  setSelectedState,
}) => {
  const {
    state: statesState,
    data: states,
    error,
  } = useFetchStates();

  useLogError(error);

  const onStateChange = (stateShortName: string) => {
    setSelectedState(
      states?.find((state) => state.short === stateShortName) ?? null
    );
    setSelectedCity(null);
  };

  return (
    <form className="form">
        <div className="form-group">
          <label htmlFor="states">State</label>
          <select
            id="states"
            className="formControl"
            onChange={(event) => onStateChange(event.target.value)}
          >
            {statesState === "failed" && <option value="">Error :(</option>}
            {statesState === "loading" && <option value="">Loading...</option>}
            {statesState === "loaded" && (
              <>
                {!selectedState && <option value="">Choose a state</option>}
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
          {selectedState ? (
            <CitiesSelect
              selectedState={selectedState}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          ) : (
            <DisabledCitiesSelect />
          )}
        </div>
      </form>
  );
};
