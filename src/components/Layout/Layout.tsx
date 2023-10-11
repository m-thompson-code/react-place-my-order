import { Outlet } from "react-router-dom";
import { LayoutListItem } from "./components/LayoutListItem";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <h1>place-my-order.com</h1>
          <ul>
            <LayoutListItem to="/">Home</LayoutListItem>
            <LayoutListItem to="restaurants">Restaurants</LayoutListItem>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
