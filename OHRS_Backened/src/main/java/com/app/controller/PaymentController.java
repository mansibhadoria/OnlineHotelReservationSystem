package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Payment;
import com.app.service.IPaymentService;

@CrossOrigin(origins="http://localhost:3000")//to tell SC to allow req handling coming from any origin(ie: any web app)
@RestController
@RequestMapping("/payments")
public class PaymentController {
@Autowired
private IPaymentService service;

public PaymentController() {
	System.out.println("in constr of "+getClass().getName());

}
//
@PostMapping("/{bookId}")
public ResponseEntity<?> addPayment(@PathVariable long bookId, @RequestBody Payment pay){
	System.out.println("in payment room");
	try {
		return ResponseEntity.ok(new ResponseDTO<>(service.addPayment(bookId, pay)));
	}catch(RuntimeException e)
      {
  	return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
     }
	
	
}

}
