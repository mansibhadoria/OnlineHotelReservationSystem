package com.app.service;


import com.app.dto.PaymentDTO;
import com.app.pojos.Payment;

public interface IPaymentService {
public PaymentDTO  addPayment(long bookingId,Payment payment);

}
