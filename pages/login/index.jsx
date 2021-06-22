import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';
import LoginForm from '../../components/modules/LoginForm';
import { selectAuth } from '../../store/selector';

function Login() {
  const router = useRouter();
  const { isLoggedIn } = useSelector(selectAuth);

  useEffect(() => {
    if (isLoggedIn) router.push('/');
  }, [isLoggedIn]);

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
              <h1 className="text-center mb-5">Login</h1>
              <LoginForm />
              <div className="text-center mt-4">
                Belum punya akun?&nbsp;
                <Link href="/register">
                  <a className="text-primary" href="/register">Daftar sekarang</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Login;
