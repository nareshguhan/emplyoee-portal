import react, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../redux/actions";

const EmployeeForm = ({ currentEmployee, setCurrentEmployee }) => {
  // Name and email
  console.log(currentEmployee ? currentEmployee.name : "");
  const currname = currentEmployee ? currentEmployee.name : "";
  const currEmail = currentEmployee ? currentEmployee.email : "";

  const [name, setName] = useState(currname);
  const [email, setEmail] = useState(currEmail);

  useEffect(() => {
    setName(currname);
    setEmail(currEmail);
  }, [currname, currEmail]);

  console.log(name, email);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      id: currentEmployee ? currentEmployee.id : 9999,
      name,
      email,
    };

    if (currentEmployee) {
      //update
      dispatch(updateEmployee(employeeData));
    } else {
      //add employee
      dispatch(addEmployee(employeeData));
    }
    setName("");
    setEmail("");
    setCurrentEmployee(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <button type="submit">
        {currentEmployee ? "Update" : "Add"} Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
