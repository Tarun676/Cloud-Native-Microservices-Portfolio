# Anti-Portfolio

**A Premium, Cloud-Native Personal Portfolio**

Anti-Portfolio is a sophisticated, full-stack personal portfolio application built with a microservices architecture. It demonstrates proficiency in cloud-native development, responsive high-end UI/UX design, and seamless third-party serverless integrations.

## 🌟 Premium UX Features

*   **Pristine Light Theme Switch**: "Violently pristine" light-mode inversion utilizing advanced CSS hue-rotation logic without destroying asset original colors.
*   **Immersive UX Audio**: Custom Web Audio API synthesizers generate high-quality acoustic feedback ("swoosh" and "click") synchronously on navigation and modal interactions.
*   **Cinematic Page Transitions**: Liquid-smooth crossfading routing powered exclusively by Framer Motion's `AnimatePresence` and custom React Layout keys.
*   **Serverless Email Context**: Fully serverless, real-time contact form routed instantaneously via **@emailjs/browser**, equipped with a beautiful custom HTML alert template.
*   **3D Tech Stack Sphere**: Hardware-accelerated, draggable, and fully interactive technology globe rendering 20+ SVG Devicons beautifully at a locked 60FPS.
*   **Ambient Navigation**: Pinned neon Scroll Progress indicators and a macOS-dock inspired "Flower Arch" hovering Socials configuration.

## 🚀 Architecture Overview

The system's UI is an ultra-fast, natively static React application backed optionally by independent Spring Boot microservices, all elegantly containerized and orchestrated via Docker.

```mermaid
graph TD
    User((User)) -->|Browser| Frontend[Frontend (React/Vite)]
    Frontend -->|Serverless Mail| EmailJS[EmailJS Cloud]
    Frontend -->|HTTP/REST| ProfileService[Profile Service]
    Frontend -->|HTTP/REST| ProjectService[Project Service]
    Frontend -->|HTTP/REST| ResumeService[Resume Service]
    Frontend -->|HTTP/REST| CertService[Certificate Service]
    
    ProfileService -->|Persist| DB1[(Mongo: profile_db)]
    ProjectService -->|Persist| DB1
    ResumeService -->|Persist| DB1
    CertService -->|Persist| DB1
```

## 🛠️ Tech Stack

### Frontend & UI
*   **Framework**: React 19 (Hooks, Context)
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Motion**: Framer Motion (Spring Physics, 3D Transforms)
*   **Integrations**: EmailJS (Serverless Contact), Lucide React (Iconography)

### Backend (Microservices)
*   **Framework**: Spring Boot 3.2.0
*   **Language**: Java 17
*   **Database**: MongoDB
*   **Build Tool**: Maven

### Infrastructure & DevOps
*   **Hosting**: Vercel (Frontend Global Edge CDN)
*   **Containerization**: Docker
*   **Orchestration**: Docker Compose
*   **CI/CD**: GitHub Actions

## 🏁 Getting Started

### Prerequisites
*   [Docker Desktop](https://www.docker.com/products/docker-desktop/) (must be running)

### Quick Start (Local Docker Strategy)

The simplest way to run the full stack API application locally is using the provided batch script.

1.  Double-click `start_app.bat` in the root directory.
    *   *Or run via terminal:* `.\start_app.bat`
2.  Wait for the backend services to initialize (~10-30 seconds).
3.  The application will automatically open at `http://localhost:5173`.

### Vercel Deployment (Frontend Only)

Because the UI is dynamically disconnected from backend requirements thanks to `EmailJS`, the React frontend can be published for free instantly:

1. Connect the repository to your Vercel Dashboard.
2. Select the `frontend` folder as the Root Directory.
3. Configure the following Environment Variables before deploying:
   *   `VITE_EMAILJS_SERVICE_ID`
   *   `VITE_EMAILJS_TEMPLATE_ID`
   *   `VITE_EMAILJS_PUBLIC_KEY`
4. Click Deploy.

## 📂 Project Structure

```
Anti-Portfolio/
├── backend/                # Spring Boot Microservices
│   ├── certificates-service/
│   ├── profile-service/
│   ├── projects-service/
│   └── resume-service/
├── frontend/               # React + Vite Application
│   ├── src/components/     # Interactive UI (TechGlobe, Modals, Audio)
│   ├── src/pages/          # Route Views
│   └── .env                # Local API Config (Git Ignored)
├── docker/                 # orchestration configs
│   └── docker-compose.dev.yml
└── start_app.bat           # Quick start script
```

---
*Architected and Built by [Tarun]*
