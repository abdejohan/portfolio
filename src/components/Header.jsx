import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({

}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header;