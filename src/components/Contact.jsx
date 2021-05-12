import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import SendIcon from '@material-ui/icons/Send';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    margin: "10px",
    backgroundColor: "white",
  },
  submitBttn: {
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    borderRadius: "4px",
    padding: "10px",
    border: "none",
    backgroundColor: "coral",
    width: "100%",
  },
  successBox: {
    maxWidth: "800px",
    border: "1px solid white",
    borderRadius: "5px",
    padding: "20px",
    marginTop: "20px",
  },
  icon: {
    width: "30px",
    height: "30px",
    marginLeft: "20px",
  }
}));

const Contact = () => {
  const [ successMessage, setSuccessMessage ] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
        serviceID, templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!');
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err));
  }

  const onSubmit = (data, e) => {
    const { name, email, message } = data;
    const templateId = "template_mzwzaup";
    const serviceID = "service_y24txsj";
    sendFeedback(serviceID, templateId, { name, email, message })
    setSuccessMessage("Thank you! Award yourself with some coffee and i'll get back too you soon!");
    e.target.reset();
  }


    return (
      <section id="contact" className="contact">
        <article>
        <h4>Lets Talk!</h4>
        <p className="plain-text">
          Do you have a project in mind? Need help with something? 
          Want to hire me? Or simply wanna chat? Feel free to reach out!
        </p>
        </article>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

          <TextField
            className={classes.textField}
            name="name" 
            id="name" 
            variant="filled" 
            placeholder="Name" 
            inputRef={register({ required: true })} 
          />
          {errors.name && <span>Oops! You forgot your name. </span>}
        
          <TextField
            className={classes.textField}
            name="email"
            id="email" 
            variant="filled" 
            placeholder="Email" 
            inputRef={register({ required: "Please enter an email",
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            } })} 
          />
          {errors.email && <span>{errors.email.message}</span>}
        
          <TextField
            className={classes.textField}
            name="message" 
            id="message" 
            variant="filled" 
            placeholder="Message"
            multiline
            rows={12}
            inputRef={register({ required: true })} 
          />
          {errors.message && <span>Atleast wright me something :(</span>}
        
          <button className={`submitButton shadow-md ${classes.submitBttn}`} type="submit">
            SEND <FlightTakeoffIcon fontSize="small" className={classes.icon}/>
          </button>
        </form>
        {successMessage !== null && <p className={classes.successBox}>{ successMessage }<LocalCafeIcon className={classes.icon}/></p>}
      </section>
    )
};

export default Contact;
