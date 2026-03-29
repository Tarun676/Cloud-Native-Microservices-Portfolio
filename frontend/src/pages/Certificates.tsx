import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Star, X, User, Info } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface Certificate {
    id: string;
    name: string;
    issuer: string;
    imageUrl: string;
    badgeUrl?: string;
    bgColor?: string;
    description?: string;
}

const certificatesData = {
    featured: [
        {
            id: 'aws-saa',
            name: 'AWS Certified Solutions Architect – Associate',
            issuer: 'Amazon Web Services',
            imageUrl: '/certificates/Solution Architect Associate Certificate.png',
            badgeUrl: '/certificates/aws-certified-solutions-architect-associate.png',
            bgColor: 'from-[#FF9900]/20 to-[#232F3E]/20',
            glowColor: 'group-hover:shadow-[0_0_40px_rgba(255,153,0,0.4)]',
            description: 'Validates technical expertise and skill in designing, deploying, and managing scalable, highly available, and fault-tolerant systems on AWS.'
        },
        {
            id: 'aws-ccp',
            name: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            imageUrl: '/certificates/Cloud Practitioner Certificate.png',
            badgeUrl: '/certificates/aws-certified-cloud-practitioner.png',
            bgColor: 'from-[#FF9900]/20 to-[#232F3E]/20',
            glowColor: 'group-hover:shadow-[0_0_40px_rgba(255,153,0,0.4)]',
            description: 'Provides overall understanding of the AWS Cloud, basic security and compliance aspects, and the shared responsibility model.'
        }
    ],
    professional: [
        { id: 'aws-training', name: 'AWS Cloud Computing Summer Training', issuer: 'Gokboru Tech Pvt. Ltd', imageUrl: '/certificates/AWS_Certificate_Gokboru copy.png', description: 'Intensive 6-week AWS training covering cloud fundamentals, core architecture, and hands-on deployment.' },
        { id: 'g-networks', name: 'Bits and Bytes of Computer Networks', issuer: 'Google', imageUrl: '/certificates/Bits_and_Bytes_of_Computer_Networks_Google.png', description: 'Comprehensive understanding of computer networking, covering TCP/IP suite, DNS, DHCP, and network troubleshooting.' },
        { id: 'ibm-os', name: 'Hardware and Operating Systems', issuer: 'IBM', imageUrl: '/certificates/Intro_to_Hardware_and_Operation_Systems_IBM.png', description: 'Foundational knowledge of computer hardware architecture and operating system management.' },
        { id: 'g-git', name: 'Introduction to Git and GitHub', issuer: 'Google', imageUrl: '/certificates/intro_to_Git&github_by_google.png', description: 'Mastery of version control using Git, including branching, merging, and collaborative development on GitHub.' },
        { id: 'uc-comm', name: 'Computer Communications', issuer: 'University of Colorado', imageUrl: '/certificates/Computer_Communications_University_of_Colorado.png', description: 'Advanced study in data communication, signal propagation, and protocol design across the network layers.' },
        { id: 'mn-sd', name: 'Software Dev Methodologies', issuer: 'University of Minnesota', imageUrl: '/certificates/Software_Development_Processes_and_Methodologies_University_of_Minnesota.png', description: 'Exploration of Agile, Scrum, and Waterfall methodologies for managing complex software engineering projects.' },
    ],
    foundational: [
        { id: 'inf-genai', name: 'Gen AI Apps with No Code', issuer: 'Infosys', imageUrl: '/certificates/Build_GEN_AI_Apps_and_Solutions_with_no_code_infosys.png' },
        { id: 'inf-prompt', name: 'ChatGPT-4 Prompt Engineering', issuer: 'Infosys', imageUrl: '/certificates/ChatGPT-4_Prompt_Engineering_infosys.png' },
        { id: 'gen-ai', name: 'Master Gen AI & Gen AI Tools', issuer: 'Infosys', imageUrl: '/certificates/Master_gen_AI & Gen_AI_Tools.png' },
        { id: 'inf-theory', name: 'Computational Theory', issuer: 'Infosys', imageUrl: '/certificates/Computational_Theory_Infosys.png' },
        { id: 'aws-acad-arch', name: 'AWS Cloud Architecting', issuer: 'AWS Academy', imageUrl: '/certificates/AWS_Academy_Graduate___Cloud_Architecting___Training_Badge.png' },
        { id: 'aws-acad', name: 'AWS Academy Graduate', issuer: 'AWS Academy', imageUrl: '/certificates/AWS_Academy_Graduate.png' },
        { id: 'neo-java', name: 'Java Programming', issuer: 'NeoColab', imageUrl: '/certificates/Java_Programming_NeoColab.png' },
        { id: 'neo-dsa', name: 'Data Structures and Algorithms', issuer: 'NeoColab', imageUrl: '/certificates/Data_Structures_and_Algorithm_NeoColab.png' },
        { id: 'neo-oops', name: 'Object-Oriented Programming', issuer: 'NeoColab', imageUrl: '/certificates/OOPS_NeoColab.png' },
        { id: 'neo-c', name: 'C Programming', issuer: 'NeoColab', imageUrl: '/certificates/C-Programming_NeoColab.png' },
    ]
};

const useTilt = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };
    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    };

    return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

const FeaturedCard = ({ cert, onClick }: { cert: Certificate & { glowColor?: string }, onClick: () => void }) => {
    const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className="relative w-full [perspective:1000px] group cursor-pointer"
        >
            <div className={`glass-panel p-8 rounded-[2rem] border border-white/10 h-full flex flex-col items-center text-center shadow-xl relative overflow-hidden backdrop-blur-xl transition-all duration-500 bg-gradient-to-br ${cert.bgColor} ${cert.glowColor} [transform-style:preserve-3d]`}>
                {cert.badgeUrl && (
                    <div className="absolute top-6 right-6 w-16 h-16 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 [transform:translateZ(40px)] drop-shadow-lg">
                        <img src={cert.badgeUrl} alt="Badge" className="w-full h-full object-contain" />
                    </div>
                )}
                
                <div className="w-full h-64 mb-8 flex items-center justify-center [transform:translateZ(30px)]">
                    <img src={cert.imageUrl} alt={cert.name} className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg group-hover:scale-[1.03] transition-transform duration-500" />
                </div>

                <div className="mt-auto [transform:translateZ(20px)] w-full flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-semibold uppercase tracking-widest backdrop-blur-sm">
                        <Star size={14} className="text-[#FF9900]" fill="#FF9900" />
                        Industry Certification
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-slate-400 font-medium flex items-center gap-2">
                        <ShieldCheck size={18} className="text-neon-cyan" /> {cert.issuer}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const StandardCard = ({ cert, onClick }: { cert: Certificate, onClick: () => void }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            onClick={onClick}
            className="glass-panel p-6 rounded-3xl border border-white/10 h-full flex flex-col items-center text-center shadow-lg relative overflow-hidden backdrop-blur-xl group hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-pointer"
        >
            <div className="w-full h-40 mb-6 flex items-center justify-center bg-dark-bg/50 rounded-2xl p-4 border border-white/5">
                {/* Removed filter brightness so quality is not affected on hover */}
                <img src={cert.imageUrl} alt={cert.name} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
            </div>

            <h3 className="text-lg font-display font-bold text-white mb-2 leading-tight group-hover:text-neon-cyan transition-colors">{cert.name}</h3>
            <p className="text-slate-400 text-sm font-medium mt-auto flex items-center gap-1">
                <Award size={14} className="text-neon-purple" /> {cert.issuer}
            </p>
        </motion.div>
    );
};

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center pt-8 w-full z-10">
            {/* Modal Overlay */}
            {createPortal(
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
                        >
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-4xl bg-dark-card border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden relative max-h-[90vh]"
                            >
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all border border-white/10 hover:scale-110"
                                >
                                    <X size={20} />
                                </button>

                                {/* Image side */}
                                <div className="w-full md:w-1/2 p-6 md:p-10 bg-dark-bg flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 relative">
                                    <div className="absolute inset-0 bg-neon-cyan/5 blur-3xl"></div>
                                    <img src={selectedCert.imageUrl} alt={selectedCert.name} className="max-w-full max-h-full object-contain drop-shadow-2xl relative z-10 rounded-lg" />
                                </div>

                                {/* Details side */}
                                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-dark-card to-dark-bg overflow-y-auto">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="w-8 h-1 bg-neon-cyan rounded-full"></span>
                                        <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Credential Details</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                                        {selectedCert.name}
                                    </h2>
                                    
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-slate-300">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                <Award size={18} className="text-neon-purple" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500">Issuer</p>
                                                <p className="font-semibold">{selectedCert.issuer}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-300">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                <User size={18} className="text-neon-cyan" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500">Recipient</p>
                                                <p className="font-semibold">Tarun Penumudi</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
                                        <div className="flex items-center gap-2 mb-2 text-neon-pink font-semibold text-sm">
                                            <Info size={16} /> Overview
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {selectedCert.description || `Successfully completed the official requirements for ${selectedCert.name} certified by ${selectedCert.issuer}, demonstrating proficient knowledge and technical skills in this domain.`}
                                        </p>
                                    </div>

                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl w-full mx-auto px-4 pb-32"
            >
                {/* Header */}
                <div className="text-center mb-20 relative pt-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/20 blur-[100px] -z-10"
                    />
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-tight leading-tight">
                        Credentials &<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue animate-aurora bg-[length:200%_auto]">
                            Certifications
                        </span>
                    </h1>
                </div>

                {/* Tier 1: Featured AWS Certs */}
                <div className="mb-24">
                    <h2 className="text-2xl font-display font-bold text-white tracking-wide mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-gradient-to-r from-[#FF9900] to-transparent rounded-full"></span>
                        Industry Cloud Certifications
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {certificatesData.featured.map((cert) => (
                            <FeaturedCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
                        ))}
                    </div>
                </div>

                {/* Tier 2: Professional & Specializations */}
                <div className="mb-24">
                    <h2 className="text-xl font-display font-bold text-slate-200 tracking-wide mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-gradient-to-r from-neon-cyan to-transparent rounded-full"></span>
                        Professional Specializations
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificatesData.professional.map((cert) => (
                            <StandardCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} />
                        ))}
                    </div>
                </div>

                {/* Tier 3: Foundational */}
                <div>
                    <h2 className="text-lg font-display font-bold text-slate-300 tracking-wide mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-gradient-to-r from-neon-purple to-transparent rounded-full"></span>
                        Technical Foundations
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {certificatesData.foundational.map((cert) => (
                            <motion.div
                                key={cert.id}
                                whileHover={{ y: -5, scale: 1.02 }}
                                onClick={() => setSelectedCert(cert)}
                                className="glass-panel p-3 rounded-2xl border border-white/5 flex flex-col items-center text-center shadow-md bg-white/[0.02] cursor-pointer hover:border-white/20 transition-colors"
                            >
                                <div className="w-full aspect-video mb-3 flex items-center justify-center bg-dark-bg/80 rounded-xl p-2 relative overflow-hidden group">
                                    <img src={cert.imageUrl} alt={cert.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xs font-semibold text-slate-200 mb-1 leading-tight line-clamp-2">{cert.name}</h3>
                                <p className="text-[10px] text-slate-500 mt-auto truncate w-full">{cert.issuer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default Certificates;
