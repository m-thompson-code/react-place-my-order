import { FC } from "react";

export interface Restaurant {
    name: string;
    slug: string;
    images: Images;
    menu: Menu;
    address?: Address;
    _id: string;
}

export interface Images {
    thumbnail: string;
    owner: string;
    banner: string;
}

export interface Menu {
    lunch: Lunch[];
    dinner: Dinner[];
}

export interface Lunch {
    name: string;
    price: number;
}

export interface Dinner {
    name: string;
    price: number;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface RestaurantsProps {
    restaurants: Restaurant[];
}

export const Restaurants: FC<RestaurantsProps> = ({ restaurants }) => {
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

                        {/*  [routerLink]="['/restaurants', restaurant.slug]" */}
                        <a className="btn">Details</a>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};
