import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Code as CodeIcon } from '@mui/icons-material';

export const Home = () => {
    return (
        <section id="home" className="pt-20 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2">
                            <CodeIcon className="h-10 w-10 text-indigo-500 dark:text-amber-400" />
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100">
                                {portfolioData.name}
                            </h1>
                        </div>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
                            {portfolioData.title}
                        </p>
                    </motion.div>
                    <div className="w-full h-64 md:h-96">
                        <Player
                            autoplay
                            loop
                            src="https://assets2.lottiefiles.com/packages/lf20_UJNc2t.json"
                            style={{ height: '100%', width: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}; 