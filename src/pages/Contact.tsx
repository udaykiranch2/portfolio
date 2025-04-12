import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import {
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Twitter as TwitterIcon,
    Email as EmailIcon,
} from '@mui/icons-material';
import { bgStyles } from '../styles/utilities';

const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
        case 'github':
            return <GitHubIcon className="h-5 w-5" />;
        case 'linkedin':
            return <LinkedInIcon className="h-5 w-5" />;
        case 'twitter':
            return <TwitterIcon className="h-5 w-5" />;
        case 'email':
            return <EmailIcon className="h-5 w-5" />;
        default:
            return null;
    }
};

export const Contact = () => {
    return (
        <section id="contact" className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className={`${bgStyles.card} py-3 px-6 rounded-full inline-flex gap-6`}>
                        {portfolioData.socialLinks.map((link) => (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-amber-400 transition-colors"
                            >
                                {getSocialIcon(link.platform)}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 