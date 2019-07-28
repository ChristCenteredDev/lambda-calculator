import React from "react";

export const SpecialButton = ({ special, setValues, setResult, values }) => {
  const handleSpecial = () => {
    switch (special) {
      case "C":
        setValues("");
        setResult(0);
        break;
      case "+/-":
        setValues("-" + "(" + values + ")");
        break;
      case "%":
        setValues(values.concat("%"));
        break;
      default:
        console.log("default");
    }
  };

  return (
    <button className="specials" onClick={handleSpecial}>
      {special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

