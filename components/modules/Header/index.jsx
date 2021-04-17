import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import '../../../styles/topbar.scss';

function TopBar (props) {
  return (
    <Navbar
      className="header--slim py-0 shadow-sm"
      collapseOnSelect
      bg="white"
      expand="lg"
      sticky="top"
      style={{ transition: '.35s all ease' }}
      variant="light"
      {...props}
    >
      <Container>
        <div className="d-flex flex-nowrap align-items-center w-100">
          <Navbar.Brand href="/">
            <Link href="/">
              <Image
                className="img-fluid"
                alt="Backpack Buddy"
                src="/images/default-logo.png"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="ml-auto" aria-controls="bb-navbar-nav" />
        </div>
        <Navbar.Collapse id="bb-navbar-nav">
          <Nav
            className="ml-auto p-2 p-lg-0 font-weight-bold"
            defaultActiveKey={useRouter().pathname}
          >
            {[
              {
                url: '/',
                name: 'Home',
              },
              {
                url: '/destinasi',
                name: 'Destinasi',
              },
              {
                url: '/contact',
                name: 'Contact',
              },
              {
                url: '/about',
                name: 'About',
              },
              {
                url: '/login',
                name: 'Login',
                classes: ''
              },
            ].map(({ url, name, classes = '' }) => (
              <Link href={url} key={name} className={classes}>
                <Nav.Link
                  className="px-lg-3"
                  style={{ fontSize: '1.1em' }}
                  href={url}
                >
                  {name}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
