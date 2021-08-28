import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import toTitleCase from 'to-title-case';
import { setToast } from '../../../store/actions/toast';

function NewPasswordForm() {
  const inputRef = {
    email: useRef(null),
    password: useRef(null),
    password_confirmation: useRef(null),
    token: useRef(null),
  };
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = {
        email: inputRef.email.current.value,
        password: inputRef.password.current.value,
        password_confirmation: inputRef.password_confirmation.current.value,
        token: inputRef.token.current.value,
      };

      const res = await axios.post('/password/reset', data);

      // send toast notification
      dispatch(setToast({ title: 'Reset Password', message: res.data.message }));

      router.push('/login');
    } catch (err) {
      const { errors, message } = err.response.data;
      setError({ ...errors, message });

      // send toast notification
      dispatch(setToast({ title: 'Reset Password Failed', message }));
    } finally {
      setLoading(false);
    }
  };

  const inputAttributes = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Masukkan alamat email',
      type: 'email',
    },
    {
      name: 'password',
      label: 'Password Baru',
      placeholder: 'Masukkan password baru',
      type: 'password',
    },
    {
      name: 'password_confirmation',
      label: 'Konfirmasi Password',
      type: 'password',
    },
    {
      name: 'token',
      label: 'Token',
      placeholder: 'Masukkan token anda',
    },
  ];

  return (
    <Form onSubmit={onSubmit} method="POST">
      {inputAttributes.map(({
        label, name, type, placeholder, value,
      }) => (
        <Form.Group
          className="row align-items-center"
          key={name}
          controlId={`input${toTitleCase(name)}`}
        >
          <div className="col-12 col-sm-4">
            <Form.Label className="mb-0">{label || toTitleCase(name)}</Form.Label>
          </div>
          <div className="col-12 col-sm-8">
            <Form.Control
              key={name}
              type={type || 'text'}
              name={name}
              disabled={loading}
              defaultValue={value}
              ref={inputRef[name]}
              isInvalid={Boolean(error?.[name])}
              placeholder={placeholder}
            />
            {error?.[name] && (
              <Form.Control.Feedback type="invalid">
                {error[name].map((err) => <div>{err}</div>)}
              </Form.Control.Feedback>
            )}
          </div>
        </Form.Group>
      ))}
      <div className="row">
        <div className="col-12 offset-sm-4 col-sm-6">
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? (
              <div className="d-flex align-items-center">
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
                <span className="ml-1">Mengirim</span>
              </div>
            ) : 'KIRIM'}
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default NewPasswordForm;
