package com.app.service;

import java.util.List;

import com.app.dto.AdminDTO;
import com.app.pojos.Admin;

public interface IAdminService {
	List<AdminDTO> getAllAdmin();
	 AdminDTO getAdminById(int adminId);
	 AdminDTO  addAmin(Admin  admin);
	 
	 AdminDTO  authenticateAdmin(String email,String pwd);
}
