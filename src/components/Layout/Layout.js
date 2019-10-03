import React from 'react';

import AppHeader from '../AppHeader/AppHeader'
import MessageForm from '../MessageForm/MessageForm';
import MessageList from '../MessageList/MessageList';
import UsersList from '../UsersList/UsersList';

import './Layout.css';

const Layout = props => (
  <div className="App"> 
    <AppHeader />       
    <div className="AppBody">
      <UsersList
        users={props.users}
      />
      <div className="MessageWrapper">
        <MessageList
          messages={props.messages}
        />
        <MessageForm
          onMessageSubmit={ message => props.handleMessageSubmit(message) }
          name={ props.name }
        />
      </div>
    </div>
  </div>
)

export default Layout;