import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence initial={false}>
            <motion.div
                key={router.route}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: .5 }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
