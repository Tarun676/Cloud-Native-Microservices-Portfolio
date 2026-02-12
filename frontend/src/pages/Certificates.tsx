import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

interface Certificate {
    id: string;
    name: string;
    issuer: string;
    date: string;
    imageUrl?: string;
}

const Certificates = () => {
    const certificates: Certificate[] = [
        {
            id: '1',
            name: 'AWS Certified Solutions Architect – Associate',
            issuer: 'Amazon Web Services',
            date: '2024',
            imageUrl: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png'
        },
        {
            id: '2',
            name: 'Docker Certified Associate',
            issuer: 'Docker, Inc.',
            date: '2024',
            imageUrl: 'https://images.credly.com/size/340x340/images/3d63d9e2-4752-4467-b5b6-75eb45da37e7/image.png'
        },
        {
            id: '3',
            name: 'CKA: Certified Kubernetes Administrator',
            issuer: 'The Linux Foundation',
            date: '2024',
            imageUrl: 'https://images.credly.com/size/340x340/images/8b072228-2c9e-4993-9ca4-9f4abf5dc0f8/image.png'
        },
        {
            id: '4',
            name: 'Java SE 8 Programmer',
            issuer: 'Oracle',
            date: '2023',
            imageUrl: 'https://images.credly.com/size/340x340/images/5983696f-c960-4f51-8728-6c8411d33264/Oracle_Associates_Badge.png'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 p-8 md:p-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-2">
                    <Award className="w-10 h-10 text-yellow-500" />
                    <h1 className="text-4xl font-bold text-white">Certificates</h1>
                </div>
                <div className="h-1 w-20 bg-yellow-500 mb-10 rounded"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl flex flex-col items-center text-center hover:border-yellow-500/50 transition-all"
                        >
                            <div className="w-32 h-32 mb-6 bg-white rounded-full p-2 shadow-lg flex items-center justify-center overflow-hidden">
                                {cert.imageUrl ? (
                                    <img src={cert.imageUrl} alt={cert.name} className="w-full h-full object-contain" />
                                ) : (
                                    <Award size={48} className="text-slate-400" />
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                            <p className="text-blue-400 font-medium mb-1">{cert.issuer}</p>
                            <p className="text-slate-500 text-sm mb-4">Issued: {cert.date}</p>

                            <button className="mt-auto flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors text-sm">
                                <CheckCircle size={16} className="text-green-400" /> Verified Credential
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Certificates;
