import { useState, createContext, useContext } from "react";
import { Sample1 } from "./Sample1";
import Ref from "./Components/Ref";
import Reducer from "./Components/Reducer";

export const NameContext = createContext();

export function ExampleContext() {
  //const name = "Mick";

  //const nameList = ["Jack", "John", "Peter"];
  const [nameList, setNameList] = useState(["Jack", "John", "Peter"]);
  const [name, setName] = useState("Mick");
  return (
    <NameContext.Provider value={name}>
      <div>
        <h1>Example Context {name}</h1>
        {/* <Sample />
        <Sample1 />
        <Ref /> */}
        <Reducer />
        {/* {nameList.map((nm) => (
        <Sample name={nm} />
      ))}
      */}
        {/* <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setNameList([...nameList, name])}>
        Change Name
      </button> */}
      </div>
    </NameContext.Provider>
  );
}

function Sample() {
  const nm = useContext(NameContext);
  return <div>Hello {nm}</div>;
}

export const useGlobalContext = () => {
  return useContext(NameContext);
};
