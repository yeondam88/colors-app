import React, { useState, useCallback } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';

import './Palette.css';

function Palette(props) {
  const [level, setLevel] = useState(500);
  const onChange = useCallback(newLevel => {
    setLevel(newLevel);
  }, []);

  const colorBoxes = props.palette.colors[level].map(color => {
    return (
      <ColorBox key={color.name} background={color.hex} name={color.name} />
    );
  });
  return (
    <div className="Palette">
      <Navbar level={level} onChange={onChange} />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default Palette;
