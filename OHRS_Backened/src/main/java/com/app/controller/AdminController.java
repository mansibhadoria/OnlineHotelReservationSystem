package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Admin;
import com.app.service.IAdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private IAdminService adminService;

	public AdminController() {
		System.out.println("in constr of " + getClass().getName());
	}

	@PostMapping("/login")
	public ResponseEntity<?> authenticateAdmin(@RequestBody Admin admin) {
		System.out.println("in auth admin " + admin);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(adminService.authenticateAdmin(admin.getEmailAddress(),admin.getPassword())));
		} catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addAdmin(@RequestBody Admin admin) {
		System.out.println("in add admin:" + admin);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(adminService.addAmin(admin)));
		} catch (RuntimeException e) {
			System.out.println("err in add admin " + e);
			return new ResponseEntity<>("add guest failed:enter correct info",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping
	public ResponseEntity<?> getAllAdmin() {
		System.out.println("in get all admins");
		return ResponseEntity.ok(new ResponseDTO<>(adminService.getAllAdmin()));
	}

	@GetMapping("/{adminId}")
	public ResponseEntity<?> getAdminById(@PathVariable int adminId) {
		System.out.println("in find by id :" + adminId);
		// return adminService.getGuestById(adminId);
		try {
			return ResponseEntity.ok(adminService.getAdminById(adminId));
		} catch (RuntimeException e) {
			System.out.println("err in findByID admin " + e);
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}

}
