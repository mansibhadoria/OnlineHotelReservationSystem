package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dto.AdminDTO;
import com.app.exceptions.ResourceNotFoundException;
import com.app.pojos.Admin;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
@Autowired
private AdminRepository adminRepo;

public AdminServiceImpl() {
	System.out.println("in constr of " + getClass().getName());
}
	@Override
	public AdminDTO  addAmin(Admin  admin) {
		//admin.setRole(Role.ADMIN);
		Admin persistentAdmin = adminRepo.save(admin);
		// for sending response copy persistent user details ---> user dto(so that you
		// can control what all to share with the front end)
		AdminDTO admindto = new AdminDTO();
		BeanUtils.copyProperties(persistentAdmin, admindto);
		return admindto;
	}

	@Override
	public AdminDTO getAdminById(int adminId) {
		Admin admin=adminRepo.findById(adminId).orElseThrow(()->new ResourceNotFoundException("get admin dtls failed:Invalid Admin ID"));
		AdminDTO admindto = new AdminDTO();
		BeanUtils.copyProperties(admin, admindto);
		System.out.println("admin="+admin);
		System.out.println("admin DTO  " + admindto);
		return admindto;
	}
	
	@Override
	public List<AdminDTO> getAllAdmin() {
		List<AdminDTO> list = new ArrayList<>();
		adminRepo.findAll().forEach(u -> {
			AdminDTO admindto = new AdminDTO();
			BeanUtils.copyProperties(u, admindto);
			list.add(admindto);
		});
		return list;
	}
	@Override
	public AdminDTO authenticateAdmin(String email, String pwd) {
		Optional<Admin> optionalAdmin=adminRepo.findByEmailAddressAndPassword(email, pwd);
		Admin admin=optionalAdmin.orElseThrow(() -> new ResourceNotFoundException("invalid admin details"));
		AdminDTO admindto = new AdminDTO();
		BeanUtils.copyProperties(admin, admindto);

           return admindto;
	}

}
