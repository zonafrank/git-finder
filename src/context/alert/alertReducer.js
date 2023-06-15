import { SET_ALERT, REMOVE_ALERT } from "../types";

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: { message: action.payload.message, type: action.payload.type }
      };
    case REMOVE_ALERT:
      return { ...state, alert: { message: "", type: "" } };
    default:
      return state;
  }
};

export default alertReducer;
