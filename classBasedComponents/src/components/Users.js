import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

// Here we are learning how to use state and events(like onClick) in class Based Componenets;
class Users extends Component{

  // in class based components, we initialize using constructor and we have to use object for that and property name must be this.state. In functional Components we are flexible to use any dataType in useState(); but here we have to use only objects.

  constructor(){
    super();
    this.state={
      showUsers:true,
      more:'Test',
    };
    // this.toggleUsersHandler = this.toggleUsersHandler.bind(this);
  }

  toggleUsersHandler(){
    // this.state.showUsers=flase   // NOT!
    // we change states like below not like above
    //setState is provided by React Components.
    this.setState((prevState) =>{
      return {
        showUsers: !prevState.showUsers
      };
    });
    }


    // Note setState do no overide the oldState actually it merges with the old State. For example above case only showUsers change to flase while reamining properties defined inside of this.state remains same.
  
  render(){
      const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}



// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
