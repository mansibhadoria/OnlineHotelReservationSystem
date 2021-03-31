import React, { Component } from 'react'
import NavBarA from '../../NavBar/NavBarA';
import GuestService from '../../services/GuestService';


 class ViewGuests extends Component {

     constructor(props) {
          super(props)
          this.state = {
                guests:[],
                message: null
          }
          this.addGuest=this.addGuest.bind(this);
          this.updateGuest=this.updateGuest.bind(this);
          this.viewGuest=this.viewGuest.bind(this);
          this.deleteGuest=this.deleteGuest.bind(this);
          this. back=this. back.bind(this);
     }
     back() {
          this.props.history.push("/homeAdmin");
     }
     
componentDidMount(){
     GuestService.getGuest().then((res)=>{
          this.setState({guests:res.data.result});
     });
}

//react router maintains a histroy object & this history object has all  the mappings of the routings & react router passes history object to all the router as a props
//this history object manually controls the history of the browser
addGuest(){
     this.props.history.push("/addGuest");
}

updateGuest(guestId){
     this.props.history.push(`/updateGuest/${guestId}`);
}

viewGuest(guestId){
     this.props.history.push(`/viewGuest/${guestId}`);
}

deleteGuest(guestId){
    GuestService.deleteGuestById(guestId).then(res=>{
     this.setState({message : 'guest deleted successfully.'});
         this.setState({guests:this.state.guests.filter(guest=> guest.guestId !== guestId)});
    })
}

render() {
          return (
               <div>
               <NavBarA/>
               {this.state.message && (
         <div className="form-group">
           <div className="alert alert-danger" role="alert">
             {this.state.message}
           </div>
         </div>
       )}
       
               <div className="mt-2 mb-2 pb-5">
                    <h4 className="text-center">Guests List</h4>
                    <hr/>
                    <div className="row mt-4 mb-2 ml-1 ">
                       <button className="btn btn-primary" onClick={this.addGuest}>Add Guest</button>
                  </div>   
                   <table className="table text-center table-hover table-bordered table-info">
                    <thead><tr>
                         <th>Guest id</th>
                         <th>Guest firstname</th>
                         <th>Guest lastname</th>
                         <th>Guest email</th>
                         <th>Guest Phone</th>
                         <th>Action</th>
                         </tr>
                         </thead>
                       <tbody>
                            {
                                 this.state.guests.map(
                                      guest=>
                                      <tr key={guest.id}>
                                            <td>{guest.id} </td>
                                           <td>{guest.firstName} </td>
                                           <td>{guest.lastName} </td>
                                           <td>{guest.emailAddress} </td>
                                         
                                          <td>{guest.phoneNumber} </td> 
                                          <td> <button className="btn btn-info" onClick={()=>this.viewGuest(guest.id)}>view</button>
                                           <button className="btn btn-primary" onClick={()=>this.updateGuest(guest.id)} style={{marginLeft:"1pc"}}>Update</button>
                                          <button className="btn btn-danger" onClick={()=>this.deleteGuest(guest.id)} style={{marginLeft:"1pc"}}>delete</button>
                                          </td>
                                      </tr>
                                 )
                            }
                       </tbody>
                       </table>
                       </div>
                       <div className="mt-1 mb-5 pb-3">
                         <button onClick={this.back} className="btn btn-danger">Back</button>
                    </div>
               </div>
          )
     }
}

export default ViewGuests; 