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
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <h1 className="text-center mb-3">Buat Akun</h1>
              <section className="shadow-sm p-5">
                <RegisterForm />
                <div className="text-center mt-4">
                  Sudah terdaftar?&nbsp;
                <Link href="/login">
                    <a className="text-primary" href="/login">Masuk</a>
                  </Link>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Register;
