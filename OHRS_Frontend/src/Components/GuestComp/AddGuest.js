import React, { Component } from 'react'
import NavBarA from '../../NavBar/NavBarA';
import GuestService from '../../services/GuestService';

export class AddGuest extends Component {

     constructor(props) {
          super(props)
          this.state = {
                username: '',
                firstName:'',
                lastName:'',
                emailAddress:'',
                password:'',
                phoneNumber:''
          }
          this.handleChange=this.handleChange.bind(this);
          
     this.saveGuest=this.saveGuest.bind(this);
     }
     handleChange = (e) => {
          const { name, value } = e.target;
          this.setState({ [name]: value });
     }

saveGuest=(e)=>{
    e.preventDefault(); 
    let guest={
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    emailAddress:this.state.emailAddress,
    password:this.state.password,
    phoneNumber:this.state.phoneNumber
};
    console.log('guest=>'+JSON.stringify(guest));

    GuestService.addGuest(guest).then(res=>{
     alert('Guest added successfully.');
         this.props.history.push('/viewGuests');
    })
}
cancel(){
     this.props.history.push("/viewGuests");
}
     render() {
          return (
               <div>
                    <NavBarA/>
                    <div className="container">
                         <div className="row">
                              <div className="card col-md-6 offset-md-3 offset-md-3">
                                 <h3 className="text-center">Add Guest</h3>  
                                 <div className="card-body">
                                      <form>
                                           <div className="form-group">
                                           
                                           <label>First Name:</label>
                                                <input type="text" placeholder="first Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.handleChange}/>
                                           <label>Last Name:</label>
                                                <input type="text" placeholder="last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.handleChange}/>
                                           <label>Email Adress:</label>
                                                <input type="email" placeholder="Email Adress" name="emailAddress" className="form-control" 
                                                value={this.state.emailAddress} onChange={this.handleChange}/>
                                           <label>Password:</label>
                                                <input type="text" placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.handleChange}/>
                                        <label>phoneNumber:</label>
                                                <input  type="text" placeholder="phoneNumber" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.handleChange}/>
                                           </div>
                                           <button className="btn btn-success" onClick={this.saveGuest}>Save Guest</button>
                                           <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                      </form>
                                 </div>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default AddGuest