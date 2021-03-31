package com.app;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.controller.AdminController;
import com.app.controller.BookingController;
import com.app.controller.EventController;
import com.app.controller.GuestController;
import com.app.controller.PaymentController;
import com.app.controller.RoomController;

//smoke test/sanity test
@SpringBootTest
class ApplicationTests {
	@Autowired
	private AdminController admincontroller;
	@Autowired
	private RoomController roomcontroller;
	
	@Autowired
	private GuestController guestcontroller;
	
	@Autowired
	private BookingController bookingcontroller;
	@Autowired
	private EventController eventcontroller;
	
	@Autowired
	private PaymentController paymentcontroller;
	
	
	
	@Test
	void contextLoads() {
		System.out.println("in test admincontroller ");
		assertNotNull(admincontroller);
	}
	@Test
	void contextLoads1() {
		System.out.println("in test guestcontroller");
		assertNotNull( guestcontroller);
	}
	
	
	@Test
	void contextLoads2() {
		System.out.println("in test roomcontroller");
		assertNotNull(roomcontroller);
	}
	@Test
	void contextLoads3() {
		System.out.println("in test eventcontroller");
		assertNotNull(eventcontroller);
	}
	@Test
	void contextLoads4() {
		System.out.println("in test bookingtcontroller");
		assertNotNull(bookingcontroller);
	}
	@Test
	void contextLoads5() {
		System.out.println("in test paymentcontroller");
		assertNotNull(paymentcontroller);
	}

}
