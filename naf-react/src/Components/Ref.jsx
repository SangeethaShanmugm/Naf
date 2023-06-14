import React, { useRef } from "react";

export function Ref() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1>Ref</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>getValue</button>
    </div>
  );
}

export default Ref;
