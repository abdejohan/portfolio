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
  para: {
    padding: "80px 0px",
    color: "#D8DBE2",
    fontSize: "24px",
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <article>
        <section className="welcome-section">
          <h2>Hi!</h2>
          <h2> I am Johan, 👋</h2>
          <h3>a fullstack web developer student @ <a className="bold" href="https://chasacademy.se">Chas Academy</a></h3>
        </section>
        <section className="xp-section">
          <h4 className="w500">So, what have I done so far?</h4>
          <ul className={classes.ul}>
            <li className={`shadow-md ${classes.li}`}>Advanced Javascript</li>
            <li className={`shadow-md ${classes.li}`}>React</li>
            <li className={`shadow-md ${classes.li}`}>Backend Development</li>
            <li className={`shadow-md ${classes.li}`}>Angular</li>
            <li className={`shadow-md ${classes.li}`}>Node.js</li>
            <li className={`shadow-md ${classes.li}`}>Agile Development</li>
            <li className={`shadow-md ${classes.li}`}>Typescript</li>
            <li className={`shadow-md ${classes.li}`}>MongoDB</li>
            <li className={`shadow-md ${classes.li}`}>UX/UI</li>
            <li className={`shadow-md ${classes.li}`}>Next.js</li>
            <li className={`shadow-md ${classes.li}`}>Figma</li>
            <li className={`shadow-md ${classes.li}`}>Express.js</li>
            <li className={`shadow-md ${classes.li}`}>PHP</li>
            <li className={`shadow-md ${classes.li}`}>mySQL</li>
          </ul>
          <p style={{ alignSelf: "flex-end", fontStyle: "italic" }}>
            And a lot more!
          </p>
        </section>

        <p className={classes.para}>
          So far I've found everything super cool and fun. Im eager to learn new languages, frameworks and 
          libraries and I have no problem <span style={{ fontStyle: "italic", color: "#99d6ff"}}>jumping into uncharted water.</span><span className="nowrap" role="img" aria-label="emoji"> 🌊🏊‍♂️🦈! <br/></span> 
          below you can find some of my school projects or go straight to my <a className="bold" href="https://github.com/abdejohan/">GitHub</a>!
        </p>
      </article>
    </section>
  )
}

export default About;