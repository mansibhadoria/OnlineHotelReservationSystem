package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

	@Query(value="select b from Booking b where b.bookingType=:bookType")
	public List<Booking> findByBookingType(String bookType);

}
