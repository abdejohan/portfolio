import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ul: {
  },
  li: {
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: "5px 10px",
    borderRadius: "10px",
  },
  para: {
    padding: "80px 0px",
    color: "#D8DBE2",
    textAlign: "center",
    fontSize: "24px",
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <article>
        <section className="welcome-section">
          <h2>Hi! 👋</h2>
          <h2> I am Johan,</h2>
          <h3>a fullstack web developer from Stockholm</h3>
        </section>
        <section className="xp-section">
          <ul className={classes.ul}>
            <li className={`shadow-md ${classes.li}`}>Advanced Javascript</li>
            <li className={`shadow-md ${classes.li}`}>React</li>
            <li className={`shadow-md ${classes.li}`}>React Native</li>
            <li className={`shadow-md ${classes.li}`}>Expo</li>
            <li className={`shadow-md ${classes.li}`}>Typescript</li>
            <li className={`shadow-md ${classes.li}`}>Backend Development</li>
            <li className={`shadow-md ${classes.li}`}>Angular</li>
            <li className={`shadow-md ${classes.li}`}>Node.js</li>
            <li className={`shadow-md ${classes.li}`}>Agile Development</li>
            <li className={`shadow-md ${classes.li}`}>MongoDB</li>
            <li className={`shadow-md ${classes.li}`}>UX/UI</li>
            <li className={`shadow-md ${classes.li}`}>Next.js</li>
            <li className={`shadow-md ${classes.li}`}>Figma</li>
            <li className={`shadow-md ${classes.li}`}>Express.js</li>
            <li className={`shadow-md ${classes.li}`}>PHP</li>
            <li className={`shadow-md ${classes.li}`}>mySQL</li>
          </ul>
        </section>

        <p className={classes.para}>
          I enjoy learning new languages, frameworks and 
          libraries and I have no problem <span style={{ fontStyle: "italic", color: "#99d6ff"}}>jumping into uncharted waters.</span><span className="nowrap" role="img" aria-label="emoji"> 🌊🏊‍♂️🦈! <br/></span> 
          below you can find my contact information or go straight to my <a className="bold" href="https://github.com/abdejohan/">GitHub</a> for some of my old school projects!
        </p>
      </article>
    </section>
  )
}

export default About;