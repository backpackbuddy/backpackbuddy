import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
// Components
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';
import RegisterForm from '../../components/modules/RegisterForm';


function Register () {
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
              <h1 className="text-center mb-5">Buat Akun</h1>
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
