import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

function ColorBox({ background, name, paletteId, id }) {
  const [copied, setCopied] = useState(false);

  const copyHandler = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  return (
    <CopyToClipboard text={background} onCopy={copyHandler}>
      <div style={{ backgroundColor: background }} className="ColorBox">
        <div
          style={{ backgroundColor: background }}
          className={`copy-overlay ${copied && 'show'}`}
        ></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <Link
          to={`/palette/${paletteId}/${id}`}
          onClick={e => e.stopPropagation()}
        >
          <span className="see-more">More</span>
        </Link>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
