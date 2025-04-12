import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Person as PersonIcon } from '@mui/icons-material';
import { bgStyles } from '../styles/utilities';

export const About = () => {
    return (
        <section id="about" className={bgStyles.primary}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <PersonIcon className="h-10 w-10 text-indigo-500 dark:text-amber-400" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
                    </div>
                    <div className={`${bgStyles.card} p-6 rounded-lg`}>
                        <p className="text-lg text-gray-600 dark:text-gray-300">{portfolioData.about}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 