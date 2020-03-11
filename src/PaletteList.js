import React from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

function PaletteList({ palettes }) {
  return (
    <div>
      {palettes.map(palette => {
        console.log(palette);
        return (
          <div>
            <MiniPalette {...palette} />
            <Link to={`/palette/${palette.id}`}>
              <h1>{palette.paletteName}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PaletteList;
