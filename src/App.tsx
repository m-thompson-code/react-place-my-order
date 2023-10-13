import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Layout/components/Home";
import { Restaurants } from "./components/Layout/components/Restaurants";
import { Restaurant } from "./components/Layout/components/Restaurant";
import { Layout } from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "place-my-order-assets/css/place-my-order-assets.css";
import { RestaurantDetail } from "@components/Layout/components/Restaurant/components/RestaurantDetail";
import { Order } from "@components/Layout/components/Restaurant/components/Order/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<Restaurants />} />

            <Route path="restaurants/:slug" element={<Restaurant />}>
              <Route index element={<RestaurantDetail />} />
              <Route path="order" element={<Order />} />
            </Route>
            <Route
              path="*"
              element={<h2>404</h2>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
