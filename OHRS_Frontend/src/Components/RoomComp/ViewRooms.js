import React, { Component } from 'react'
import NavBarA from '../../NavBar/NavBarA'
import RoomService from '../../services/RoomService'
export class ViewRooms extends Component {

     constructor(props) {
          super(props)
          this.state = {
                rooms:[],
                message:''
          }
          this.addRoom=this.addRoom.bind(this);
          this.updateStatus=this.updateStatus.bind(this);
          this.deleteRoom=this.deleteRoom.bind(this);
          this. back=this. back.bind(this);
     }
componentDidMount(){
     RoomService.getAllRooms().then((res)=>{
         // this.setState({rooms:res.data})
         let rooms=res.data.result;
         this.setState({rooms:rooms})
         //console.log("rooms=>"+JSON.stringify(this.state.rooms))
     })
}

addRoom(){
     this.props.history.push("/addRoom");
}
updateStatus(roomId){
     RoomService.UpdateRoomStatus(roomId).then(res=>{
          this.setState({message : 'Room Status updated successfully.'});
          this.setState({rooms:this.state.rooms.filter(room=>room.roomId !== roomId)});
         })
}
deleteRoom(roomId){
     RoomService.deleteRoom(roomId).then(res=>{
       this.setState({message : 'Room Deleted successfully.'});
     })
  }

  back() {
     this.props.history.push("/homeAdmin");
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
                         <h4 className="text-center">Rooms List</h4>
                         <hr/>
                         <div className="row mt-4 mb-2 ml-1 ">
                            <button className="btn btn-primary" onClick={this.addRoom}>Add Room</button>
                       </div>   
                       
                         <table className="table table-hover table-bordered table-info" >
                              <thead className="text-center"><tr>
                                   <th>Room id</th>
                                   <th>Room Type</th>
                                   <th>Room Price</th>
                                   <th>NO Of Beds</th>
                                   <th>Room Status</th>
                                   <th>Room description</th>
                                   <th>Action</th>
                              </tr>
                              </thead>
                              <tbody className="text-center" >
                                   {
                                        this.state.rooms.map(
                                             room => (
                                                  <tr key={room.roomId}>
                                                       <td>{room.roomId}</td>
                                                       <td>{room.roomType}</td>
                                                       <td>Rs. {room.roomPrice}</td>
                                                       <td> {room.numBeds}</td>
                                                       {room.roomStatus === false ? <td>Not Available</td> : <td> Available</td>}
                                                       <td>{room.description}</td>
                                                       <td>
                                                            <button className="btn btn-danger" onClick={()=>this.deleteRoom(room.roomId)}>Delete</button>
                                                            <button className="btn btn-info" onClick={()=>this.updateStatus(room.roomId)}style={{marginLeft:"1pc"}}>Update RoomStatus</button>
                                                            </td>
                                                  </tr>))
                                   }
                              </tbody>
                         </table>
                         <div className="mt-1 mb-5 pb-3">
                         <button onClick={this. back} className="btn btn-danger">Back</button>
                    </div>
                    </div>
               </div>
          )
     }
}

export default ViewRooms
