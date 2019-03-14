import classes from "./Persons.css";
import React from "react";
import Aux from "../../../hoc/Aux";
import WithClass from "../../../hoc/WithClass";

// const person = props => {
//   console.log("[Person.js] render");
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

class Person extends React.Component {
  render() {
    console.log("[Person.js] render");
    return (
      <Aux>
        <div className={classes.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

export default WithClass(Person, classes.Person);
