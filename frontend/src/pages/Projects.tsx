import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Cloud, Server, Database, Layers } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubLink?: string;
    demoLink?: string;
    imageUrl: string;
    icon: any;
}

const Projects = () => {
    const projects: Project[] = [
        {
            id: '1',
            title: 'My-Portfolio (Cloud Native)',
            description: 'A modern, high-performance portfolio website built with a microservices architecture. Features continuous deployment, zero-downtime updates, and a fully Dockerized serving environment. It showcases the integration of complex backend services with a sleek, responsive frontend.',
            techStack: ['React', 'Spring Boot', 'Docker', 'Kubernetes', 'Microservices', 'Nginx'],
            githubLink: '#',
            imageUrl: '/portfolio.png',
            icon: <Layers size={20} className="text-blue-400" />
        },
        {
            id: '2',
            title: 'Weather Fetcher',
            description: 'A robust weather data aggregation service utilizing third-party APIs to provide real-time meteorological information. Built with Java Spring Boot, it demonstrates efficient API consumption, data parsing, and clean architectural patterns.',
            techStack: ['Java', 'Spring Boot', 'Maven', 'REST APIs', 'JSON Processing'],
            githubLink: 'https://github.com/Tarun676/Weather_Fetcher',
            imageUrl: '/weather.png',
            icon: <Cloud size={20} className="text-cyan-400" />
        },
        {
            id: '3',
            title: 'Cloud Movie Streaming Platform',
            description: 'A scalable serverless streaming platform leveraging the full power of AWS. Movies are stored in S3, delivered via CloudFront CDN for low latency, secured with Cognito, and monitored using CloudWatch and SNS for automated alerts. A true cloud-native solution.',
            techStack: ['AWS S3', 'CloudFront', 'AWS Cognito', 'CloudWatch', 'AWS SNS', 'HTML/CSS'],
            githubLink: '#',
            imageUrl: '/streaming.png',
            icon: <Database size={20} className="text-purple-400" />
        },
        {
            id: '4',
            title: 'Distributed File System V2',
            description: 'A fault-tolerant distributed file system designed for high availability and data integrity. Implements complex algorithms for data replication, node synchronization, and failure recovery, simulating enterprise-grade storage infrastructure.',
            techStack: ['Distributed Systems', 'Java', 'Socket Programming', 'Fault Tolerance', 'Algorithms'],
            githubLink: 'https://github.com/Tarun676/Distributed-File-System-V2',
            imageUrl: '/dfs.png',
            icon: <Server size={20} className="text-green-400" />
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 p-8 md:p-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/30">
                        <Cpu className="w-8 h-8 text-purple-400" />
                    </div>
                    <h1 className="text-4xl font-bold text-white">Featured Projects</h1>
                </div>
                <p className="text-slate-400 mb-10 max-w-2xl text-lg">
                    A collection of cloud-native applications, distributed systems, and full-stack solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 shadow-xl flex flex-col h-full group transition-all"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 flex gap-2">
                                    <div className="bg-slate-900/80 backdrop-blur text-white p-2 rounded-lg border border-slate-700">
                                        {project.icon}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-base mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="text-xs font-medium px-3 py-1 bg-blue-900/20 text-blue-300 rounded-full border border-blue-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-700/50">
                                    {project.githubLink && project.githubLink !== '#' && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors font-medium text-sm"
                                        >
                                            <Github size={18} /> Source Code
                                        </a>
                                    )}
                                    {/* Placeholder action for non-linked projects */}
                                    {(!project.githubLink || project.githubLink === '#') && (
                                        <span className="flex items-center gap-2 text-slate-500 bg-slate-800/50 px-4 py-2 rounded-lg text-sm cursor-not-allowed border border-slate-700">
                                            <Github size={18} /> Private / Local
                                        </span>
                                    )}

                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
