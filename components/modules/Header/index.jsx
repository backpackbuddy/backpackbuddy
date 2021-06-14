import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Container, Image, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { logoutUtils } from '../../../utils/auth';
import { BackpackIcon, LogoutIcon, ProfileIcon } from '../../elements/Icons';
import '../../../styles/header.scss';
import { selectAuth } from '../../../store/selector';

function Header(props) {
  const { isLoggedIn, user } = useSelector(selectAuth);

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
            className="header__nav ml-auto p-2 p-lg-0"
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
                name: 'Kontak',
              },
              {
                url: '/about',
                name: 'Tentang',
              },
            ].map(({ url, name }) => (
              <Link href={url} key={name}>
                <Nav.Link
                  className="px-lg-3 text-nowrap"
                  style={{ fontSize: '1.1em' }}
                  href={url}
                >
                  {name}
                </Nav.Link>
              </Link>
            ))}
            <div
              className="px-lg-3 text-secondary d-none d-lg-block"
              style={{ fontSize: '1.2rem' }}
            >
              |
            </div>
            <hr className="text-secondary d-lg-none" />
            {isLoggedIn ? (
              <NavDropdown title={user?.username}>
                <Link href="/profile">
                  <NavDropdown.Item className="d-flex align-items-center" href="/profile">
                    <ProfileIcon />
                    &nbsp;Profil
                  </NavDropdown.Item>
                </Link>
                <Link href="/backpack">
                  <NavDropdown.Item className="d-flex align-items-center" href="/backpack">
                    <BackpackIcon />
                    &nbsp;Ransel
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item className="d-flex align-items-center" onClick={logoutUtils}>
                  <LogoutIcon />
                  &nbsp;Keluar
                </NavDropdown.Item>
              </NavDropdown>
            ) : [
              {
                url: '/login',
                name: 'Login',
              },
              {
                url: '/register',
                name: 'Buat Akun',
                classes: 'btn btn-primary text-white ml-2 px-3 w-100',
              },
            ].map(({ url, name, classes }) => (
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

export default Header;
