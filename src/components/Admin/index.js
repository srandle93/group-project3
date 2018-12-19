import React, { Component } from 'react';
import "./style.css";
import Navigation from '../Navigation';

import { withFirebase } from '../Firebase';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
        const usersObject = snapshot.val();
  
        const usersList = Object.keys(usersObject).map(key => ({
          ...usersObject[key],
          uid: key,
        }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div >
        <div id="navAccount">
          <Navigation />
        </div>
        <h1 id="adminHeader">Admin</h1>

        {loading && <div>Loading ...</div>}
       <div id="adminBox">
        <UserList users={users} />
        </div>
      </div>
    );
  }
}

const UserList = ({ users }) => (
    <ul>
      {users.map(user => (
        <li key={user.uid} id="userInfo">
          <span id="displayID">
            <strong>ID: </strong> {user.uid}
          </span>
          <span id="displayEmail">
            <strong>E-Mail: </strong> {user.email}
          </span>
          <span id="displayUsername">
            <strong>Username: </strong> {user.username}
          </span>
        </li>
      ))}
    </ul>
  );

export default withFirebase(AdminPage);