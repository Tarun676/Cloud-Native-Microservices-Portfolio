import { motion } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-dark-bg overflow-hidden"
        >
            <div className="relative flex items-center justify-center w-40 h-40">
                {/* Orbital Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-0 border-t-2 border-r-2 border-neon-cyan rounded-full opacity-70"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="absolute inset-2 border-b-2 border-l-2 border-neon-purple rounded-full opacity-70"
                />
                <motion.div
                    animate={{ rotate: 360, scale: [0.9, 1.1, 0.9] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-6 border-2 border-neon-pink rounded-full border-dashed opacity-50"
                />
                
                {/* Center Core */}
                <motion.div 
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-12 h-12 bg-white rounded-full shadow-[0_0_30px_#fff] flex items-center justify-center relative z-10"
                >
                    <div className="w-6 h-6 bg-dark-bg rounded-full animate-pulse"></div>
                </motion.div>
                
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon-cyan/20 blur-2xl rounded-full"></div>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-col items-center"
            >
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-300 font-mono text-xs tracking-widest uppercase">Initializing System Core</span>
                    <motion.span 
                        animate={{ opacity: [0, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-2 h-2 bg-neon-cyan rounded-full inline-block"
                    ></motion.span>
                </div>
                
                {/* Progress bar */}
                <div className="w-56 h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
                        onAnimationComplete={onComplete}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
