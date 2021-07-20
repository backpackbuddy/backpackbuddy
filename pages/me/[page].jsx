import {
  faCartArrowDown, faLock, faSignOutAlt, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Button, Col, Container, Row, Tab,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/elements/Loading';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';
import ProfileSecurity from '../../components/modules/ProfileAccount';
import ProfileInfoForm from '../../components/modules/ProfileInfoForm';
import ProfileMenu from '../../components/modules/ProfileMenu';
import ProfileMyOrders from '../../components/modules/ProfileMyOrders';
import { deauthenticate } from '../../store/actions/auth';
import { selectAuth } from '../../store/selector';

const PAGE_PROFILE = 'profile';
const PAGE_ACCOUNT = 'account';
const PAGE_MYORDER = 'orders';

const menu = [
  {
    icon: faUser,
    text: 'IDENTITAS SAYA',
    url: `/me/${PAGE_PROFILE}`,
  },
  {
    icon: faLock,
    text: 'AKUN & KATA SANDI',
    url: `/me/${PAGE_ACCOUNT}`,
  },
  {
    icon: faCartArrowDown,
    text: 'PESANAN SAYA',
    url: `/me/${PAGE_MYORDER}`,
  },
];

function Me() {
  const router = useRouter();
  const { page } = router.query;
  const { asPath } = router;
  const { isLoggedIn } = useSelector(selectAuth);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(deauthenticate());
  };

  const handleMobileMenu = (e) => {
    router.push(e.target.value);
  };

  useEffect(() => {
    setLoading(true);

    if (!isLoggedIn) router.push('/login');

    if (page) setLoading(false);
  }, [router, isLoggedIn]);

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          {loading ? <Loading className="my-5" />
            : (
              <Tab.Container defaultActiveKey={asPath}>
                <Row>
                  <Col md={4}>
                    <section
                      className="px-4 px-lg-5 py-4 d-none d-lg-flex flex-column"
                      style={{ rowGap: '1rem' }}
                    >
                      {/* desktop menu */}
                      {menu.map(ProfileMenu)}
                      <Button
                        className="align-items-center text-danger text-left p-0"
                        onClick={logoutHandler}
                        variant="link"
                      >
                        <span className="mr-3">
                          <FontAwesomeIcon icon={faSignOutAlt} />
                        </span>
                        <span>LOGOUT</span>
                      </Button>
                    </section>

                    {/* mobile menu */}
                    <section className="d-lg-none p-0 mb-3">
                      <select className="custom-select" onChange={handleMobileMenu} value={`/me/${page}`}>
                        {menu.map(({ text, url }) => (
                          <option value={url}>{text}</option>
                        ))}
                      </select>
                    </section>
                  </Col>
                  <Col md={8}>
                    <section className="px-4 px-lg-5 py-4">
                      {page === PAGE_PROFILE && <ProfileInfoForm />}
                      {page === PAGE_ACCOUNT && <ProfileSecurity />}
                      {page === PAGE_MYORDER && <ProfileMyOrders />}
                    </section>
                  </Col>
                </Row>
              </Tab.Container>
            )}
        </Container>
      </Layout>
    </>
  );
}

export default Me;
