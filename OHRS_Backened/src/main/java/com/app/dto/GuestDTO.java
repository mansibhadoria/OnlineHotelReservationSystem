package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import com.app.pojos.Booking;
import com.app.pojos.Payment;

public class GuestDTO {
	private Integer id;
	private String emailAddress;
	private String firstName;
	private String lastName;
	private String phoneNumber;
	
    private List<Payment> payments=new ArrayList<>();

	private List<Booking> bookings=new ArrayList<>();
	
	
	public GuestDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public GuestDTO(Integer id, String emailAddress,  String firstName, String lastName, String phoneNumber) {
		super();
		this.id = id;
		this.emailAddress = emailAddress;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
	}


	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public String getEmailAddress() {
		return emailAddress;
	}



	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}



	public List<Booking> getBookings() {
		return bookings;
	}


	public List<Payment> getPayments() {
		return payments;
	}


	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}


	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}
	

	@Override
	public String toString() {
		return "GuestDTO [id=" + id + ", emailAddress=" + emailAddress +  ", firstName=" + firstName
				+ ", lastName=" + lastName + ", phoneNumber=" + phoneNumber + "]";
	}



}
