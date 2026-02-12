import { motion } from 'framer-motion';
import {
    Terminal, Cloud, Server, Code, Database,
    Cpu, GitBranch, Globe, Shield, Activity
} from 'lucide-react';

const About = () => {
    const skills = {
        "Cloud & DevOps": [
            "AWS (EC2, S3, VPC, Cognito)", "Docker", "Kubernetes",
            "CI/CD Pipelines", "GitHub Actions", "Linux", "Shell Scripting"
        ],
        "Languages": [
            "Java", "Python", "C++", "C", "JavaScript", "SQL", "HTML/CSS"
        ],
        "Backend & Tools": [
            "Spring Boot", "Maven", "Git", "GitHub", "Postman",
            "IntelliJ IDEA", "VS Code"
        ],
        "Core Concepts": [
            "Data Structures & Algorithms", "DBMS", "REST APIs",
            "Microservices", "Computer Fundamentals"
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-slate-200 p-6 md:p-20 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto relative z-10"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
                    <motion.div variants={itemVariants} className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-900 rounded-full">
                            $ whoami
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Tarun <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Penumudi</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
                            Aspiring <span className="text-cyan-300 font-medium">Cloud & DevOps Engineer</span>.
                            Building scalable solutions and automating the future.
                        </p>

                        <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-2xl font-mono text-sm text-slate-300 max-w-2xl">
                            <div className="flex gap-2 mb-3 border-b border-slate-700 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <p><span className="text-green-400">tarun@lpu:~$</span> cat bio.txt</p>
                            <p className="mt-2 text-slate-400">
                                I am a Computer Science Engineering student at <span className="text-white">Lovely Professional University</span>.
                                Passionate about cloud computing, microservices, and orchestration.
                                I bridge the gap between development and operations with a strong foundation in <span className="text-white">Java, Spring Boot, and AWS</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <motion.div variants={itemVariants} className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                        <Activity className="text-blue-500" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Technical Ecosystem
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Cloud & DevOps */}
                        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:bg-slate-800/60 group">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Cloud className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills["Cloud & DevOps"].map(skill => (
                                    <span key={skill} className="text-xs px-2 py-1 rounded bg-cyan-950/50 text-cyan-200 border border-cyan-900/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:bg-slate-800/60 group">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Code className="text-purple-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills["Languages"].map(skill => (
                                    <span key={skill} className="text-xs px-2 py-1 rounded bg-purple-950/50 text-purple-200 border border-purple-900/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend & Tools */}
                        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all hover:bg-slate-800/60 group">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Server className="text-orange-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Backend & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills["Backend & Tools"].map(skill => (
                                    <span key={skill} className="text-xs px-2 py-1 rounded bg-orange-950/50 text-orange-200 border border-orange-900/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Core Concepts */}
                        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all hover:bg-slate-800/60 group">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Database className="text-green-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Core Engineering</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills["Core Concepts"].map(skill => (
                                    <span key={skill} className="text-xs px-2 py-1 rounded bg-green-950/50 text-green-200 border border-green-900/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Status Bar / Footer Effect */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center border-t border-slate-800 pt-10 opacity-60">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Globe size={16} /> <span>Based in India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <GitBranch size={16} /> <span>Open Source Enthusiast</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Shield size={16} /> <span>Cloud Security Interest</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Cpu size={16} /> <span>Always Learning</span>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default About;
