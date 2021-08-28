import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Title from '../../components/elements/Title';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';
import NewPasswordForm from '../../components/modules/NewPasswordForm';
import { selectAuth } from '../../store/selector';

function Reset() {
  const { isLoggedIn } = useSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push('/');
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <Row>
            <Col
              className="bg-white shadow-sm py-5 px-4 px-sm-5"
              md={{ span: 6, offset: 3 }}
            >
              <Title
                className="text-center mb-5"
                style={{ fontSize: '2.5rem' }}
              >
                PASSWORD BARU
              </Title>
              <NewPasswordForm />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Reset;
