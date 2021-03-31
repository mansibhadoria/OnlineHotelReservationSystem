import React, { Component } from 'react'
import NavBarG from '../../NavBar/NavBarG'
import BookService from '../../services/BookService';
export class Final extends Component {

     constructor(props) {
          super(props)
          this.state = {
               bookId: this.props.match.params.bookId,
               book: [],
          }
     }
     componentDidMount() {
          BookService.getBookingById(this.state.bookId).then((res) => {
               //   let book = res.data;
               this.setState({ book: res.data.result });
               //console.log("book =>" + JSON.stringify(this.state.book));
          })
     }
     render() {
          return (
               <div>
                    <NavBarG />
                    <br />
                    <h1 className="text-center" style={{ color: "blue" }}> BOOKING CONFIRMED !!</h1>
                    <br />
                    <h5>We are pleased to inform you that your reservation request has been received and confirmed. </h5>
                    <br />
                    <h5>Your Booking is confirmed .Thank You !!</h5>
                    <br />
                    <h4 className="text-center" style={{ color: "blue" }}> Booking Details</h4>
                    <table className="table table-success  table-bordered" >
                         <thead className="text-center"><tr>
                              <th>Booking id</th>
                              <th>Booking Type</th>
                              <th>Booking Date</th>
                              <th>Total Payment</th>
                         </tr>
                         </thead>
                         <tbody className="text-center" >
                              {
                                   <tr>
                                        <td>{this.state.book.bookingId}</td>
                                        <td>{this.state.book.bookingType}</td>
                                        <td>{this.state.book.bookingDate}</td>
                                        <td>Rs.{this.state.book.bookingTotal}</td>
                                   </tr>

                              }
                         </tbody>
                    </table>
               </div>
          )
     }
}

export default Final
