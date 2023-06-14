import React, { useReducer } from "react";

export function Reducer() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      //action Types
      if (action.type === "update") {
        return { ...state, name: action.value };
      }
      if (action.type === "pass") {
        return { ...state, password: action.value };
      }
      if (action.type === "btn") {
        return { ...state, btn: state.btn + 1 };
      }
    },
    {
      name: "Jack",
      password: "12345",
      mobile: "1234",
      btn: 1,
    }
  );
  console.log(state);
  return (
    <div>
      Reducer
      <p>{state.name}</p>
      <p>{state.password}</p>
      <p>{state.btn}</p>
      <input
        type="text"
        value={state.password}
        onChange={(e) => dispatch({ type: "pass", value: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "update", value: "Mick" })}>
        getValue
      </button>
      <button onClick={() => dispatch({ type: "btn" })}>Counter</button>
    </div>
  );
}

export default Reducer;
