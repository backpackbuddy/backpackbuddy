import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setToast } from '../../../store/actions/toast';

function ForgotForm() {
  const email = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = { email: email.current.value };
      const res = await axios.post('/password/forgot-password', data);

      // send toast notification
      dispatch(setToast({
        title: 'Reset Password',
        message: res.data.message,
      }));

      router.push('/forgot/reset');
    } catch (err) {
      const { errors, message } = err.response.data;
      setError({ ...errors, message });

      // send toast notification
      dispatch(setToast({
        title: 'Reset Password Failed',
        message,
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit} method="POST">
      <Form.Group className="row align-items-center mb-0" controlId="email">
        <div className="col-12 col-sm-4">
          <Form.Label className="mb-0">Email</Form.Label>
        </div>
        <div className="col-12 col-sm-8">
          <Form.Control
            type="email"
            name="email"
            disabled={loading}
            ref={email}
            isInvalid={Boolean(error)}
            placeholder="Masukkan email yang terdaftar"
          />
          {error?.email && (
          <Form.Control.Feedback type="invalid">
            {error.email.map((err) => <div>{err}</div>)}
          </Form.Control.Feedback>
          )}
        </div>
      </Form.Group>
      <Form.Group className="row align-items-center" controlId="submit">
        <div className="col-sm-8 offset-sm-4 mt-3">
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? (
              <div className="d-flex align-items-center">
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
                <span className="ml-1">Mengirim</span>
              </div>
            ) : 'KIRIM'}
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
}

export default ForgotForm;
