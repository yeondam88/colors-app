import React from 'react';
import './ColorBox.css';

function ColorBox({ color }) {
  return (
    <div style={{ backgroundColor: color.color }} className="ColorBox">
      <span>{color.name}</span>
    </div>
  );
}

export default ColorBox;
