import Head from 'next/head';
import pt from 'prop-types';
import Footer from '../modules/Footer';
import ContactBtn from '../elements/ContactBtn';

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
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main {...props}> {children} </main>
      <ContactBtn />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: pt.func.isRequired,
};

export default Layout;