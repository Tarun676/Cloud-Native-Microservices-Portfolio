import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeSnippet = `apiVersion: hr.portfolio/v1
kind: Developer
metadata:
  name: tarun-penumudi
  role: Cloud-Native System Architect
spec:
  stack:
    frontend: ["React", "TypeScript", "Tailwind"]
    backend:  ["Spring Boot", "Python", "Go"]
    database: ["MongoDB", "PostgreSQL", "Redis"]
  infrastructure:
    - Docker
    - Kubernetes
    - AWS (EC2, S3, Cognito)
  status: "Building Scalable Systems"
`;

const HeroCodeWindow = () => {
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= codeSnippet.length) {
                setDisplayedCode(codeSnippet.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, 30); // Speed of typing

        return () => clearInterval(typingInterval);
    }, []);

    // Helper to add syntax highlighting classes simply
    const renderHighlightedCode = () => {
        return displayedCode.split('\n').map((line, i) => {
            if (line.includes('apiVersion:') || line.includes('kind:')) {
                return <div key={i} className="text-neon-pink">{line}</div>;
            }
            if (line.trim().startsWith('metadata:') || line.trim().startsWith('spec:') || line.trim().startsWith('stack:') || line.trim().startsWith('infrastructure:')) {
                return <div key={i} className="text-neon-cyan">{line}</div>;
            }
            if (line.includes(':')) {
                const [key, ...rest] = line.split(':');
                return (
                    <div key={i}>
                        <span className="text-neon-purple">{key}:</span>
                        <span className="text-slate-300">{rest.join(':')}</span>
                    </div>
                );
            }
            if (line.trim().startsWith('-')) {
                return (
                    <div key={i}>
                        <span className="text-slate-400">-</span>
                        <span className="text-neon-blue ml-2">{line.replace('-', '').trim()}</span>
                    </div>
                );
            }
            return <div key={i} className="text-slate-300">{line}</div>;
        });
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ perspective: 1000 }}
            className="w-full max-w-lg mx-auto relative group"
        >
            {/* Ambient background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative glass-panel rounded-2xl border border-white/20 shadow-2xl overflow-hidden bg-[#0A0F1C]/80 backdrop-blur-xl">
                {/* Mac OS Style Window Header */}
                <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    </div>
                    <div className="mx-auto text-xs text-slate-400 font-mono tracking-wider flex items-center gap-2">
                        tarun-profile.yaml
                    </div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                    <div className="min-h-[300px]">
                        {renderHighlightedCode()}
                        {isTyping && (
                            <span className="inline-block w-2 h-4 bg-neon-cyan animate-pulse ml-1 align-middle"></span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroCodeWindow;
