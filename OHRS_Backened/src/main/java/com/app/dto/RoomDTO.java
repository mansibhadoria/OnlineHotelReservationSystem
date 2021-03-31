package com.app.dto;

import com.app.pojos.Booking;
import com.app.pojos.RoomType;

public class RoomDTO {
	private Integer roomId;

	private RoomType roomType;
	private Boolean roomStatus;
	private double roomPrice;
	private int numBeds;
	private String description;
	private Booking booking;

	public RoomDTO() {
		// TODO Auto-generated constructor stub
	}

	public RoomDTO(Integer roomId, RoomType roomType, Boolean roomStatus, double roomPrice, int numBeds,
			String description) {
		super();
		this.roomId = roomId;
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
		return "RoomDTO [roomId=" + roomId + ", roomType=" + roomType + ", roomStatus=" + roomStatus + ", roomPrice="
				+ roomPrice + ", numBeds=" + numBeds + ", description=" + description + "]";
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}
}
