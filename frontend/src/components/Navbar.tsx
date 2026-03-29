import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, FileText, Award, Menu, X, Mail, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '../hooks/useSound';

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLight, setIsLight] = useState(false);
    const location = useLocation();
    const { playClick, playSwoosh } = useSound();

    useEffect(() => {
        if (isLight) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isLight]);

    const handleThemeToggle = () => {
        playSwoosh();
        setIsLight(!isLight);
    };

    const handleNavClick = () => {
        playClick();
        if (isOpen) setIsOpen(false);
    };

    const navItems = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'About', path: '/about', icon: <User size={18} /> },
        { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
        { name: 'Resume', path: '/resume', icon: <FileText size={18} /> },
        { name: 'Certificates', path: '/certificates', icon: <Award size={18} /> },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            {/* Desktop Navbar - Floating Pill */}
            <nav className="hidden md:flex items-center gap-2 p-2 bg-dark-card/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-auto">
                <NavLink 
                    to="/" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-4 py-2 mr-2 cursor-pointer hover:scale-105 transition-transform"
                >
                    <span className="text-white font-display font-bold tracking-widest text-lg bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                        TP.
                    </span>
                </NavLink>
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={handleNavClick}
                            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors z-10 ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] -z-10"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            {item.icon}
                            {item.name}
                        </NavLink>
                    );
                })}
                
                {/* Theme Toggle */}
                <button 
                    onClick={handleThemeToggle}
                    className="p-2 ml-2 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-10 cursor-pointer"
                    title="Toggle Theme"
                >
                    {isLight ? <Moon size={18} /> : <Sun size={18} />}
                </button>

                <button 
                    onClick={() => { playSwoosh(); onContactClick(); }}
                    className="flex items-center gap-2 px-6 py-2.5 ml-2 bg-gradient-to-r from-neon-purple/80 to-neon-blue/80 hover:from-neon-purple hover:to-neon-blue text-white rounded-full text-sm font-bold shadow-lg transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 z-10 cursor-pointer"
                >
                    <Mail size={16} />
                    Contact
                </button>
            </nav>

            {/* Mobile Navbar Setup */}
            <div className="md:hidden w-full flex items-center justify-between pointer-events-auto">
                <button 
                    onClick={handleThemeToggle}
                    className="p-3 bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-full text-slate-300 hover:text-white shadow-xl"
                >
                    {isLight ? <Moon size={24} /> : <Sun size={24} />}
                </button>

                <button
                    onClick={() => { playClick(); setIsOpen(!isOpen); }}
                    className="p-3 bg-dark-card/80 backdrop-blur-md border border-white/10 rounded-full text-slate-300 hover:text-white shadow-xl"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 right-4 w-64 bg-dark-card/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col p-2 gap-1"
                    >
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}
                                >
                                    <span className={isActive ? 'text-neon-cyan' : ''}>{item.icon}</span>
                                    {item.name}
                                </NavLink>
                            );
                        })}
                        
                        <div className="h-px w-full bg-white/10 my-1"></div>
                        
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                playSwoosh();
                                onContactClick();
                            }}
                            className="flex items-center justify-center gap-3 px-4 py-3 mt-1 rounded-xl text-base font-bold text-white bg-gradient-to-r from-neon-purple to-neon-blue transition-all active:scale-95"
                        >
                            <Mail size={18} />
                            Contact Me
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
