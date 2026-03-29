import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubLink?: string;
    demoLink?: string;
    color: string;
}

const ProjectSequenceCard = ({ project, index }: { project: Project, index: number }) => {
    const isEven = index % 2 === 0;
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.1 1"]
    });
    
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const yProgress = useTransform(scrollYProgress, [0, 1], [150, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress, y: yProgress }}
            className={`flex w-full mb-16 md:mb-24 group relative ${isEven ? 'justify-start' : 'justify-end'}`}
        >
            {/* The Slim, Ultra-Wide Horizontal Card */}
            <div className={`w-[95%] xl:w-[88%] 2xl:w-[82%] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative p-8 md:p-10 glass-panel rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-dark-bg/90 hover:scale-[1.01] overflow-hidden`}>
                
                {/* Background Glow */}
                <div className={`absolute top-1/2 ${isEven ? '-right-20' : '-left-20'} -translate-y-1/2 w-96 h-96 bg-${project.color}/10 rounded-full filter blur-[120px] -z-10 pointer-events-none`}></div>
                
                {/* Subtle Background Number */}
                <div className={`absolute -top-12 ${isEven ? 'right-4' : 'left-4'} text-[12rem] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter`}>
                    0{index + 1}
                </div>

                {/* Main Content Side (Text & Description) */}
                <div className={`flex flex-col w-full lg:w-[60%] xl:w-[65%] z-10 ${!isEven ? 'lg:order-2 lg:items-end lg:text-right' : ''}`}>
                    <div className={`flex items-center gap-3 mb-3 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <span className={`w-8 h-1 bg-${project.color} rounded-full shadow-[0_0_10px_currentColor]`}></span>
                        <span className="text-xs tracking-[0.2em] text-slate-400 font-bold uppercase">Case Study</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl xl:text-5xl font-display font-bold text-white mb-4 leading-tight">
                        {project.title}
                    </h3>
                    <p className={`text-slate-300 font-light text-base md:text-lg leading-relaxed whitespace-pre-line max-w-4xl`}>
                        {project.description}
                    </p>
                </div>

                {/* Supplemental Side (Tech Stack & Links) */}
                <div className={`flex flex-col w-full lg:w-[35%] xl:w-[30%] z-10 gap-6 border-t lg:border-t-0 lg:border-x border-white/10 pt-6 lg:pt-0 ${!isEven ? 'lg:order-1 lg:items-start lg:border-r-0 lg:pr-8' : 'lg:items-end lg:border-l-0 lg:pl-8'}`}>
                    <div className="w-full">
                        <h4 className={`text-xs tracking-[0.2em] text-neon-cyan font-bold uppercase mb-4 ${!isEven ? 'text-left' : 'text-right'}`}>
                            Tools & Technologies
                        </h4>
                        <div className={`flex flex-wrap gap-2 ${!isEven ? 'justify-start' : 'justify-end'}`}>
                            {project.techStack.map(tech => (
                                <span key={tech} className="text-[11px] md:text-xs font-medium px-3 py-1.5 glass-panel text-slate-200 rounded-full border border-white/10 transition-colors hover:border-white/30 hover:bg-white/5 cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className={`flex flex-wrap gap-3 w-full mt-2 ${!isEven ? 'justify-start' : 'justify-end'}`}>
                        {project.githubLink && project.githubLink !== '#' && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 glass-panel hover:bg-white/10 rounded-full border border-white/10 transition-all text-white text-sm font-bold shadow-md hover:-translate-y-1">
                                <Github size={16} /> Source
                            </a>
                        )}
                        {project.demoLink && (
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-purple/80 hover:to-neon-blue/80 text-white rounded-full text-sm font-bold transition-all shadow-md hover:-translate-y-1`}>
                                Live Demo <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects: Project[] = [
        {
            id: '1',
            title: 'Cloud-Native Microservices Portfolio Website',
            description: 'Engineered a cloud-native portfolio platform using a microservices architecture for massive scalability and modularity. Built with a React 19 frontend and Spring Boot backend services, each connected to its own MongoDB instance.\n\nThe entire system is fully containerized with Docker, orchestrated via Docker Compose, and deployed automatically using GitHub Actions CI/CD pipelines.',
            techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Spring Boot', 'Java 17', 'MongoDB', 'Docker', 'GitHub Actions'],
            githubLink: 'https://github.com/Tarun676/Cloud-Native-Microservices-Portfolio',
            color: 'neon-cyan'
        },
        {
            id: '2',
            title: 'AWS-Based Video Streaming Platform',
            description: 'Developed a highly scalable serverless video streaming platform utilizing AWS architecture. Features secure user authentication via Cognito, high-performance global media delivery through S3 and CloudFront, and automated backend processing using Lambda functions.\n\nIncludes real-time system monitoring and alert mechanisms powered by AWS SNS to guarantee high availability and fault tolerance.',
            techStack: ['AWS S3', 'CloudFront', 'Cognito', 'Lambda', 'SNS'],
            demoLink: 'https://d12g2eg5b3nler.cloudfront.net/',
            color: 'neon-purple'
        },
        {
            id: '3',
            title: 'Distributed File System with Fault Tolerance',
            description: 'Constructed a robust distributed file system simulating enterprise cloud storage with a Master-Worker architecture. Designed for extreme high availability, featuring automatic file replication across multiple storage nodes.\n\nImplemented active heartbeat monitoring for seamless failure detection and recovery, ensuring zero data loss and uninterrupted access during node failures.',
            techStack: ['Python', 'JavaScript', 'REST APIs', 'HTML', 'CSS'],
            githubLink: 'https://github.com/Tarun676/Distributed-File-System-V2',
            color: 'neon-pink'
        },
        {
            id: '4',
            title: 'AI Healthcare Chatbot (Gemini 1.5 Pro)',
            description: 'Created an intelligent AI healthcare assistant that leverages the Gemini 1.5 Pro model to analyze symptoms and provide real-time, context-aware medical insights.\n\nBuilt with a responsive Streamlit interface, the system delivers preliminary diagnostic suggestions and guides users toward appropriate medical actions, demonstrating advanced applied Natural Language Processing.',
            techStack: ['Python', 'Streamlit', 'Google Generative AI (Gemini 1.5 Pro)', 'dotenv'],
            githubLink: 'https://github.com/Tarun676/Health-Mate-Chatbot',
            color: 'neon-blue'
        },
        {
            id: '5',
            title: 'Dynamic Weather Forecast Web Application',
            description: 'Developed a dynamic weather dashboard integrating third-party APIs to deliver real-time meteorological data and multi-day forecasts through a stunning glassmorphism UI.\n\nFeatures custom animations that adapt to live weather conditions, and utilizes backend caching algorithms to drastically reduce API latency and ensure lightning-fast response times.',
            techStack: ['Java 21', 'Spring Boot', 'Thymeleaf', 'HTML', 'CSS', 'Docker', 'OpenWeatherMap API'],
            githubLink: 'https://github.com/Tarun676/Weather_Fetcher',
            color: 'neon-cyan'
        }
    ];

    return (
        <div className="min-h-screen relative z-10 w-full pt-8 pb-32">
            {/* Header constrained normally */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-4"
            >
                {/* Header Section */}
                <div className="text-center mb-16 relative pt-4">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/10 blur-[120px] -z-10 rounded-full"
                    />
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-tight mb-4">
                        Featured<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-aurora bg-[length:200%_auto] italic pr-4">
                            Projects
                        </span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Projects that reflect my practical experience in building efficient, scalable, and user-focused applications.
                    </p>
                </div>
            </motion.div>

            {/* Breakout Container for Extreme Left/Right Alignment */}
            <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8 xl:px-16 overflow-hidden">
                <div className="flex flex-col w-full pb-10">
                    {projects.map((project, index) => (
                        <ProjectSequenceCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* GitHub CTA Section constrained normally */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center mt-10 p-12 glass-panel rounded-[3rem] text-center w-full max-w-4xl mx-auto border border-white/10 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Github size={48} className="text-white mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h2 className="text-3xl font-display font-bold text-white mb-4">Explore More Projects</h2>
                <p className="text-slate-400 max-w-lg mb-10 text-lg">
                    Many of my smaller scripts, learning repositories, and ongoing experiments are hosted directly on my GitHub profile.
                </p>
                <a href="https://github.com/tarun676" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-dark-bg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Explore GitHub Repositories
                </a>
            </motion.div>
        </div>
    );
};

export default Projects;
