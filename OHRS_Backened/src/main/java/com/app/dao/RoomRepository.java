package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Room;
import com.app.pojos.RoomType;

public interface RoomRepository extends JpaRepository<Room, Integer> {

@Query(value="select r from Room r where r.roomType=:roomType")
	public List<Room> findByRoomType(RoomType roomType);


}

