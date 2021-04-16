import { Button, Form } from "react-bootstrap";

function LoginForm() {
  return (
    <Form>
      <Form.Group controlId="inputUsername">
        <Form.Label>Email or Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Email or Username" />
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
  );
}

export default LoginForm;
