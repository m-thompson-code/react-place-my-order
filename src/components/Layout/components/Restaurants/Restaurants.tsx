import { FC } from "react";
import { Link } from "react-router-dom";
import { useFetchRestaurants } from "@shared/hooks/use-fetch-restaurants";

interface RestaurantsProps {
  // restaurants: Restaurant[];
}

export const Restaurants: FC<RestaurantsProps> = () => {
  const { state, data: restaurants, error } = useFetchRestaurants();

  return (
    <div className="restaurants">
      <h2 className="page-header">Restaurants</h2>
      {state === "failed" && (
        <div className="restaurant">{error.toString()}</div>
      )}
      {state === "loading" && !restaurants && (
        <div className="restaurant loading"></div>
      )}
      {state === "loaded" &&
        restaurants.map((restaurant) => {
          return (
            <div className="restaurant" key={restaurant.slug}>
              <img src={restaurant.images.thumbnail} width="100" height="100" />
              <h3>{restaurant.name}</h3>

              {restaurant.address && (
                <div className="address">
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.city},{restaurant.address.state}{" "}
                  {restaurant.address.zip}
                </div>
              )}

              <div className="hours-price">
                $$$
                <br />
                Hours: M-F 10am-11pm
                <span className="open-now">Open Now</span>
              </div>

              <Link
                to={`/restaurants/${restaurant.slug}`}
                className="btn"
                role="button"
              >
                Details
              </Link>
              <br />
            </div>
          );
        })}
    </div>
  );
};
