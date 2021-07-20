import { Button, Container, Image } from 'react-bootstrap';
import { FooterArrowIcon } from '../../elements/Icons';
import Sosmed from '../../elements/Sosmed';

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className="footer text-light text-center py-5 bg-dark">
      <Container>
        <a className="d-block mx-auto" href="/">
          <Image className="logo mb-2" src="/images/default-logo.png" alt="backpackbuddy logo" />
        </a>
        <Sosmed className="m-2" fill="#fff" height="2em" width="2em" />
        <p className="mt-2">
          Travel makes one modest. You see what a tiny place you occupy in the
          world.
        </p>
        <small>&copy; Backpack Buddy. All Rights Reserved</small>
        <div className="mt-5">
          <Button onClick={scrollToTop} variant="outline-light">
            <FooterArrowIcon fill="#f2f2f2" />
          </Button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
