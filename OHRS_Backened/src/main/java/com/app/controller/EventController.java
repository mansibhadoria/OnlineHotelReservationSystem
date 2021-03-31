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
import com.app.dto.EventDTO;
import com.app.pojos.Event;
import com.app.pojos.EventType;
import com.app.service.IEventService;

@CrossOrigin(origins="http://localhost:3000")//to tell SC to allow req handling coming from any origin(ie: any web app)
@RestController
@RequestMapping("/events")
public class EventController {
	@Autowired
	private IEventService eventService;

	public EventController() {
		System.out.println("in cnstr of" + getClass().getName());
	}

	@PostMapping("/add")
	public ResponseEntity<?> addEvent(@RequestBody Event event) {
		System.out.println("in add event: " + event);
		return ResponseEntity.ok(new ResponseDTO<>(eventService.addEvent(event)));
	}

	@GetMapping
	public ResponseEntity<?> getAllevents() {
		System.out.println("in list all events");
		return ResponseEntity.ok(new ResponseDTO<>(eventService.getAllEvents()));
	}
	
	@GetMapping("/{eventId}")
	public ResponseEntity<?> getEventById(@PathVariable int eventId) {
		System.out.println("in find by id :" + eventId);
		
		try{return ResponseEntity.ok(new ResponseDTO<>(eventService.getEventById(eventId)));
		}catch (RuntimeException e) {
			System.out.println("err in geteventById " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}

		}

	@DeleteMapping("/{eventId}")
	public ResponseEntity<?> deleteEventDetails(@PathVariable int eventId) {
		System.out.println("in delete event :" + eventId);
		try{
			return ResponseEntity.ok(new ResponseDTO<>(eventService.deleteEvent(eventId)));
		}catch (RuntimeException e) {
			System.out.println("err in deleteeventDetails " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/{eventId}")
	public ResponseEntity<?> updateEventDetails(@PathVariable int eventId, @RequestBody EventDTO eventdto) {
		System.out.println("in update event :" + eventId);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(eventService.updateEventDetails(eventId, eventdto)));
		} catch (RuntimeException e) {
			System.out.println("err in update event " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	
	@GetMapping("/type/{eventType}")
	public ResponseEntity<?> getEventByEventType(@PathVariable EventType eventType) {
		System.out.println("in find by eventType :" + eventType);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(eventService.findByEventType(eventType)));
		} catch (RuntimeException e) {
			System.out.println("err in getEventByBoomType " + e);
			return new ResponseEntity<>("find by event type failed:invalid event type",HttpStatus.NOT_FOUND);

		}
	}
}
