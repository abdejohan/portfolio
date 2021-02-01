import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// ICONS 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
  ul: {
    flexFlow: "row wrap !important",
  },
  iconList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    width: "30px !important",
    height: "30px !important",
    marginRight: "5px",
  },
  hr: {
    margin: "40px 0px",
    width: "40%",
    height: "1px",
    opacity: "0.3",
    color: "lightblue",
    backgroundColor: "lightblue",
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <ul className={classes.ul}>
          <li className={classes.iconList}><EmailIcon className={classes.icons} /><a className="contact-links" href="mailto: johan.abde@chasacademy.se">johan.abde@chasacademy.se</a></li>
          <li className={classes.iconList}><GitHubIcon className={classes.icons} color="secondary" /><a className="contact-links" href="https://github.com/abdejohan/">github.com/abdejohan/</a></li>
          <li className={classes.iconList}><LinkedInIcon className={classes.icons} color="primary" /><a className="contact-links" href="https://www.linkedin.com/in/johan-abd%C3%A9-85394382/">linkedin.com/in/johan-abdé-85394382/</a></li>
      </ul>
      <hr className={classes.hr}/>
      <ul className="footer-ul">
        <li className="solo-link">This site was made by Johan Abdé @</li>
        <li><a className="solo-link" href="https://chasacademy.se">Chas Academy</a></li>
      </ul>
    </footer>
  )
}

export default Footer;