import { FC } from "react";
import url from "assets/images/homepage-hero.jpg";
import { Link } from "react-router-dom";

interface HomeProps {
  // title: string;
}

const title = "Ordering food has never been easier";

export const Home: FC<HomeProps> = () => {
  return (
    <div className="homepage">
      <img
        src={url}
        alt="Restaurant table with glasses."
        width="250"
        height="380"
      />
      <h1>{title}</h1>
      <p>
        We make it easier than ever to order gourmet food from your favorite
        local restaurants.
      </p>
      <p>
        <Link className="btn" role="button" to="/restaurants">
          Choose a Restaurant
        </Link>
      </p>
    </div>
  );
};
