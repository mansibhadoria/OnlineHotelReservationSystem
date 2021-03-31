import axios from 'axios';

const PAYMENT_API_BASE_URL ="http://localhost:8080/hotel-reservation/payments" 


class PaymentService {
     payment(bookId,payment) {
          return axios.post(PAYMENT_API_BASE_URL + "/" +bookId,payment);
     }
     
     // loginGuest(guest) {
     //      return axios.post(GUEST_API_BASE_URL + "/" + "/login", guest);
     // }
     
     // getBookingById(bookId) {
     //      return axios.get(BOOK_API_BASE_URL+ "/" + bookId)
     // }
}

export default new PaymentService();