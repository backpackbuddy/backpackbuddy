import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toTitleCase from "to-title-case";

function ProfileSecurityForm () {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [defaultValue, setDefaultValue] = useState(null);
	const [onChange, setOnChange] = useState(false);
	const inputRef = {
		username: useRef(null),
		email: useRef(null),
	}

	useEffect(() => {
		setLoading(true);

		axios.get('/customer/me')
			.then(res => setDefaultValue(res.data))
			.finally(() => setLoading(false));
	}, []);

	const onSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const data = {
			username: inputRef.username.current.value,
			email: inputRef.email.current.value,
		}

		try {
			await axios.put('customer', data)
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
			name: 'username',
			value: defaultValue?.username
		},
		{
			name: 'email',
			value: defaultValue?.email
		},
	]

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

export default ProfileSecurityForm;
