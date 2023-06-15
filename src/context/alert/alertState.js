import { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = {
    alert: { message: "", type: "" }
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const removeAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  const setAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });
    setTimeout(removeAlert, 5000);
  };

  return (
    <AlertContext.Provider value={{ ...state, setAlert, removeAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
