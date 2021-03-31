package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="payment_dtls")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="payment_id")
	private Integer id;
	@Column(name = "paymentDate")
	private LocalDate paymentDate;
	@Enumerated(value = EnumType.STRING)
	@Column(name = "payType")
	private PayType payType;
	@Column(length = 16)
	private long cardNo;
	private String nameOnCard;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate expDate;
	@Column(length = 3)
	private int cvv;
	@Column(name = "paymentAmount")
	private Double paymentAmount;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "guest_id")
	@JsonIgnore
	private Guest guest;
	@Override
	public String toString() {
		return "Payment [paymentDate=" + paymentDate + ", payType=" + payType + ", cardNo=" + cardNo + ", nameOnCard="
				+ nameOnCard + ", expDate=" + expDate + ", cvv=" + cvv + ", paymentAmount=" + paymentAmount + "]";
	}

	public Payment() {
		// TODO Auto-generated constructor stub
	}

	public Payment(LocalDate paymentDate, PayType payType, long cardNo, String nameOnCard, LocalDate expDate, int cvv,
			Double paymentAmount) {
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

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Guest getGuest() {
		return guest;
	}

	public void setGuest(Guest guest) {
		this.guest = guest;
	}

}