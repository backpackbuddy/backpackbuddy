import { Col, Container } from "react-bootstrap";
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
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <h1 className="text-center mb-3">Login</h1>
            <section className="shadow-sm p-5">
              <LoginForm />
              <div className="text-center mt-4">
                Don&apos;t have an account? <a href="/register">Register</a>
              </div>
            </section>
          </Col>
        </Container>
      </Layout>
    </>
  );
}

export default Login;
