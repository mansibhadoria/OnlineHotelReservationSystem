
package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.dao.GuestRepository;
import com.app.dto.BookingDTO;
import com.app.dto.GuestDTO;
import com.app.exceptions.ResourceNotFoundException;
import com.app.pojos.Booking;
import com.app.pojos.Guest;


@Service
@Transactional
public class GuestServiceImpl implements IGuestService {
	@Autowired
	private GuestRepository guestRepo;

	public GuestServiceImpl() {
		System.out.println("in constr of " + getClass().getName());
	}

	@Override
	public GuestDTO addGuest(Guest guest) {
		Guest persistentGuest = guestRepo.save(guest);
		GuestDTO guestdto = new GuestDTO();
		BeanUtils.copyProperties(persistentGuest, guestdto);
		return guestdto;
	}

	@Override
	public List<GuestDTO> getAllGuests() {
		List<GuestDTO> list = new ArrayList<>();
		guestRepo.findAll().forEach(u -> {
			GuestDTO guestDTO = new GuestDTO();
			BeanUtils.copyProperties(u, guestDTO);
			list.add(guestDTO);
		});
		return list;
	}
    
	@SuppressWarnings("unused")
	@Override
	public String deleteGuestDetails(int guestId) {
		Guest guest =guestRepo.findById(guestId).orElseThrow(() -> new ResourceNotFoundException("delete guest failed:Invalid guest ID"));
		guestRepo.deleteById(guestId);
		return "Guest details for ID "+guestId+" deleted...";
	}

	@Override
	public GuestDTO updateGuestDetails(int guestId, GuestDTO guestDTO) {
		System.out.println("in update " + guestDTO);
		Guest guest=guestRepo.findById(guestId).get();
		System.out.println("from db:"+guest);
		BeanUtils.copyProperties(guestDTO, guest);	
		System.out.println("updated user dtls " + guest);
		return guestDTO;
		
	}

	@Override
	public GuestDTO getGuestById(int guestId) {
		Guest guest = guestRepo.findById(guestId).orElseThrow(() -> new ResourceNotFoundException("get guest failed:Invalid guest ID"));
		GuestDTO guestDTO = new GuestDTO();
		BeanUtils.copyProperties(guest, guestDTO);
		System.out.println("guest= " +guest);
		System.out.println("guest DTO  " + guestDTO);
		return guestDTO;
	}

	@Override
	public GuestDTO authenticateGuest(String email, String pwd) {
		Optional<Guest> optionalGuest=guestRepo.findByEmailAddressAndPassword(email, pwd);
		Guest guest=optionalGuest.orElseThrow(() -> new ResourceNotFoundException("Login Failed : INVALID CREDENTIALS !!!"));
		GuestDTO guestdto = new GuestDTO();
		BeanUtils.copyProperties(guest, guestdto);
        return guestdto;
	}

	@Override
	public List<Booking> findBooking(int guestId) {
		List<Booking> list = new ArrayList<>();
		guestRepo.getAllBooking(guestId).forEach(u -> {
//			GuestDTO guestDTO = new GuestDTO();
//			BeanUtils.copyProperties(u, guestDTO);
			list.add(u);
		});
		return list;
	}
}
