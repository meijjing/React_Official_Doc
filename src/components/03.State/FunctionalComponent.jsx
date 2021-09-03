import React, { useState, useEffect } from "react";

function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h3>Hello, world! It's FunctionalComponent</h3>
      <h4>It is {date.toLocaleTimeString()}</h4>
    </div>
  );
}

export default FunctionalComponent;
