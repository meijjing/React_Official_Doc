import React from "react";

function Dialog(props) {
  return (
    <>
      <div style={{ backgroundColor: "pink", padding: "5px 0" }}>
        {props.children}
      </div>
    </>
  );
}

export default Dialog;
