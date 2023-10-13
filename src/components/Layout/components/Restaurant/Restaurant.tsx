import { FC } from "react";
import { RestaurantContext } from "./shared/contexts/RestaurantContext/RestaurantContext";
import { useLogError } from "@shared/hooks/useLogError";
import { Outlet, useParams } from "react-router-dom";
import { useFetchRestaurant } from "@shared/hooks/useFetchRestaurant";

export const Restaurant: FC = () => {
  const { slug } = useParams();

  const { state, data: restaurant, error } = useFetchRestaurant(slug!);

  useLogError(error);

  return <>
    {state === "failed" && <div>{JSON.stringify(error)}</div>}
    {state === "loading" && <div className="loading"></div>}
    {state === 'loaded' && <RestaurantContext.Provider value={{restaurant}}>
      <Outlet />
    </RestaurantContext.Provider>
  }</>
};
