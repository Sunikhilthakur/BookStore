import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import { CartProvider } from "./context/CartContext"; // Add this import
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import PaymentDashboard from "./components/PaymentDashboard";
import PaymentSuccess from "./components/PaymentSuccess";
import ChangePassword from "./components/ChangePassword";
import VerifyEmail from "./components/VerifyEmail";
import VerificationPending from "./components/VerificationPending";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <CartProvider>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentDashboard />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route
            path="/verification-pending"
            element={<VerificationPending />}
          />
        </Routes>
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;
