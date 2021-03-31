package com.app.service;

import com.app.dto.BookingDTO;
import com.app.pojos.Booking;

public interface IBookingService {
	
	 BookingDTO addRoomBooking(int guestId,int roomId,Booking book);
	

	 BookingDTO addEventBooking(int guestId,int eventId,Booking book);
	 String cancelBooking(long bookId);
	 
	 BookingDTO getBookingById(long bookId);
	 
	// public List<BookingDTO> findByGuestId(int guestId);
		
}
