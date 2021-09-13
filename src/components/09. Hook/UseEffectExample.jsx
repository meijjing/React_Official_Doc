import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );

  // const [isOnline, setIsOnline] = useState(null);

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }

  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

  //   // effect 이후에 어떻게 정리(clean-up)할 것인지 표시합니다.
  //   return function cleanup() {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // });

  // if (isOnline === null) {
  //   return "Loading...";
  // }
  // return isOnline ? "Online" : "Offline";
}

export default UseEffectExample;
