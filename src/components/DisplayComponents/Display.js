import React from "react";

export const Display = ({values}) => {
  return <div className="display-container">
    {/* Display any props data here */}
      <div className="display-output">
        {values}
      </div>
    </div>;
};
