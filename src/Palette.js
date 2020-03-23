import React, { useCallback, useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteStyles";

function Palette({ palette: { colors, paletteName, emoji, id } }) {
  const classes = makeStyles(styles)();
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const onChange = useCallback(newLevel => {
    setLevel(newLevel);
  }, []);

  const handleChange = useCallback(format => {
    setFormat(format);
  }, []);

  const colorBoxes = colors[level].map(color => {
    return (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        id={color.id}
        paletteId={id}
        showingFullPalette
      />
    );
  });
  return (
    <div className={classes.Palette}>
      <Navbar
        format={format}
        level={level}
        onChange={onChange}
        handleChange={handleChange}
        showingAllColors
      />
      <div className={classes.PaletteColors}>{colorBoxes}</div>
      <PaletteFooter
        paletteName={paletteName}
        emoji={emoji}
        classes={classes}
      />
    </div>
  );
}

export default Palette;
