import React from "react";
import CustomDialog from "./CustomDialog";
import Dialog from "./Dialog";

function WelcomeDialog() {
  return (
    <div>
      <Dialog>
        <h4>Welcome</h4>
        <h5>Thank you!</h5>
      </Dialog>

      <CustomDialog title={<button>Welcome</button>} description="Thank you!" />
    </div>
  );
}

export default WelcomeDialog;
