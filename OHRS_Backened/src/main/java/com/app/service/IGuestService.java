package com.app.service;

import java.util.List;

import com.app.dto.BookingDTO;
import com.app.dto.GuestDTO;
import com.app.pojos.Booking;
import com.app.pojos.Guest;


public interface IGuestService {
	GuestDTO addGuest(Guest guest);
    public List<GuestDTO> getAllGuests();
    String deleteGuestDetails(int guestId);
    GuestDTO updateGuestDetails(int guestId,GuestDTO guest);
    GuestDTO getGuestById(int guestId);
    GuestDTO  authenticateGuest(String email,String pwd);
    
    List<Booking> findBooking(int guestId);
}


