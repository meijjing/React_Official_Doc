import React from "react";
import withLoading from "./withLoading";

function Button() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return <button>Button</button>;
}

export default withLoading(Button);
