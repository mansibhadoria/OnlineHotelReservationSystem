import React, { Component } from 'react'
import marriage from '../../images/marriage.jpg';
import birthday from '../../images/birthday.jpg';
import reception from '../../images/reception.jpg';
import NavBarG from '../../NavBar/NavBarG';


export default class Event extends Component {

     constructor(props) {
          super(props)
          this.state = {
               eventType: "",
              
          }
          this.bookEvent = this.bookEvent.bind(this);
     }
     
     bookEvent(eventType) {
          this.props.history.push(`/event-dtls/${eventType}`);
     }
     render() {
          return (
               <div>
                    <div><NavBarG /></div>
                    <br/>
                    <div className="my-2">
                         <h1 className="text-center " >Celebrations Made with Meaning</h1>
                    </div>
                    <hr />
                    <div>
                         <h6 style={{textAlign: "center", }}>Family and cultural celebrations are a delicate dance between respecting customs and infusing a sense of personal uniqueness.
                          It is finding harmony between old meanings and new world. 
                          At Swan Inn, we translate age-old rituals into modern expressions and bring them to life, so every celebration is made with meaning.</h6>
                    </div>
                    <hr />
                    <div  >
                                   <h5 style={{ textDecoration: 'underline',textAlign: "center" }}>FACILITIES AT SWAN INN</h5>
                                  
                                   <ul className="row">
                                        <div style={{marginLeft:"5pc"}}> <li >Post Wedding Pictures</li>
                                        <li >Include a Photoshoot</li></div>
                                       <div style={{marginLeft:"12pc"}}> <li>Partner With Videographers</li>
                                        <li>Adequate Car Parking</li></div>
                                       <div style={{marginLeft:"12pc"}}> <li>Lavish Buffet Lunch / Dinner.</li>
                                        <li>Round the clock service</li></div>
                                       
                                   </ul>
                              </div>
                    <hr />
                    <div className="container-fluid mb-5">
                         <div className="row">
                              <div className="col-20 mx-auto">
                                   <div className="row">
                                        <div className="col-md-4 col-10 mx-auto">
                                             <div className="card" >
                                                  <img src={(this.setState.image = marriage)} className="card-img-top" alt="single" style={{ height: "250px", width: "50" }} />
                                                  <div className="card-body">
                                                       <h5 className="card-title" >Marriage</h5>
                                                      
                                                       <button className="btn btn-info" onClick={() => this.bookEvent(this.setState.eventType = "MARRIAGE")}>BOOK</button>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                             <div className="card" >
                                                  <img src={(this.setState.image = reception)} className="card-img-top" alt="..." style={{ height: "250px", width: "50" }} />
                                                  <div className="card-body">
                                                       <h5 className="card-title">Reception</h5>
                                                       
                                                       <button className="btn btn-info" onClick={() => this.bookEvent(this.setState.eventType = "RECEPTION")}>BOOK</button>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                             <div className="card" >
                                                  <img src={(this.setState.image = birthday)} className="card-img-top" alt="..." style={{ height: "250px", width: "50" }} />
                                                  <div className="card-body">
                                                       <h5 className="card-title" >Birthday</h5>
                                                       <button className="btn btn-info" onClick={() => this.bookEvent(this.setState.eventType = "BIRTHDAY")}>BOOK</button>
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

