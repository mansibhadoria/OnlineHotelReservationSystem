import React, { Component } from 'react'
import NavBarA from '../../NavBar/NavBarA'
import BookService from '../../services/BookService';

export class BookingDetails extends Component {

     constructor(props) {
          super(props)
          this.state = {
               bookId: this.props.match.params.bookingId,
               book: [],
               guest: [],
               room:[],
               event:[],
               payment:[]
          }
          this.back = this.back.bind(this);
     }
     back() {
          this.props.history.push("/viewBookings");
     }

     componentDidMount() {
          BookService.getBookingById(this.state.bookId).then((res) => {
               //   let book = res.data;
               this.setState({ book: res.data.result });
               this.setState({ guest: res.data.result.guest });
               this.setState({ room: res.data.result.room });
               this.setState({ event: res.data.result.event });
               this.setState({ payment: res.data.result.payment });
              // console.log("book =>" + JSON.stringify(this.state.book));
          })
     }
     render() {
          return (
               <div>
                    <NavBarA />
                    <br />
                    <div className=" container  ml-0  card" style={{ width: "50%" }}>
                         <h5 style={{ textDecoration: 'underline', color: 'green' }}>Booking Details</h5>
                         <div >
                              <ul style={{ marginLeft: "1pc" }}>
                                   <li> Booking Date : {this.state.book.bookingDate}</li>
                                   <li> Number Of Guests : {this.state.book.numberOfGuests}</li>
                                   <li>Total Payment Price : Rs {this.state.book.bookingTotal}</li>
                                   {this.state.book.paymentStatus === false ? <li>Payment Status : Not Paid</li> : <li> Payment Status : Paid</li>}
                                   {this.state.book.bookingType === 'room' ? <div><li>Check In : {this.state.book.checkin}</li>
                                        <li>Check out : {this.state.book.checkout}</li></div> : <div></div>}
                              </ul>
                         </div>
                         {this.state.book.bookingType === 'room' ? <div><h5 style={{ textDecoration: 'underline', color: 'green' }}>Room Details</h5>
                         <div >
                              <ul style={{ marginLeft: "1pc" }}>
                                   <li> Room Id : {this.state.room.roomId}</li>
                                   <li> Type of Room : {this.state.room.roomType}</li>
                              </ul>
                         </div>
                         </div> :<div>
                              <h5 style={{ textDecoration: 'underline', color: 'green' }}>
                                   Event Details</h5>
                         
                              <ul style={{ marginLeft: "1pc" }}>
                                   <li> Event Id : {this.state.event.id}</li>
                                   <li> Event Booked: {this.state.event.eventType}</li>
                              </ul>
                         </div>}

                         <h5 style={{ textDecoration: 'underline', color: 'green' }}>Guest Details</h5>
                         <div  >
                              <ul style={{ marginLeft: "1pc" }}>
                                   <li> GuestId : {this.state.guest.id}</li>
                                   <li> Guest Name : {this.state.guest.firstName} {this.state.guest.lastName}</li>
                                   <li>Guest Email Address : {this.state.guest.emailAddress}</li>
                                   <li>Guest PhoneNumber : {this.state.guest.phoneNumber}</li>

                              </ul>
                         </div>
                         
                    </div>
                    <div className="mt-3 ">
                         <button onClick={this.back} className="btn btn-danger">Back</button>
                    </div>
               </div>
          )
     }
}

export default BookingDetails
