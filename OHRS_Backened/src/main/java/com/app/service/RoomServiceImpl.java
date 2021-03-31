package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.RoomRepository;
import com.app.dto.RoomDTO;
import com.app.exceptions.ResourceNotFoundException;
import com.app.pojos.Room;
import com.app.pojos.RoomType;

@Service
@Transactional
public class RoomServiceImpl implements IRoomService {
@Autowired
private  RoomRepository roomRepo;

public RoomServiceImpl() {
	System.out.println("in constr of "+getClass().getName());
	}

@Override
	public RoomDTO addRoom(Room room) {
	Room persistentRoom = roomRepo.save(room);
	// for sending response copy persistent user details ---> user dto(so that you
	// can control what all to share with the front end)
	RoomDTO roomdto = new RoomDTO();
	BeanUtils.copyProperties(persistentRoom, roomdto);
	return  roomdto;
	}

	@Override
	public List<RoomDTO> getAllRooms() {
		List<RoomDTO> list = new ArrayList<>();
		roomRepo.findAll().forEach(u -> {
			RoomDTO dto = new RoomDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);
		});
		return list;
	}

	@SuppressWarnings("unused")
	@Override
	public String deleteRoom(int roomId) {
		Room room = roomRepo.findById(roomId).orElseThrow(() -> new ResourceNotFoundException("delete room by id failed: Invalid Room ID"));
		roomRepo.deleteById(roomId);
		return "Room details for ID "+roomId+" deleted...";
	}

	@Override
	public RoomDTO updateRoomDetails(int roomId, RoomDTO roomDTO) {
		System.out.println("in update " + roomId);
		Room room=roomRepo.findById(roomId).get();
		System.out.println("from db:"+room);
		BeanUtils.copyProperties(roomDTO,room);	
		System.out.println("updated room dtls " +room);
		return roomDTO;
	}

	@Override
	public RoomDTO getRoomById(int roomId) {
		Room room=roomRepo.findById(roomId).orElseThrow(() -> new ResourceNotFoundException("get room by id failed:Invalid Room ID"));
		RoomDTO dto = new RoomDTO();
		BeanUtils.copyProperties(room,dto);
		System.out.println("room= " +room);
		System.out.println("room DTO  " + dto);
		return dto;
//		Room room = roomRepo.findById(roomId).orElseThrow(() -> new ResourceNotFoundException("Invalid guestId .."));
//		Optional<Room> optcustomer=roomRepo.findById(roomId);
//		
//		return room;
	}

	@Override
	public List<RoomDTO> findByRoomType(RoomType roomType) {
		System.out.println("room type:"+roomType);
		List<RoomDTO> list = new ArrayList<>();
		roomRepo.findByRoomType(roomType).forEach(u -> {
			RoomDTO dto = new RoomDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);
		});
		return list;
		
	}

	@Override
	public String updateRoomStatus(int roomId) {
		Room room=roomRepo.findById(roomId).orElseThrow(() -> new ResourceNotFoundException("get room by id failed:Invalid Room ID"));
		if(room.getRoomStatus()==true) {
		room.setRoomStatus(false);
		}
		else {
			room.setRoomStatus(true);
		}
		RoomDTO dto = new RoomDTO();
		BeanUtils.copyProperties(room,dto);
//		System.out.println("room= " +room);
//		System.out.println("room DTO  " + dto);
		return "room status updated";
	}

//	@Override
//	public List<Room> findRooms(LocalDate from, LocalDate to, RoomType roomType) {
//		return roomRepo.findRooms(from, to, roomType);
//	}

}
