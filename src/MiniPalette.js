import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
  const classes = makeStyles(styles)();
  const { paletteName, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;
