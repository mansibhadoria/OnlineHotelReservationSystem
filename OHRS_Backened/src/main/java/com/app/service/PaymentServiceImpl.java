package com.app.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BookingRepository;
import com.app.dao.PaymentRepository;
import com.app.dto.PaymentDTO;
import com.app.exceptions.ResourceNotFoundException;
import com.app.pojos.Booking;
import com.app.pojos.Guest;
import com.app.pojos.Payment;

@Service
@Transactional
public class PaymentServiceImpl implements IPaymentService {
@Autowired
private PaymentRepository payRepo;
@Autowired
private BookingRepository bookRepo;
//@Autowired
//private RoomRepository roomRepo;
//@Autowired
//private GuestRepository guestRepo;
//@Autowired
//private EventRepository eventRepo;

public PaymentServiceImpl() {
	System.out.println("in constr of "+getClass().getName());
}

//@Override
//public GuestDTO addPayment( long bookingId, Payment payment) {
//	//Guest guest = guestRepo.findById(guestId).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID"));
//	Booking book = bookRepo.findById(bookingId).orElseThrow(() -> new ResourceNotFoundException("Invalid Booking ID"));
//	Guest guest=book.getGuest();
//	guest.setPayment(payment);
//	book.setPaymentStatus(true);
//	//Payment persistentPayment = payRepo.save(payment);
//	GuestDTO dto = new GuestDTO();
//	BeanUtils.copyProperties(guest, dto);
//	return dto;
//}

@Override
public PaymentDTO addPayment(long bookingId, Payment payment) {
	//Guest guest = guestRepo.findById(guestId).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID"));
	Booking book = bookRepo.findById(bookingId).orElseThrow(() -> new ResourceNotFoundException("Invalid Booking ID"));
//	Guest guest=book.getGuest();
	Guest guest=book.getGuest();
	guest.addPayment(payment);
	book.setPaymentStatus(true);
	payment.setPaymentAmount(book.getBookingTotal());
	Payment persistentPayment = payRepo.save(payment);
	//GuestDTO dto = new GuestDTO();
	PaymentDTO payDto=new PaymentDTO();
	BeanUtils.copyProperties(persistentPayment, payDto);
	return payDto;
}
}
