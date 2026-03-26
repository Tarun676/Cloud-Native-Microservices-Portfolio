import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Calendar, Linkedin, Github, Twitter, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [activeTab, setActiveTab] = useState<'quick' | 'form'>('quick');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                time: new Date().toLocaleString(),
            };

            // Keys are securely stored in .env dynamically loaded by Vite
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setIsSending(false);
            setIsSent(true);
            setTimeout(() => {
                setIsSent(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
                onClose();
            }, 3000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setIsSending(false);
            alert('Email failed to send! Please ensure you have added your real EmailJS API Keys (Service ID, Template ID, Public Key) to frontend/src/components/ContactModal.tsx');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md bg-[#0a0f1c] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col p-6 z-10"
                    >
                        {/* Drag Handle shape at top */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full" />
                        
                        {/* Close button */}
                        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors">
                            <X size={20} />
                        </button>

                        {/* Top Socials inside Modal */}
                        <div className="flex justify-center gap-6 mt-4 mb-6 text-slate-400">
                            <a href="https://www.linkedin.com/in/penumuditarun/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="https://github.com/tarun676" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="https://x.com/TPenumudi17155" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>

                        {/* Tabs */}
                        <div className="flex bg-white/5 p-1 rounded-xl mb-6">
                            <button 
                                onClick={() => setActiveTab('quick')}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'quick' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                            >
                                Quick connect
                            </button>
                            <button 
                                onClick={() => setActiveTab('form')}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'form' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                            >
                                Fill a form
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="flex-1 min-h-[220px]">
                            {activeTab === 'quick' ? (
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                                    className="flex gap-4"
                                >
                                    <a href="mailto:penumuditarun@gmail.com" className="flex-1 bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-white/10 transition-all group">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                                            <Mail size={16} className="text-blue-400" />
                                        </div>
                                        <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                                        <p className="text-xs text-slate-400 truncate w-full" title="penumuditarun@gmail.com">penumuditarun@gmail.com</p>
                                        <p className="text-[10px] text-slate-500 mt-2">Send me an email directly</p>
                                    </a>
                                    
                                    <div className="flex-1 bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-white/10 transition-all cursor-not-allowed opacity-60">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                            <Calendar size={16} className="text-purple-400" />
                                        </div>
                                        <h4 className="text-white font-semibold text-sm mb-1">Book a Call</h4>
                                        <p className="text-xs text-slate-400">Schedule a time slot</p>
                                        <p className="text-[10px] text-slate-500 mt-2">Coming soon</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.form 
                                    onSubmit={handleSend}
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="text-xs text-slate-400 font-medium ml-1 mb-0.5 block">Name</label>
                                            <input 
                                                required type="text" placeholder="Your name" 
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-colors"
                                                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="text-xs text-slate-400 font-medium ml-1 mb-0.5 block">Email</label>
                                            <input 
                                                required type="email" placeholder="Email address" 
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-colors"
                                                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="w-full">
                                        <label className="text-xs text-slate-400 font-medium ml-1 mb-0.5 block">Subject</label>
                                        <input 
                                            required type="text" placeholder="What is this regarding?" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-colors"
                                            value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}
                                        />
                                    </div>
                                    
                                    <div>
                                        <div className="flex justify-between items-center ml-1 mb-0.5">
                                            <label className="text-xs text-slate-400 font-medium">Message</label>
                                            <span className="text-[10px] text-slate-500">{formData.message.length}/1000</span>
                                        </div>
                                        <textarea 
                                            required placeholder="What would you like to discuss?" rows={3} maxLength={1000}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-purple/50 transition-colors resize-none"
                                            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                                        ></textarea>
                                    </div>
                                    
                                    <button 
                                        type="submit" disabled={isSending || isSent}
                                        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold shadow-lg transition-all ${isSent ? 'bg-green-500 text-white shadow-green-500/20' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white shadow-purple-500/20'}`}
                                    >
                                        {isSending ? (
                                            <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/> Sending...</span>
                                        ) : isSent ? (
                                            "Message Sent!"
                                        ) : (
                                            <><Send size={16} /> Send message</>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </div>

                        {/* Availability Footer */}
                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs font-medium bg-green-500/5 text-green-400 py-3 rounded-xl border border-green-500/20">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Currently available for new opportunities
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
