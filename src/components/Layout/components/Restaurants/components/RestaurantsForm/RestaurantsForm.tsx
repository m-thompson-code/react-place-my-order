import { FC } from "react";
import { CitiesSelect } from "./components/CitiesSelect";
import { DisabledCitiesSelect } from "./components/DisabledCitiesSelect";
import { useLogError } from "@shared/hooks/useLogError";
import { useRestaurantsFormContext } from "../../shared/contexts/RestaurantsFormContext";
import { fetchStates } from "@shared/services/placeMyOrderApiService/placeMyOrderApiService";
import { useMoo } from "@shared/hooks/useMoo";

export const RestaurantsForm: FC = () => {
  const { status: statesStatus, value: states, error } = useMoo(fetchStates, []);

  const { setSelectedCity, selectedState, setSelectedState } = useRestaurantsFormContext();

  useLogError(error);

  const onStateChange = (stateShortName: string) => {
    setSelectedState(
      states?.find((state) => state.short === 'WI') ?? null
    );
    setSelectedState(
      states?.find((state) => state.short === stateShortName) ?? null
    );
    setTimeout(() => {
      setSelectedState(
        states?.find((state) => state.short === 'MI') ?? null
      );
    });
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
          {statesStatus === "failed" && <option value="">Error :(</option>}
          {statesStatus === "loading" && <option value="">Loading...</option>}
          {statesStatus === "loaded" && (
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
