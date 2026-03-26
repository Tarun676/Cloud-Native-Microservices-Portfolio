import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Resume = () => {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        setDownloading(true);
        // Simulate network delay for UI effect
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '/Tarun_CV.pdf';
            link.download = 'Tarun_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setDownloading(false);
        }, 800);
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center pt-8 w-full z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl w-full mx-auto px-4 pb-32"
            >
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div>
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: "80px" }} 
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-1.5 bg-gradient-to-r from-neon-blue to-neon-purple mb-6 rounded-full"
                        />
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-tight leading-tight">
                            Interactive<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan animate-aurora bg-[length:200%_auto]">
                                Resume
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Main Showcase Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
                    
                    {/* Resume Document Container */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="lg:col-span-8 relative group"
                    >
                        {/* Glow Behind Document */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 filter blur-[80px] rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
                        
                        <div className="glass-panel p-2 md:p-6 rounded-[2rem] border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.01]">
                            <div className="bg-dark-bg rounded-xl overflow-hidden border border-white/5 relative">
                                <div className="absolute top-0 left-0 right-0 h-12 bg-dark-card/90 border-b border-white/5 flex items-center px-6 gap-3 backdrop-blur-md z-10">
                                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <div className="ml-4 flex-grow flex justify-center text-xs font-mono text-slate-400 font-medium tracking-wider">Tarun_CV.pdf</div>
                                </div>
                                <img
                                    src="/Tarun_CV.png"
                                    alt="Curriculum Vitae"
                                    className="w-full h-auto object-cover mt-12 origin-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Panel */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="lg:col-span-4 flex flex-col gap-6"
                    >
                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] border-white/10 sticky top-32 shadow-2xl">
                            <div className="w-20 h-20 bg-neon-blue/10 rounded-2xl flex items-center justify-center mb-8 border border-neon-blue/20">
                                <FileText className="text-neon-blue drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" size={40} />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-white mb-4">Download Profile</h3>
                            <p className="text-slate-400 font-light text-lg mb-10 leading-relaxed">
                                Get a copy of my full curriculum vitae highlighting my experience in system architecture and cloud computing.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleDownload}
                                disabled={downloading}
                                className="w-full py-5 px-6 rounded-2xl font-bold text-white transition-all overflow-hidden relative group bg-white/5 border border-white/10 hover:border-neon-cyan/50 shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <div className="relative z-10 flex items-center justify-center gap-3 text-lg">
                                    {downloading ? (
                                        <>
                                            <motion.div 
                                                animate={{ rotate: 360 }} 
                                                transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                                            >
                                                <CheckCircle2 className="text-neon-cyan" size={24} />
                                            </motion.div>
                                            <span className="text-neon-cyan">Preparing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Download className="group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" size={24} /> 
                                            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                                                Download PDF
                                            </span>
                                        </>
                                    )}
                                </div>
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
