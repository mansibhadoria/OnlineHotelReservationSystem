package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "bookings")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bookId",length = 15)
	private Long bookingId;
	@Column(name = "bookType",length = 15)
	private String bookingType;
	@Column(name = "bookDate",length = 15)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate bookingDate;
	@Column(name = "numOfGuests",length = 15)
	private Integer numberOfGuests;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	
	private LocalDate checkin;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate checkout;
	@Column(name="Total",length = 10)
	private Double BookingTotal;
	@Column(name = "paymentStatus")
	private Boolean paymentStatus=false;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "guest_id")	
	@JsonIgnore
	private Guest guest;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room_id")
	@JsonIgnore
	private Room room;

   
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id")
    @JsonIgnore
    private Event event;
    
	public Booking() {

	}

    public Booking(String bookingType, LocalDate bookingDate, Integer numberOfGuests, LocalDate checkin,
			LocalDate checkout, Double bookingTotal, Boolean paymentStatus) {
		super();
		this.bookingType = bookingType;
		this.bookingDate = bookingDate;
		this.numberOfGuests = numberOfGuests;
		this.checkin = checkin;
		this.checkout = checkout;
		BookingTotal = bookingTotal;
		this.paymentStatus = paymentStatus;
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", bookingType=" + bookingType + ", bookingDate=" + bookingDate
				+ ", numberOfGuests=" + numberOfGuests + "]";
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

	
	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
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
		return BookingTotal;
	}


	public void setBookingTotal(Double bookingTotal) {
		BookingTotal = bookingTotal;
	}

}
