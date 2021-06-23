import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import toTitleCase from 'to-title-case';
import { setAuth } from '../../../store/actions/auth';
import SaveBtn from '../../elements/SaveBtn';

function ProfileAccountForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [defaultValue, setDefaultValue] = useState(null);
  const [onChange, setOnChange] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const inputRef = {
    name: useRef(null),
    username: useRef(null),
    email: useRef(null),
  };

  useEffect(() => {
    setLoading(true);

    axios.get('/customer/me')
      .then((res) => setDefaultValue(res.data))
      .catch(() => router.push('/login'))
      .finally(() => setLoading(false));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      name: inputRef.name.current.value,
      username: inputRef.username.current.value,
      email: inputRef.email.current.value,
    };

    try {
      await axios.put('customer', data);
      setOnChange(false);
      setError(null);
      dispatch(setAuth(data.username));
    } catch (err) {
      const { errors, message } = err.response.data;
      setError({ ...errors, message });
    } finally {
      setLoading(false);
    }
  };

  const inputAttributes = [
    {
      name: 'name',
      label: 'Nama Lengkap',
      placeholder: 'Masukkan nama lengkap',
      value: defaultValue?.name,
    },
    {
      name: 'username',
      value: defaultValue?.username,
    },
    {
      name: 'email',
      value: defaultValue?.email,
    },
  ];

  return (
    <Form onSubmit={onSubmit} method="POST">
      {inputAttributes.map(({
        label, name, type, placeholder = null, value,
      }) => (
        <Form.Group
          className="row align-items-center"
          key={name}
          controlId={`input${toTitleCase(name)}`}
        >
          <div className="col-12 col-sm-4">
            <Form.Label>{label || toTitleCase(name)}</Form.Label>
          </div>
          <div className="col-12 col-sm-6">
            <Form.Control
              key={name}
              type={type || 'text'}
              name={name}
              disabled={loading}
              defaultValue={value}
              onChange={setOnChange}
              ref={inputRef[name]}
              isInvalid={Boolean(error?.[name])}
              placeholder={placeholder || `Masukkan ${name}`}
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
          <SaveBtn onChange={onChange} loading={loading} />
        </div>
      </div>
    </Form>
  );
}

export default ProfileAccountForm;
