import { useAuth } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { auth } = useAuth();
  return auth?.accessToken && auth?.role !== "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/Auth/Login"  />
  );
}

export default ProtectedRoutes;
