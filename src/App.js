import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddEmployee from "./pages/Dashboard/AddEmployee/AddEmployee";

function App() {
  return (
    <div className="">
      <h1>Smart Shop</h1>
      <p>POS Management System</p>
      <p>Please Test Your Component Here</p>
      <p>Don't forget to remove your component before git push</p>

      {/* TEST YOUR COMPONENT HERE */}
      <AddEmployee />
    </div>
  );
}

export default App;
