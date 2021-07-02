import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Title from '../../components/elements/Title';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';
import RegisterForm from '../../components/modules/RegisterForm';
import { selectAuth } from '../../store/selector';

function Register() {
  const router = useRouter();
  const { isLoggedIn, user } = useSelector(selectAuth);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [user.access_token]);

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
                BUAT AKUN
              </Title>
              <RegisterForm />
              <div className="text-center mt-4">
                Sudah terdaftar?&nbsp;
                <Link href="/login">
                  <a className="text-primary" href="/login">Masuk</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Register;
