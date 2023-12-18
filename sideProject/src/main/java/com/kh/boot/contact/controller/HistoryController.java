package com.kh.boot.contact.controller;

import java.nio.charset.Charset;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.boot.contact.model.service.ContactService;
import com.kh.boot.contact.model.vo.ContactHistory;


import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/history")
@RequiredArgsConstructor 
public class HistoryController {

	private final ContactService contactService;
	
	// 모든 연락기록만 조회
	@GetMapping
	public ResponseEntity<List<ContactHistory>> selectHistoryList(String contactName){ 
		List<ContactHistory> historyList = contactService.selectHistoryList(contactName);
		HttpHeaders header = new HttpHeaders();
		header.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<List<ContactHistory>>(historyList, header, HttpStatus.OK);
	}
	
	
	// 특정 연락기록만 조회 
	@GetMapping("/{contactNo}")
	public ResponseEntity<ContactHistory> selectHistory(@PathVariable(name="contactNo")int contactNo){
		ContactHistory history= contactService.selectHistory(contactNo);
		HttpHeaders header = new HttpHeaders();
		header.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<ContactHistory>(history, header, HttpStatus.OK);
	}
	
	// 연락기록 추가  +  곧바로 해당인물의 lastDate를 업데이트 
	@PostMapping
	public ResponseEntity<String>insertHistory(@RequestBody ContactHistory contactHistory){
		String insert = contactService.insertHistory(contactHistory) != 0 ? "success" : "fail";
		HttpHeaders header = new HttpHeaders();
		header.setContentType(new MediaType("text", "html", Charset.forName("UTF-8")));
		return new ResponseEntity<String>(insert, header, HttpStatus.OK);
	}
	
	// 연락기록 수정 *****************************************************
	@PutMapping
	public ResponseEntity<String>updateHistory(@RequestBody ContactHistory contactHistory){
		String update = contactService.updateHistory(contactHistory) != 0 ? "success" : "fail";
		HttpHeaders header = new HttpHeaders();
		header.setContentType(new MediaType("text", "html", Charset.forName("UTF-8")));
		return new ResponseEntity<String>(update, header, HttpStatus.OK);
	}
	
	// 연락기록 삭제
	@DeleteMapping("/{contactNo}")
	public ResponseEntity<String>deleteHistory(@PathVariable(name="contactNo")int contactNo){
		String delete = contactService.deleteHistory(contactNo) != 0 ? "success" : "fail";
		HttpHeaders header = new HttpHeaders();
		header.setContentType(new MediaType("text", "html", Charset.forName("UTF-8")));
		return new ResponseEntity<String>(delete, header, HttpStatus.OK);
	}
	
	// 특정인물의 모든 연락기록 삭제
	@DeleteMapping("/{contactName}")
	public ResponseEntity<String>deleteAllHistory(@PathVariable(name="contactName")String contactName){
		String deleteAll = contactService.deleteAllHistory(contactName) != 0 ? "success" : "fail";
		HttpHeaders header = new HttpHeaders();
		header.setContentType(new MediaType("text", "html", Charset.forName("UTF-8")));
		return new ResponseEntity<String>(deleteAll, header, HttpStatus.OK);
	}
	
}
