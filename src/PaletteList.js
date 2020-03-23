import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles/PaletteListStyles";

function PaletteList({ palettes, ...routeProps }) {
  const classes = makeStyles(styles)();
  function handleClick(id) {
    routeProps.history.push(`/palette/${id}`);
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">
            <Button variant="contained" color="primary">
              Create Palette
            </Button>
          </Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              key={palette.id}
              {...palette}
              handleClick={() => handleClick(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaletteList;
