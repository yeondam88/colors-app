import React, { useCallback, useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

function Palette({ palette: { colors, paletteName, emoji, id } }) {
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
    <div className="Palette">
      <Navbar
        format={format}
        level={level}
        onChange={onChange}
        handleChange={handleChange}
        showingAllColors
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default Palette;
