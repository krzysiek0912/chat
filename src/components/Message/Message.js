import React from 'react';


const Message = props => (
  <div className="Message">
    <strong>{props.from} :</strong>
    <span>{props.text}</span>
  </div>
);

export default Message;