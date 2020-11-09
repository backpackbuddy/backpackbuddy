import { motion, AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence initial={false}>
            <motion.div
                key={router.route}
                initial={{ opacity: .5 }}
                animate={{ opacity: 1 }}
                exit={{}}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
