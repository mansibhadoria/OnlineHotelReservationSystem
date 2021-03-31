package com.app.dto;

import com.app.pojos.Booking;
import com.app.pojos.EventType;

public class EventDTO {

	private Integer id;
	private EventType eventType;
	private Double pricePerPerson;
	private int maxPeople;
	private Booking booking;

	public EventDTO() {
		// TODO Auto-generated constructor stub
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

	public EventDTO(EventType eventType, Double pricePerPerson, int maxPeople) {
		super();
		this.eventType = eventType;
		this.pricePerPerson = pricePerPerson;
		this.maxPeople = maxPeople;
	}


	public Double getPricePerPerson() {
		return pricePerPerson;
	}

	public void setPricePerPerson(Double pricePerPerson) {
		this.pricePerPerson = pricePerPerson;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public int getMaxPeople() {
		return maxPeople;
	}


	public void setMaxPeople(int maxPeople) {
		this.maxPeople = maxPeople;
	}


	@Override
	public String toString() {
		return "EventDTO [id=" + id + ", eventType=" + eventType + ", pricePerPerson=" + pricePerPerson + ", maxPeople="
				+ maxPeople + "]";
	}

}