package com.portfolio.profile.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Data
@Document(collection = "profiles")
public class Profile {
    @Id
    private String id;
    private String name;
    private String title;
    private String summary;
    private Map<String, List<String>> skills; // e.g., "Languages": ["Java", "JS"], "Tools": ["Docker"]
    private List<String> currentFocus; // What I am learning
}
