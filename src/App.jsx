import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/";
import Signin from "./pages/Signin/";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Order from "./pages/order";
import PublicRoute from "./utils/routes/PublicRoute";
import PrivateRoute from "./utils/routes/PrivateRoute";
import CounterFunc from "./pages/Counter/functional-component";
import CounterClass from "./pages/Counter/class-component";
import ManageEvent from "./pages/ManageEvent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* {auth} */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        {/* {main} */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail/:eventid" element={<Detail />} />
          <Route path="/order/" element={<Order />} />
        </Route>
        {/* Private admin ROute */}
        <Route element={<PrivateRoute isAdmin={true} />}>{}</Route>
        <Route path="/manage-event" element={<ManageEvent />} />
        {/* {PAGE NOT FOUND} */}
        <Route path="/*"></Route>
        <Route path="/counter/func" element={<CounterFunc />} />
        <Route path="/counter/class" element={<CounterClass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
