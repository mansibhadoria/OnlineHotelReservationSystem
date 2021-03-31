import axios from 'axios';

const BOOK_API_BASE_URL ="http://localhost:8080/hotel-reservation/bookings" 


class BookService {
     bookRoom(guestId,roomId,book) {
          return axios.post(BOOK_API_BASE_URL + "/room" + "/"+guestId+"/"+roomId,book);
     }
     bookEvent(guestId,eventId,book) {
          return axios.post(BOOK_API_BASE_URL + "/event" + "/"+guestId+"/"+eventId,book);
     }
     
     getAllBookings(){
          return axios.get(BOOK_API_BASE_URL + "/");
     }
     getBookingById(bookId) {
          return axios.get(BOOK_API_BASE_URL+ "/" + bookId)
     }
     deleteBooking(bookId) {
          return axios.delete(BOOK_API_BASE_URL+ "/" + bookId)
     }
}

export default new BookService();