package com.portfolio.certificates.controller;

import com.portfolio.certificates.model.Certificate;
import com.portfolio.certificates.repository.CertificateRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
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

    @PostConstruct
    public void seedData() {
        if (certificateRepository.count() == 0) {
            Certificate c1 = new Certificate();
            c1.setName("AWS Certified Solutions Architect");
            c1.setIssuer("Amazon Web Services");
            c1.setDate("2024");
            c1.setUrl("https://aws.amazon.com/certification/");

            Certificate c2 = new Certificate();
            c2.setName("Certified Kubernetes Administrator");
            c2.setIssuer("CNCF");
            c2.setDate("2023");
            c2.setUrl("https://www.cncf.io/certification/cka/");

            certificateRepository.saveAll(Arrays.asList(c1, c2));
            System.out.println("Seeded Certificates Data");
        }
    }
}
