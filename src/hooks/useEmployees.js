import { useEffect, useState } from "react";

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return employees;
};

export default useEmployees;
