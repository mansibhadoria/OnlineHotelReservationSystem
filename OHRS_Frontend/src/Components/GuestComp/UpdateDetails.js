import React, { Component } from 'react'
import NavBarG from '../../NavBar/NavBarG';
import GuestService from '../../services/GuestService';

 class UpdateDetails extends Component {

     constructor(props) {
          super(props)
          this.state = {
               //to get id from route
               guestId: this.props.match.params.guestId,
               username: '',
               firstName: '',
               lastName: '',
               emailAddress: '',
               password: '',
               phoneNumber: ''
          }
         
          this.handleChange = this.handleChange.bind(this);
          this.updateGuest = this.updateGuest.bind(this);
     }

     componentDidMount() {
          GuestService.getGuestById(this.state.guestId).then((res) => {
               let guest = res.data;
               this.setState({
                    firstName: guest.firstName,
                    lastName: guest.lastName,
                    emailAddress: guest.emailAddress,
                    password: guest.password,
                    phoneNumber: guest.phoneNumber
               });
          });
     }
     handleChange = (e) => {
          const { name, value } = e.target;
          this.setState({ [name]: value });
     }
     updateGuest = (e) => {
          e.preventDefault();//a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 
          let guest = {
               id:this.state.guestId,
               firstName: this.state.firstName,
               lastName: this.state.lastName,
               emailAddress:this.state.emailAddress,
               password: this.state.password,
               phoneNumber: this.state.phoneNumber
          };
          console.log('guest=>' + JSON.stringify(guest));
          GuestService.updateGuest(this.state.guestId, guest).then(res => {
               alert('Guest updated successfully.');
               this.props.history.push('/myProfile');
          })
     }
     cancel() {
          this.props.history.push("/myProfile");
     }
     render() {
          return (
               <div>
                    <NavBarG/>
                    <br/>
                    <div className="container">
                         <div className="row">
                              <div className="card col-md-6 offset-md-3 offset-md-3">
                                   <h3 className="text-center">Update Details</h3>
                                   <div className="card-body">
                                        <form>
                                             <div className="form-group">
                                                  <label>First Name:</label>
                                                  <input placeholder="first Name" name="firstName" className="form-control"
                                                       value={this.state.firstName} onChange={this.handleChange} />
                                                  <label>Last Name:</label>
                                                  <input placeholder="last Name" name="lastName" className="form-control"
                                                       value={this.state.lastName} onChange={this.handleChange} />
                                                  <label>Email Adress:</label>
                                                  <input placeholder="Email Adress" name="emailAddress" className="form-control"
                                                       value={this.state.emailAddress} onChange={this.handleChange} />
                                                  <label>Password:</label>
                                                  <input placeholder="Password" name="password" className="form-control"
                                                       value={this.state.password} onChange={this.handleChange} />
                                                  <label>phoneNumber:</label>
                                                  <input placeholder="phoneNumber" name="phoneNumber" className="form-control"
                                                       value={this.state.phoneNumber} onChange={this.handleChange} />
                                             </div>
                                             <button className="btn btn-success" onClick={this.updateGuest}>update Guest</button>
                                             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default UpdateDetails
