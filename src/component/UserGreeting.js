import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    } 

  render() {
    return this.state.isLoggedIn && <div>Welcome Tanusha</div>

//    return this.state.isLoggedIn ? (
//       <div>Welcome Tanusha</div> 
//    ) : (
//       <div>Welcome Guest</div>
//    )
    

//    let message
//    if (this.state.isLoggedIn) {
//        message = <div>Welsome Tanusha</div>
//    } else {
//        message = <div>Welcome Guest</div>
//    }


//return <div>{message}</div>

//       if (this.state.isLoggedIn) {
//        return <div>Welcome Tanusha</div>
//      } else {
//        return <div>Welcome Guest</div>
//    }

//    return (
//      <div>
//      <div>Welcome Tanusha</div>
//      <div>Welcome Guest</div>
//      </div>
//    )
  }
}

export default UserGreeting;

//1st approach if-else condition
//2nd approach using element variables
//3rd approach uses the tenary conditional operator
//4th approach short circuit operator approach

