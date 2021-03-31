package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="guests")
public class Guest  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="guest_id")
	private Integer id;
	@Column(length = 20,unique =true,nullable = false)
	@Email(message = "Invalid email format")
	private String emailAddress;
	@Length(min=3, max=20)
	@Column(length = 20,nullable = false)
	private String password;
	@Column(length = 20)
	private String firstName;
	@Column(length = 20)
	private String lastName;
	@Column(nullable = false)
	private String phoneNumber;
	
	@OneToMany(mappedBy ="guest", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Payment> payments=new ArrayList<>();

	@OneToMany(mappedBy ="guest", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Booking> bookings=new ArrayList<>();
	
public Guest() {
	// TODO Auto-generated constructor stub
}
	
	public Guest(String emailAddress,  String password,
		String firstName, String lastName, String phoneNumber) {
	super();
	this.emailAddress = emailAddress;
	this.password = password;
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
}




	public String getEmailAddress() {
	return emailAddress;
}




public void setEmailAddress(String emailAddress) {
	this.emailAddress = emailAddress;
}




public String getPassword() {
	return password;
}




public void setPassword(String password) {
	this.password = password;
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




	public List<Payment> getPayments() {
		return payments;
	}


	public void setPayments(List<Payment> payments) {
		this.payments = payments;
	}
	//Helper method for bi-directional mapping for booking
		public void addBooking(Booking b) {
			bookings.add(b);
			
			b.setGuest(this);
		}

		public void removeBooking(Booking b) {
			bookings.remove(b);
			
			b.setGuest(null);
		}
	//Helper method for bi-directional mapping gor pament
		public void addPayment(Payment p) {
			payments.add(p);
			p.setGuest(this);
		}

		public void removePayment(Payment p) {
			payments.remove(p);
			p.setGuest(null);

		}




		public Integer getId() {
			return id;
		}




		public void setId(Integer id) {
			this.id = id;
		}




		public List<Booking> getBookings() {
			return bookings;
		}




		public void setBookings(List<Booking> bookings) {
			this.bookings = bookings;
		}
		
		//@JsonManagedReference(value = "guests")
		//@JsonIgnoreProperties("guests")
		
		
		//@JsonManagedReference(value = "guests")
		//@JsonIgnoreProperties("guests")
	
}

