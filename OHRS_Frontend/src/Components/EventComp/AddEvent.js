import React, { Component } from 'react'
import NavBarA from '../../NavBar/NavBarA'
import EventService from '../../services/EventService'
export class AddEvent extends Component {

     constructor(props) {
          super(props)
          this.state = {
               eventType: 'MARRIAGE',	
           maxPeople:'',
	      pricePerPerson:'',
               message: '',
          }
          this.handleChange = this.handleChange.bind(this);
          this.saveEvent = this.saveEvent.bind(this);
          this.cancel=this.cancel.bind(this);
     }
     cancel() {
          this.props.history.push("/viewEvents");
     }
     handleChange = (e) => {
          const { name, value } = e.target;
          this.setState({ [name]: value });
     }
     saveEvent = (e) => {
          e.preventDefault();
          let event = {
               eventType: this.state.eventType,
               maxPeople: this.state.maxPeople,
               pricePerPerson: this.state.pricePerPerson,
              
          }
          EventService.AddEvent(event).then(res => { 
               alert('Event added successfully.');
               this.props.history.push('/viewEvents');
          })
     }
     render() {
          return (
               <div>
                    <NavBarA />
                    <br/>
                    <div>
                         <div className="container " style={{marginBottom:"11pc"}}>
                              <div className="row">
                                   <div className="card col-md-6 offset-md-3 offset-md-3">
                                        <h3 className="text-center">Add Event</h3>
                                        <div className="card-body">
                                             <form>
                                                  <div className="form-group">
                                                       <label for="eventType">Event Type:</label>
                                                       <select className="form-control" name="eventType" placeholder="event Type"
                                                            value={this.state.eventType} onChange={this.handleChange}>
                                                            <option value="BIRTHDAY">BIRTHDAY</option>
                                                            <option value="MARRIAGE">MARRIAGE</option>
                                                            <option value="RECEPTION">RECEPTION</option>
                                                       </select>
                                                       <label> Price per head:</label>
                                                       <input placeholder="Price per head" name="pricePerPerson" className="form-control"
                                                            value={this.state.pricePerPerson} onChange={this.handleChange} />
                                                       
                                                       <label>Max Number of Guests </label>
                                                       <input placeholder="Max Number of Guests" name="maxPeople" className="form-control"
                                                            value={this.state.maxPeople} onChange={this.handleChange} />
                                                       
                                                  </div>
                                                  <button className="btn btn-success" onClick={this.saveEvent}  >Save Event</button>
                                                  <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default AddEvent
