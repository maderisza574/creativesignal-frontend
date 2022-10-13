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
import Payment from "./pages/payment";
import Profile from "./pages/Profile";
import ProfileLeft from "./components/ProfileLeft";
import ProfileDetail from "./components/ProfileDetail";
import EditProfile from "./components/EditProfile";
import ChangePass from "./components/ChangePass";
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
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileleft" element={<ProfileLeft />} />
          <Route path="/profiledetail" element={<ProfileDetail />} />
          <Route path="/profileedit" element={<EditProfile />} />
          <Route path="/changepass" element={<ChangePass />} />
        </Route>
        {/* Private admin ROute */}
        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="/manage-event" element={<ManageEvent />} />
        </Route>
        {/* {PAGE NOT FOUND} */}
        {/* <Route path="/*"></Route> */}
        <Route path="/counter/func" element={<CounterFunc />} />
        <Route path="/counter/class" element={<CounterClass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
