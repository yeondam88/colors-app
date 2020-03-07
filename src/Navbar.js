import React, { useState, useCallback } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

function Navbar({ level, onChange, handleChange }) {
  const [format, setFormat] = useState('hex');
  const handleFormatChange = useCallback(
    e => {
      setFormat(e.target.value);
      handleChange(format);
    },
    [format, handleChange]
  );
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={onChange}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">Hex - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgb(255,255,255,0.1)</MenuItem>
        </Select>
      </div>
    </header>
  );
}

export default Navbar;
