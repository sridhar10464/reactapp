import { useState } from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {

  const [color, setColor] = useState("");
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState([
    "crimson",
    "orange",
    "skyblue",
    "purple",
  ]);

  return (
    <div>
      <input
        type="text"
        style={styles}
        placeholder="Name"
        onChange={(event) => setColor(event.target.value)} />
      <Button
        onClick={() => setColorList([...colorList, color])}
      >
        Add Color
      </Button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
