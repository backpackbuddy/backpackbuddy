import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Col, Container, ListGroup, ListGroupItem, Row, Tab,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/elements/Loading';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';
import ProfileAccountForm from '../../components/modules/ProfileAccountForm';
import ProfileSecurityForm from '../../components/modules/ProfileSecurityForm';
import { deauthenticate } from '../../store/actions/auth';
import { selectAuth } from '../../store/selector';

function Profile() {
  const router = useRouter();
  const { page } = router.query;
  const { asPath } = router;
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    if (!isLoggedIn) {
      router.push('/login');
    }

    if (page) {
      setLoading(false);
    }
  }, [router, isLoggedIn]);

  const logoutHandler = () => {
    dispatch(deauthenticate());
  };

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          {loading ? <Loading className="my-5" />
            : (
              <Tab.Container id="menu-settings" defaultActiveKey={asPath}>
                <Row>
                  <Col md={4}>
                    <section className="p-4">
                      <ListGroup>
                        <Link href="/profile/account">
                          <ListGroupItem action href="/profile/account">Account</ListGroupItem>
                        </Link>
                        <Link href="/profile/security">
                          <ListGroupItem action href="/profile/security">Security</ListGroupItem>
                        </Link>
                        <ListGroupItem className="text-danger" action onClick={logoutHandler}>Logout</ListGroupItem>
                      </ListGroup>
                    </section>
                  </Col>
                  <Col md={8}>
                    <section className="p-4">
                      <Tab.Content>
                        <Tab.Pane eventKey="/profile/account">
                          {page === 'account' && <ProfileAccountForm />}
                        </Tab.Pane>
                        <Tab.Pane eventKey="/profile/security">
                          {page === 'security' && <ProfileSecurityForm />}
                        </Tab.Pane>
                      </Tab.Content>
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

export default Profile;
