package com.kh.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// WebApp이 없음 
// - jsp사용 비권장 = react등을 쓰라는 뜻
// - serveltContext등 없음 = bean등록 필요없음 
// BootDashboard라는 내장톰캣이 있어 서버 필요없음
@SpringBootApplication
public class BootProjectApplication {

	// 이클립스처럼 main메서드로 프로젝트 실행함
	public static void main(String[] args) {
		SpringApplication.run(BootProjectApplication.class, args);
	}

}
