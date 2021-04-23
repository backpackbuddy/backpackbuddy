import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toTitleCase from "to-title-case";

function ProfileAccountForm () {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [defaultValue, setDefaultValue] = useState(null);
	const [onChange, setOnChange] = useState(false);
	const inputRef = {
		name: useRef(null),
		address_1: useRef(null),
		address_2: useRef(null),
		postcode: useRef(null),
		city: useRef(null),
		identity: useRef(null),
		telp: useRef(null),
	}

	useEffect(() => {
		setLoading(true);

		axios.get('/customer/me/info')
			.then(res => setDefaultValue(res.data))
			.finally(() => setLoading(false));
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const data = {
			name: inputRef.name.current.value,
			address_1: inputRef.address_1.current.value,
			address_2: inputRef.address_2.current.value,
			postcode: inputRef.postcode.current.value,
			city: inputRef.city.current.value,
			identity: inputRef.identity.current.value,
			telp: inputRef.telp.current.value,
		}

		try {
			await axios.put('customer/info', data)
			setOnChange(false);
			setError(null);
		} catch (err) {
			const { errors, message } = err.response.data;
			setError({ ...errors, message });
		} finally {
			setLoading(false)
		}
	}

	const inputAttributes = [
		{
			name: 'name',
			label: 'Nama',
			placeholder: 'Masukkan nama lengkap',
			value: defaultValue?.name,
		},
		{
			name: 'address_1',
			label: 'Alamat 1',
			placeholder: 'Masukkan alamat 1',
			value: defaultValue?.address_1
		},
		{
			name: 'address_2',
			label: 'Alamat 2 (optional)',
			placeholder: 'Masukkan alamat 2 (optional)',
			value: defaultValue?.address_2
		},
		{
			name: 'postcode',
			label: 'Kode pos',
			value: defaultValue?.postcode
		},
		{
			name: 'city',
			label: 'Kota',
			placeholder: 'Masukkan kota asal',
			value: defaultValue?.city
		},
		{
			name: 'identity',
			label: 'Nomor Identitas',
			placeholder: 'Nomor Identitas KTP/Akta Kelahiran/Pasport',
			value: defaultValue?.identity
		},
		{
			name: 'telp',
			label: 'Nomor Telepon',
			placeholder: 'Masukkan nomor telepon yang bisa dihubungi',
			value: defaultValue?.telp
		}
	];

	return (
		<Form onSubmit={onSubmit} method="POST">
			{inputAttributes.map(({ label, name, type, placeholder = null, value }) => (
				<Form.Group key={name} controlId={`input${toTitleCase(name)}`}>
					<Form.Label>{label || toTitleCase(name)}</Form.Label>
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
					{error?.[name] &&
						<Form.Control.Feedback type="invalid">
							{error[name].map(err => <div>{err}</div>)}
						</Form.Control.Feedback>}
				</Form.Group>
			))}
			<Button
				disabled={!onChange}
				variant="primary"
				type="submit"
			>
				{loading ? 'Loading...' : 'Simpan'}
			</Button>
		</Form>
	);
}

export default ProfileAccountForm;
