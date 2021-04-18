import axios from "axios";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toTitleCase from 'to-title-case';
import { loginUtils } from "../../../utils/auth";

function RegisterForm () {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const inputRef = {
		name: useRef(null),
		username: useRef(null),
		email: useRef(null),
		password: useRef(null),
		confirmPassword: useRef(null),
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const data = {
			name: inputRef.name.current.value,
			username: inputRef.username.current.value,
			email: inputRef.email.current.value,
			password: inputRef.password.current.value,
			password_confirmation: inputRef.confirmPassword.current.value,
		}

		try {
			const res = await axios.post('/register', data);
			await loginUtils(await res.data);
		} catch (err) {
			const { errors, message } = err.response.data;
			setError({ ...errors, message });
		} finally {
			setLoading(false)
		}
	}

	const inputAttributes = [
		{
			label: 'Nama lengkap',
			name: 'name',
			placeholder: 'Masukkan nama lengkap'
		},
		{
			name: 'username',
		},
		{
			name: 'email',
			type: 'email',
			placeholder: 'Cth: example@email.com'
		},
		{
			name: 'password',
			type: 'password',
		},
		{
			label: 'Konfirmasi password',
			name: 'confirmPassword',
			type: 'password',
			placeholder: ' '
		},
	]

	return (
		<Form onSubmit={handleSubmit} method="POST">
			{inputAttributes.map(({ label, name, type, placeholder = null }) => (
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
					{error?.[name] &&
						<Form.Control.Feedback type="invalid">
							{error[name].map(err => <div>{err}</div>)}
						</Form.Control.Feedback>}
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
