import React, { useState, useCallback } from 'react';
import Slider from 'rc-slider';
import ColorBox from './ColorBox';
import './Palette.css';
import 'rc-slider/assets/index.css';

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
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={onChange}
      />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default Palette;
