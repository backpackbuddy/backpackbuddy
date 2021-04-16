import { Button, Container, Form } from 'react-bootstrap';

// Components
import BasicTopBar from '../../components/modules/Header';
import Layout from '../../components/layouts/app';

function Login() {
  return (
    <>
      <BasicTopBar />
      <Layout>
        <Container>
          <section>
            <Form>
              <Form.Group controlId="inputUsername">
                <Form.Label>Email or Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email or Username"
                />
              </Form.Group>

              <Form.Group controlId="inputPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="rememberMe">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export default Login;
