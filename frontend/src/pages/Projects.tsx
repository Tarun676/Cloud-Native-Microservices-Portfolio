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
    imageUrl: string;
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
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
    const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress, y: yProgress }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center w-full min-h-[350px] mb-24 last:mb-16 group`}
        >
            {/* Visual Side (Smaller Image Container, Clean without overlays) */}
            <div className={`w-full lg:w-1/2 h-[250px] lg:h-[320px] relative rounded-[2rem] overflow-hidden glass-panel border border-white/10 shadow-2xl flex items-center justify-center bg-dark-bg transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-${project.color}/10 rounded-full filter blur-[80px] z-0`}></div>
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            {/* Content Side */}
            <div className={`w-full lg:w-1/2 flex flex-col justify-center relative ${isEven ? 'lg:pl-4 text-left' : 'lg:pr-4 text-left lg:text-right'}`}>
                {/* Large Background Number */}
                <div className={`absolute -top-12 ${isEven ? 'left-0' : 'right-0'} text-[10rem] font-display font-black text-white/[0.03] select-none -z-10 leading-none tracking-tighter`}>
                    0{index + 1}
                </div>

                <div className={`flex flex-col mb-6 ${!isEven && 'lg:items-end'}`}>
                    <div className="flex items-center gap-3 mb-3">
                        <span className={`w-10 h-1 bg-${project.color} rounded-full`}></span>
                        <span className="text-xs tracking-[0.2em] text-slate-400 font-bold uppercase">Featured Case Study</span>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-display font-bold text-white transition-all duration-300">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-400 font-light text-lg leading-relaxed mb-8 text-left lg:text-justify xl:text-left">
                    {project.description}
                </p>

                <div className={`flex flex-wrap gap-2 mb-8 ${!isEven && 'lg:justify-end'}`}>
                    {project.techStack.map(tech => (
                        <span key={tech} className={`text-xs font-bold px-4 py-2 glass-panel text-slate-200 rounded-full border border-white/10 shadow-sm transition-colors hover:border-white/30`}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className={`flex flex-wrap gap-4 ${!isEven && 'lg:justify-end'}`}>
                    {project.githubLink && project.githubLink !== '#' ? (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 glass-panel hover:bg-white/10 rounded-full border border-white/10 transition-all text-white font-bold shadow-md group/btn hover:-translate-y-1">
                            <Github size={18} className="group-hover/btn:rotate-12 transition-transform" /> 
                            <span className="text-sm">Source Code</span>
                        </a>
                    ) : (
                        <span className="flex items-center justify-center gap-2 px-6 py-3 glass-panel opacity-50 rounded-full border border-white/5 text-slate-400 cursor-not-allowed shadow-inner backdrop-blur-sm">
                            <Github size={18} /> 
                            <span className="text-sm">Private Code</span>
                        </span>
                    )}
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-purple/80 hover:to-neon-blue/80 text-white rounded-full font-bold transition-all shadow-md group/btn hover:-translate-y-1`}>
                            <span className="text-sm">Live Demo</span> <ExternalLink size={18} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects: Project[] = [
        {
            id: '1',
            title: 'My-Portfolio (Cloud Native)',
            description: 'A modern, high-performance portfolio website built with a microservices architecture. Features continuous deployment, zero-downtime updates, and a fully Dockerized serving environment.',
            techStack: ['React', 'Spring Boot', 'Docker', 'Kubernetes'],
            githubLink: '#',
            imageUrl: '/portfolio_preview.png',
            color: 'neon-cyan'
        },
        {
            id: '2',
            title: 'Weather Fetcher',
            description: 'A robust weather data aggregation service utilizing third-party APIs to provide real-time meteorological information with seamless error handling and caching.',
            techStack: ['Java', 'Spring Boot', 'REST APIs'],
            githubLink: 'https://github.com/Tarun676/Weather_Fetcher',
            imageUrl: '/weather_preview.png',
            color: 'neon-blue'
        },
        {
            id: '3',
            title: 'Movie Streaming Platform',
            description: 'A scalable serverless streaming platform leveraging the full power of AWS. Movies securely stored in S3, globally delivered via CloudFront, with Cognito authentication.',
            techStack: ['AWS', 'S3', 'CloudFront', 'Cognito'],
            githubLink: '#',
            imageUrl: '/streaming_preview.png',
            color: 'neon-purple'
        },
        {
            id: '4',
            title: 'Distributed File System V2',
            description: 'A fault-tolerant distributed file system designed from the ground up for extreme high availability, concurrent access, and unmatched data integrity across nodes.',
            techStack: ['Java', 'Sockets', 'Algorithms'],
            githubLink: 'https://github.com/Tarun676/Distributed-File-System-V2',
            imageUrl: '/dfs_preview.png',
            color: 'neon-pink'
        }
    ];

    return (
        <div className="min-h-screen relative z-10 w-full pt-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-4"
            >
                {/* Header Section */}
                <div className="text-center mb-24 relative pt-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/10 blur-[120px] -z-10 rounded-full"
                    />
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-tight mb-6">
                        Featured<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-aurora bg-[length:200%_auto] italic pr-4">
                            Projects
                        </span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        A collection of my recent work, experiments, and side projects. Each piece represents a journey of learning and problem-solving
                    </p>
                </div>

                {/* Sequential Layout */}
                <div className="flex flex-col w-full pb-32">
                    {projects.map((project, index) => (
                        <ProjectSequenceCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* GitHub CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center mt-10 mb-32 p-12 glass-panel rounded-[3rem] text-center w-full max-w-4xl mx-auto border border-white/10 relative overflow-hidden group"
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
            </motion.div>
        </div>
    );
};

export default Projects;
