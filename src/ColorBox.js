import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

const styles = {
  ColorBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0
  }
};

function ColorBox({
  background,
  name,
  paletteId,
  id,
  classes,
  showingFullPalette
}) {
  const [copied, setCopied] = useState(false);

  const copyHandler = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  return (
    <CopyToClipboard text={background} onCopy={copyHandler}>
      <div style={{ backgroundColor: background }} className={classes.ColorBox}>
        <div
          style={{ backgroundColor: background }}
          className={`copy-overlay ${copied && "show"}`}
        ></div>
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={e => e.stopPropagation()}
          >
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
