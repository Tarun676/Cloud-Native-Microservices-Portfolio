import { motion } from 'framer-motion';
import { ArrowRight, Code, Cloud, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
            {/* Fixed Background Elements */}
            <div className="fixed inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                        className="mb-6 inline-block p-2 rounded-full bg-slate-800 border border-slate-700"
                    >
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text px-4 py-1">
                            Cloud Native Developer
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hello, I'm <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                            Tarun Penumudi
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Architecting scalable microservices, orchestrating cloud infrastructure,
                        and building modern web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/projects')}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/about')}
                            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold border border-slate-700 transition-colors"
                        >
                            About Me
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating Icons (Hero only) */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-20 left-10 text-slate-700 opacity-50 hidden md:block"
                >
                    <Server size={48} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 right-20 text-slate-700 opacity-50 hidden md:block"
                >
                    <Cloud size={48} />
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className="min-h-screen flex flex-col justify-center items-center relative z-10 bg-slate-900/50 backdrop-blur-sm py-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <Code className="text-blue-500" size={32} />
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
                            Let Me Introduce Myself
                        </h2>
                    </div>

                    <div className="text-slate-300 text-lg md:text-xl leading-relaxed space-y-6">
                        <p>
                            I’m a Software Engineer who loves transforming ideas into <span className="text-blue-400 font-semibold">reliable, scalable systems</span>.
                            Over time, I’ve explored a variety of technologies and discovered a strong passion for building
                            cloud-native environments and efficient development workflows.
                        </p>

                        <p>
                            I’m proficient in <span className="text-purple-400 font-semibold">JavaScript, C++, Python, Go, and Java</span> —
                            and I enjoy working across both system engineering and application development.
                        </p>

                        <p>
                            My key areas of interest include <span className="text-pink-400 font-semibold">DevOps practices, Cloud Platforms, Infrastructure as Code</span>,
                            and using tools that enhance developer productivity. I also enjoy Competitive Programming to keep my problem-solving skills sharp.
                        </p>

                        <p>
                            Whenever possible, I love working with <span className="text-green-400 font-semibold">Docker, Kubernetes, Terraform</span>,
                            and building automation pipelines — along with modern frameworks like <span className="text-cyan-400 font-semibold">React.js and Next.js</span>.
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
