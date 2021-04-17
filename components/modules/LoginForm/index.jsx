import axios from 'axios';
import { setCookie } from 'nookies';
import { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

function LoginForm () {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const username = useRef(null);
  const password = useRef(null)
  const rememberMe = useRef(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      username: username.current.value,
      password: password.current.value,
      remember_me: rememberMe.current.checked
    }

    axios.post('/login', data)
      .then((res) => {
        const { access_token, expires_at } = res.data;

        setCookie(null, 'token', access_token, {
          path: '/',
          expires: new Date(expires_at)
        });

      })
      .catch((err) => {
        const { errors, message } = err.response.data;

        setError({
          username: errors?.username,
          password: errors?.password,
          message
        })
      })
      .finally(() => setLoading(false));
  }

  return (
    <Form onSubmit={submitHandler} method="POST">
      {error?.message && <Alert variant="danger">{error.message}</Alert>}
      <Form.Group controlId="inputUsername">
        <Form.Label>Email or Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          ref={username}
          disabled={loading}
          isInvalid={Boolean(error?.username)}
          placeholder="Enter Email or Username"
        />
        {error?.username &&
          <Form.Control.Feedback type="invalid">
            {error.username.map(e => <div>{e}</div>)}
          </Form.Control.Feedback>}
      </Form.Group>
      <Form.Group controlId="inputPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          ref={password}
          disabled={loading}
          isInvalid={Boolean(error?.password)}
          placeholder="Password"
        />
        {error?.password &&
          <Form.Control.Feedback type="invalid">
            {error.password.map(e => <div>{e}</div>)}
          </Form.Control.Feedback>}
      </Form.Group>
      <Form.Group controlId="rememberMe">
        <Form.Check
          type="checkbox"
          ref={rememberMe}
          disabled={loading}
          label="&nbsp;Remember Me"
        />
      </Form.Group>
      <Button
        className="d-block w-100"
        disabled={loading}
        variant="primary"
        type="submit"
      >
        {loading ? 'Checking Credentials' : 'Login'}
      </Button>
    </Form>
  );
}

export default LoginForm;
