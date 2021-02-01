import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material-ui stuff for the card component
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// Thumbnails for projects
import movieImage from "../images/movieImage.jpg";
import cookbook from "../images/cookbook.jpg";
import weatherImage from "../images/weatherImage.jpg";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "320px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  media: {
    height: 250,
  },
  ul: {
    alignItems: "flex-start",
    justifyContent: "flex-start !important",
  },
  cardButton: {
    fontSize: "1.6rem",
    fontWeight: "700",
  },
  cardUl: {
    justifyContent: "flex-start !important",
    alignItems: "flex-start !important",
  },
  cardLi: {
    backgroundColor: "rgba(201, 201, 201, 0.2)",
    padding: "3px 6px",
    borderRadius: "4px",
    color: "#945d5e",
  },
  cardHeader: {
    color: "#37123c",
    fontWeight: "800",
  }
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <section>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Card raised="true" className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={cookbook}
                title="cookbook project thumbnail"
              />
            </CardActionArea>
            <CardContent>
              <h6 className={classes.cardHeader}>
                Virtual Cookbook
              </h6>
              <p className="sm-p">
                Store your favorite recipes and share them with your followers in a easy-to-read format.
              </p>
              <ul className={classes.cardUl}>
                <li className={`shadow ${classes.cardLi}`}>MongoDB</li>
                <li className={`shadow ${classes.cardLi}`}>Express.JS</li>
                <li className={`shadow ${classes.cardLi}`}>React</li>
                <li className={`shadow ${classes.cardLi}`}>Node.JS</li>
                <li className={`shadow ${classes.cardLi}`}>Next.JS</li>
              </ul>
            </CardContent>
            <CardActions>
              <Button size="big" color="primary">
                <a className={classes.cardButton} href="#">View Site</a>
              </Button>
              <Button size="big" color="primary">
                <a className={classes.cardButton} href="#">Code @ Github</a>
              </Button>
            </CardActions>
          </Card>
        </li>
        <li className={classes.li}>
          <Card raised="true" className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={movieImage}
                title="movie project thumbnail"
              />
            </CardActionArea>
            <CardContent>
              <h6 className={classes.cardHeader}>
                Weather Forecast
              </h6>
              <p className="sm-p">
                Weather forecast service that fetches weather data from a API.
              </p>
              <ul className={classes.cardUl}>
                <li className={`shadow ${classes.cardLi}`}>React</li>
              </ul>
            </CardContent>
            <CardActions>
              <Button size="big" color="primary">
                <a className={classes.cardButton} href="#">View Site</a>
              </Button>
              <Button size="big" color="primary">
                <a className={classes.cardButton} href="#">Code @ Github</a>
              </Button>
            </CardActions>
          </Card>
        </li>
        <li className={classes.li}>
          <Card raised="true" className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={weatherImage}
                title="weather project thumbnail"
              />
            </CardActionArea>
            <CardContent>
              <h6 className={classes.cardHeader}>
                Movie database
              </h6>
              <p className="sm-p">
                Users can search for any movie or actor and get som basic information from a API.
              </p>
              <ul className={classes.cardUl}>
                <li className={`shadow ${classes.cardLi}`}>Angular</li>
              </ul>
            </CardContent>
            <CardActions>
              <Button size="big" color="primary">
                <a className={classes.cardButton} href="#">View Site</a>
              </Button>
              <Button size="big" color="primary">
                <a className={classes.cardButton} href="#">Code @ Github</a>
              </Button>
            </CardActions>
          </Card>
        </li>
      </ul>
    </section>
  )
}

export default Projects;