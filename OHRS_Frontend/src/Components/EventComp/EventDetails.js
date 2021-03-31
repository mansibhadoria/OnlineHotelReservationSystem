import React, { Component } from 'react';
import marriage from '../../images/marriage.jpg';
import birthday from '../../images/birthday.jpg';
import reception from '../../images/reception.jpg';
import marriage2 from '../../images/marriage2.jpg';
import birthday2 from '../../images/birthday2.jpg';
import reception2 from '../../images/reception2.jpg';
import '../../css/image.css'
import NavBarG from '../../NavBar/NavBarG'
import EventService from '../../services/EventService';

class EventDetails extends Component {
     constructor(props) {
          super(props)
          this.state = {
               eventType: this.props.match.params.eventType,
               events: [],
          }
          this.bookEvent = this.bookEvent.bind(this);
          this.cancelBook = this.cancelBook.bind(this);
     }
     componentDidMount(){
          EventService.getEventByType(this.state.eventType).then((res)=>{
               let event=res.data.result;
               this.setState({events:event}) 
          })
     }
     renderImage() {
          if (this.state.eventType === 'MARRIAGE') {
               return (
                    <div >
                         <div className="row" >
                              <div div className="column">
                                   <img src={(this.setState.image = marriage)} alt="single" style={{ width: '100%', height: '20pc' }} />
                              </div>
                              <div div className="column">
                                   <img src={(this.setState.image = marriage2)} alt="single" style={{ width: '100%', height: '20pc' }} />
                              </div>
                         </div>
                    </div>
               )
          }
          else if ((this.state.eventType === 'RECEPTION')) {
               return (
                    <div >
                         <div className="row">
                              <div className="column" >
                                   <img src={(this.setState.image = reception)} alt="double" style={{ width: '100%', height: '20pc' }} />
                              </div>
                              <div className="column" >
                                   <img src={(this.setState.image = reception2)} alt="double" style={{ width: '100%', height: '20pc' }} />
                              </div>
                         </div>
                    </div>
               )
          }
          else if ((this.state.eventType === 'BIRTHDAY')) {
               return (
                    <div >
                         <div className="row">
                              <div className="column">
                                   <img src={(this.setState.image = birthday)} alt="executive" style={{ width: '100%', height: '20pc' }} />
                              </div>
                              <div className="column">
                                   <img src={(this.setState.image = birthday2)} alt="executive" style={{ width: '100%', height: '20pc' }} />
                              </div>
                         </div>
                    </div>
               )
          }
     }
     bookEvent(eventId) {
          this.props.history.push(`/book-event/${eventId}`);
     }
     cancelBook() {
          this.props.history.push("/event");
     }

     render() {
          return (
               <div >
                    <div><NavBarG /></div>
                    <br />
                    <h2 className="text-center"> {this.state.eventType} </h2>
                    <hr />
                    <div className="container">
                        {this.renderImage()}
                    </div>
                    <hr /> 
                    <br />
                    <div  >
                                   <h5 style={{ textDecoration: 'underline',textAlign: "center" }}>FACILITIES AT SWAN INN</h5>
                                   <br />
                                   <ul className="row">
                                        <div style={{marginLeft:"5pc"}}> <li><h6>Post Wedding Pictures</h6></li>
                                        <li > <h6>Include a Photoshoot</h6></li></div>
                                       <div style={{marginLeft:"12pc"}}> <li><h6>Partner With Videographers</h6></li>
                                        <li><h6>Adequate Car Parking</h6></li></div>
                                       <div style={{marginLeft:"12pc"}}> <li><h6>Lavish Buffet Lunch / Dinner.</h6></li>
                                        <li><h6>Round the clock service</h6></li></div>   
                                   </ul>
                              </div>
                             
                    <hr />
                    <br />
                   <div>
                        <h4>Event Details:</h4>
                        {this.state.events.map(
                                            event => (
                                                 <div >
                                             <h6 >Price Per Head:Rs {event.pricePerPerson}</h6>
                        <h6>Max Guests Allowed: {event.maxPeople}</h6>
                        <button className="btn btn-info" onClick={() => this.bookEvent(event.id)}>Book</button>
                        </div> ))}
                   </div>

                    <div className="mt-1 mb-5 pb-3">
                         <button onClick={this.cancelBook} className="btn btn-danger">Back</button>
                    </div>
               </div>


          )
     }
}

export default EventDetails
