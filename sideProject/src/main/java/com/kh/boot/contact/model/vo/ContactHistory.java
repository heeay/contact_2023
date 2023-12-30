
	
	package com.kh.boot.contact.model.vo;

	import java.sql.Date;

	import lombok.AllArgsConstructor;
	import lombok.Builder;
	import lombok.Getter;
	import lombok.NoArgsConstructor;
	import lombok.Setter;
	import lombok.ToString;

	@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @ToString
	public class ContactHistory {

		private int contactNo;
		private String contactName;
		private String contactContent;
		private String contactDate;

	}