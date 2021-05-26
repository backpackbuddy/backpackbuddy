import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence, motion } from 'framer-motion';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import pt from 'prop-types';
import '../styles/globals.scss';
import setAxiosConfig from '../utils/axios-config';

setAxiosConfig();

NProgress.configure({
  easing: 'ease',
  showSpinner: false,
});
Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

function MyApp ({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={router.route}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{}}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

MyApp.propTypes = {
  Component: pt.func.isRequired,
  pageProps: pt.instanceOf(Object).isRequired,
  router: pt.instanceOf(Object).isRequired,
};

export default MyApp;
