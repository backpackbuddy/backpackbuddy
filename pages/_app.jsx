import 'bootstrap/scss/bootstrap.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
    return (
            <Component {...pageProps} key={router.route} />
    );
}

export default MyApp
