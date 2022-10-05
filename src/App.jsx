import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/";
import Signin from "./pages/Signin/";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Order from "./pages/order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* {auth} */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* {main} */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:eventid" element={<Detail />} />
        <Route path="/order/" element={<Order />} />

        {/* {PAGE NOT FOUND} */}
        <Route path="/*"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
