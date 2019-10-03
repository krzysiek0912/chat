import React, { Component } from 'react';
import io from 'socket.io-client';

import Layout from '../Layout/Layout'
import UserForm from '../UserForm/UserForm'

const socket = io('http://localhost:8000/');

class App extends Component {
  state = {users: [], messages: [], text: '', name: ''};  
  
  componentDidMount() {
    socket.on('message', message => this.messageReceive(message));
    socket.on('update', ({users}) => this.chatUpdate(users));
  }

  messageReceive(message) {
    const messages = [message, ...this.state.messages];
    this.setState({messages});
  }

  chatUpdate(users) {
    this.setState({users});
  }

  handleMessageSubmit=(message)=> {
    const messages = [message, ...this.state.messages];
    this.setState({messages});
    socket.emit('message', message);
  }

  handleUserSubmit(name) {
    this.setState({name});
    socket.emit('join', name);
  }
  
  render=()=> (
  this.state.name !== '' ? 
      <Layout 
        users={this.state.users}
        name={this.state.name}
        messages={this.state.messages}
        handleMessageSubmit={this.handleMessageSubmit}
      /> 
      : 
      <UserForm onUserSubmit={name => this.handleUserSubmit(name)} /> 
     )
  
};

export default App;