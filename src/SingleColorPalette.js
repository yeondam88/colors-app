import React, { useState } from 'react';
import ColorBox from './ColorBox';

function SingleColorPalette({ palette, colorId }) {
  const [shades] = useState(gatherShades(palette, colorId));

  const colorBoxes = shades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));
  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{colorBoxes}</div>
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
