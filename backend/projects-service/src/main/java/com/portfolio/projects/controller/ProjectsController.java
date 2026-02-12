package com.portfolio.projects.controller;

import com.portfolio.projects.model.Project;
import com.portfolio.projects.repository.ProjectRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectsController {

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @PostConstruct
    public void seedData() {
        if (projectRepository.count() == 0) {
            Project p1 = new Project();
            p1.setTitle("Microservices Portfolio");
            p1.setDescription("A cloud-native portfolio built with Spring Boot microservices, React, and Docker.");
            p1.setTechStack(Arrays.asList("Java", "Spring Boot", "React", "Docker", "MongoDB"));
            p1.setGithubLink("https://github.com/johndoe/portfolio");
            p1.setImageUrl("https://via.placeholder.com/400x200?text=Portfolio+Project");

            Project p2 = new Project();
            p2.setTitle("E-Commerce Platform");
            p2.setDescription("Scalable e-commerce backend with event-driven architecture using Kafka.");
            p2.setTechStack(Arrays.asList("Go", "Kafka", "PostgreSQL", "Redis"));
            p2.setGithubLink("https://github.com/johndoe/ecommerce");
            p2.setDemoLink("https://demo-ecommerce.com");
            p2.setImageUrl("https://via.placeholder.com/400x200?text=E-Commerce+Project");

            projectRepository.saveAll(Arrays.asList(p1, p2));
            System.out.println("Seeded Projects Data");
        }
    }
}
