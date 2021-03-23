import React from "react";
import TypePrimarySizexsIconFalseStateDefa3 from "../TypePrimarySizexsIconFalseStateDefa3";
import TypePrimarySizexsIconFalseStateDefa4 from "../TypePrimarySizexsIconFalseStateDefa4";
import "./Buttons.css";

function Buttons(props) {
  const { typePrimarySizexsIconFalseStateDefa3Props, typePrimarySizexsIconFalseStateDefa4Props, className } = props;

  return (
    <div className={`buttons2 ${className || ""}`}>
      <TypePrimarySizexsIconFalseStateDefa3 className="type-primary-si-e-state-default4">
        {typePrimarySizexsIconFalseStateDefa3Props.children}
      </TypePrimarySizexsIconFalseStateDefa3>
      <TypePrimarySizexsIconFalseStateDefa4 className="type-primary-si-e-state-default7">
        {typePrimarySizexsIconFalseStateDefa4Props.children}
      </TypePrimarySizexsIconFalseStateDefa4>
    </div>
  );
}

export default Buttons;
