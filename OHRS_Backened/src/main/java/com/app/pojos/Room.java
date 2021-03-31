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
@Table(name = "rooms")
public class Room {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "roomId")
	private Integer roomId;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private RoomType roomType;
	@Column(name = "room_Status")
	private Boolean roomStatus=true;
	@Column(name = "room_price")
	private double roomPrice;
	@Column(name = "num_of_beds")
	private int numBeds;
	@Column(name = "roomDesciption")
	private String description;
	@OneToOne(mappedBy = "room", cascade = CascadeType.ALL,  orphanRemoval = true)
	@JsonIgnore
	private Booking booking;

	public Room() {
		// TODO Auto-generated constructor stub
	}

	public Room(RoomType roomType, Boolean roomStatus, double roomPrice, int numBeds, String description) {
		super();
		this.roomType = roomType;
		this.roomStatus = roomStatus;
		this.roomPrice = roomPrice;
		this.numBeds = numBeds;
		this.description = description;
	}

	public Integer getRoomId() {
		return roomId;
	}

	public void setRoomId(Integer roomId) {
		this.roomId = roomId;
	}

	public RoomType getRoomType() {
		return roomType;
	}

	public void setRoomType(RoomType roomType) {
		this.roomType = roomType;
	}

	public Boolean getRoomStatus() {
		return roomStatus;
	}

	public void setRoomStatus(Boolean roomStatus) {
		this.roomStatus = roomStatus;
	}

	public double getRoomPrice() {
		return roomPrice;
	}

	public void setRoomPrice(double roomPrice) {
		this.roomPrice = roomPrice;
	}

	public int getNumBeds() {
		return numBeds;
	}

	public void setNumBeds(int numBeds) {
		this.numBeds = numBeds;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Room [roomId=" + roomId + ", roomType=" + roomType + ", roomStatus=" + roomStatus + ", roomPrice="
				+ roomPrice + ", numBeds=" + numBeds + ", description=" + description + "]";
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
		this.setRoomStatus(false);
		b.setRoom(this);
	}

	public void removeBooking(Booking b) {
		booking = null;
		this.setRoomStatus(true);
		b.setRoom(null);
	}

}
