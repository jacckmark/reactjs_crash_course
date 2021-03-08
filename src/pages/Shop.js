import React from "react";
import Counter from "../components/Counter";

export default function Shop() {
  return (
    <div className="container">
      <Counter />
      <div className="d-flex flex-row">
        <div className="p-2 bd-highlight">Flex item 1</div>
        <div className="p-2 bd-highlight">Flex item 2</div>
        <div className="p-2 bd-highlight">Flex item 3</div>
      </div>
    </div>
  );
}
