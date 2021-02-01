import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
}));

const About = () => {
  const classes = useStyles();

  return (
    <section>
      <article>
        <h1>Hi! I am Johan 👋</h1>
        <ul className={classes.ul}>
          <li>Advanced Javascript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Agile Development</li>
          <li>Typescript</li>
          <li>UX/UI</li>
          <li>Angular</li>
          <li>Backend Development</li>
          <li>Next.js</li>
          <li>Express.js</li>
          <li>PHP</li>
          <li>mySQL</li>
          <li>Node.js</li>
          <li>MongoDB</li>
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