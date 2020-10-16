import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={router.route}
                initial={{ opacity: .5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: .5 }}
            >
                <Component {...pageProps} key={router.route} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
