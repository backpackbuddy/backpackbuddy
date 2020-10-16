import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                key={router.route}
                initial={{ opacity: .5, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{}}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
