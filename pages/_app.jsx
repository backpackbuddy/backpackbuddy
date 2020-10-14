import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimateSharedLayout>
            <AnimatePresence>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </AnimateSharedLayout>
    );
}

export default MyApp;
