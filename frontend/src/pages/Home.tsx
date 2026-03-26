import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import SocialsBox from '../components/SocialsBox';
import TechGlobe from '../components/TechGlobe';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center">
            
            {/* Hero Section */}
            <section className="relative w-full max-w-7xl px-4 pt-20 pb-32 flex flex-col items-start text-left z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start w-full"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-pulse"></span>
                            <span className="text-sm font-medium text-neon-cyan tracking-wide uppercase">
                                Available for new opportunities
                            </span>
                        </div>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8 w-full">
                        <motion.div 
                            variants={itemVariants} 
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            className="relative shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-tr from-neon-purple via-neon-cyan to-neon-blue shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                        >
                            <img 
                                src="/certificates/Profile.jpeg" 
                                alt="Tarun Penumudi" 
                                className="w-full h-full object-cover rounded-full border-4 border-dark-bg"
                                style={{ objectPosition: "center 25%" }}
                            />
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold tracking-tight text-center md:text-left leading-none">
                            <span className="text-white">Hi, I'm </span>
                            <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-[length:200%_auto] animate-aurora">
                                Tarun Penumudi.
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-2xl text-left font-light leading-relaxed">
                        A Cloud-Native Developer & System Architect specializing in scalable microservices, Kubernetes orchestration, and premium web experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} className="w-full mt-4 self-stretch">
                        <SocialsBox />
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-start items-center mt-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/projects')}
                            className="group relative px-8 py-4 bg-white text-dark-bg rounded-full font-bold text-lg transition-all flex items-center gap-2 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">Explore Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} /></span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-slate-200"></div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/about')}
                            className="px-8 py-4 glass-panel hover:bg-white/10 rounded-full font-bold text-lg text-white border border-white/20 transition-colors"
                        >
                            About Me
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Introduction Bento Section */}
            <section className="w-full max-w-7xl px-4 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Main Intro Card */}
                    <div className="md:col-span-2 glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full filter blur-[80px] group-hover:bg-neon-blue/20 transition-all duration-700"></div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                <Code className="text-white" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                                The Engineer
                            </h2>
                        </div>
                        <div className="text-slate-300 text-lg md:text-xl leading-relaxed space-y-4 relative z-10 font-light">
                            <p>
                                I transform complex requirements into <span className="text-neon-cyan font-semibold">elegant, scalable systems</span>. 
                                My passion lies bridging the gap between cutting-edge system architecture and seamless user experiences.
                            </p>
                            <p>
                                With rigorous expertise in <span className="text-neon-purple font-semibold">JavaScript, C++, Python, Go, and Java</span>, 
                                I engineer solutions that are not just functional, but highly optimized and resilient.
                            </p>
                            <p>
                                Every piece of this portfolio is powered by <span className="text-neon-pink font-semibold">Dockerized Spring Boot Microservices</span> talking to a MongoDB backend!
                            </p>
                        </div>
                    </div>

                    {/* Stats/Focus Card */}
                    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neon-purple/20 to-transparent"></div>
                        <h3 className="text-2xl font-display font-bold text-white mb-8">Core Focus</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_#06b6d4]"></span>
                                <span className="text-slate-200 font-medium tracking-wide">Distributed Systems</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-3 h-3 rounded-full bg-neon-pink shadow-[0_0_10px_#ec4899]"></span>
                                <span className="text-slate-200 font-medium tracking-wide">DevOps & CI/CD</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-3 h-3 rounded-full bg-neon-blue shadow-[0_0_10px_#3b82f6]"></span>
                                <span className="text-slate-200 font-medium tracking-wide">Cloud Infrastructure</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-3 h-3 rounded-full bg-neon-purple shadow-[0_0_10px_#8b5cf6]"></span>
                                <span className="text-slate-200 font-medium tracking-wide">Full-Stack React</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Tech Stack Globe Section */}
            <section className="w-full max-w-7xl px-4 py-10 pb-32 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center w-full"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Professional <span className="text-neon-cyan">Skillset</span></h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-2xl text-center">A comprehensive overview of my technical stack and the tools I use to build scalable, modern applications.</p>
                    <div className="w-full relative py-10 opacity-90">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-cyan/5 blur-[80px] rounded-full pointer-events-none"></div>
                        <TechGlobe />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
