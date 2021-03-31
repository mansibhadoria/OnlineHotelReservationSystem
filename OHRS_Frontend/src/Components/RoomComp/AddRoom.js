import React, { Component } from 'react'
import NavBarA from '../../NavBar/NavBarA'
import RoomService from '../../services/RoomService'
export class AddRoom extends Component {

     constructor(props) {
          super(props)
          this.state = {
               roomType: 'SINGLE',
               roomPrice: '',
               numBeds: '',
               //roomStatus:'',
               description: '',
               message: '',
          }
          this.handleChange = this.handleChange.bind(this);
          this.saveRoom = this.saveRoom.bind(this);
          this.cancel=this.cancel.bind(this);
     }
     cancel() {
          this.props.history.push("/viewRooms");
     
     }
     handleChange = (e) => {
          const { name, value } = e.target;
          this.setState({ [name]: value });
     }
     saveRoom = (e) => {
          e.preventDefault();
          let room = {
               roomType: this.state.roomType,
               roomPrice: this.state.roomPrice,
               //roomStatus:this.state.roomStatus,
               numBeds: this.state.numBeds,
               description: this.state.description,
          }
          //console.log('guest=>'+JSON.stringify(guest));

          RoomService.AddRoom(room).then(res => {
               alert('Room added successfully.');
               this.props.history.push('/viewRooms');
          })
     }
     render() {
          return (
               <div>
                    <NavBarA />
                    <br/>
                    <div>
                         <div className="container">
                              <div className="row">
                                   <div className="card col-md-6 offset-md-3 offset-md-3">
                                        <h3 className="text-center">Add Room</h3>
                                        <div className="card-body">
                                             <form>
                                                  <div className="form-group">
                                                       <label for="roomType">Room Type:</label>
                                                       <select className="form-control" name="roomType" placeholder="room Type"
                                                            value={this.state.roomType} onChange={this.handleChange}>
                                                            <option value="SINGLE">SINGLE</option>
                                                            <option value="DOUBLE">DOUBLE</option>
                                                            <option value="EXECUTIVE">EXECUTIVE</option>
                                                       </select>
                                                       <label>Room Price:</label>
                                                       <input placeholder="Room Price" name="roomPrice" className="form-control"
                                                            value={this.state.roomPrice} onChange={this.handleChange} />
                                                       {/* <label>Room Status:</label>
                                                <input placeholder="Room Status" name="roomStatus" className="form-control" 
                                                 value={this.state.roomStatus} onChange={this.handleChange}/> */}
                                                       <label>Room Description</label>
                                                       <input placeholder="Room Description" name="description" className="form-control"
                                                            value={this.state.description} onChange={this.handleChange} />
                                                       <label>Number of Beds</label>
                                                       <input type="number" placeholder="Number of Beds" name="numBeds" className="form-control"
                                                            value={this.state.numBeds} onChange={this.handleChange} />
                                                  </div>
                                                  <button className="btn btn-success" onClick={this.saveRoom} >Save Room</button>
                                                  <button className="btn btn-danger" onClick={this.cancel}style={{ marginLeft: "10px" }}>Cancel</button>
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

export default AddRoom
