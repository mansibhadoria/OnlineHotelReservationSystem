package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Booking;
import com.app.pojos.Guest;


public interface GuestRepository extends JpaRepository<Guest, Integer> {
	//@Query(value="select g from Guest g  where g.emailAddress=:email and")
	Optional<Guest> findByEmailAddressAndPassword(String email,String pwd);
	
	@Query(value="select g.bookings from Guest g  where g.id=:guestId")
	List<Booking> getAllBooking(int guestId);
//	@Query(value="select b from Booking b where b.bookingType=:bookType")
}

