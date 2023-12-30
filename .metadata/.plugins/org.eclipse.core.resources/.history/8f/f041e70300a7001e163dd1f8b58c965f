package com.kh.boot.contact.model.service;

import java.util.List;
import com.kh.boot.contact.model.vo.ContactHistory; 
import com.kh.boot.contact.model.vo.ContactSource;

public interface ContactService {
	 // 연락망 조회 
	 List<ContactSource> selectSourceList();  
	 
	 // 해당 연락망 조회 및 전체연락기록 조회
	 ContactSource selectSource(String contactName);
	 List<ContactHistory> selectHistoryList(String contactName);
	 
	// 연락망 추가/수정/삭제 
	 int insertSource(ContactSource contactSource);  
	 int updateSource(ContactSource contactSource); 
	 int deleteSource(String contactName);
	

	// 연락기록 추가/수정/삭제 
	 int insertHistory(ContactHistory contactHistory);
	// int updateHistory(ContactHistory contactHistory); 
	 int deleteHistory(int contactNo);

	
	
	//특정인물만의 모든 연락기록 삭제
	 //int deleteAllHistory(String contactName);
	 
	
}