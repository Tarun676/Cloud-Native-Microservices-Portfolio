package com.portfolio.certificates.controller;

import com.portfolio.certificates.model.Certificate;
import com.portfolio.certificates.repository.CertificateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/certificates")
@CrossOrigin(origins = "*")
public class CertificatesController {

    @Autowired
    private CertificateRepository certificateRepository;

    @GetMapping
    public List<Certificate> getAllCertificates() {
        return certificateRepository.findAll();
    }

    @PostMapping
    public Certificate addCertificate(@RequestBody Certificate certificate) {
        return certificateRepository.save(certificate);
    }
} 
