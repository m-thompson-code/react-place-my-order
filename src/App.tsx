import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Layout/components/Home";
import { Restaurants } from "./components/Layout/components/Restaurants";
import { Layout } from "./components/Layout";
import "place-my-order-assets/css/place-my-order-assets.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<Restaurants />} />
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
