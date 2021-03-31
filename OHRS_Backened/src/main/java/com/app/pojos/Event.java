package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "events")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "event_id")
	private Integer id;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20, name = "event_type")
	private EventType eventType;
	
	@Column(name="maxPeople")
	private int maxPeople;
	

	@Column(name = "price_per_person")
	private Double pricePerPerson;

	@OneToOne(mappedBy = "event", cascade = CascadeType.ALL,  orphanRemoval = true)
	@JsonIgnore
	private Booking booking;

	public Event() {
		// TODO Auto-generated constructor stub
	}
	public Event(EventType eventType, int maxPeople, Double pricePerPerson) {
		super();
		this.eventType = eventType;
		this.maxPeople = maxPeople;
		this.pricePerPerson = pricePerPerson;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public EventType getEventType() {
		return eventType;
	}

	public void setEventType(EventType eventType) {
		this.eventType = eventType;
	}

	public Double getPricePerPerson() {
		return pricePerPerson;
	}

	public void setPricePerPerson(Double pricePerPerson) {
		this.pricePerPerson = pricePerPerson;
	}

	public int getMaxPeople() {
		return maxPeople;
	}
	public void setMaxPeople(int maxPeople) {
		this.maxPeople = maxPeople;
	}
	@Override
	public String toString() {
		return "Event [id=" + id + ", eventType=" + eventType + ", maxPeople=" + maxPeople + ", pricePerPerson="
				+ pricePerPerson + "]";
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	
	//Helper method for bi-directional mapping
	public void addBooking(Booking b) {
		booking = b;
		b.setEvent(this);
	}

	public void removeBooking(Booking b) {
		booking = null;
		b.setEvent(null);

	}
}
