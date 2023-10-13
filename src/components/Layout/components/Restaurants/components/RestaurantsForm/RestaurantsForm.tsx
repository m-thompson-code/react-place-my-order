import { useFetchStates } from "@shared/hooks/useFetchStates";
import { FC, useContext } from "react";
import { CitiesSelect } from "./components/CitiesSelect";
import { DisabledCitiesSelect } from "./components/DisabledCitiesSelect";
import { useLogError } from "@shared/hooks/useLogError";
import { RestaurantsFormContext } from "../../shared/contexts/RestaurantsFormContext";

export const RestaurantsForm: FC = () => {
  const { state: statesState, data: states, error } = useFetchStates();

  const { setSelectedCity, selectedState, setSelectedState } = useContext(
    RestaurantsFormContext
  );

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
        {selectedState ? <CitiesSelect /> : <DisabledCitiesSelect />}
      </div>
    </form>
  );
};
