package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name="admin")
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="admin_id")
	private Integer id;
	@Column(length = 20,unique =true,nullable = false)
	@Email(message = "Invalid email format")
	private String emailAddress;
	@Length(min=3, max=20)
	@Column(length = 20,nullable = false)
	private String password;

	public Admin() {
		// TODO Auto-generated constructor stub
	}
	
	
	public Admin(@Email(message = "Invalid email format") String emailAddress,
			@Length(min = 3, max = 20) String password) {
		super();
		this.emailAddress = emailAddress;
		this.password = password;
		
	}


	@Override
	public String toString() {
		return "Admin [id=" + id + ", emailAddress=" + emailAddress + ", password=" + password + "]";
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
