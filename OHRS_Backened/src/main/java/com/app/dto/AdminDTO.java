package com.app.dto;


public class AdminDTO {
	private Integer id;
	private String emailAddress;
   private String password;
	public AdminDTO() {
		// TODO Auto-generated constructor stub
	}
	public AdminDTO(Integer id, String emailAddress, String password) {
		super();
		this.id = id;
		this.emailAddress = emailAddress;
		this.password = password;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}