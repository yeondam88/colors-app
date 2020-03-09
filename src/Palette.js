import React, { useState, useCallback } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';

import './Palette.css';

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const onChange = useCallback(newLevel => {
    setLevel(newLevel);
  }, []);

  const handleChange = useCallback(format => {
    setFormat(format);
  }, []);

  const colorBoxes = props.palette.colors[level].map(color => {
    console.log(color);
    return (
      <ColorBox key={color.name} background={color[format]} name={color.name} />
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
    </div>
  );
}

export default Palette;
