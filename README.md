# Anti-Portfolio

**A Modern, Microservices-Based Personal Portfolio**

Anti-Portfolio is a sophisticated, full-stack personal portfolio application built with a microservices architecture. It demonstrates proficiency in cloud-native development, showcasing a separation of concerns between frontend presentation and backend logic, all orchestrated via Docker.

## 🚀 Architecture Overview

The system is composed of a responsive React frontend and multiple independent Spring Boot microservices, each managing a specific domain of the portfolio (Profiles, Projects, Resumes, Certificates). All services are containerized and backed by MongoDB.

```mermaid
graph TD
    User((User)) -->|Browser| Frontend[Frontend (React/Vite)]
    Frontend -->|HTTP/REST| ProfileService[Profile Service]
    Frontend -->|HTTP/REST| ProjectService[Project Service]
    Frontend -->|HTTP/REST| ResumeService[Resume Service]
    Frontend -->|HTTP/REST| CertService[Certificate Service]
    
    ProfileService -->|Persist| DB1[(Mongo: profile_db)]
    ProjectService -->|Persist| DB1
    ResumeService -->|Persist| DB1
    CertService -->|Persist| DB1
    
    subgraph "Docker Network (portfolio-network)"
    Frontend
    ProfileService
    ProjectService
    ResumeService
    CertService
    DB1
    end
```

## 🛠️ Tech Stack

### Frontend
*   **Framework**: React 19
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Language**: TypeScript

### Backend (Microservices)
*   **Framework**: Spring Boot 3.2.0
*   **Language**: Java 17
*   **Database**: MongoDB
*   **Build Tool**: Maven

### Infrastructure & DevOps
*   **Containerization**: Docker
*   **Orchestration**: Docker Compose

## 📦 Services

| Service | Port | Description | DB Name |
| :--- | :--- | :--- | :--- |
| **Frontend** | `5173` | Main User Interface | N/A |
| **Profile Service** | `8081` | Manages user profile & bio data | `profile_db` |
| **Projects Service** | `8082` | Handles portfolio projects showcase | `projects_db` |
| **Resume Service** | `8083` | Manages CV and experience data | `resume_db` |
| **Certificates Service** | `8084` | Displays achievements & certs | `certificates_db` |
| **MongoDB** | `27017` | Shared database instance | *Various* |

## 🏁 Getting Started

### Prerequisites
*   [Docker Desktop](https://www.docker.com/products/docker-desktop/) (must be running)

### Quick Start (Windows)

The simplest way to run the application is using the provided batch script. This script handles stopping old containers, building new images, and launching the browser.

1.  Double-click `start_app.bat` in the root directory.
    *   *Or run via terminal:* `.\start_app.bat`
2.  Wait for the services to initialize (~10-30 seconds).
3.  The application will automatically open at `http://localhost:5173`.

### Manual Setup (Docker Compose)

If you prefer to run commands manually:

```bash
# Navigate to the root directory
cd path/to/Anti-Portfolio

# Build and start services in detached mode
docker-compose -f docker/docker-compose.dev.yml up -d --build

# To stop the services
docker-compose -f docker/docker-compose.dev.yml down
```

## 📂 Project Structure

```
Anti-Portfolio/
├── backend/                # Spring Boot Microservices
│   ├── certificates-service/
│   ├── profile-service/
│   ├── projects-service/
│   └── resume-service/
├── frontend/               # React + Vite Application
├── docker/                 # orchestration configs
│   └── docker-compose.dev.yml
└── start_app.bat           # Quick start script
```

## 🐛 Troubleshooting

*   **Ports Occupied**: Ensure ports `8081`-`8084` and `5173` are free.
*   **Database Connection**: If services fail to connect, ensure the `mongo` container is healthy (`docker ps`).
*   **Hot Reload**: The frontend is configured for hot-reloading (HMR) within Docker. Backend services use Spring Boot DevTools for faster restarts.

---
*Built with ❤️ by [Tarun]*
