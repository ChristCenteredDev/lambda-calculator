import React from "react";

export const OperatorButton = (props) => {
  const handleAddToEquation = () => {
    props.addToEquation(props.operator.value);
  };

  const handleOperator = () => {
    if (props.operator.value === "=") {
      props.calculate();
    } else {
      handleAddToEquation();
    }
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operators" onClick={handleOperator}>
        {props.operator.char}
      </button>
    </>
  );
};