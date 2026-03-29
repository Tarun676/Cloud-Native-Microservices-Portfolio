import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ContactModal from './ContactModal';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

const Layout = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Scroll Progress Indicator
    const { scrollYProgress } = useScroll();

    return (
        <div className="relative min-h-screen bg-dark-bg text-slate-200 font-sans selection:bg-neon-purple/30 selection:text-white overflow-hidden">
            {/* Scroll Progress Bar pinned to top edge */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink z-[9999] origin-left"
                style={{ scaleX: scrollYProgress }}
            />
            
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            
            {/* Animated Ambient Background Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-neon-cyan/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-neon-blue/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar onContactClick={() => setIsContactOpen(true)} />
                <AnimatePresence mode="wait">
                    <motion.main 
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="relative z-10 w-full flex flex-col items-center flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
                    >
                        <Outlet />
                    </motion.main>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Layout;
