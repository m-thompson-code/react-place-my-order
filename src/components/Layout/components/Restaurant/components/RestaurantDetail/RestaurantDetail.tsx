import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { RestaurantContext } from "../../shared/contexts/RestaurantContext/RestaurantContext";

export const RestaurantDetail: FC = () => {
  const { restaurant } = useContext(RestaurantContext);

  return (
    <>
      <div
        className="restaurant-header"
        style={{
          backgroundImage: `url(../${restaurant.images.banner})`,
        }}
      >
        <div className="background">
          <h2>{restaurant.name}</h2>

          {restaurant.address && (
            <div className="address">
              {restaurant.address.street}
              <br />
              {restaurant.address.city}, {restaurant.address.state}{" "}
              {restaurant.address.zip}
            </div>
          )}

          <div className="hours-price">
            $$$
            <br />
            Hours: M-F 10am-11pm
            <span className="open-now">Open Now</span>
          </div>

          <br />
        </div>
      </div>

      <div className="restaurant-content">
        <h3>The best food this side of the Mississippi</h3>

        <p className="description">
          <img src={`../${restaurant.images.owner}`} />
          Description for {restaurant.name}
        </p>
        <p className="order-link">
          <Link
            className="btn"
            role="button"
            to={`/restaurants/${restaurant.slug}/order`}
          >
            {" "}
            Order from {restaurant.name}{" "}
          </Link>
        </p>
      </div>
    </>
  );
};
