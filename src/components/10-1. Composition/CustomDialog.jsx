import React from "react";

function CustomDialog(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <h5>{props.description}</h5>
    </div>
  );
}

export default CustomDialog;
