import React, { Component } from 'react';
import RoomService from '../../services/RoomService'
import single1 from '../../images/single1.jpg';
import single2 from '../../images/single2.jpg';
import double1 from '../../images/double1.jpg';
import double2 from '../../images/double2.jpg';
import executive1 from "../../images/executive1.jpg";
import executive2 from "../../images/executive2.jpg";
import '../../css/image.css'
import NavBarG from '../../NavBar/NavBarG'

export class RoomDetails extends Component {
     constructor(props) {
          super(props)
          this.state = {
               roomType: this.props.match.params.roomType,
               rooms: [],
          }
          this.bookRoom = this.bookRoom.bind(this);
          this. back = this. back.bind(this);
     }
     componentDidMount() {
          console.log(this.state.roomType);
          RoomService.getRoomByType(this.state.roomType).then((res) => {
             //  let book = res.data;
               this.setState({ rooms: res.data.result });
               //console.log("book =>" + JSON.stringify(book));
          })
     }
     bookRoom(roomId) {
          this.props.history.push(`/book-room/${roomId}`);
     }
     back() {
          this.props.history.push("/room");
     }
     renderImage() {
          if (this.state.roomType === 'SINGLE') {
               return (
                    <div >
                         <div className="row" >
                              <div  className="column">
                                   <img src={(this.setState.image = single2)} alt="single" style={{ width: '100%', height: '15pc' }} />
                              </div>
                              <div  className="column">
                                   <img src={(this.setState.image = single1)} alt="single" style={{ width: '100%', height: '15pc' }} />
                              </div>
                         </div>
                    </div>
               )
          }
          else if ((this.state.roomType === 'DOUBLE')) {
               return (
                    <div >
                         <div className="row">
                              <div className="column" >
                                   <img src={(this.setState.image = double1)} alt="double" style={{ width: '100%', height: '20pc' }} />
                              </div>
                              <div className="column" >
                                   <img src={(this.setState.image = double2)} alt="double" style={{ width: '100%', height: '20pc' }} />
                              </div>
                         </div>
                    </div>
               )
          }
          else if ((this.state.roomType === 'EXECUTIVE')) {
               return (
                    <div >
                         <div className="row">
                              <div className="column">
                                   <img src={(this.setState.image = executive1)} alt="executive" style={{ width: '100%', height: '20pc' }} />
                              </div>
                              <div className="column">
                                   <img src={(this.setState.image = executive2)} alt="executive" style={{ width: '100%', height: '20pc' }} />
                              </div>
                         </div>
                    </div>
               )
          }
     }
     renderData() {
          if (this.state.roomType === 'SINGLE') {
               return (
                    <div >
                         <div >
                                   <h5> Welcome to the prominence of a single room at the Hotel Swan Inn!</h5>
                                   <h6>Our cosy single rooms are around 6m2 and offer a single bed (90x180), TV,
                                   tea and coffee facilities with free breakfast, phone for inside and outside calls, fridge and microwave, and an en-suite bathroom.
     Hairdryer and toiletries provided. All single rooms are facing a quiet back garden.</h6>
                              <div >
                                   <h5>Features:</h5>
                                   <h6> Size: 6 m2 (64 sq ft)    Beds: 1 Single bed</h6>
                              </div>
                              <br />
                              <div>
                                   <h5> Amenities:</h5>
                                   <ul>
                                        <li><h6>Bathroom with shower</h6></li>
                                        <li><h6>Fridge/freezer & Microwave</h6></li>
                                        <li><h6>Flat Screen Televisions</h6></li>
                                        <li><h6>Direct Dial Telephone</h6></li>
                                        <li><h6>Tea & CoffeeHair Dryer</h6></li>
                                        <li><h6>Free WiFi</h6></li>
                                   </ul></div>
                         </div>
                    </div>
               )
          }
          else if ((this.state.roomType === 'DOUBLE')) {
               return (
                    <div >
                         <div >
                              <div><h5> Welcome to the prominence of a double room at the Hotel Swan Inn!</h5>
                                   <h6> All our double rooms are around 14m2, and feature a double bed or two single beds, (depending on availability), fridge and microwave, tea and coffee facilities, plasma TV, en-suite bathroom, hair dryer and toiletries. We offer free Breakfast in bed for the double rooms, just call Reception when you are ready to order, and we will bring it up to you!
All of our double twin rooms are elegant and tasteful, decorated in traditional Georgian style with the following set of amenities:</h6></div>
                              <div >
                                   <h5>Features:</h5>
                                   <h6> Size: 14 m2 (150 sq ft)   Beds: 2 Double bed </h6>
                              </div>
                              <br />
                              <div ><h5> Amenities:</h5>
                                   <ul>
                                        <li><h6>Two double beds</h6></li>
                                        <li><h6>Fridge/freezer & Microwave</h6></li>
                                        <li><h6>Flat Screen Televisions</h6></li>
                                        <li><h6>Direct Dial Telephone</h6></li>
                                        <li><h6>Tea & CoffeeHair Dryer</h6></li>
                                        <li><h6>Free WiFi</h6></li>
                                   </ul></div>
                         </div>
                    </div>
               )
          }
          else if ((this.state.roomType === 'EXECUTIVE')) {
               return (
                    <div >
                         <div >
                              <div><h5> Welcome to the lavish standard of executive rooms in Hotel Swan Inn!</h5>
                                   <h6>Our Executive room is located on the lower ground floor and features a king size bed, and two single wall beds if required (max occupancy of four guests) It also comes with a shared patio down the hall, a fridge and microwave, tea, free breakfast and coffee facilities, plasma TV, en-suite bathroom, hair dryer and toiletries.</h6></div>
                              <div >
                                   <h5>Features:</h5>
                                   <h6> Size: 20 m2 (215 sq ft)
                                      Beds: 1 King size Bed & 2 Single wall beds</h6>
                              </div>
                              <br />
                              <div ><h5> Amenities:</h5>
                                   <ul>

                                        <li><h6>Fridge/freezer & Microwave</h6></li>
                                        <li><h6>Flat Screen Televisions</h6></li>
                                        <li><h6>Direct Dial Telephone</h6></li>
                                        <li><h6>Tea & CoffeeHair Dryer</h6></li>
                                        <li><h6>Free WiFi</h6></li>
                                   </ul></div>
                         </div>
                    </div>
               )
          }
     }

     render() {
          return (
               <div >
                    <div><NavBarG /></div>
                    <br />
                    <h2 className="text-center"> {this.state.roomType} ROOMS</h2>
                    <hr />
                    <div className="container">
                         {this.renderImage()}
                    </div>
                    <hr />
                    <div className="container">
                         {this.renderData()}
                    </div>
                    <br />
                    <div className="mt-2 mb-2 pb-5">
                         <h4 className="text-center">Rooms List</h4>
                         <hr/>
                         <table className="table table-success table-hover table-striped table-bordered" >
                              <thead className="text-center"><tr>
                                   <th>Room id</th>
                                   <th>Room Price</th>
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
                                                       <td>Rs. {room.roomPrice}</td>
                                                       {room.roomStatus === false ? <td>Not Available</td> : <td> Available</td>}
                                                       <td>{room.description}</td>
                                                       <td>
                                                            <button
                                                                 disabled={room.roomStatus === false}
                                                                 className="btn btn-info" onClick={() => this.bookRoom(room.roomId)}>Book</button>
                                                       </td>
                                                  </tr>))
                                   }
                              </tbody>
                         </table>
                    </div>

                    <div className="mt-0 mb-5 pb-3">
                         <button onClick={this. back} className="btn btn-danger">Back</button>
                    </div>
               </div>


          )
     }
}

export default RoomDetails
