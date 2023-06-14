import { useGlobalContext } from "./ExampleContext";

export function Sample1() {
  const nm = useGlobalContext();
  return <div>Welcome {nm} </div>;
}
