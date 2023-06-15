import { useContext } from "react";
import React from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  if (!alert.message) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type}`}>
      <i className="fas fa-info-circle"></i> {alert.message}
    </div>
  );
};

export default Alert;
