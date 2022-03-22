import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import CustomerInvoice from "./pages/Dashboard/CustomerInvoice/CustomerInvoice";
import PaymentGateway from "./pages/Dashboard/Sell/PaymentGateway/PaymentGateway";
import OfficeInvoice from "./pages/Dashboard/OfficeInvoice/OfficeInvoice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/customer-invoice/:id" element={<CustomerInvoice />} />
      <Route path="/payment-gateway" element={<PaymentGateway />} />
      <Route path="/dashboard/*" element={<DashboardHome />} />
      <Route path="/payment-invoice" element={<OfficeInvoice />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
