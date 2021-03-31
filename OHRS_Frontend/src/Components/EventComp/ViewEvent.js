import React, { Component } from 'react'
import NavBarA from '../../NavBar/NavBarA'
import EventService from '../../services/EventService'
export class ViewEvent extends Component {

     constructor(props) {
          super(props)
          this.state = {
               events:[],
               message:'' 
          }
          this.addEvent=this.addEvent.bind(this);
          this.updateEvent=this.updateEvent.bind(this);
          this.deleteEvent=this.deleteEvent.bind(this);
          this.back=this. back.bind(this);
     }
     back() {
          this.props.history.push("/homeAdmin");
     }
     addEvent(){
          this.props.history.push("/addEvent");
     }
     updateEvent(id){
               this.props.history.push(`/updateEvent/${id}`);      
     }
     deleteEvent(id){
          EventService.deleteEvent(id).then(res=>{
            this.setState({message : 'Event Deleted successfully.'});
                this.setState({events:this.state.events.filter(event=>event.id !== id)});
           })
       }
     componentDidMount(){
          EventService.getAllEvents().then((res)=>{
              // this.setState({rooms:res.data})
              let events=res.data.result;
              this.setState({events:events})
              //console.log("rooms=>"+JSON.stringify(this.state.rooms))
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
                         <h4 className="text-center">Events List</h4>
                         <hr/>
                         <div className="row mt-4 mb-2 ml-1 ">
                            <button className="btn btn-primary"onClick={this.addEvent} >Add Event</button>
                       </div>   
                       
                         <table className="table table-hover table-bordered table-info" >
                              <thead className="text-center"><tr>
                                   <th>Event id</th>
                                   <th>Even Type</th>
                                   <th>Price Per Head</th>
                                   <th>Max No. of People</th>
                                   <th>Action</th>
                              </tr>
                              </thead>
                              <tbody className="text-center" >
                                   {
                                        this.state.events.map(
                                             event => (
                                                  <tr key={event.id}>
                                                       <td>{event.id}</td>
                                                       <td>{event.eventType}</td>
                                                       <td>Rs. {event.pricePerPerson}</td>
                                                       <td> {event.maxPeople}</td>
                                                       
                                                       <td>
                                                            <button className="btn btn-danger" onClick={()=>this.deleteEvent(event.id)}>Delete</button>
                                                            <button className="btn btn-info" onClick={()=>this.updateEvent(event.id)}style={{marginLeft:"1pc"}} >Update </button>
                                                            </td>
                                                  </tr>))
                                   }
                              </tbody>
                         </table>
                         <div className="mt-1 mb-5 pb-3">
                         <button onClick={this.back} className="btn btn-danger">Back</button>
                    </div>
                    </div>
               </div>
          )
     }
}

export default ViewEvent
