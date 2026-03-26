import { motion } from 'framer-motion';
import {
    Terminal, Globe, Shield, Activity, GitBranch, Cpu
} from 'lucide-react';
import AcademicBackground from '../components/AcademicBackground';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center pt-8 w-full z-10">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl w-full mx-auto px-4 pb-32"
            >
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 lg:mb-32">
                    <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left z-10 relative">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-md">
                            <Terminal size={16} className="text-neon-cyan" />
                            <span className="text-sm font-mono text-neon-cyan tracking-wide">
                                whoami
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tight leading-tight mb-6">
                            Tarun<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-aurora bg-[length:200%_auto]">
                                Penumudi
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-400 mb-8 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Aspiring <span className="text-white font-medium">Cloud & DevOps Engineer</span>.
                            Building scalable solutions and automating the future.
                        </p>
                    </motion.div>

                    {/* Terminal Window */}
                    <motion.div variants={itemVariants} className="flex-1 w-full max-w-2xl relative group [perspective:1000px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 filter blur-[80px] rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
                        <div className="glass-panel rounded-3xl border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-[1.02] [transform-style:preserve-3d]">
                            <div className="bg-dark-bg/80 backdrop-blur-xl w-full h-full relative">
                                <div className="absolute top-0 left-0 right-0 h-10 bg-dark-card/90 border-b border-white/5 flex items-center px-4 gap-2 z-10">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <div className="ml-4 text-xs font-mono text-slate-500 flex-grow text-center pr-10">tarun@lpu:~</div>
                                </div>
                                <div className="p-8 pt-16 font-mono text-sm md:text-base text-slate-300 leading-loose">
                                    <p className="mb-4"><span className="text-neon-cyan font-bold">tarun@lpu:~$</span> cat bio.txt</p>
                                    <p className="text-slate-400">
                                        I am a Computer Science Engineering student at <span className="text-white font-semibold">Lovely Professional University</span>.<br/><br/>
                                        Passionate about cloud computing, microservices, and orchestration. I bridge the gap between development and operations with a strong foundation in <span className="text-neon-purple font-semibold">Java, Spring Boot, and AWS</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <AcademicBackground />

                {/* Status Bar / Footer Effect */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-8 justify-center pt-10 text-slate-500 glass-panel p-6 rounded-3xl border-white/5">
                    <div className="flex items-center gap-2 text-sm font-medium hover:text-neon-cyan transition-colors cursor-default">
                        <Globe size={18} /> <span>Based in India</span>
                    </div>
                    <div className="hidden md:block w-px h-5 bg-white/10"></div>
                    <div className="flex items-center gap-2 text-sm font-medium hover:text-neon-purple transition-colors cursor-default">
                        <GitBranch size={18} /> <span>Open Source Enthusiast</span>
                    </div>
                    <div className="hidden md:block w-px h-5 bg-white/10"></div>
                    <div className="flex items-center gap-2 text-sm font-medium hover:text-neon-blue transition-colors cursor-default">
                        <Shield size={18} /> <span>Cloud Security Interest</span>
                    </div>
                    <div className="hidden md:block w-px h-5 bg-white/10"></div>
                    <div className="flex items-center gap-2 text-sm font-medium hover:text-neon-pink transition-colors cursor-default">
                        <Cpu size={18} /> <span>Always Learning</span>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default About;
