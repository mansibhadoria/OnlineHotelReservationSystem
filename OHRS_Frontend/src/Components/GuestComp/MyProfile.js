import React, { Component } from 'react'

import NavBarG from '../../NavBar/NavBarG';
import GuestService from '../../services/GuestService';

export class MyProfile extends Component {

     constructor(props) {
          super(props)
          this.state = {
               guestId: window.sessionStorage.getItem("guestId"),
               guest: {},
          }
          this. back = this. back.bind(this);
          this.updateGuest = this.updateGuest.bind(this);
     }
     back() {
          this.props.history.push("/homeGuest");
     }
     componentDidMount() {
          GuestService.getGuestById(this.state.guestId).then((res) => {
               let guest = res.data;
               this.setState({ guest: res.data });
               console.log("guest:" + guest);
          })
     }
     updateGuest(guestId) {
          this.props.history.push(`/updateDetails/${guestId}`);
     }
     render() {

          return (
               <div>
                    <NavBarG />
                    <br/>
                    <div className=" container   text-center card card-center" style={{ width: "50%", height: "32pc"  ,backgroundColor:"lightgrey"}}>
                         <h3 style={{ textDecoration: 'underline', color: 'darkblue' }}> Guest Details</h3>
                         <div className="card-body">
                              <img
                                   src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                   alt="profile-img"
                                   className="profile-img-card" />
                              <div >
                                   <p> GuestId : {this.state.guest.id}</p>
                                   <p> Guest Name : {this.state.guest.firstName} {this.state.guest.lastName}</p>
                                   <p>Guest Email Address : {this.state.guest.emailAddress}</p>
                                   <p>Guest PhoneNumber : {this.state.guest.phoneNumber}</p>

                              </div>
                         </div>
                         <div >
                              <button onClick={() => this.updateGuest(this.state.guest.id)} className="btn btn-primary">Update</button>
                              <div className="mt-3 pl-8 ">
                                   <button onClick={this.back} className="btn btn-danger">Back</button>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default MyProfile