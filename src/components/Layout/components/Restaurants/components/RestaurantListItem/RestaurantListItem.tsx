import { Restaurant } from "@shared/types/restaurant";
import { FC } from "react";
import { Link } from "react-router-dom";

interface RestaurantListItemProps {
  restaurant: Restaurant;
}

export const RestaurantListItem: FC<RestaurantListItemProps> = ({
  restaurant,
}) => {
  return (
    <div className="restaurant">
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
};
