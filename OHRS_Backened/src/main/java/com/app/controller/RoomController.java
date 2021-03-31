package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.dto.RoomDTO;
import com.app.pojos.Room;
import com.app.pojos.RoomType;
import com.app.service.IRoomService;
@CrossOrigin(origins="http://localhost:3000")//to tell SC to allow req handling coming from any origin(ie: any web app)
@RestController
@RequestMapping("/rooms")
public class RoomController {
	@Autowired
	private IRoomService roomService;

	public RoomController() {
		System.out.println("in cnstr of" + getClass().getName());
	}

	@PostMapping("/add")
	public ResponseEntity<?> addRoom(@RequestBody Room room) {
		System.out.println("in add room: " + room);
		return ResponseEntity.ok(new ResponseDTO<>(roomService.addRoom(room)));
	}

	@GetMapping
	public ResponseEntity<?> getAllRooms() {
		System.out.println("in list all rooms");
		return ResponseEntity.ok(new ResponseDTO<>(roomService.getAllRooms()));
	}
	
	@GetMapping("/{roomId}")
	public ResponseEntity<?> getRoomById(@PathVariable int roomId) {
		System.out.println("in find by id :" + roomId);
		
		try{return ResponseEntity.ok(new ResponseDTO<>(roomService.getRoomById(roomId)));
		}catch (RuntimeException e) {
			System.out.println("err in getroomById " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}

	}
	@PutMapping("/status/{roomId}")
	public ResponseEntity<?> updateRoomStatus(@PathVariable int roomId) {
		System.out.println("in update roomstatus :" + roomId);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(roomService.updateRoomStatus(roomId)));
		} catch (RuntimeException e) {
			System.out.println("err in update room " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@DeleteMapping("/{roomId}")
	public ResponseEntity<?> deleteRoomDetails(@PathVariable int roomId) {
		System.out.println("in delete room :" + roomId);
		try{
			return ResponseEntity.ok(new ResponseDTO<>(roomService.deleteRoom(roomId)));
		}catch (RuntimeException e) {
			System.out.println("err in deleteroomDetails " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/{roomId}")
	public ResponseEntity<?> updateRoomDetails(@PathVariable int roomId, @RequestBody RoomDTO roomdto) {
		System.out.println("in update room :" + roomId);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(roomService.updateRoomDetails(roomId, roomdto)));
		} catch (RuntimeException e) {
			System.out.println("err in update room " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/type/{roomType}")
	public ResponseEntity<?> getRoomByRoomType(@PathVariable RoomType roomType) {
		System.out.println("in find by roomType :" + roomType);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(roomService.findByRoomType(roomType)));
		} catch (RuntimeException e) {
			System.out.println("err in getRoomByBoomType " + e);
			return new ResponseEntity<>("find by room type failed:invalid room type",HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
	
	
//	@GetMapping("/search/{to}/{from}/{roomType}")
//	public ResponseEntity<?> getRooms(@PathVariable(name="to") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate to1,@PathVariable(name="from")@DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate from1,@PathVariable(name="roomType") RoomType rmType ){
//		System.out.println("in search");
//		try {
//			return new ResponseEntity<>(roomService.findRooms(from1,to1,rmType),HttpStatus.OK);
//		} catch (RuntimeException e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
//
//		}
//	}
}
