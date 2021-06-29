import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toTitleCase from 'to-title-case';

function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = {
    name: useRef(null),
    username: useRef(null),
    email: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    address_1: useRef(null),
    address_2: useRef(null),
    postcode: useRef(null),
    city: useRef(null),
    identity: useRef(null),
    telp: useRef(null),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: inputRef.name.current.value,
      username: inputRef.username.current.value,
      email: inputRef.email.current.value,
      password: inputRef.password.current.value,
      password_confirmation: inputRef.confirmPassword.current.value,
      address_1: inputRef.address_1.current.value,
      address_2: inputRef.address_2.current.value,
      postcode: inputRef.postcode.current.value,
      city: inputRef.city.current.value,
      identity: inputRef.identity.current.value,
      telp: inputRef.telp.current.value,
    };

    try {
      await axios.post('/register', data);
      router.back();
    } catch (err) {
      const { errors, message } = err.response.data;
      setError({ ...errors, message });
    } finally {
      setLoading(false);
    }
  };

  const inputAttributes = [
    {
      label: 'Nama lengkap',
      name: 'name',
      placeholder: 'Masukkan nama lengkap',
    },
    {
      name: 'username',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Cth: example@email.com',
    },
    {
      name: 'password',
      type: 'password',
    },
    {
      label: 'Konfirmasi password',
      name: 'confirmPassword',
      type: 'password',
      placeholder: ' ',
    },
    {
      name: 'address_1',
      label: 'Alamat 1',
      placeholder: 'Masukkan alamat 1',
    },
    {
      name: 'address_2',
      label: 'Alamat 2 (optional)',
      placeholder: 'Masukkan alamat 2 (optional)',
    },
    {
      name: 'postcode',
      label: 'Kode pos',
    },
    {
      name: 'city',
      label: 'Kota',
      placeholder: 'Masukkan kota asal',
    },
    {
      name: 'identity',
      label: 'Nomor Identitas',
      placeholder: 'Nomor Identitas KTP/Akta Kelahiran/Pasport',
    },
    {
      name: 'telp',
      label: 'Nomor Telepon',
      placeholder: 'Masukkan nomor telepon yang bisa dihubungi',
    },
  ];

  return (
    <Form onSubmit={handleSubmit} method="POST">
      {inputAttributes.map(({
        label, name, type, placeholder = null,
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
          />
          {error?.[name] && (
          <Form.Control.Feedback type="invalid">
            {error[name].map((err) => <div>{err}</div>)}
          </Form.Control.Feedback>
          )}
        </Form.Group>
      ))}
      <Button
        className="d-block w-100 mt-4"
        disabled={loading}
        variant="primary"
        type="submit"
      >
        {loading ? 'Memproses...' : 'Daftar sekarang'}
      </Button>
    </Form>
  );
}

export default RegisterForm;
