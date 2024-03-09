import Link from 'next/link';
import Router from 'next/router';
import { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import toTitleCase from 'to-title-case';
import { authenticate } from '../../../store/actions/auth';

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = {
    username: useRef(null),
    password: useRef(null),
    rememberMe: useRef(false),
  };
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      username: inputRef.username.current.value,
      password: inputRef.password.current.value,
      remember_me: inputRef.rememberMe.current.checked,
    };

    try {
      await dispatch(authenticate(data));
      Router.back();
    } catch (err) {
      const { errors, message } = err.response.data;
      setError({ ...errors, message });
    } finally {
      setLoading(false);
    }
  };

  const inputAttributes = [
    {
      label: 'Username',
      name: 'username',
      placeholder: 'Masukkan username',
      autofocus: true,
      defaultValue: 'member',
    },
    {
      name: 'password',
      type: 'password',
      defaultValue: 'password',
    },
  ];

  return (
    <Form onSubmit={submitHandler} method="POST">
      {error?.message && <Alert variant="danger">{error.message}</Alert>}
      {inputAttributes.map(({
        label, name, type, placeholder, autofocus = false, defaultValue
      }) => (
        <Form.Group key={name} controlId={`input${toTitleCase(name)}`}>
          <Form.Label>{label || toTitleCase(name)}</Form.Label>
          <Form.Control
            key={name}
            type={type || 'text'}
            name={name}
            disabled={loading}
            ref={inputRef[name]}
            isInvalid={Boolean(error?.[name])}
            placeholder={placeholder || `Masukkan ${name}`}
            autoFocus={autofocus}
            defaultValue={defaultValue}
          />
          {error?.[name]
            && (
              <Form.Control.Feedback type="invalid">
                {error[name].map((err) => <div>{err}</div>)}
              </Form.Control.Feedback>
            )}
        </Form.Group>
      ))}
      <div className="d-flex justify-content-between">
        <Form.Group controlId="rememberMe">
          <Form.Check
            type="checkbox"
            ref={inputRef.rememberMe}
            disabled={loading}
            label="&nbsp;Ingat Saya"
          />
        </Form.Group>
        <Link href="/forgot">
          <a className="text-primary" href="/forgot">Lupa Password?</a>
        </Link>
      </div>
      <Button
        className="d-block w-100"
        disabled={loading}
        variant="primary"
        type="submit"
      >
        {loading ? 'Sedang memproses' : 'Masuk'}
      </Button>
    </Form>
  );
}

export default LoginForm;
