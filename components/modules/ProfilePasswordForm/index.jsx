import axios from 'axios';
import { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import toTitleCase from 'to-title-case';
import SaveBtn from '../../elements/SaveBtn';

function ProfilePasswordForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [onChange, setOnChange] = useState(false);
  const inputRef = {
    old_password: useRef(null),
    password: useRef(null),
    password_confirmation: useRef(null),
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      old_password: inputRef.old_password.current.value,
      password: inputRef.password.current.value,
      password_confirmation: inputRef.password_confirmation.current.value,
    };

    try {
      await axios.put('customer/password', data);
      setOnChange(false);
      setError(null);

      // reset input
      inputRef.old_password.current.value = '';
      inputRef.password.current.value = '';
      inputRef.password_confirmation.current.value = '';
    } catch (err) {
      const { errors, message } = err.response.data;
      setError({ ...errors, message });
    } finally {
      setLoading(false);
    }
  };

  const inputAttributes = [
    {
      name: 'old_password',
      label: 'Password Lama',
      placeholder: 'Masukkan password lama',
    },
    {
      name: 'password',
      placeholder: 'Masukkan password baru',
    },
    {
      name: 'password_confirmation',
      label: 'Konfirmasi Password',
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
            <Form.Label>{label || toTitleCase(name)}</Form.Label>
          </div>
          <div className="col-12 col-sm-6">
            <Form.Control
              key={name}
              type={type || 'password'}
              name={name}
              disabled={loading}
              defaultValue={value}
              onChange={setOnChange}
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
          <SaveBtn onChange={onChange} loading={loading} />
        </div>
      </div>
    </Form>
  );
}

export default ProfilePasswordForm;
