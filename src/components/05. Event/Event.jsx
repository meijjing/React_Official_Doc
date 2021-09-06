import React from "react";

function Event() {
  function handleButtonClick(e) {
    console.dir(e);
    console.log("handleButtonClick");
  }

  function handleClickCapture() {
    console.log("handleClickCapture");
  }

  function handleClickCapture2() {
    console.log("handleClickCapture2");
  }

  function handleClickBubble() {
    console.log("handleClickBubble");
  }

  function handleMouseLeave(e) {
    console.dir(e);
    console.log("handleMouseLeave");
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          Button
        </button>
      </div>
    </div>
  );
}

export default Event;
