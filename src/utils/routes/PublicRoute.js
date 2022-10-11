import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAutheticated = localStorage.getItem("token");
  const location = useLocation();

  if (isAutheticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
