package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.BookingRepository;
import com.app.dto.ResponseDTO;
import com.app.pojos.Booking;
import com.app.service.IBookingService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/bookings")
public class BookingController {

	@Autowired
	private IBookingService bookService;
	@Autowired
	private BookingRepository bookRepo;
	
public BookingController() {
	System.out.println("in cnstr of" + getClass().getName());
}

@PostMapping("/room/{guestId}/{roomId}")
public ResponseEntity<?> addRoomBooking(@PathVariable(name="guestId") int guestId1,@PathVariable(name="roomId") int roomId1, @RequestBody Booking book){
	System.out.println("in bboking book room");
	try {
		return ResponseEntity.ok(new ResponseDTO<>(bookService.addRoomBooking(guestId1, roomId1, book)));
	}catch(RuntimeException e)
  {
  	return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
  }
	
	
}



@PostMapping("/event/{guestId}/{eventId}")
public ResponseEntity<?> addEventBooking(@PathVariable(name="guestId") int guestId1,@PathVariable(name="eventId") int eventId1, @RequestBody Booking book){
	System.out.println("in booking book");
	try {
		return ResponseEntity.ok(new ResponseDTO<>(bookService.addEventBooking(guestId1, eventId1, book)));
	} catch (RuntimeException e) {
		System.out.println("err in cancel event booking " + e);
		return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}

@DeleteMapping("/{bookId}")
public ResponseEntity<?> cancelBooking(@PathVariable long bookId) {
	System.out.println("in cancel bookin :" + bookId);
	try {
		return ResponseEntity.ok(new ResponseDTO<>(bookService.cancelBooking(bookId)));
	} catch (RuntimeException e) {
		System.out.println("err in cancel  booking " + e);
		return new ResponseEntity<>(new ResponseDTO<>("cancel booking failed:invalid id"),
				HttpStatus.NOT_FOUND);
	}
}

@GetMapping("/{bookId}")
public ResponseEntity<?> getBookingById(@PathVariable long bookId) {
	System.out.println("in find by id :" +bookId);
	try {
		return ResponseEntity.ok(new ResponseDTO<>(bookService.getBookingById(bookId)));
	} catch (RuntimeException e) {
		return new ResponseEntity<>(new ResponseDTO<>("get booking by id failed:invalid id"),
				HttpStatus.NOT_FOUND);
	}
}

@GetMapping
public ResponseEntity<?> getAllBooking() {
	System.out.println("in getAllBooking");
	//return guestService.getGuestById(guestId);
	try {
		 return ResponseEntity.ok (bookRepo.findAll());
	} catch (RuntimeException e) {
		
		return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
	}
	}
}
