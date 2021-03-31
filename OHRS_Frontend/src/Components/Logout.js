import React, { Component } from 'react'
import { Redirect } from 'react-router';

export class Logout extends Component {

     constructor(props) {
          super(props)
          this.state = {
               guestId:window.sessionStorage.getItem("guestId"),  
          }
     }

     render() {
          window.sessionStorage.clear();
          return (
               <div>
                    <Redirect to="/"/>
               </div>
          )
     }
}

export default Logout
