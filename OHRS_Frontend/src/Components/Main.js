import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import LoginA from './LoginAdmin'
import Home from './Home';
import Gallery from './Gallery';
import Room from './RoomComp/Room';
import RoomDetails from './RoomComp/RoomDetails'
import HomeAdmin from './AdminComp/HomeAdmin';
import HomeGuest from './GuestComp/HomeGuest';
import BookRoom from './BookingComp/BookRoom';
import payment from './BookingComp/payment';
import Final from './BookingComp/Final';
import Event from './EventComp/Event';
import { BookEvent } from './BookingComp/BookEvent';
import EventDetails from './EventComp/EventDetails';
import Logout from './Logout';
import ViewBooking from './GuestComp/MyBooking';
import ViewRooms from './RoomComp/ViewRooms';
import AddRoom from './RoomComp/AddRoom';
import ViewEvent from './EventComp/ViewEvent';
import AddEvent from './EventComp/AddEvent';
import UpdateEvent from './EventComp/UpdateEvent';
import ViewBookings from './BookingComp/ViewBookings';
import BookingDetails from'./BookingComp/BookingDetails'
import ViewGuests from './GuestComp/ViewGuests';
import GuestDetail from './GuestComp/GuestDetail';
import AddGuest from './GuestComp/AddGuest';
import MyProfile from './GuestComp/MyProfile';
import UpdateDetails from './GuestComp/UpdateDetails'
import UpdateGuest from './GuestComp/UpdateGuest'

function Main() {
     return (
          <div>
               <Router>
                    <div className="container">
                         <Switch>
                              <Route path="/" exact component={Home}></Route>
                              <Route path="/gallery" exact component={Gallery}></Route>
                              <Route path="/register" exact component={Register}></Route>
                              <Route path="/login" exact component={Login}></Route>
                              <Route path="/loginAdmin" exact component={LoginA}></Route>
                              <Route  path="/homeAdmin" exact component={HomeAdmin}></Route>
                              <Route  path="/homeGuest" exact component={HomeGuest}></Route>
                              <Route path="/room" exact component={Room}></Route>
                              <Route path="/room-details/:roomType" exact component={RoomDetails}></Route>
                              <Route path="/book-room/:roomId" exact component={BookRoom}></Route>
                              <Route path="/payment/:bookId" exact component={payment}></Route>
                              <Route path="/final/:bookId" exact component={Final}></Route>
                              <Route path="/event" exact component={Event}></Route>
                              <Route path="/event-dtls/:eventType" exact component={EventDetails}></Route>
                              <Route path="/book-event/:eventId" exact component={BookEvent}></Route>
                              <Route path="/guest/bookings" exact component={ViewBooking}></Route>
                              <Route path="/viewRooms" exact component={ViewRooms}></Route>
                              <Route path="/viewEvents" exact component={ViewEvent}></Route>
                              <Route path="/addRoom" exact component={AddRoom}></Route>
                              <Route path="/addEvent" exact component={AddEvent}></Route>
                              <Route path="/viewBookings" exact component={ViewBookings}></Route>
                              <Route path="/booking/:bookingId" exact component={BookingDetails}></Route>
                              <Route path="/updateEvent/:id" exact component={UpdateEvent}></Route>
                              <Route path="/viewGuests" exact component={ViewGuests}></Route>
                              <Route path="/addGuest" exact component={AddGuest}></Route>
                              <Route path="/viewGuest/:guestId" exact component={GuestDetail}></Route>
                              <Route path="/myProfile" exact component={MyProfile}></Route>
                              <Route path="/updateDetails/:guestId" exact component={UpdateDetails}></Route>
                              <Route path="/updateGuest/:guestId" exact component={UpdateGuest}></Route>
                              <Route path="/logout" exact component={Logout}></Route>
                            
                         </Switch>       
                    </div>            
               </Router>
              
          </div>
     )
}

export default Main
