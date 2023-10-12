import { FC } from "react";
import { Link } from "react-router-dom";
// import { useFetchRestaurants } from "../../../../shared/hooks/use-fetch-restaurants";

interface RestaurantsProps {
    // restaurants: Restaurant[];
}

const restaurants = [
    {
        name: "Poutine Palace",
        slug: "poutine-palace",
        images: {
            thumbnail: "node_modules/place-my-order-assets/images/4-thumbnail.jpg",
            owner: "node_modules/place-my-order-assets/images/3-owner.jpg",
            banner: "node_modules/place-my-order-assets/images/2-banner.jpg",
        },
        menu: {
            lunch: [
                {
                    name: "Crab Pancakes with Sorrel Syrup",
                    price: 35.99,
                },
                {
                    name: "Steamed Mussels",
                    price: 21.99,
                },
                {
                    name: "Spinach Fennel Watercress Ravioli",
                    price: 35.99,
                },
            ],
            dinner: [
                {
                    name: "Gunthorp Chicken",
                    price: 21.99,
                },
                {
                    name: "Herring in Lavender Dill Reduction",
                    price: 45.99,
                },
                {
                    name: "Chicken with Tomato Carrot Chutney Sauce",
                    price: 45.99,
                },
            ],
        },
        address: {
            street: "230 W Kinzie Street",
            city: "Green Bay",
            state: "WI",
            zip: "53205",
        },
        _id: "3ZOZyTY1LH26LnVw",
    },
    {
        name: "Cheese Curd City",
        slug: "cheese-curd-city",
        images: {
            thumbnail: "node_modules/place-my-order-assets/images/2-thumbnail.jpg",
            owner: "node_modules/place-my-order-assets/images/3-owner.jpg",
            banner: "node_modules/place-my-order-assets/images/2-banner.jpg",
        },
        menu: {
            lunch: [
                {
                    name: "Ricotta Gnocchi",
                    price: 15.99,
                },
                {
                    name: "Gunthorp Chicken",
                    price: 21.99,
                },
                {
                    name: "Garlic Fries",
                    price: 15.99,
                },
            ],
            dinner: [
                {
                    name: "Herring in Lavender Dill Reduction",
                    price: 45.99,
                },
                {
                    name: "Truffle Noodles",
                    price: 14.99,
                },
                {
                    name: "Charred Octopus",
                    price: 25.99,
                },
            ],
        },
        address: {
            street: "2451 W Washburne Ave",
            city: "Green Bay",
            state: "WI",
            zip: "53295",
        },
        _id: "Ar0qBJHxM3ecOhcr",
    },
];

export const Restaurants: FC<RestaurantsProps> = () => {
    // const [restaurants, error] = useFetchRestaurants();

    return (
        <div className="restaurants">
            <h2 className="page-header">Restaurants</h2>
            {restaurants.map((restaurant) => {
                return (
                    <div className="restaurant">
                        <img src={restaurant.images.thumbnail} width="100" height="100" />
                        <h3>{restaurant.name}</h3>

                        {restaurant.address && (
                            <div className="address">
                                {restaurant.address.street}
                                <br />
                                {restaurant.address.city},{restaurant.address.state} {restaurant.address.zip}
                            </div>
                        )}

                        <div className="hours-price">
                            $$$
                            <br />
                            Hours: M-F 10am-11pm
                            <span className="open-now">Open Now</span>
                        </div>

                        <Link to={`/restaurants/${restaurant.slug}`} className="btn" role="button">Details</Link>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};
