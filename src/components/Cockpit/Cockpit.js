import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtn = useRef(null);

  useEffect(() => {
    console.log("[cockpit.js] useEffect()");
    // setTimeout(() => {
    //   console.log("saved data to cloud");
    // }, 1000);
    toggleBtn.current.click();
    return () => {
      console.log("cleanup work using useEffect()");
    };
  }, []);

  useEffect(() => {
    console.log("[cockpit.js] 2nd useEffect()");
    return () => {
      console.log("cleanup work using 2nd useEffect()");
    };
  });
  const assignedClass = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClass.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClass.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClass.join(" ")}>This is really working!</p>
      <button ref={toggleBtn} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
