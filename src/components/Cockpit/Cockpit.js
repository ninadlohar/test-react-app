import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect()");
    setTimeout(() => {
      console.log("saved data to cloud");
    }, 1000);
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
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
