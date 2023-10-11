import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "place-my-order-assets/css/place-my-order-assets.css";
import { Home } from "./components/Home";
import { Restaurants } from "./components/Restaurants";

function App() {
  return (
    <>
      <h1>Place My Order App: Coming Soon!</h1>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route
            path="*"
            element={
              <>
                <h2>404</h2>
                <Link to="/">Go back home</Link>
              </>
            }
          />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
