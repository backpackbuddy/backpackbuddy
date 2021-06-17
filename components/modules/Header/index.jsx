import '../../../styles/header.scss';
import {
  faCartArrowDown, faSignOutAlt, faSuitcaseRolling, faUser,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Image, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';
import { deauthenticate } from '../../../store/actions/auth';
import { selectAuth } from '../../../store/selector';
import setAxiosConfig from '../../../utils/axios-config';

function Header(props) {
  const { isLoggedIn, user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setAxiosConfig(user.access_token);

    if (isLoggedIn) {
      axios.get('/customer/me/info')
        .catch(() => {
          dispatch(deauthenticate());
        });
    }
  }, [user.access_token]);

  const logoutHandler = () => {
    dispatch(deauthenticate());
  };

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
              <>
                <Image
                  className="img-fluid logo d-none d-sm-block"
                  alt="Backpack Buddy"
                  src="/images/default-logo.png"
                />
                <Image
                  className="img-fluid logo d-sm-none"
                  alt="Backpack Buddy"
                  src="/images/default-logo-mobile.png"
                />
              </>
            </Link>
          </Navbar.Brand>
          {isLoggedIn || (
          <Link href="/login">
            <a className="ml-auto mr-3 d-lg-none" href="/login">Login</a>
          </Link>
          )}
          <Navbar.Toggle className={isLoggedIn && 'ml-auto'} aria-controls="bb-navbar-nav" />
        </div>
        <Navbar.Collapse id="bb-navbar-nav">
          <Nav
            className="header__nav ml-auto p-2 p-lg-0"
            defaultActiveKey={router.pathname}
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
                <Link href="/profile/account">
                  <NavDropdown.Item
                    className="d-flex align-items-center"
                    href="/profile/account"
                    active={router.pathname.includes('profile')}
                  >
                    <FontAwesomeIcon
                      fixedWidth
                      icon={faUser}
                    />
                    &nbsp;Profil
                  </NavDropdown.Item>
                </Link>
                <Link href="/backpack">
                  <NavDropdown.Item
                    className="d-flex align-items-center"
                    href="/backpack"
                  >
                    <FontAwesomeIcon
                      fixedWidth
                      icon={faSuitcaseRolling}
                    />
                    &nbsp;Backpack
                  </NavDropdown.Item>
                </Link>
                <Link href="/order">
                  <NavDropdown.Item
                    className="d-flex align-items-center"
                    href="/order"
                  >
                    <FontAwesomeIcon
                      fixedWidth
                      icon={faCartArrowDown}
                    />
                    &nbsp;Pesanan
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="d-flex align-items-center text-danger"
                  onClick={logoutHandler}
                >
                  <FontAwesomeIcon
                    fixedWidth
                    icon={faSignOutAlt}
                  />
                  &nbsp;Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : [
              {
                url: '/login',
                name: 'Login',
                classes: 'mr-2 d-none d-lg-block',
              },
              {
                url: '/register',
                name: 'Buat Akun',
                classes: 'btn btn-primary text-white px-3 w-100',
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
