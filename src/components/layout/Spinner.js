import React from "react";
import spinnerImage from "../../images/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinnerImage}
      alt="loading spinner"
      style={{ width: 200, margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
