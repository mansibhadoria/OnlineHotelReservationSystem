package com.app.service;

import java.util.List;

import com.app.dto.RoomDTO;
import com.app.pojos.Room;
import com.app.pojos.RoomType;

public interface IRoomService {
	RoomDTO addRoom(Room room);
	public List<RoomDTO> getAllRooms();
	String deleteRoom(int roomId);
	RoomDTO updateRoomDetails(int roomId, RoomDTO roomDTO);
	RoomDTO getRoomById(int roomId);
	List<RoomDTO> findByRoomType(RoomType roomType);
	String updateRoomStatus(int roomId);
	//List<RoomDTO> findRooms(LocalDate from, LocalDate to, RoomType roomType);

}
