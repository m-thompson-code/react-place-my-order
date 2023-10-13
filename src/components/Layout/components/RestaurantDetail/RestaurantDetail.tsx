import { useFetchRestaurant } from "@shared/hooks/useFetchRestaurant";
import { useLogError } from "@shared/hooks/useLogError";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";

export const RestaurantDetail: FC = () => {
  const { slug } = useParams();

  const { state, data: restaurant, error } = useFetchRestaurant(slug!);

  useLogError(error);

  return (
    <>
      {state === "failed" && <div>{JSON.stringify(error)}</div>}
      {state === "loading" && <div className="loading"></div>}
      {state === "loaded" && (
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
      )}
    </>
  );
};
