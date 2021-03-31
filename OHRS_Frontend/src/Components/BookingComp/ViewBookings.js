import React, { Component } from 'react'
import NavBarA from '../../NavBar/NavBarA'
import BookService from '../../services/BookService';
export class ViewBookings extends Component {

     constructor(props) {
          super(props)
          this.state = {
                bookings:[],
                message:''
          }
          this.viewBooking=this.viewBooking.bind(this)
          this.cancelBooking=this.cancelBooking.bind(this);
          this.back=this.back.bind(this);
     }
componentDidMount(){
     BookService.getAllBookings().then((res)=>{
         let bookings=res.data;
         this.setState({bookings:bookings})
     })
}

viewBooking(bookingId){
     this.props.history.push(`/booking/${bookingId}`);
}

cancelBooking(bookingId){
     BookService.deleteBooking(bookingId).then(res=>{
       this.setState({message : 'Booking cancelled successfully.'});
           this.setState({booking:this.state.bookings.filter(booking=>booking.bookingId !== bookingId)});
      })
  }

  back() {
     this.props.history.push("/homeAdmin");
}
     render() {
          return (
               <div>
                    <NavBarA/>
                    <br/>
                    {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            
                    <div className="mt-2 mb-2 pb-5">
                         <h4 className="text-center">Bookings List</h4>
                         <hr/>
                     
                         <table className="table table-hover table-bordered table-info" >
                              <thead className="text-center"><tr>
                                   <th>Booking id</th>
                                   <th>Booking Type</th>
                                   <th>Booking Date</th>
                                   <th>Action</th>
                              </tr>
                              </thead>
                              <tbody className="text-center" >
                                   {
                                        this.state.bookings.map(
                                             booking => (
                                                  <tr key={booking.bookingId}>
                                                       <td>{booking.bookingId}</td>
                                                       <td>{booking.bookingType}</td>
                                                       <td>{booking.bookingDate}</td>
                                                       <td>
                                                            <button className="btn btn-danger" onClick={()=>this.cancelBooking(booking.bookingId)} >Cancel</button>
                                                            <button className="btn btn-info" onClick={()=>this.viewBooking(booking.bookingId)}style={{marginLeft:"1pc"}}>View</button>
                                                            </td>
                                                  </tr>))
                                   }
                              </tbody>
                         </table>
                         <div className="mt-1 mb-1 pb-1">
                         <button onClick={this.back} className="btn btn-danger">Back</button>
                    </div>
                    </div>
               </div>
          )
     }
}

export default ViewBookings
