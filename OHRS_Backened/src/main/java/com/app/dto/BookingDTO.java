package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.Event;
import com.app.pojos.Guest;
import com.app.pojos.Room;

public class BookingDTO {
	private Long bookingId;
	private String bookingType;
	private LocalDate  bookingDate;
	private Integer numberOfGuests;
	private LocalDate checkin;
	private LocalDate checkout;
	private Boolean paymentStatus;
	private Double bookingTotal;
	
	private Guest guest;
	private Room room;
	private Event event;

	public BookingDTO() {
		// TODO Auto-generated constructor stub
	}

	public BookingDTO(String bookingType, LocalDate bookingDate, Integer numberOfGuests, LocalDate checkin,
			LocalDate checkout, Boolean paymentStatus, Double bookingTotal) {
		super();
		this.bookingType = bookingType;
		this.bookingDate = bookingDate;
		this.numberOfGuests = numberOfGuests;
		this.checkin = checkin;
		this.checkout = checkout;
		this.paymentStatus = paymentStatus;
		this.bookingTotal = bookingTotal;
	}





	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public String getBookingType() {
		return bookingType;
	}

	public void setBookingType(String bookingType) {
		this.bookingType = bookingType;
	}

	public LocalDate  getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDate  bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Integer getNumberOfGuests() {
		return numberOfGuests;
	}

	public void setNumberOfGuests(Integer numberOfGuests) {
		this.numberOfGuests = numberOfGuests;
	}

	public LocalDate getCheckin() {
		return checkin;
	}

	public void setCheckin(LocalDate checkin) {
		this.checkin = checkin;
	}

	public LocalDate getCheckout() {
		return checkout;
	}

	public void setCheckout(LocalDate checkout) {
		this.checkout = checkout;
	}

	public Guest getGuest() {
		return guest;
	}

	public void setGuest(Guest guest) {
		this.guest = guest;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

	@Override
	public String toString() {
		return "BookingDTO [bookingId=" + bookingId + ", bookingType=" + bookingType + ", bookingDate=" + bookingDate
				+ ", numberOfGuests=" + numberOfGuests + ", checkin=" + checkin + ", checkout=" + checkout + "]";
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}


	public Boolean getPaymentStatus() {
		return paymentStatus;
	}


	public void setPaymentStatus(Boolean paymentStatus) {
		this.paymentStatus = paymentStatus;
	}





	public Double getBookingTotal() {
		return bookingTotal;
	}





	public void setBookingTotal(Double bookingTotal) {
		this.bookingTotal = bookingTotal;
	}

}
