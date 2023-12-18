package com.kh.boot.contact.model.vo;

import java.sql.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @ToString
public class ContactSource {

	private String contactName;
	private String contactImage;
	private String contactGroup;
	private String contactPhone;
	private Date lastDate;
	private int contactPeriod;
	private List<ContactHistory> contactHistory;

}
	