package com.kh.boot.contact.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.kh.boot.contact.model.vo.ContactHistory;
import com.kh.boot.contact.model.vo.ContactSource;

@Mapper
public interface ContactMapper {

	 List<ContactSource> selectSourceList(); 
	 ContactSource selectSource(String contactName);
	 int alram(String contactName);
	 
	 int insertSource(ContactSource contactSource); 
	 int updateSource(ContactSource contactSource); 
	 int deleteSource(String contactName);
	
	 List<ContactHistory> selectHistoryList(String contactName); 
	 ContactHistory selectHistory(int contactNo);

	 int insertHistory(ContactHistory contactHistory);
	 int updateLastDate(ContactHistory contactHistory);
	 
	 int updateHistory(ContactHistory contactHistory); 
	 int deleteHistory(int contactNo);

	 int deleteAllHistory(String contactName);
}
