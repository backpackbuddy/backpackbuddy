import Head from 'next/head';
import PropTypes from 'prop-types';
import ContactBtn from '../elements/FloatBtn';
import Footer from '../modules/Footer';
import NotificationToast from '../modules/NotificationToast/NotificationToast';

function Layout(props) {
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main {...props} />
      <ContactBtn />
      <Footer />
      <div
        style={{
          position: 'fixed',
          top: '5rem',
          right: '1rem',
        }}
      >
        <NotificationToast />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Layout;
