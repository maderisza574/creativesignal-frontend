import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/";
import Signin from "./pages/Signin/";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* {auth} */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* {main} */}
        <Route path="/" element={<LandingPage />} />

        {/* {PAGE NOT FOUND} */}
        <Route path="/*"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
