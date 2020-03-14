import React, { useState, useCallback } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';

function SingleColorPalette({ palette, colorId }) {
  const [shades] = useState(gatherShades(palette, colorId));
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
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
      showLink={false}
    />
  ));
  return (
    <div className="Palette">
      <Navbar
        format={format}
        level={level}
        onChange={onChange}
        handleChange={handleChange}
      />

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
