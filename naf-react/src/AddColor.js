import { useState } from "react";
import ColorBox from "./ColorBox";

export function AddColor() {
  // const color = "lightblue";
  const [color, setColor] = useState("lightblue");

  //const colorList = ["Orange", "Crimson", "pink"];
  const [colorList, setColorList] = useState(["Orange", "Crimson", "pink"]);
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
    width: "300px",
  };

  return (
    <div className="add-color">
      <div>
        <input
          value={color}
          style={styles}
          type="text"
          onChange={(event) => setColor(event.target.value)}
        />
        {/* copy the colorList and add new color */}
        <button
          onClick={() => {
            setColorList([...colorList, color]);
            console.log(color, colorList);
          }}
        >
          Add Color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
