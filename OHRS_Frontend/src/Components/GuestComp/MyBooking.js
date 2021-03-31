import React, { Component } from 'react'
import GuestService from "../../services/GuestService"
import BookService from "../../services/BookService"
import NavBarG from '../../NavBar/NavBarG'

export class MyBooking extends Component {

     constructor(props) {
          super(props)
          this.state = {
               guestId: window.sessionStorage.getItem("guestId"),
               bookings: [],
               message: '',
          }
          this.deleteBooking = this.deleteBooking.bind(this);
     }
     componentDidMount() {
          GuestService.getBookingById(this.state.guestId).then((res) => {
               let books = res.data;
               this.setState({ bookings: books })
               //console.log("books="+JSON.stringify(this.state.bookings))
          })
     }

     deleteBooking(bookingId) {
          BookService.deleteBooking(bookingId).then(res => {
               this.setState({ message: 'booking Cancelled successfully.' });
               this.setState({ bookings: this.state.bookings.filter(booking => booking.bookingId !== bookingId) });
          })
     }

     render() {
          return (
               <div>
                    <NavBarG />
                    <br />
                    {this.state.message && (
                         <div className="form-group">
                              <div className="alert alert-danger" role="alert">
                                   {this.state.message}
                              </div>
                         </div>
                    )}
                    <div className="mt-2 mb-2 pb-5">
                         <h4 className="text-center">MY BOOKINGS</h4>
                         <hr />
                         <div>
                              <div className="container-fluid mb-5">
                                   <div className="row">
                                        <div className="col-10 mx-auto">
                                             <div className="row gy-4">
                                                  {
                                                       this.state.bookings.map(
                                                            booking => (
                                                                 <div className="col-md-4 col-10 mx-auto">
                                                                      <div className="card" >
                                                                           <div className="card-body">
                                                                                <h5 className="card-title" >Bookings</h5>
                                                                                <h6>Booking ID: {booking.bookingId}</h6>
                                                                                <h6>Booking Type: {booking.bookingType}</h6>
                                                                                <h6>Booking Date: {booking.bookingDate}</h6>
                                                                                <h6>Booking Total:  Rs {booking.bookingTotal}</h6>
                                                                                
                                                                                {booking.bookingType === 'room' ? <div><h6>Check In : {booking.checkin}</h6><h6>Check out : {booking.checkout}</h6></div> : <div><br /><br /></div>}
                                                                               
                                                                                {booking.paymentStatus === true ? <h6>Payment Status: Paid</h6> : <h6>Payment Status: Not Paid</h6>}
                                                                                
                                                                                <button className="btn btn-danger" onClick={() => this.deleteBooking(booking.bookingId)} >Cancel Booking</button>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          )
     }
}

export default MyBooking
