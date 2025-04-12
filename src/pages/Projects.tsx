import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Work as WorkIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { bgStyles } from '../styles/utilities';

export const Projects = () => {
    return (
        <section id="projects" className={bgStyles.primary}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <WorkIcon className="h-10 w-10 text-indigo-500 dark:text-amber-400" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioData.projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`${bgStyles.card} p-6 rounded-lg flex flex-col h-full`}
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 ${bgStyles.accent} rounded-full text-sm`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:text-amber-400 dark:hover:text-amber-300"
                                    >
                                        View Project
                                        <LaunchIcon className="h-4 w-4 ml-1" />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 