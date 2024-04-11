import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'welcome visitor'
        
        }
    }

changeMessage() {
    this.setState({
      message: 'Thank you for subscribing'  
    })
}

  render() {
    return ( 
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick = {() => this.changeMessage()}> Subscribe</button>
      </div>
    )
  }
}

export default Message;

//creating an empty state object inside a class constructor, beacuse of state now we have an chnace to change message
//adding event handler to the button to change message (change state within the component)