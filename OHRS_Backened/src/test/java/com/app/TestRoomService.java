package com.app;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.RoomRepository;
import com.app.dto.RoomDTO;

import com.app.pojos.RoomType;
import com.app.service.IRoomService;

@SpringBootTest
public class TestRoomService {
@Autowired
private IRoomService service;

@Mock
private RoomRepository repo;
@Test
public void testgetRoomById() {
       RoomDTO room=service.getRoomById(1);
	assertEquals(700.0,room.getRoomPrice());
	
}

@Test
public void testGetAllRooms() {
	List<RoomDTO> list=service.getAllRooms();
	list.forEach(System.out::println);
	assertEquals(20, list.size());
}


@Test
public void testFindByRoomType() {
	List<RoomDTO> list=service.findByRoomType(RoomType.SINGLE);
	assertEquals(4, list.size());
}


}
