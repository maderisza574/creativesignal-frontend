import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const isAutheticated = localStorage.getItem("token");
  const location = useLocation();
  const roleUser = "admin";
  if (!isAutheticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  if (props.isAdmin && roleUser !== "admin") {
    return <Navigate to="/notfound" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
