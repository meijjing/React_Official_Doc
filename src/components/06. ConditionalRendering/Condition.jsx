import React from "react";

function UserGreeting(props) {
  return (
    <h3>
      {/* {props.name && props.name + ","} Welcome It's {props.count} times. */}
      {props.name && `${props.name}, `} Welcome
      {props.count ? ` It's ${props.count} times.` : null}
    </h3>
  );
}

function GuestGreeting(props) {
  return <h3>Please sign up.</h3>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name="Leah" count={0} />;
  // }
  // return <GuestGreeting />;

  return props.isLoggedIn ? (
    <UserGreeting name="Leah" count={0} />
  ) : (
    <GuestGreeting />
  );
}

function Condition() {
  const isLoggedIn = true;

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Condition;
