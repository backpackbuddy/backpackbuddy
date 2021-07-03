import Head from 'next/head';
import PropTypes from 'prop-types';
import {
  Toast, ToastBody, ToastHeader,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import toTitleCase from 'to-title-case';
import { closeToast } from '../../store/actions/toast';
import { selectToast } from '../../store/selector';
import ContactBtn from '../elements/FloatBtn';
import Footer from '../modules/Footer';

function Layout(props) {
  const { children } = props;
  const {
    title, message, show, bg,
  } = useSelector(selectToast);
  const dispatch = useDispatch();

  const handleCloseToast = () => {
    dispatch(closeToast);
  };

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
      <main {...props}>{children}</main>
      <ContactBtn />
      <Footer />
      <div
        style={{
          position: 'absolute',
          top: '5rem',
          right: '1rem',
        }}
      >
        <Toast
          autohide
          bg={bg}
          delay={7000}
          onClose={handleCloseToast}
          show={show}
        >
          <ToastHeader>
            <strong className="mr-auto">{toTitleCase(title)}</strong>
          </ToastHeader>
          <ToastBody>{message}</ToastBody>
        </Toast>
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
