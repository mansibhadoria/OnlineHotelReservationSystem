package com.app;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.GuestRepository;
import com.app.dto.GuestDTO;
import com.app.service.IGuestService;

@SpringBootTest
public class TestGuestService {
	@Autowired
	private IGuestService service;

	@Mock
	private GuestRepository repo;

	@Test
	public void testGetGuestById() {
		GuestDTO g = service.getGuestById(1);
		assertEquals("ila", g.getFirstName());

	}

	@Test
	public void testGetAllGuests() {
		List<GuestDTO> list = service.getAllGuests();
		list.forEach(System.out::println);
		assertEquals(4, list.size());
	}

}
