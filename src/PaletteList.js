import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles/PaletteListStyles";

function PaletteList({ palettes, classes, ...routeProps }) {
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

export default withStyles(styles)(PaletteList);
