import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Feedback from "./pages/Feedback";
import Performance from "./pages/Performance";
import PremiumService from "./pages/PremiumService";
import Wallet from "./pages/Wallet";
import Faq from "./pages/Faq";
import Services from "./pages/Services";

import Dash from "./pages/Dashboard";
import AppLayout from "./AppLayout";
import Product from "./pages/Product";
import Auth from "./Auth/Auth";
import Login from "./Auth/Login";
import { AuthProvider } from "./context/AuthContext";
import PersistLogin from "./PersistLogin";
import ProtectedRoutes from "./context/ProtectedRoutes";
import SignupPage from "./Auth/SignupPage";
function App() {
  return (
    <AuthProvider>
      <PersistLogin>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dash />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/premium" element={<PremiumService />} />
              <Route path="/products" element={<Product />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<Faq />} />
            </Route>
          </Route>

          <Route path="/Auth" element={<Auth />}>
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </PersistLogin>
    </AuthProvider>
  );
}

export default App;
