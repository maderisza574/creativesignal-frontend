import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/pages/LandingPage";
import Signin from "./assets/pages/Signin";
import Signup from "./assets/pages/Signup";

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
