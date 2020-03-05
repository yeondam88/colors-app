import React, { useState, useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

function ColorBox({ color, name }) {
  const [copied, setCopied] = useState(false);

  const copyHandler = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  return (
    <CopyToClipboard text={color} onCopy={copyHandler}>
      <div style={{ backgroundColor: color }} className="ColorBox">
        <div
          style={{ backgroundColor: color }}
          className={`copy-overlay ${copied && 'show'}`}
        ></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>Copied!</h1>
          <p>{color}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
