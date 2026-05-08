import { MemoryRouter, Routes, Route, Navigate } from "react-router";
import { StoreProvider } from "./store";
import { PhoneShell } from "./components/PhoneShell";
import { Toaster } from "./components/ui/sonner";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import PreCheckout from "./pages/PreCheckout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./pages/Orders";
import InvoiceDetail from "./pages/InvoiceDetail";
import Addresses from "./pages/Addresses";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";

export default function App() {
  return (
    <StoreProvider>
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route element={<PhoneShell />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<PreCheckout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/confirmation" element={<OrderConfirmation />} />
            <Route path="/orders/:id" element={<InvoiceDetail />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/addresses" element={<Addresses />} />
            <Route path="/account/profile" element={<Profile />} />
            <Route path="/account/password" element={<ChangePassword />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </MemoryRouter>
      <Toaster position="top-center" />
    </StoreProvider>
  );
}