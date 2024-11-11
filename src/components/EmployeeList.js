import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, updateEmployee } from "../redux/actions";

function EmployeeList({ setCurrentEmployee }) {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  console.log(" list rendered");

  return (
    <>
      <h2> Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name}
            <button onClick={() => setCurrentEmployee(emp)}>Edit</button>
            <button onClick={() => dispatch(deleteEmployee(emp.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EmployeeList;
