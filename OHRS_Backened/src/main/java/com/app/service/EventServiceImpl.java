package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EventRepository;
import com.app.dto.EventDTO;
import com.app.exceptions.ResourceNotFoundException;
import com.app.pojos.Event;
import com.app.pojos.EventType;


@Service
@Transactional
public class EventServiceImpl implements IEventService {
@Autowired 
private EventRepository eventRepo;

public EventServiceImpl() {
	System.out.println("in constr of "+getClass().getName());
}
	@Override
	public EventDTO addEvent(Event event) {
		Event persistentEvent = eventRepo.save(event);
		EventDTO eventdto = new EventDTO();
		BeanUtils.copyProperties(persistentEvent, eventdto);
		return  eventdto;
	}

	@Override
	public List<EventDTO> getAllEvents() {
		List<EventDTO> list = new ArrayList<>();
		eventRepo.findAll().forEach(u -> {
			EventDTO dto = new EventDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);
		});
		return list;
	}

	@SuppressWarnings("unused")
	@Override
	public String deleteEvent(int eventId) {
		Event event = eventRepo.findById(eventId).orElseThrow(() -> new ResourceNotFoundException("delete event failed:Invalid Event ID"));
		eventRepo.deleteById(eventId);
		return "Event details for ID "+eventId+" deleted...";
	}

	@Override
	public EventDTO updateEventDetails(int eventId, EventDTO eventDTO) {
		System.out.println("in update " + eventId);
		Event event=eventRepo.findById(eventId).orElseThrow(() -> new ResourceNotFoundException("update event failed:Invalid Event ID"));
		System.out.println("from db:"+event);
		BeanUtils.copyProperties(eventDTO,event);	
		System.out.println("updated event dtls " +event);
		return eventDTO;
	}

	@Override
	public EventDTO getEventById(int eventId) {
		Event event=eventRepo.findById(eventId).orElseThrow(() -> new ResourceNotFoundException("get event failed:Invalid Event ID"));
		EventDTO dto = new EventDTO();
		BeanUtils.copyProperties(event,dto);
		System.out.println("event= " +event);
		System.out.println("event DTO  " + dto);
		return dto;
	}

	@Override
	public List<EventDTO> findByEventType(EventType eventType) {
		System.out.println("event type:"+eventType);
		List<EventDTO> list = new ArrayList<>();
		eventRepo.findByEventType(eventType).forEach(u -> {
			EventDTO dto = new EventDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);
		});
		return list;
	}

}
