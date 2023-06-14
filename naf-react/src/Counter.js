import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* onClick = camelCase */}
      <IconButton
        aria-label="likebutton"
        onClick={() => setLike(like + 1)}
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        aria-label="disikebutton"
        onClick={() => setDislike(dislike + 1)}
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button> */}
    </div>
  );
}
