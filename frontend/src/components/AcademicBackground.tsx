import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const AcademicBackground = () => {
    const educationData = [
        {
            period: "AUG 2023 - PRESENT",
            institution: "Lovely Professional University",
            degree: "Bachelor of Technology",
            field: "Computer Science and Engineering",
            location: "Punjab, India",
            score: "CGPA: 8.22",
            iconColor: "text-neon-purple",
            bgColor: "bg-neon-purple",
            borderColor: "border-neon-purple",
            shadowColor: "shadow-[0_0_15px_rgba(168,85,247,0.5)]",
            align: "left"
        },
        {
            period: "2021 - 2023",
            institution: "Sri Karthikeya Junior College",
            degree: "Intermediate (12th)",
            field: "Science Stream",
            location: "Akividu, Andhra Pradesh",
            score: "Percentage: 88%",
            iconColor: "text-neon-pink",
            bgColor: "bg-neon-pink",
            borderColor: "border-neon-pink",
            shadowColor: "shadow-[0_0_15px_rgba(236,72,153,0.5)]",
            align: "right"
        },
        {
            period: "2019 - 2021",
            institution: "Adarsh School",
            degree: "Matriculation (10th)",
            field: "Science Stream",
            location: "Alapadu, Andhra Pradesh",
            score: "Percentage: 86%",
            iconColor: "text-neon-blue",
            bgColor: "bg-neon-blue",
            borderColor: "border-neon-blue",
            shadowColor: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
            align: "left"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto py-12 relative z-10">
            <div className="text-center mb-24">
                <p className="text-xs md:text-sm tracking-[0.3em] text-slate-400 uppercase mb-4 font-semibold">Education</p>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white flex justify-center gap-4">
                    Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple italic pr-2">Background</span>
                </h2>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
                {/* Central Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-purple via-neon-pink to-neon-blue rounded-full"></div>

                <div className="space-y-32">
                    {educationData.map((item, index) => (
                        <div key={index} className={`relative flex items-center justify-between w-full ${item.align === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                            
                            {/* Empty space for the other side */}
                            <div className="w-[45%]"></div>

                            {/* Center Icon */}
                            <motion.div 
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-dark-bg ${item.bgColor} flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                            >
                                <GraduationCap size={20} className="text-white" />
                                {/* Glow ring */}
                                <div className={`absolute inset-0 rounded-full border border-white/20 scale-150 blur-sm ${item.iconColor}`}></div>
                            </motion.div>

                            {/* Content Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                                className={`w-[45%] flex flex-col ${item.align === 'left' ? 'items-end text-right' : 'items-start text-left'}`}
                            >
                                <p className="text-sm text-slate-400 mb-4 font-semibold tracking-widest">{item.period}</p>
                                <div className="flex items-center gap-3 mb-3">
                                    {item.align === 'left' && <GraduationCap size={24} className="text-white opacity-80" />}
                                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">{item.institution}</h3>
                                    {item.align === 'right' && <GraduationCap size={24} className="text-white opacity-80" />}
                                </div>
                                <p className="text-lg lg:text-xl font-bold text-slate-200 mb-1">{item.degree}</p>
                                <p className="text-base text-slate-400 mb-6">{item.field}</p>
                                
                                <div className={`flex items-center gap-2 text-sm text-slate-400 mb-6 ${item.align === 'left' ? 'justify-end' : 'justify-start'}`}>
                                    <MapPin size={16} /> <span>{item.location}</span>
                                </div>

                                <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-dark-card/50 backdrop-blur-md shadow-lg`}>
                                    <span className={`text-sm font-bold tracking-wide ${item.iconColor}`}>{item.score}</span>
                                </div>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative border-l-2 border-neon-purple/50 ml-6 pl-8 space-y-16">
                {educationData.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="relative"
                    >
                        {/* Icon on line */}
                        <div className={`absolute -left-[45px] top-0 w-10 h-10 rounded-full border-4 border-dark-bg ${item.bgColor} flex items-center justify-center z-20`}>
                            <GraduationCap size={16} className="text-white" />
                        </div>
                        
                        <p className="text-xs text-slate-400 mb-2 font-semibold tracking-widest">{item.period}</p>
                        <h3 className="text-xl font-display font-bold text-white mb-1 flex items-center gap-2">
                            {item.institution}
                        </h3>
                        <p className="text-base font-bold text-slate-200">{item.degree}</p>
                        <p className="text-sm text-slate-400 mb-4">{item.field}</p>
                        
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                            <MapPin size={14} /> <span>{item.location}</span>
                        </div>

                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-dark-card/50 backdrop-blur-md`}>
                            <span className={`text-xs font-bold tracking-wide ${item.iconColor}`}>{item.score}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AcademicBackground;
