import React from 'react';
import { Link } from 'react-router-dom';

function PaletteList({ palettes }) {
  return (
    <div>
      {palettes.map(palette => {
        return (
          <Link to={`/palette/${palette.id}`}>
            <h1>{palette.paletteName}</h1>
          </Link>
        );
      })}
    </div>
  );
}

export default PaletteList;
