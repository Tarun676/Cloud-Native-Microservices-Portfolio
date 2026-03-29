<div align="center">

# 🌿 Anti-Portfolio

**A Premium, Clean, and Cloud-Native Personal Portfolio**

[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)](https://spring.io/projects/spring-boot)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

*A beautifully architected microservices-based portfolio showcasing extreme frontend polish and robust backend architecture.*

</div>

---

## ✨ Features

- **Pristine "Clean & Green" UI**: A refreshing, highly polished frontend interface that feels alive.
- **Interactive 3D Elements**: Hardware-accelerated, draggable ecosystem globe featuring your tech stack, running at a buttery-smooth 60FPS.
- **Cinematic Transitions**: Liquid-smooth crossfading routing powered by Framer Motion's `AnimatePresence`.
- **Immersive Feedback**: Subtle, high-quality Web Audio API acoustic feedback for interactions and navigation.
- **Serverless Communications**: Real-time, instant contact routing powered by `@emailjs/browser` without managing a mail server.
- **Distributed Backend**: Fully decoupled Spring Boot microservices managing projects, certificates, and profile data via MongoDB.

## 🛠️ Tech Stack

### 🎨 Frontend
- **Framework**: React 19
- **Build Tool**: Vite (Lightning fast HMR)
- **Styling**: Tailwind CSS & Framer Motion
- **Integrations**: EmailJS, Lucide React (Icons)

### ⚙️ Backend Services
- **Framework**: Spring Boot 3.2.0 (Java 17)
- **Database**: MongoDB
- **Architecture**: Microservices (Profile, Projects, Resume, Certificates)

### ☁️ Infrastructure
- **Containerization**: Docker & Docker Compose
- **Hosting / Edge**: Vercel (Frontend Global Edge CDN)
- **CI/CD**: GitHub Actions

## 🏗️ Architecture

```mermaid
graph TD
    %% Styling
    classDef clear fill:#f9f9f9,stroke:#333,stroke-width:2px;
    classDef green fill:#d4edda,stroke:#28a745,stroke-width:2px;
    
    User((User)) -->|Browser| Frontend[Frontend (React/Vite)]:::green
    Frontend -->|Serverless Mail| EmailJS[EmailJS Cloud]
    Frontend -->|HTTP/REST| ProfileService[Profile Service]:::clear
    Frontend -->|HTTP/REST| ProjectService[Project Service]:::clear
    Frontend -->|HTTP/REST| ResumeService[Resume Service]:::clear
    Frontend -->|HTTP/REST| CertService[Certificate Service]:::clear
    
    ProfileService -->|Persist| DB1[(Mongo DB)]:::green
    ProjectService -->|Persist| DB1
    ResumeService -->|Persist| DB1
    CertService -->|Persist| DB1
```

## 🚀 Getting Started

### Prerequisites

Ensure you have **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** installed and actively running on your machine.

### Local Development (Quick Start)

The easiest way to initialize the full stack (Frontend + Backend Microservices) is via the included batch script:

1. **Launch the Stack**: Double-click `start_app.bat` or run `.\start_app.bat` in your terminal.
2. **Wait**: Allow 10-20 seconds for the Docker containers and Spring Boot services to spin up.
3. **View**: The frontend will automatically launch your default browser at `http://localhost:5173`.

### 🌍 Deployment (Vercel)

The React UI is perfectly suited for zero-config deployment on Vercel:
1. Import your repository to Vercel.
2. Set the Root Directory to `frontend`.
3. Add your EmailJS Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Click **Deploy**.

## 📂 Project Structure

```text
Anti-Portfolio/
├── backend/                # Spring Boot Microservices
│   ├── certificates-service/
│   ├── profile-service/
│   ├── projects-service/
│   └── resume-service/
├── frontend/               # React Client Application
│   ├── src/components/     # UI, 3D Globe, Navigation
│   ├── src/pages/          # Route Views
│   └── src/index.css       # Global styles & Tailwind
├── docker/                 # Orchestration configs
│   └── docker-compose.dev.yml
└── start_app.bat           # Local environment launcher
```

---
<div align="center">
  <i>Architected and Built by Tarun</i>
</div>
