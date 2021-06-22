import 'bootstrap/scss/bootstrap.scss';
import '../styles/globals.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import pt from 'prop-types';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from '../store';

NProgress.configure({
  easing: 'ease',
  showSpinner: false,
});
Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

function App({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, () => {
    persistor.persist();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

App.propTypes = {
  Component: pt.func.isRequired,
  pageProps: pt.instanceOf(Object).isRequired,
  router: pt.instanceOf(Object).isRequired,
};

export default App;
