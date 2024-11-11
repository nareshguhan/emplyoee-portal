//action types

import { type } from "@testing-library/user-event/dist/type";

export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";
export const IS_LOADING = "IS_LOADING";

export const fetchEmployees = () => async (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  dispatch({ type: FETCH_EMPLOYEES, payload: data });
  dispatch({ type: IS_LOADING, payload: false });
};

export const deleteEmployee = (id) => async (dispatch) => {
  // dispatch({ type: IS_LOADING, payload: true });
  dispatch({ type: DELETE_EMPLOYEE, payload: id });
};

export const updateEmployee = (emp) => async (dispatch) => {
  // dispatch({ type: IS_LOADING, payload: true });
  dispatch({ type: UPDATE_EMPLOYEE, payload: emp });
};

export const addEmployee = (emp) => async (dispatch) => {
  // dispatch({ type: IS_LOADING, payload: true });
  dispatch({ type: ADD_EMPLOYEE, payload: emp });
};
