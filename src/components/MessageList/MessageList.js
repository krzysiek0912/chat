import React from 'react';

import Message from '../Message/Message'
import './MessageList.css';

const MessageList = props => (
  <div className="MessageList">
    {
      props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            from={message.from}
            text={message.text}
          />
        );
      })
    }
  </div>
);

export default MessageList;