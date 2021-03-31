package com.app.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingRepository;
import com.app.dao.EventRepository;
import com.app.dao.GuestRepository;
import com.app.dao.RoomRepository;
import com.app.dto.BookingDTO;
import com.app.dto.GuestDTO;
import com.app.exceptions.ResourceNotFoundException;
import com.app.pojos.Booking;
import com.app.pojos.Event;
import com.app.pojos.Guest;
import com.app.pojos.Room;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {
	@Autowired
	private BookingRepository bookRepo;
	@Autowired
	private RoomRepository roomRepo;
	@Autowired
	private GuestRepository guestRepo;
	@Autowired
	private EventRepository eventRepo;

	public BookingServiceImpl() {
		System.out.println("in ctr of " + getClass().getName());
	}

	@Override
	public BookingDTO addRoomBooking(int guestId, int roomId, Booking book) {
		Guest guest = guestRepo.findById(guestId).orElseThrow(() -> new ResourceNotFoundException("Invalid Guest ID"));
		Room room = roomRepo.findById(roomId).orElseThrow(() -> new ResourceNotFoundException("Invalid Room ID"));
		System.out.println("guest:" + guest);
		System.out.println("room:" + room);
		//LocalDate d1=LocalDate.parse(book.getBookingDate());
		//book.setBookingDate(d1);
		room.addBooking(book);
		//room.setRoomStatus(false);
        book.setBookingType("room");
		guest.addBooking(book);
	    int numDays = Period.between(book.getCheckin(), book.getCheckout()).getDays();
	    double Total=(room.getRoomPrice())*numDays;
	    book.setBookingTotal(Total);
		Booking persistentBooking = bookRepo.save(book);
		BookingDTO dto = new BookingDTO();
		BeanUtils.copyProperties(persistentBooking, dto);
		return dto;
	}

	@Override
	public  BookingDTO addEventBooking(int guestId, int eventId, Booking book) {
		Guest guest = guestRepo.findById(guestId).orElseThrow(() -> new ResourceNotFoundException("Invalid Guest ID"));
		Event eventdtls = eventRepo.findById(eventId).orElseThrow(() -> new ResourceNotFoundException("Invalid Event ID"));
		BookingDTO dto = new BookingDTO();
		
		String bookType="event";
		List<Booking> bookings=bookRepo.findByBookingType(bookType);
		if(book.getNumberOfGuests()>eventdtls.getMaxPeople()) {
			throw new ResourceNotFoundException("event booking failed: max people limit exceeds");
		}
		LocalDate bookingDate=book.getBookingDate();
		for(int i=0;i<bookings.size();i++) {
			LocalDate d=bookings.get(i).getBookingDate();
			if(bookingDate.isEqual(d)){
				System.out.println("same Booking date");
			     throw new ResourceNotFoundException("event booking failed:event is already booked on same date");
			}
		}
		eventdtls.addBooking(book);
        guest.addBooking(book);
        book.setBookingType("event");
        Double total=(eventdtls.getPricePerPerson())*(book.getNumberOfGuests());
        book.setBookingTotal(total);
		Booking persistentBooking = bookRepo.save(book);	
		BeanUtils.copyProperties(persistentBooking, dto);
		return dto;
	}

	@Override
	public String cancelBooking(long bookId) {
		Booking book = bookRepo.findById(bookId).orElseThrow(() -> new ResourceNotFoundException("Invalid Booking ID"));
		Guest guest = book.getGuest();
		if(book.getBookingType().equals("event")) {
		Event event = book.getEvent();
		guest.removeBooking(book);
		event.removeBooking(book);
		bookRepo.deleteById(bookId);
		return "Event booking cancel for ID " + bookId + " deleted...";
		}else {
			Room room = book.getRoom();
			guest.removeBooking(book);
			room.removeBooking(book);
			
			bookRepo.deleteById(bookId);
			return "Room booking cancel for ID " + bookId + " deleted...";
		}
	}

	@Override
	public BookingDTO getBookingById(long bookId) {
		Booking book = bookRepo.findById(bookId).orElseThrow(() -> new ResourceNotFoundException("Invalid Booking ID"));
		BookingDTO dto = new BookingDTO();
		BeanUtils.copyProperties(book, dto);
		return dto;
	
	}

//	@Override
//	public List<BookingDTO> findByGuestId(int guestId) {
////		Booking book=bookRepo.findByGuestId(guestId).orElseThrow(() -> new ResourceNotFoundException("Invalid Guest ID"));
////		BookingDTO dto = new BookingDTO();
////		return null;
//		
//		List<BookingDTO> list = new ArrayList<>();
//		bookRepo.findByGuestId(guestId).forEach(u -> {
//			BookingDTO dto = new BookingDTO();
//			BeanUtils.copyProperties(u,  dto);
//			list.add(dto);
//		});
//		return list;
//	}

}
