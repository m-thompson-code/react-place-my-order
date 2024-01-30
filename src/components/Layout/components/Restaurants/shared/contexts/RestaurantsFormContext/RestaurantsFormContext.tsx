import { City } from '@shared/types/city';
import { State } from '@shared/types/state';
import { FC, ReactNode, createContext, useContext } from 'react';

const RestaurantsFormContext = createContext<{
  selectedCity: City | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
  selectedState: State | null;
  setSelectedState: React.Dispatch<React.SetStateAction<State | null>>;
} | null>(null);

interface RestaurantsFormContextProviderProps {
  selectedCity: City | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
  selectedState: State | null;
  setSelectedState: React.Dispatch<React.SetStateAction<State | null>>;
  children: ReactNode;
}

export const RestaurantsFormContextProvider: FC<
  RestaurantsFormContextProviderProps
> = ({ selectedCity, setSelectedCity, selectedState, setSelectedState, children }) => {
  return (
    <RestaurantsFormContext.Provider
      value={{ selectedCity, setSelectedCity, selectedState, setSelectedState }}
    >
      {children}
    </RestaurantsFormContext.Provider>
  );
};

export const useRestaurantsFormContext = () => {
  const context =  useContext(RestaurantsFormContext);

  if (!context) {
    throw new Error("cannot use this context outside of the provider error message here");
  }

  return context;
};
