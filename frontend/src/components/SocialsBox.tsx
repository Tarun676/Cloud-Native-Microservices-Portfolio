import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
    { name: 'Leetcode', url: 'https://leetcode.com/u/tarun_077/', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-6 h-6 invert" />, bg: 'bg-[#1e1e1e]/80', border: 'border-[#1e1e1e]', hoverText: 'text-yellow-500' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/penumuditarun/', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6" />, bg: 'bg-[#0077b5]/80', border: 'border-[#0077b5]', hoverText: 'text-blue-400' },
    { name: 'GitHub', url: 'https://github.com/tarun676', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-6 h-6 invert" />, bg: 'bg-[#333]/80', border: 'border-[#fff]', hoverText: 'text-white' },
    { name: 'X', url: 'https://x.com/TPenumudi17155', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X" className="w-6 h-6 invert" />, bg: 'bg-black/80', border: 'border-[#fff]', hoverText: 'text-slate-300' },
    { name: 'Docker', url: 'https://hub.docker.com/u/tarun006', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6" />, bg: 'bg-[#0db7ed]/80', border: 'border-[#0db7ed]', hoverText: 'text-[#0db7ed]' },
    { name: 'Email', url: 'mailto:penumuditarun@gmail.com', icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-white stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>, bg: 'bg-red-500/30', border: 'border-red-500', hoverText: 'text-red-400' }
];

const SocialsBox = () => {
    const [isContainerHovered, setIsContainerHovered] = useState(false);

    // Parabolic arc function for a unified flower/arch spread
    const getArchY = (index: number) => {
        if (!isContainerHovered) return 0;
        const total = links.length;
        const h = (total - 1) / 2; // Vertex (center)
        const archPeak = -25; // How high the middle icons go
        const a = (-archPeak) / (h * h); // Parabola opening downwards: y = a(x-h)^2 + k
        return Math.floor(a * Math.pow(index - h, 2) + archPeak);
    };

    return (
        <div className="glass-panel py-6 px-6 rounded-[2rem] border border-white/10 shadow-xl inline-block max-w-full overflow-visible z-20">
            <h3 className="text-white font-display font-bold text-lg mb-4 flex items-center gap-2">
                Connect <span className="w-8 h-1 bg-neon-cyan rounded-full inline-block"></span>
            </h3>

            <div 
                className="flex items-center justify-start gap-4 h-24 relative px-2"
                onMouseEnter={() => setIsContainerHovered(true)}
                onMouseLeave={() => setIsContainerHovered(false)}
            >
                {links.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        animate={{ 
                            y: getArchY(i), 
                        }}
                        whileHover={{ 
                            scale: 1.25, 
                            y: getArchY(i) - 10, // Lighten up & jump higher
                            filter: 'brightness(1.5)', 
                            boxShadow: '0 0 25px rgba(255,255,255,0.3)',
                            zIndex: 30
                        }}
                        transition={{ 
                            type: 'spring', 
                            stiffness: 400, 
                            damping: 15, 
                            mass: 0.8 
                        }}
                        className={`flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl border ${link.border} ${link.bg} shadow-lg transition-colors shrink-0 group relative z-10`}
                    >
                        <div className="drop-shadow-md pointer-events-none">{link.icon}</div>
                        <span className="text-[10px] font-bold text-slate-300 opacity-0 group-hover:opacity-100 absolute -bottom-6 pointer-events-none transition-opacity">
                            {link.name}
                        </span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default SocialsBox;
