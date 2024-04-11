import React, { Component } from 'react';

//class Welcome extends Component {
//  render() {
//    return <h1>Welcome {this.props.name} likes {this.props.color}</h1>
//  }
//}

//**destructuring in the class body

class Welcome extends Component {
  render() {
    const {name, color} = this.props 
    //const {state1, state2} = this.state
    return (
      <h1>
        Welcome {name} likes {color}
      </h1>
    )
  }
}


export default Welcome;
