import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import '../../../styles/header.scss';
import { getCurrentUserInfo } from '../../../utils/user-info';

function TopBar (props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUserInfo();
    setCurrentUser(user);
  }, []);

  return (
    <Navbar
      className="py-2 shadow-sm"
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
            className="ml-auto p-2 p-lg-0 align-items-center"
            defaultActiveKey={useRouter().pathname}
          >
            {[
              {
                url: '/',
                name: 'Home',
                display: true
              },
              {
                url: '/destinasi',
                name: 'Destinasi',
                display: true
              },
              {
                url: '/contact',
                name: 'Contact',
                display: true
              },
              {
                url: '/about',
                name: 'About',
                display: true
              },
              {
                url: '',
                name: '|',
                classes: 'd-none d-lg-block',
                display: true
              },
              {
                url: '/login',
                name: 'Login',
                classes: 'text-nowrap',
                display: Boolean(!currentUser?.username)
              },
              {
                url: '/register',
                name: 'Buat Akun',
                classes: 'text-nowrap btn btn-primary text-white ml-2 px-3 w-100',
                display: Boolean(!currentUser?.username)
              },
              {
                url: '/profile',
                name: currentUser?.username,
                display: Boolean(currentUser?.username)
              }
            ].map(({ url, name, classes = '', display }) => display && (
                <Link href={url} key={name}>
                  <Nav.Link
                    className={`px-lg-3 text-nowrap ${classes}`}
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
