package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Event;
import com.app.pojos.EventType;

public interface EventRepository extends JpaRepository<Event, Integer> {
	@Query(value="select e from Event e where e.eventType=:eventType")
	public List<Event> findByEventType(EventType eventType);

}
