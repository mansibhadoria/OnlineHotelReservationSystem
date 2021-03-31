package com.app;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.app.pojos.Room;
import com.app.pojos.RoomType;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class TestRoomController {
	// randomly available free port is injected in local server port
	@LocalServerPort
	private int serverPort;
	// Abstraction of REST client to be used in test scenario
	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper mapper;

	@Test
	public void testGetRoomById() throws Exception {
		MvcResult result = mockMvc.perform(get("/rooms/2").contentType(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andReturn();

	}

	@Test
	public void testAddRoom() throws Exception {
		Room room = new Room(RoomType.EXECUTIVE, true, 3000.0, 2, "Executive room");
		MvcResult result = mockMvc
				.perform(post("/rooms/add").contentType(MediaType.APPLICATION_JSON)
						.content(mapper.writeValueAsString(room)))
				.andDo(print()).andExpect(status().isOk()).andReturn();
		room.setRoomId(34);
	}

	public void testGetAllRooms() throws Exception {
		MvcResult result = mockMvc.perform(get("/rooms").contentType(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andReturn();
	}
	
	

}
