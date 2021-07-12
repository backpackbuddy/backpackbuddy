import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import toTitleCase from 'to-title-case';
import { setToast } from '../../../store/actions/toast';
import SaveBtn from '../../elements/SaveBtn';

function ProfileInfoForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [defaultValue, setDefaultValue] = useState(null);
  const [onChange, setOnChange] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const inputRef = {
    address_1: useRef(null),
    address_2: useRef(null),
    postcode: useRef(null),
    city: useRef(null),
    identity: useRef(null),
    telp: useRef(null),
  };

  useEffect(() => {
    setLoading(true);

    axios.get('/customer/me/info')
      .then((res) => setDefaultValue(res.data))
      .catch(() => router.push('/login'))
      .finally(() => setLoading(false));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      address_1: inputRef.address_1.current.value,
      address_2: inputRef.address_2.current.value,
      postcode: inputRef.postcode.current.value,
      city: inputRef.city.current.value,
      identity: inputRef.identity.current.value,
      telp: inputRef.telp.current.value,
    };

    try {
      await axios.put('customer/info', data);
      setOnChange(false);
      setError(null);
      // send toast notification
      dispatch(setToast({
        title: 'Perbarui Informasi Profil',
        message: 'Informasi profil berhasil diperbaharui',
      }));
    } catch (err) {
      const { errors, message } = err.response.data;
      setError({ ...errors, message });
    } finally {
      setLoading(false);
    }
  };

  const inputAttributes = [
    {
      name: 'address_1',
      label: 'Alamat 1',
      placeholder: 'Masukkan alamat 1',
      value: defaultValue?.address_1,
    },
    {
      name: 'address_2',
      label: 'Alamat 2 (optional)',
      placeholder: 'Masukkan alamat 2 (optional)',
      value: defaultValue?.address_2,
    },
    {
      name: 'postcode',
      label: 'Kode pos',
      value: defaultValue?.postcode,
    },
    {
      name: 'city',
      label: 'Kota',
      placeholder: 'Masukkan kota asal',
      value: defaultValue?.city,
    },
    {
      name: 'identity',
      label: 'Nomor Identitas',
      placeholder: 'Nomor Identitas KTP/Akta Kelahiran/Pasport',
      value: defaultValue?.identity,
    },
    {
      name: 'telp',
      label: 'Nomor Telepon',
      placeholder: 'Masukkan nomor telepon yang bisa dihubungi',
      value: defaultValue?.telp,
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
          </div>
          {error?.[name] && (
            <Form.Control.Feedback type="invalid">
              {error[name].map((err) => <div>{err}</div>)}
            </Form.Control.Feedback>
          )}
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

export default ProfileInfoForm;
