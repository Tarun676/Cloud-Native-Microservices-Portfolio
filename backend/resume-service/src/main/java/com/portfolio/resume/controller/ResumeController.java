package com.portfolio.resume.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "*")
public class ResumeController {

    @GetMapping
    public ResponseEntity<byte[]> getResume() {
        // Mocking a PDF file response
        String dummyPdfContent = "%PDF-1.4 ... (Mock Resume for Demo)";
        byte[] pdfBytes = dummyPdfContent.getBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "resume.pdf");

        return ResponseEntity.ok()
                .headers(headers)
                .body(pdfBytes);
    }

    @GetMapping("/info")
    public String getResumeInfo() {
        return "Resume Service is Active. Download Endpoint: /api/resume";
    }
}
