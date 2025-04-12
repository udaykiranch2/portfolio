import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Code as CodeIcon, Build as BuildIcon } from '@mui/icons-material';
import { bgStyles } from '../styles/utilities';

export const Skills = () => {
    return (
        <section id="skills" className={bgStyles.primary}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <BuildIcon className="h-10 w-10 text-indigo-500 dark:text-amber-400" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {portfolioData.skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`${bgStyles.card} p-4 rounded-lg flex items-center gap-2`}
                            >
                                <CodeIcon className="h-5 w-5 text-indigo-500 dark:text-amber-400" />
                                <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 