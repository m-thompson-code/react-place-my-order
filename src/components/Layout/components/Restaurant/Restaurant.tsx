import { FC } from "react";
import { RestaurantContext } from "./shared/contexts/RestaurantContext/RestaurantContext";
import { useLogError } from "@shared/hooks/useLogError";
import { Outlet, useParams } from "react-router-dom";
import { useMoo } from "@shared/hooks/useMoo";
import { fetchRestaurant } from "@shared/services/placeMyOrderApiService/placeMyOrderApiService";

export const Restaurant: FC = () => {
  const { slug } = useParams<{ slug: string}>();

  const { status, value: restaurant, error } = useMoo((slug: string | undefined) => {
    if (!slug) {
      return { status: 'idle' };
    }

    return fetchRestaurant(slug);
  }, [slug]);

  useLogError(error);

  return <>
    {status === "failed" && <div>{JSON.stringify(error)}</div>}
    {status === "loading" && <div className="loading"></div>}
    {status === 'loaded' && <RestaurantContext.Provider value={{restaurant}}>
      <Outlet />
    </RestaurantContext.Provider>
  }</>
};
