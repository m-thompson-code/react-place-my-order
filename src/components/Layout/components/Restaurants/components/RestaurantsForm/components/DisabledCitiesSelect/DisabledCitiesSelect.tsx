import { FC } from "react";

export const DisabledCitiesSelect: FC = () => {
  return (
    <>
      <label htmlFor="cities">City</label>
      <select id="cities" className="formControl" disabled></select>
    </>
  );
};
