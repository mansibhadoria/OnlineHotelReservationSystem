import axios from 'axios';

const GUEST_API_BASE_URL = "http://localhost:8080/hotel-reservation/guests"


class GuestService {
     registerGuest(guest) {
          return axios.post(GUEST_API_BASE_URL + "/" + "/register", guest);
     }
     
     loginGuest(guest) {
          return axios.post(GUEST_API_BASE_URL + "/" + "/login", guest);
     }
     
     getGuestById(guestId) {
          return axios.get(GUEST_API_BASE_URL + "/" + guestId)
     }
     getGuest() {
          return axios.get(GUEST_API_BASE_URL + "/")
     }
     getBookingById(guestId) {
          return axios.get(GUEST_API_BASE_URL + "/bookings"+"/"+guestId);
     }
    updateGuest(guestId,guest) {
          return axios.put(GUEST_API_BASE_URL +"/"+guestId,guest);
     }
     addGuest(guest) {
          return axios.post(GUEST_API_BASE_URL + "/" + "/register", guest);
     }
     deleteGuestById(guestId) {
          return axios.delete(GUEST_API_BASE_URL + "/"+guestId);
     }
}



export default new GuestService();
