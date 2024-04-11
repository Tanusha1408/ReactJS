import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      
      this.clickHandler = this.clickHandler.bind(this)
    }
 
    //clickHandler() {
    //    this.setState({
    //       message: 'GoodBye!'
    //    })
    //    console.log(this)
    //}

    clickHandler = () => {
      this.setState({
        message: 'GoodBye!'
      })
    } 

    render() {
      return (
        <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          {/* <button onClick={() => this.clickHandler()}>Click</button> */}
          <button onClick={this.clickHandler}>Click</button>
        </div>
      )
    }
}

export default EventBind;

//Event Binding
//1st approach==eventbind
//2nd approach==arrow fn. method
//3rd approach==bind the event handler in the constructor
//4th approach==use arrow fn. as a class property