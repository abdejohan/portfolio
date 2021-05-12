import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from '@material-ui/icons/Launch';

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
import allergikollen1 from "../images/allergikollen1.jpg";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: "300px",
    maxWidth: "350px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  media: {
    height: 250,
    borderBottom: "3px solid purple",
  },
  ul: {
    alignItems: "flex-start",
    maxWidth: "800px",
  },
  cardButton: {
    fontSize: "1.8rem",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexflow: "row nowrap",
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
    fontSize: "14px"
  },
  cardHeader: {
    color: "#37123c",
    fontWeight: "800",
  },
  icons: {
    width: "15px !important",
    height: "15px !important",
    marginLeft: "5px",
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <section id="projects">
      <h4 style={{maxWidth: "700px"}}>Projects</h4>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Card raised={true}className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={allergikollen1}
                title="Allergikollen project thumbnail"
                />
            </CardActionArea>
            <CardContent>
              <h6 className={classes.cardHeader}>
                Allergikollen (WIP)
              </h6>
              <p className="sm-p padding">
                Users can add their own allergens to a list and then scan any item with a barcode.
                The application will inform if any of the allergens was found.
              </p>
              <ul className={classes.cardUl}>
                <li className={`shadow ${classes.cardLi}`}>React Native</li>
                <li className={`shadow ${classes.cardLi}`}>Expo</li>
                <li className={`shadow ${classes.cardLi}`}>UI Kitten</li>
                <li className={`shadow ${classes.cardLi}`}>Figma</li>
              </ul>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary">
                <a className={classes.cardButton} href="https://github.com/abdejohan/allergikollen">Github <LaunchIcon className={classes.icons}/></a>
              </Button>
            </CardActions>
          </Card>
        </li>
        <li className={classes.li}>
          <Card raised={true}className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={cookbook}
                title="cookbook project thumbnail"
              />
            </CardActionArea>
            <CardContent>
              <h6 className={classes.cardHeader}>
                Virtual cookbook
              </h6>
              <p className="sm-p padding">
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
              <Button size="large" color="primary">
                <a className={classes.cardButton} href="https://u11-fullstack-c0k39qdes.vercel.app/">View Site <LaunchIcon className={classes.icons}/></a>
              </Button>
              <Button size="large" color="primary">
                <a className={classes.cardButton} href="https://github.com/abdejohan/cookbook">Github <LaunchIcon className={classes.icons}/></a>
              </Button>
            </CardActions>
          </Card>
        </li>
        <li className={classes.li}>
          <Card raised={true} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={weatherImage}
                title="weather project thumbnail"
              />
            </CardActionArea>
            <CardContent>
              <h6 className={classes.cardHeader}>
                Weather forecast
              </h6>
              <p className="sm-p padding">
                Weather forecast service that fetches weather data from a API.
              </p>
              <ul className={classes.cardUl}>
                <li className={`shadow ${classes.cardLi}`}>React</li>
              </ul>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary">
                <a className={classes.cardButton} href="http://movie.johan.abde.chas.academy/">View Site <LaunchIcon className={classes.icons}/></a>
              </Button>
              <Button size="large" color="primary">
                <a className={classes.cardButton} href="https://github.com/abdejohan/movie-app">Github <LaunchIcon className={classes.icons}/></a>
              </Button>
            </CardActions>
          </Card>
        </li>
        <li className={classes.li}>
          <Card raised={true} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={movieImage}
                title="movie project thumbnail"
              />
            </CardActionArea>
            <CardContent>
              <h6 className={classes.cardHeader}>
                Movie database
              </h6>
              <p className="sm-p padding">
                Users can search for any movie or actor and get som basic information from a API.
              </p>
              <ul className={classes.cardUl}>
                <li className={`shadow ${classes.cardLi}`}>Angular</li>
              </ul>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary">
                <a className={classes.cardButton} href="http://weather.johan.abde.chas.academy/">View Site <LaunchIcon className={classes.icons}/></a>
              </Button>
              <Button size="large" color="primary">
                <a className={classes.cardButton} href="https://github.com/abdejohan/weather-app">Github <LaunchIcon className={classes.icons}/></a>
              </Button>
            </CardActions>
          </Card>
        </li>
      </ul>
    </section>
  )
}

export default Projects;