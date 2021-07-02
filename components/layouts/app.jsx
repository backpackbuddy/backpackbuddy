import Head from 'next/head';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-nextjs-toast';

// Components
import Footer from '../modules/Footer';
import ContactBtn from '../elements/FloatBtn';

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Gratis Konsultasi Rute Wisata" />
        <meta
          name="description"
          content="Backpack Buddy. Gratis rute wisata harian untuk backpacker di Bali"
        />
        <meta
          name="keywords"
          content="backpack, buddy, travel, id, indonesia, bali, free, itinerary, wisata, backpacker"
        />
        <title>Backpack Buddy</title>
        <link rel="favicon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ToastContainer />
      <main {...props}>{children}</main>
      <ContactBtn />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
