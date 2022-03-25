import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import CustomerInvoice from "./pages/Dashboard/CustomerInvoice/CustomerInvoice";
import PaymentGateway from "./pages/Dashboard/Sell/PaymentGateway/PaymentGateway";
import OfficeInvoice from "./pages/Dashboard/OfficeInvoice/OfficeInvoice";
import SupplierInvoice from "./pages/Dashboard/SupplierInvoice/SupplierInvoice";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/customer-invoice/:id" element={<PrivateRoute><CustomerInvoice /></PrivateRoute>} />
      <Route path="/payment-gateway" element={<PrivateRoute><PaymentGateway /></PrivateRoute>} />
      <Route path="/dashboard/*" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
      <Route path="/payment-invoice/:id" element={<PrivateRoute><OfficeInvoice /></PrivateRoute>} />
      <Route path="/supplier-invoice" element={<PrivateRoute><SupplierInvoice /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
