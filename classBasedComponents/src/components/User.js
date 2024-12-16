import classes from './User.module.css';
import { Component } from 'react';
// this is for showing  how we use props in class based components. Here we import Component and we extend it where we want to use that like inheritence in java and like in functional components we write the jsx code in return, here we write inside the render method and inside we return the jsx. 

// We access props using this keyword same as in java. We also have constructor concept same as java.
class User extends Component{
  render()
  {
    // for solving the global css priority problem css file is saved using module.css extension and we import classes and use like classes.CSS_NAME; 
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
