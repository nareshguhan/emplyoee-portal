import {
  FETCH_EMPLOYEES,
  IS_LOADING,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE,
} from "../redux/actions";

const initialState = {
  employees: [],
  isLoading: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return { ...state, employees: action.payload };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((p) => p.id !== action.payload),
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? action.payload : emp
        ),
      };

    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case IS_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
