import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter({ paletteName, emoji }) {
  const classes = makeStyles(styles)();
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;
