import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ul: {
    justifyContent: "flex-start !important",
  },
  li: {
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: "5px 10px",
    borderRadius: "10px",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <section>
      <article>
        <h1>Hi! I am Johan 👋</h1>
        <h3>a fullstack web developer student @ <a className="bold" href="https://chasacademy.se">Chas Academy</a></h3>
        <h6 className="italic">Here are just a few things my education includes:</h6>
        <ul className={classes.ul}>
          <li className={`shadow-md ${classes.li}`}>Advanced Javascript</li>
          <li className={`shadow-md ${classes.li}`}>React</li>
          <li className={`shadow-md ${classes.li}`}>Node.js</li>
          <li className={`shadow-md ${classes.li}`}>Angular</li>
          <li className={`shadow-md ${classes.li}`}>Agile Development</li>
          <li className={`shadow-md ${classes.li}`}>Typescript</li>
          <li className={`shadow-md ${classes.li}`}>UX/UI</li>
          <li className={`shadow-md ${classes.li}`}>Next.js</li>
          <li className={`shadow-md ${classes.li}`}>Figma</li>
          <li className={`shadow-md ${classes.li}`}>Backend Development</li>
          <li className={`shadow-md ${classes.li}`}>Express.js</li>
          <li className={`shadow-md ${classes.li}`}>PHP</li>
          <li className={`shadow-md ${classes.li}`}>mySQL</li>
          <li className={`shadow-md ${classes.li}`}>MongoDB</li>
        </ul>
        <p>
          And of course, a lot more! <br/>
          So far I've found everything super cool and fun. Im eager to learn new languages, frameworks and 
          libraries and I have no problem <span className="italic">jumping into uncharted water.</span><span className="nowrap" role="img" aria-label="emoji"> 🌊🏊‍♂️🦈! <br/></span> 
          below you can find some of my school projects or go straight to my <a className="bold" href="https://github.com/abdejohan/">GitHub</a>!
        </p>
      </article>
    </section>
  )
}

export default About;