import React from "react";
import Dialog from "./Dialog";

function ThankyouDialog() {
  return (
    <div>
      <Dialog
        title={<h3 style={{ color: "purple" }}>Thanks</h3>}
        description="It is  honor to you!"
        button={
          <button style={{ backgroundColor: "black", color: "white" }}>
            close
          </button>
        }
      />
    </div>
  );
}

export default ThankyouDialog;
