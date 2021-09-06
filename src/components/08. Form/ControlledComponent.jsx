import React, { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState(
    "Please write an essay about your favorite DOM element."
  );
  const [flavor, setFlavor] = useState("coconut");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Name: ${name}, Essay: ${essay}, Flavor: ${flavor}`);
  }

  function handleChange(event) {
    const name = event.target.name;

    // 이렇게 사용가능
    // event.target.value
    // event.target.name
    // event.target.type

    if (name === "name") {
      setName(event.target.value);
    }

    if (name === "essay") {
      setEssay(event.target.value);
    }

    if (name === "flavor") {
      setFlavor(event.target.value);
    }
  }

  // function essayChange(event) {
  //   setEssay(event.target.value);
  // }

  // function flavorChange(event) {
  //   setFlavor(event.target.value);
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={name} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Essay:
          <textarea name="essay" value={essay} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Pick your favorite flavor:
          <select name="flavor" value={flavor} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            <option value="peach">Peach</option>
          </select>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default ControlledComponent;
