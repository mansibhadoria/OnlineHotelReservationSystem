package com.app.service;

import java.util.List;
import com.app.dto.EventDTO;
import com.app.pojos.Event;
import com.app.pojos.EventType;

public interface IEventService {
	EventDTO addEvent(Event event);
	public List<EventDTO> getAllEvents();
	String deleteEvent(int eventId);
	EventDTO updateEventDetails(int eventId, EventDTO eventDTO);
	EventDTO getEventById(int eventId);
	List<EventDTO> findByEventType(EventType eventType);
}
