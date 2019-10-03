import React, {Component} from 'react';
import './MessageForm.css';

class MessageForm extends Component {
  
  state = {text: ''};
  

  handleSubmit(e) {
    e.preventDefault();

    const message = {
      from : this.props.name,
      text : this.state.text
    };

    this.props.onMessageSubmit(message);
    this.setState( { text: '' } );
  }

  changeHandler( { target } ) {
    this.setState( { text : target.value } );
  }

  render = () => (
    <form className="MessageForm" onSubmit={ e => this.handleSubmit(e) }>
      <input
        className="MessageInput"
        onChange={ e => this.changeHandler(e) }
        value={ this.state.text }
        placeholder='Message'
      />
    </form>
  );  
}

export default MessageForm;