package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.PayType;

public class PaymentDTO {
	
	private LocalDate paymentDate;
	private PayType payType;
	private long cardNo;
	private String nameOnCard;
	private LocalDate expDate;
	private int cvv;
	private Double paymentAmount;
	
	public PaymentDTO() {
		// TODO Auto-generated constructor stub
}

	public PaymentDTO(LocalDate paymentDate, PayType payType, long cardNo, String nameOnCard, LocalDate expDate,
			int cvv, Double paymentAmount) {
		super();
		this.paymentDate = paymentDate;
		this.payType = payType;
		this.cardNo = cardNo;
		this.nameOnCard = nameOnCard;
		this.expDate = expDate;
		this.cvv = cvv;
		this.paymentAmount = paymentAmount;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}

	public PayType getPayType() {
		return payType;
	}

	public void setPayType(PayType payType) {
		this.payType = payType;
	}

	public long getCardNo() {
		return cardNo;
	}

	public void setCardNo(long cardNo) {
		this.cardNo = cardNo;
	}

	public String getNameOnCard() {
		return nameOnCard;
	}

	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}

	public LocalDate getExpDate() {
		return expDate;
	}

	public void setExpDate(LocalDate expDate) {
		this.expDate = expDate;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	public Double getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(Double paymentAmount) {
		this.paymentAmount = paymentAmount;
	}
}
