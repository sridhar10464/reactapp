import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import * as React from "react";

export function Counter() {
  // let like = 10;
  const [like, setLike,] = useState(0);
  const [disLike, setDisLike,] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);
  return (
    <div className="counter-container">
      <IconButton
        color="primary"
        onClick={incrementLike}
        aria-label="Toggle summary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        color="error"
        onClick={incrementDisLike}
        aria-label="Toggle summary"
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
      {/* <button onClick = {incrementDisLike}> [DL] {disLike} </button> */}
    </div>
  );
}
