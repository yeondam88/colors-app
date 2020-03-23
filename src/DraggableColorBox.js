import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px"
  }
};

function DraggableColorBox({ color }) {
  const classes = makeStyles(styles)();
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {color}
    </div>
  );
}

export default DraggableColorBox;
