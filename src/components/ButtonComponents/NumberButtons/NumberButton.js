import React from "react";

export const NumberButton = (props) => {
  const handleAddToEquation = () => {
    props.addToEquation(props.number);
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numbers" onClick={handleAddToEquation}>
        {props.number}
      </button>
    </>
  );
};

