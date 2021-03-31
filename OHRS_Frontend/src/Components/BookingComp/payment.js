import React, { Component } from 'react'
import NavBarG from '../../NavBar/NavBarG'
import BookService from '../../services/BookService';
import PaymentService from '../../services/PaymentService';

export class payment extends Component {

     constructor(props) {
          super(props)
          var today = new Date(),
    date=today.getDate()+ '-' + (today.getMonth() + 1) + '-'+today.getFullYear()
          this.state = {
               bookId: this.props.match.params.bookId,
               book: [],
               paymentDate: date,
               payType: 'DEBITCARD',
               cardNo: '',
               nameOnCard: '',
               expDate: '',
               cvv: '',
               errors: {},
               message: '',
          }
          this.handleChange = this.handleChange.bind(this);
     }
     handleChange = (e) => {
          const { name, value } = e.target;
          this.setState({ [name]: value });
     }
     componentDidMount() {
          BookService.getBookingById(this.state.bookId).then((res) => {
               //   let book = res.data;
               this.setState({ book: res.data.result });
               //console.log("book =>" + JSON.stringify(this.state.book));
          })
     }
     submitPayForm = (e) => {
          e.preventDefault();
          if (this.validateForm()) {
          let payment = {
               paymentDate:this.state.paymentDate,
               payType: this.state.payType,
               cardNo: this.state.cardNo,
               nameOnCard: this.state.nameOnCard,
               expDate: this.state.expDate,
               cvv: this.state.cvv
          };
          //console.log("payment=>" + JSON.stringify(payment))
          let bookId=this.state.bookId;
          PaymentService.payment(bookId, payment).then(res => {
               this.props.history.push(`/final/${bookId}`);
          }, error => {
               const resMessage =( error.response.data)
                 this.setState({message: resMessage});
             })
     }
     }
     validateForm() {
          const { cardNo,  cvv ,nameOnCard,expDate} = this.state;
          let errors = {};
          let formIsValid = true;
          if(!cardNo)
          {
               formIsValid = false;
               errors["cardNo"] = "*Please enter your cardNo.";  
          }
          // if(cardNo.length!=16)
          // {
          //      formIsValid = false;
          //      errors["cardNo"] = "*Please enter valid cardNo.";  
          // }
          if(!cvv)
          {
               formIsValid = false;
               errors["cvv"] = "*Please enter your cvv.";  
          }
          if(cvv.length!=3)
          {
               formIsValid = false;
               errors["cvv"] = "*Please enter valid cvv.";  
          }
          if(!nameOnCard)
          {
               formIsValid = false;
               errors["nameOnCard"] = "*Please enter your name on card.";  
          }
          if(!expDate)
          {
               formIsValid = false;
               errors["expDate"] = "*Please enter your expDate.";  
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
                    <br/>
                    <div className="container">
                         <h3 className="text-center" style={{ textDecoration: 'underline' }}>Booking Details</h3>
                        
                         {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )} <div className="card-body text-center">
                              <h5>Booking Date: {this.state.book.bookingDate}</h5>
                              <h5>Total Payment Price: {this.state.book.bookingTotal}</h5>

                         </div>
                    </div>

                    <div className="card col-md-6 offset-md-3 " >
                         <h3 className="text-center" style={{ textDecoration: 'underline' }}>Payment</h3>
                         <div className="card-body">
                              <form method="post" >
                                   <div className="form-group ">
                                        <div className="text-center">
                                             <h5 >Accepted Cards</h5>
                                             <div className="icon-container">
                                                  <i className="fa fa-cc-visa fa-3x" style={{ color: "navy", marginRight: "1pc" }}></i>
                                                  <i className="fa fa-cc-amex fa-3x" style={{ color: "blue", marginRight: "1pc" }}></i>
                                                  <i className="fa fa-cc-mastercard fa-3x" style={{ color: "red", marginRight: "1pc" }}></i>
                                                  <i className="fa fa-cc-discover fa-3x" style={{ color: "orange", marginRight: "1pc" }}></i>
                                             </div>
                                        </div>
                                        <br />
                                        <label >Card Type:</label>
                                        <select id="pcard"className="form-control" value={this.state.payType}
                                             onChange={this.handleChange}> 
                                             <option value="DEBITCARD" >DEBIT CARD</option>
                                             <option value="CREDITCARD" >CREDIT CARD</option>
                                        </select>

                                        <label>Payment Date:</label>
                                        <input type="date" name="paymentDate"className="form-control" 
                  value={this.state.paymentDate}
                  onChange={this.handleChange}/>

                                        <label>Card Number:</label>
                                        <input type="text" className="form-control" name="cardNo" placeholder="CardNumber"
                                             value={this.state.cardNo}
                                             onChange={this.handleChange} />
                                             <div className="errorMsg">{this.state.errors.cardNo}</div>

                                        <label>Name On Card:</label>
                                        <input type="text" className="form-control" name="nameOnCard" placeholder="NameOnCard"
                                             value={this.state.nameOnCard}
                                             onChange={this.handleChange} />
 <div className="errorMsg">{this.state.errors.nameOnCard}</div>
                                        <label>Expiry Date:</label>
                                        <input type="date" className="form-control" name="expDate"
                                             value={this.state.expDate}
                                             onChange={this.handleChange} />
 <div className="errorMsg">{this.state.errors.expDate}</div>
                                        <label>CVV:</label>
                                        <input type="text" className="form-control" name="cvv" placeholder="CVV"
                                             value={this.state.cvv}
                                             onChange={this.handleChange} />
                                              <div className="errorMsg">{this.state.errors.cvv}</div>
                                   </div>
                                   <button className="btn btn-success" style={{ width: "100%" }} onClick={this.submitPayForm}>Proceed To Payment</button>

                                   <button className="btn btn-danger" style={{ width: "100%", marginTop: "8pt" }} onClick={this.cancel.bind(this)} >Cancel</button>
                              </form>
                         </div>
                         <hr />
                    </div>
               </div>

          )
     }
}

export default payment
