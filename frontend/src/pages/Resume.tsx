import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Tarun_CV.pdf';
        link.download = 'Tarun_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 p-8 md:p-20 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl w-full bg-slate-800 p-6 md:p-10 rounded-2xl shadow-2xl border border-slate-700 text-center"
            >
                <h1 className="text-4xl font-bold text-white mb-6">Curriculum Vitae</h1>

                <div className="mb-8 overflow-hidden rounded-xl border-2 border-slate-600 shadow-lg">
                    <img
                        src="/Tarun_CV.png"
                        alt="Curriculum Vitae"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDownload}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    >
                        <Download size={24} /> Download PDF CV
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
