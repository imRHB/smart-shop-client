<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Payment from './pages/Dashboard/Accounts/Payment/Payment';


function App() {
  return (
    <div className="">
      <h1>Smart Shop</h1>
      <p>POS Management System</p>
      <p>Please Test Your Component Here</p>
      <p>Don't forget to remove your component before git push</p>

      {/* TEST YOUR COMPONENT HERE */}
      <Payment />
    </div>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 30c7f23bd90c3a4fd4f34cb8cbc4160f9b19a64b
  );
}

export default App;
