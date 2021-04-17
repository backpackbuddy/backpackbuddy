import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
// Components
import Layout from "../../components/layouts/app";
import Header from "../../components/modules/Header";
import LoginForm from "../../components/modules/LoginForm";


function Login () {
  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <h1 className="text-center mb-3">Login</h1>
              <section className="shadow-sm p-5">
                <LoginForm />
                <div className="text-center mt-4">
                  Don&apos;t have an account?&nbsp;
                <Link href="/register">
                    <a className="text-primary" href="/register">Register Now</a>
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

export default Login;
