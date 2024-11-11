import logo from "./logo.svg";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "./redux/actions";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const dispatch = useDispatch();
  const [currentEmployee, setCurrentEmployee] = useState(null);
  console.log("app rendered");
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="App">
      <EmployeeForm
        currentEmployee={currentEmployee}
        setCurrentEmployee={setCurrentEmployee}
      />
      <EmployeeList setCurrentEmployee={setCurrentEmployee} />
    </div>
  );
}

export default App;
