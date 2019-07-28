import React from "react";

export const Display = (props) => {
  return <div className="display-container">
    {/* Display any props data here */}
      <div className="display-output">
        {props.result}
      </div>
    </div>;
};
