package com.portfolio.profile.controller;

import com.portfolio.profile.model.Profile;
import com.portfolio.profile.repository.ProfileRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*") // Allow all for dev simplicity (In prod, use Gateway)
public class ProfileController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping
    public Profile getProfile() {
        return profileRepository.findAll().stream().findFirst().orElse(null);
    }

    @PostConstruct
    public void seedData() {
        profileRepository.deleteAll(); // Force update for development

        Profile profile = new Profile();
        profile.setName("Tarun Penumudi");
        profile.setTitle("Cloud Native Developer");
        profile.setSummary("Passionate developer specializing in microservices and cloud infrastructure.");

        Map<String, List<String>> skills = new HashMap<>();
        skills.put("Languages", Arrays.asList("Java", "TypeScript", "Python"));
        skills.put("Frameworks", Arrays.asList("Spring Boot", "React", "Next.js"));
        skills.put("DevOps", Arrays.asList("Docker", "Kubernetes", "AWS"));
        profile.setSkills(skills);

        profile.setCurrentFocus(Arrays.asList("Advanced Kubernetes Operators", "Rust"));

        profileRepository.save(profile);
        System.out.println("Seeded Profile Data for Tarun Penumudi");
    }
}
