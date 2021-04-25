import axios from "axios";
import { useRouter } from "next/router";
import pt from 'prop-types';
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

function OrderForm ({ itineraryId }) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const router = useRouter();
	const payment = useRef(null);

	const handleSubmit = e => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		const data = {
			itinerary_id: itineraryId,
			payment: payment.current.value,
		}

		axios.post('/order', data)
			// eslint-disable-next-line no-alert
			.catch(() => router.push('/login'))
			.finally(() => router.push('/backpack'))
	}

	return (
		<>
			<Form onSubmit={handleSubmit} method="POST">
				<Form.Group controlId="payment">
					<Form.Check
						type="radio"
						name="payment"
						disabled={loading}
						ref={payment}
						checked
						label="Transfer Bank"
						isInvalid={Boolean(error?.payment)}
					/>
					{error?.payment &&
						<Form.Control.Feedback type="invalid">
							{error.payment.map(err => <div>{err}</div>)}
						</Form.Control.Feedback>}
				</Form.Group>
				<Button
					className="d-block w-100 mt-4"
					disabled={loading}
					variant="primary"
					type="submit"
				>
					{loading ? 'Memproses...' : 'Order Sekarang'}
				</Button>
			</Form >
		</>
	);
}

OrderForm.propTypes = {
	itineraryId: pt.number.isRequired
}

export default OrderForm;
