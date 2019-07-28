import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import { specials } from "../../../data";
import { SpecialButton } from './SpecialButton';

export const Specials = props => {
  const [specialsState, setspecialsState] = useState(specials);

  return (
    <div>
      {specialsState.map(special => {
        return (
          <SpecialButton
            special={special}
            addToEquation={props.addToEquation}
            setValues={props.setValues}
            setResult={props.setResult}
            values={props.values}
          />
        );
      })}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
