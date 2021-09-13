import React, { useState } from "react";

function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div style={{ position: "relative", zIndex: "1" }}>
        <button onClick={() => setIsOpen(true)}>Open</button>

        {isOpen && (
          <div
            style={{
              positon: "absolute",
              zIndex: "100",
              top: "50%",
              left: "50%",
              // transform: "translate(-50%, -50%)",
              border: "1px solid black",
              width: "200",
              height: "200",
              padding: "20px",
              boxSizing: "border-box",
              backgroundColor: "yellow",
            }}
          >
            {typeof props.title === "string" ? (
              <p>{props.title}</p>
            ) : (
              props.title
            )}

            {typeof props.description === "string" ? (
              <p>{props.description}</p>
            ) : (
              props.description
            )}

            {typeof props.button === "string" ? (
              <button onClick={() => setIsOpen(false)}>{props.button}</button>
            ) : (
              <div onClick={() => setIsOpen(false)}>{props.button}</div>
            )}
          </div>
        )}

        {/* {isOpen && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,.8)",
              zIndex: "99",
            }}
          ></div>
        )} */}
      </div>
    </div>
  );
}

export default Dialog;
