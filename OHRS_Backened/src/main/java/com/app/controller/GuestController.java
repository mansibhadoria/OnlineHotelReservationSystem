package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.GuestDTO;
import com.app.dto.ResponseDTO;
import com.app.pojos.Guest;
import com.app.service.IGuestService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/guests")
public class GuestController {
	@Autowired
	private IGuestService guestService;

	public GuestController() {
		System.out.println("in cnstr of" + getClass().getName());
	}

	@PostMapping("/register")
	public ResponseEntity<?> addGuest(@RequestBody Guest guest)
	{
		System.out.println("in add guest:"+guest);
		//return 
		try {
			return ResponseEntity.ok(new ResponseDTO<>(guestService.addGuest(guest)));
		} catch (RuntimeException e) {
			System.out.println("err in add guest " + e);
			return new ResponseEntity<>("EmailAddress already exists : TRY AGAIN !!",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

	@PostMapping("/login")
	public ResponseEntity<?> authenticateGuest(@RequestBody Guest guest) {
		System.out.println("in auth guest " + guest);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(guestService.authenticateGuest(guest.getEmailAddress(),guest.getPassword())));
		} catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping
	public ResponseEntity<?> getAllGuests() {
		System.out.println("in get all guests");
		return ResponseEntity.ok(new ResponseDTO<>(guestService.getAllGuests()));
	}
	
	@GetMapping("/{guestId}")
	public ResponseEntity<?> getGuestById(@PathVariable int guestId) {
		System.out.println("in find by id :" + guestId);
		//return guestService.getGuestById(guestId);
		try {
			 return ResponseEntity.ok (guestService.getGuestById(guestId));
		} catch (RuntimeException e) {
			System.out.println("err in findByID guest " + e);
			return new ResponseEntity<>("invalid guestID",HttpStatus.NOT_FOUND);
		}
		}
	
	@GetMapping("/bookings/{guestId}")
	public ResponseEntity<?> getBooking(@PathVariable int guestId) {
		System.out.println("in find by id :" + guestId);
		//return guestService.getGuestById(guestId);
		try {
			 return ResponseEntity.ok (guestService.findBooking(guestId));
		} catch (RuntimeException e) {
			System.out.println("err in findByID guest " + e);
			return new ResponseEntity<>("invalid guestID",HttpStatus.NOT_FOUND);
		}
		}
	

	@DeleteMapping("/{guestId}")
	public ResponseEntity<?> deleteGuestDetails(@PathVariable int guestId) {
		System.out.println("in delete guest :" + guestId);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(guestService.deleteGuestDetails(guestId)));
		} catch (RuntimeException e) {
			System.out.println("err in delete guest " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
}
	

	@PutMapping("/{guestId}")
	public ResponseEntity<?> updateGuestDetails(@PathVariable int guestId, @RequestBody GuestDTO guest) {
		System.out.println("in update guest :" + guestId);
		try{
			return ResponseEntity.ok(guestService.updateGuestDetails(guestId, guest));
		}catch (RuntimeException e) {
			System.out.println("err in update guest " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}

	}
	
	
}
