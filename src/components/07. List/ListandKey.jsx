import React from "react";

function ListandKey() {
  const todos = [
    { id: 1, text: "Shopping" },
    { id: 2, text: "Study" },
    { id: 3, text: "Wash dishes" },
    { id: 4, text: "Shower" },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return (
    <>
      <ul>{todoList}</ul>
    </>
  );
}

export default ListandKey;
