import { City } from '@shared/types/city';
import { State } from '@shared/types/state';
import { createContext } from 'react';

const noop = () => {
  throw new Error('Unexpected `RestaurantsFormContext` is not provided');
};

export const RestaurantsFormContext = createContext<{
  selectedCity: City | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
  selectedState: State | null;
  setSelectedState: React.Dispatch<React.SetStateAction<State | null>>;
}>({
  selectedCity: null,
  setSelectedCity: noop,
  selectedState: null,
  setSelectedState: noop,
});
