import React from 'react';
import './ColorBox.css';

function ColorBox({ color, name }) {
  return (
    <div style={{ backgroundColor: color }} className="ColorBox">
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  );
}

export default ColorBox;
