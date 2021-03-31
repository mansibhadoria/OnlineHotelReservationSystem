import React, { Component } from 'react'
import NavBarG from '../../NavBar/NavBarG'
import BookService from '../../services/BookService';

export class BookRoom extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bookingDate: "",
      numberOfGuests: '',
      checkIn: '',
      checkOut: '',
      message: '',
      errors: {},
      roomId: this.props.match.params.roomId,
      guestId: window.sessionStorage.getItem("guestId"),
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitBookForm = this.submitBookForm.bind(this);
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  submitBookForm = (e) => {
    e.preventDefault();//a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 

    if (this.validateForm()) {
      let book = {

        bookingDate: this.state.bookingDate,
        numberOfGuests: this.state.numberOfGuests,
        checkin: this.state.checkIn,
        checkout: this.state.checkOut
      };
      // console.log("book=>"+JSON.stringify(book))
      BookService.bookRoom(this.state.guestId, this.state.roomId, book).then(res => {
        let bookId = res.data.result.bookingId;
        //console.log("bookID="+JSON.stringify(bookId))
        this.props.history.push(`/payment/${bookId}`);
      })
    }
  }
  validateForm() {
    const { bookingDate, numberOfGuests, checkIn, checkOut } = this.state;
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
    if (!checkIn) {
      formIsValid = false;
      errors["checkIn"] = "*Please enter checkIn date.";
    }
    if (!checkOut) {
      formIsValid = false;
      errors["checkOut"] = "*Please enter checkout date.";
    }
    if (bookingDate < checkIn) {
      formIsValid = false;
      errors["bookingDate"] = "*Please enter valid bookingDate.";
    }
    if (checkOut < checkIn) {
      formIsValid = false;
      errors["checkOut"] = "*Please enter valid checkOut date.";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  cancel() {
    this.props.history.push("/homeGuest");
  }

  render() {

    return (
      <div>
        <NavBarG />
        <br />
        <div className="card col-md-7 offset-md-2 " >
          <h3 className="text-center" style={{ textDecoration: 'underline' }}>Booking Form</h3>
          <div className="card-body">
            <form method="post" >

              <div className="form-group">

                <label>Name:</label>
                <input type="text" className="form-control" name="name" placeholder="name" />

                <label>Email Adress:</label>
                <input type="email" className="form-control" name="email" placeholder="Email" />

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
                <label>Check IN :</label>
                <input type="date" className="form-control" name="checkIn"
                  value={this.state.checkIn}
                  onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.checkIn}</div>
                <label>Check Out :</label>
                <input type="date" className="form-control" name="checkOut"
                  value={this.state.checkOut}
                  onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.checkOut}</div>
              </div>
              <button className="btn btn-success" onClick={this.submitBookForm} style={{ width: "100%" }}>Proceed To Payment</button>

              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ width: "100%", marginTop: "8pt" }}>Cancel</button>
            </form>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}

export default BookRoom
