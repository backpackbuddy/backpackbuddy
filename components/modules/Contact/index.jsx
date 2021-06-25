import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import '../../../styles/contact.scss';

function Contact() {
  return (
    <div className="contact">
      <Row>
        <Col xs={12} md={6}>
          <Form className="contact__form" action="/" method="POST">
            <Form.Group controlId="name-input">
              <Form.Control type="text" placeholder="Nama" />
            </Form.Group>
            <Form.Group controlId="email-input">
              <Form.Control type="email" placeholder="Masukkan alamat E-Mail" />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
