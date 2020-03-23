import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteStyles";

function SingleColorPalette({ palette, colorId }) {
  const classes = makeStyles(styles)();
  const [shades] = useState(gatherShades(palette, colorId));
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const onChange = useCallback(newLevel => {
    setLevel(newLevel);
  }, []);

  const handleChange = useCallback(format => {
    setFormat(format);
  }, []);

  const colorBoxes = shades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar
        showingAllColors={false}
        format={format}
        level={level}
        onChange={onChange}
        handleChange={handleChange}
      />

      <div className={classes.PaletteColors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

function gatherShades(palette, colorToFilterBy) {
  let _shades = [];
  const allColors = palette.colors;

  for (let key in allColors) {
    _shades = _shades.concat(
      allColors[key].filter(color => color.id === colorToFilterBy)
    );
  }

  return _shades.slice(1);
}

export default SingleColorPalette;
