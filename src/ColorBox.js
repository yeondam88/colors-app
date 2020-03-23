import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";

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
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        ></div>
        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}
        >
          <h1>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className={classes.boxContent}>
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
