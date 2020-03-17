import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },

  PaletteColors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "#000",
    "& a": {
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
      color: "#fff",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none"
    }
  }
};

function SingleColorPalette({ palette, colorId, classes }) {
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

export default withStyles(styles)(SingleColorPalette);
