import React, { useState, useCallback } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';

import './Palette.css';

function Palette({ palette: { colors, paletteName, emoji, id } }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
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
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
}

export default Palette;
