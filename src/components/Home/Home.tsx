import { FC } from 'react';
import url from 'assets/images/homepage-hero.jpg';

interface HomeProps {
    title: string;
}

export const Home: FC<HomeProps> = ({ title }) => {
    return <div className="homepage">
    <img
      src={url}
      alt="Restaurant table with glasses."
      width="250"
      height="380"
    />
    <h1>{title}</h1>
    <p>
      We make it easier than ever to order gourmet food from your favorite local
      restaurants.
    </p>
    <p>
      {/* TODO: routerLink="/restaurants" */}
      <a className="btn"  role="button"
        >Choose a Restaurant</a
      >
    </p>
  </div>
};
