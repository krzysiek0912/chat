
import React from 'react';

import MessageForm from '../MessageForm/MessageForm';
import MessageList from '../MessageList/MessageList';
import UsersList from '../UsersList/UsersList';

import './Layout.css';

function Layout(props) {
    console.log(props)
  return (
      <div className="App">
        <div className="AppHeader">
          <div className="AppTitle">
            ChatApp
          </div>
          <div className="AppRoom">
            App room
          </div>
        </div>
        <div className="AppBody">
          <UsersList
            users={props.users}
          />
          <div className="MessageWrapper">
            <MessageList
              messages={props.messages}
            />
            <MessageForm
              onMessageSubmit={message => props.handleMessageSubmit(message)}
              name={props.name}
            />
          </div>
        </div>
      </div>
   )
}

export default Layout;