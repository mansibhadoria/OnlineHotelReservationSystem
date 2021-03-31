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

import com.app.pojos.Guest;
import com.fasterxml.jackson.databind.ObjectMapper;


@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class TestGuestController {
	// randomly available free port is injected in local server port
		@LocalServerPort
		private int serverPort;
		// Abstraction of REST client to be used in test scenario
		@Autowired
		private MockMvc mockMvc;

		@Autowired
		private ObjectMapper mapper;

	
	@Test
	public void testGetGuestById() throws Exception {
		MvcResult result= mockMvc.perform(get("/guests/6").contentType(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andReturn();

	}
	
	@Test
	public void testAddGuest() throws Exception {
		Guest guest = new Guest("abhi@gmail.com","abhi#234","abhi","gupta","8794529638");
		MvcResult result = mockMvc
				.perform(post("/guests/register").contentType(MediaType.APPLICATION_JSON)
						.content(mapper.writeValueAsString(guest)))
				.andDo(print()).andExpect(status().isOk()).andReturn();
		
	}

	public void testGetAllGuests() throws Exception {
		MvcResult result = mockMvc.perform(get("/guests").contentType(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andReturn();
	}
}
