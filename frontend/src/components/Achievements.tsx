import { motion } from 'framer-motion';
import { Trophy, Code2, BrainCircuit, ExternalLink } from 'lucide-react';

const Achievements = () => {
    const achievementsData = [
        {
            title: "HackWithVertos Hackathon Finalist",
            organization: "Echo LPU",
            date: "Feb 2024",
            description: "Secured a Top-12 position among all campus teams by engineering a comprehensive Hospital Management System prototype, demonstrating rapid problem-solving and full-stack development skills under pressure.",
            icon: <Trophy size={24} className="text-white" />,
            iconColor: "text-neon-cyan",
            bgColor: "bg-neon-cyan",
        },
        {
            title: "HackerRank Python 4★ Certification",
            organization: "HackerRank",
            date: "Jan 2024",
            description: "Achieved a distinguished 4-star rating in Python programming, reflecting a strong command of data structures, algorithms, and Pythonic problem-solving capabilities.",
            icon: <Code2 size={24} className="text-white" />,
            iconColor: "text-neon-purple",
            bgColor: "bg-neon-purple",
        },
        {
            title: "Algorithmic Problem Solving Mastery",
            organization: "LeetCode",
            date: "Ongoing",
            description: "Conquered 100+ complex algorithmic challenges on LeetCode, showcasing a deep understanding of optimized coding practices, algorithmic efficiency, and continuous learning.",
            icon: <BrainCircuit size={24} className="text-white" />,
            iconColor: "text-neon-pink",
            bgColor: "bg-neon-pink",
            link: "https://leetcode.com/u/Tarun676/"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto py-12 relative z-10">
            <div className="text-center mb-16">
                <p className="text-xs md:text-sm tracking-[0.3em] text-slate-400 uppercase mb-4 font-semibold">Milestones</p>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white flex justify-center gap-4">
                    Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple italic pr-2">Achievements</span>
                </h2>
            </div>

            <div className="flex flex-col gap-6">
                {achievementsData.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="relative p-6 md:p-8 glass-panel rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden group"
                    >
                        {/* Background subtle glow */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.bgColor.split('-')[1]}-${item.bgColor.split('-')[2]}/10 rounded-full blur-[50px] -z-10 group-hover:scale-150 transition-transform duration-700`}></div>
                        
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                            {/* Icon */}
                            <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center shadow-lg relative`}>
                                {item.icon}
                                <div className="absolute inset-0 rounded-2xl border border-white/20 scale-110 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                                    <span className="text-sm font-semibold tracking-wider text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 w-max">
                                        {item.date}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`text-sm font-bold tracking-wide ${item.iconColor}`}>{item.organization}</span>
                                    {item.link && (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                                            <ExternalLink size={14} />
                                            <span className="text-xs">View Profile</span>
                                        </a>
                                    )}
                                </div>
                                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
