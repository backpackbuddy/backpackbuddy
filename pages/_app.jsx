import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence initial={false}>
            <motion.div
                key={router.route}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{}}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
