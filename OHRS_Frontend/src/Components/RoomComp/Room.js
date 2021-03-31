import React, { Component } from 'react'
import single from '../../images/single1.jpg';
import double from '../../images/double1.jpg';
import executive from '../../images/executive1.jpg';
import NavBarG from '../../NavBar/NavBarG';


export default class Room extends Component {

     constructor(props) {
          super(props)
          this.state = {
               roomType: "",
          }
          this.viewDetails = this.viewDetails.bind(this);
     }
     viewDetails(roomType) {
          this.props.history.push(`/room-details/${roomType}`);
     }
     render() {
          return (
               <div>
                    <div><NavBarG /></div>
                   <br/>
                    <div className="mt-2">
                         <h1 className="text-center " style={{ textDecoration: 'underline' }}>Our Rooms</h1>
                    </div>
                    <hr />
                    <div className="row">
                         <div className="col">
                              <div >
                                   <h6 >At Swan Inn, we have 21 well equipped, Luxurious, air – conditiond and non air – conditioned rooms to ensure a comfortable stay.</h6>
                                   <h6> Additionally, all our rooms have several facilities like...</h6>
                                   <ul>
                                        <li >24 –hour room service & House Keeping facility</li>
                                        <li>a convenient mini fridge,</li>
                                        <li>a multiple channel T.V.,</li>
                                        <li>bathroom amenities</li>
                                        <li>and safe deposit lockers.</li>
                                   </ul>
                              </div>
                         </div>

                         <div >
                              <div  >
                                   <h5 style={{ textDecoration: 'underline' }}>FACILITIES AT SWAN INN</h5>
                                   <ul>
                                        <li text="red">Complimentary Buffet Breakfast</li>
                                        <li style={{ text: 'red' }}>Complimentary Transport</li>
                                        <li>Complimentary Wi-Fi Internet Servie</li>
                                        <li>Adequate Car Parking</li>
                                        <li>Travel Counter and Sight Seeing assistance</li>
                                        <li>Round the clock Room service</li>
                                   </ul>
                              </div>
                         </div>

                    </div>
                    <hr />
                    <div className="container-fluid mb-5">
                         <div className="row">
                              <div className="col-20 mx-auto">
                                   <div className="row">
                                        <div className="col-md-4 col-10 mx-auto">
                                             <div className="card" >
                                                  <img src={(this.setState.image = single)} className="card-img-top" alt="single" style={{ height: "250px", width: "50" }} />
                                                  <div className="card-body">
                                                       <h5 className="card-title" >Single Room</h5>
                                                       <button className="btn btn-info" onClick={() => this.viewDetails(this.setState.roomType = "SINGLE")}>View</button>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                             <div className="card" >
                                                  <img src={(this.setState.image = double)} className="card-img-top" alt="..." style={{ height: "250px", width: "50" }} />
                                                  <div className="card-body">
                                                       <h5 className="card-title">Double Room</h5>
                                                       <button className="btn btn-info" onClick={() => this.viewDetails(this.setState.roomType = "DOUBLE")}>View</button>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                             <div className="card" >
                                                  <img src={(this.setState.image = executive)} className="card-img-top" alt="..." style={{ height: "250px", width: "50" }} />
                                                  <div className="card-body">
                                                       <h5 className="card-title" >Executive Room</h5>
                                                       <button className="btn btn-info" onClick={() => this.viewDetails(this.setState.roomType = "EXECUTIVE")}>View</button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <hr />
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

