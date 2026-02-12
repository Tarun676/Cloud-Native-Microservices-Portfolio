package com.portfolio.certificates.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "certificates")
public class Certificate {
    @Id
    private String id;
    private String name;
    private String issuer;
    private String date;
    private String url;
}
