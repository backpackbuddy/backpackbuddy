import Header from '../components/header';
import Layout from '../components/layout';

import {
    Button,
    Col,
    Container,
    Form,
    Row,
} from 'react-bootstrap';

function Contact() {
    return (
        <>
            <Header
                title="Let's Chat"
            />
            <Layout>
                <section>
                    <Container>
                        <Row>
                            <Col className="bg-light p-4" xs={12} md={4}>
                                <h4>Alamat</h4>
                                <p>Balai Diklat Industri Denpasar Gedung Animation Jl. WR Supratman no. 302 Tohpati Denpasar – Bali</p>

                                <h5>Jam Kerja</h5>
                                <p>
                                    Senin - Jumat: 9:00 AM – 5:00 PM <br />
                                    Sabtu : 11:00 AM – 3:00 PM
                                </p>
                            </Col>
                            <Col className="bg-light p-4" xs={12} md={{ offset: 1, span: 6 }}>
                                <h4 className="text-center mb-4">Kirim Pesan</h4>
                                <Form action="/" method="POST">
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="name-input">
                                                <Form.Control type="text" placeholder="Nama Lengkap" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="email-input">
                                                <Form.Control type="email" placeholder="Alamat E-Mail" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col>
                                            <Form.Group controlId="message-input">
                                                <Form.Control type="text" as="textarea" rows="5" placeholder="Ketikkan Sesuatu..." />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button variant="primary" type="submit">Kirim Pesan</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    );
}

export default Contact;
