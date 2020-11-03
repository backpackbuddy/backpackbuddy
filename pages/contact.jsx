import Layout from '../components/layout';
import BasicTopBar from '../components/topbar';
import Sosmed from '../components/sosmed';

// icons
import {
    MessengerIcon,
    WhatsappIcon,
} from '../components/icons';

// sosmed links
import {
    whatsappLink,
    messengerLink,
} from '../components/_variable';

// react bootstrap components
import {
    Button,
    Col,
    Container,
    Form,
    Row,
} from 'react-bootstrap';

const instagram = '<div class=\'embedsocial-instagram\' data-ref="7eeddd96377ddbf1263e14695c8766c9ef00daf4"></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"));</script>';

function Contact() {
    return (
        <>
            <BasicTopBar />
            <Layout>
                <section className="pt-4">
                    <Container>
                        <h2 className="text-center mb-4">Let's Chat</h2>
                        <Row className="justify-content-center">
                            <div dangerouslySetInnerHTML={{ __html: instagram }} />
                            
                            <Col className="bg-light shadow-sm p-4 mt-4 mt-lg-0" xs={12} lg={4}>
                                <Col className="px-0" sm={6} md={12}>
                                    <h4>Alamat</h4>
                                    <p>Balai Diklat Industri Denpasar Gedung Animation Jl. WR Supratman no. 302 Tohpati Denpasar – Bali</p>
                                </Col>

                                <Col className="px-0" sm={6} md={12}>
                                    <h5>Jam Kerja</h5>
                                    <p>
                                        Senin - Jumat: 9:00 AM – 5:00 PM <br />
                                        Sabtu : 11:00 AM – 3:00 PM
                                    </p>
                                </Col>
                                <h5>Social Media</h5>
                                <Sosmed width="38px" height="38px" className="m-1 m-lg-2" />
                                <h5 className="mt-3">Personal Chat</h5>
                                <div className="m-1 m-lg-2">
                                    <a className="mr-2" href={whatsappLink}>
                                        <WhatsappIcon height="38px" width="38px" />
                                    </a>
                                    <a href={messengerLink}>
                                        <MessengerIcon height="38px" width="38px" />
                                    </a>
                                </div>
                            </Col>
                            <Col className="bg-light shadow-sm p-4" xs={{ span: 12, order: 'first' }} lg={{ offset: 1, span: 6, order: 'last' }}>
                                <h4 className="text-center mb-4">Kirim Pesan</h4>
                                <Form action="/" method="POST">
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <Form.Group controlId="name-input">
                                                <Form.Control type="text" placeholder="Nama Lengkap" />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6}>
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
