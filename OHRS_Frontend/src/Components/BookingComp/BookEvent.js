import React, { Component } from 'react'
import NavBarG from '../../NavBar/NavBarG'
import BookService from '../../services/BookService';
import EventService from '../../services/EventService';
export class BookEvent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bookingDate: '',
      numberOfGuests: '',
      errors: {},
      message: '',
      eventType: this.props.match.params.eventType,
      eventId:this.props.match.params.eventId,
      event:[],
      guestId:window.sessionStorage.getItem("guestId"),
    }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitBookForm = this.submitBookForm.bind(this);
  }
  handleChange=(e)=> {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
   componentDidMount(){
          EventService.getEventByType(this.state.eventType).then((res)=>{
               let event=res.data.result;
          //  this.setState({eventId:res.data.result.id})
           this.setState({event:event})
              console.log("eventId:"+JSON.stringify(this.state.event))
          })
         
     }
  submitBookForm=(e)=>{
    e.preventDefault();
    if (this.validateForm()) {
  let book={
    bookingDate:this.state.bookingDate,
    numberOfGuests:this.state.numberOfGuests,
  };
 // console.log("book=>"+JSON.stringify(book))
  BookService.bookEvent(this.state.guestId,this.state.eventId,book).then(res=>{
 let bookId=res.data.result.bookingId;
 //console.log("bookID="+JSON.stringify(bookId))
   this.props.history.push(`/payment/${bookId}`);
  },error => {
    const resMessage =( error.response.data)
      this.setState({message: resMessage});
  })
}
}
validateForm() {
  const { bookingDate, numberOfGuests, } = this.state;
  let errors = {};
  let formIsValid = true;
  if (!bookingDate) {
    formIsValid = false;
    errors["bookingDate"] = "*Please enter your bookingDate.";
  }
  if (!numberOfGuests) {
    formIsValid = false;
    errors["numberOfGuests"] = "*Please enter numberOfGuests.";
  }
  this.setState({ errors: errors });
  return formIsValid;
}
back() {
  this.props.history.push("/homeGuest");
}
  render() {
    
    return (
      <div>
        <NavBarG />
        <br/>
            <div className="card col-md-7 offset-md-2 " >
              <h3 className="text-center" style={{ textDecoration: 'underline' }}>Booking Form</h3>
              <div className="card-body">
                <form method="post" > 
                {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
                  <div className="form-group">
                 
                    <label>Name:</label>
                    <input type="text" className="form-control" name="name" placeholder="name"/>
                     
                    <label>Email Adress:</label>
                    <input type="email" className="form-control" name="email" placeholder="Email"/>

                    <label>phoneNumber:</label>
                    <input type="text" className="form-control" name="phone" placeholder="phone Number" />

                    <label>Booking Date:</label>
                    <input type="date" className="form-control" name="bookingDate"
                      value={this.state.bookingDate}
                      onChange={this.handleChange} />
 <div className="errorMsg">{this.state.errors.bookingDate}</div>
                    <label>Number Of Guests:</label>
                    <input type="number" className="form-control" name="numberOfGuests"
                      value={this.state.numberOfGuests}
                      onChange={this.handleChange} />
                       <div className="errorMsg">{this.state.errors.numberOfGuests}</div>
                  </div>
                  <button className="btn btn-success" onClick={this.submitBookForm}  style={{width:"100%"}}>Proceed To Payment</button>
                
                  <button className="btn btn-danger" onClick={this. back.bind(this)} style={{width:"100%",marginTop:"8pt"}}>Cancel</button>
                </form>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}

export default BookEvent
