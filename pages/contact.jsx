import {
  Button, Col, Container, Form, Row,
} from 'react-bootstrap';
import { MessengerIcon, WhatsappIcon } from '../components/elements/Icons';
import PageHeader from '../components/elements/PageHeader';
import Sosmed from '../components/elements/Sosmed';
import Title from '../components/elements/Title';
import Layout from '../components/layouts/app';
import BasicTopBar from '../components/modules/Header';
import { MESSENGER_LINK, WHATSAPP_LINK } from '../constants/sosmed-links';

function Contact() {
  return (
    <>
      <BasicTopBar />
      <Layout>
        <Container className="my-5">
          <PageHeader title="kontak" description="Let's chat" />
          <Row className="justify-content-center">
            <Col
              className="bg-white shadow-sm p-4 mt-4 mt-lg-0"
              xs={12}
              lg={4}
            >
              <Col className="px-0" sm={6} md={12}>
                <Title style={{ fontSize: '1.8rem' }}>ALAMAT</Title>
                <p>
                  Balai Diklat Industri Denpasar Gedung Animation Jl. WR
                  Supratman no. 302 Tohpati Denpasar – Bali
                </p>
              </Col>

              <Col className="px-0" sm={6} md={12}>
                <Title style={{ fontSize: '1.1rem' }}>JAM KERJA</Title>
                <p>
                  Senin - Jumat: 9:00 AM – 5:00 PM
                  <br />
                  Sabtu : 11:00 AM – 3:00 PM
                </p>
              </Col>
              <Title style={{ fontSize: '1.1rem' }}>SOCIAL MEDIA</Title>
              <Sosmed width="38px" height="38px" className="m-1 m-lg-2" />
              <Title className="mt-3" style={{ fontSize: '1.1rem' }}>PERSONAL CHAT</Title>
              <div className="m-1 m-lg-2">
                <a className="mr-2" href={WHATSAPP_LINK}>
                  <WhatsappIcon height="38px" width="38px" />
                </a>
                <a href={MESSENGER_LINK}>
                  <MessengerIcon height="38px" width="38px" />
                </a>
              </div>
            </Col>
            <Col
              className="bg-white shadow-sm p-4"
              xs={{ span: 12, order: 'first' }}
              lg={{ offset: 1, span: 6, order: 'last' }}
            >
              <Title className="text-center" style={{ fontSize: '1.8rem' }}>KIRIM PESAN</Title>
              <Form action="/api/sendmail" method="POST">
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group controlId="name-input">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Nama Lengkap"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group controlId="email-input">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Alamat E-Mail"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} />
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Form.Group controlId="message-input">
                      <Form.Control
                        type="text"
                        as="textarea"
                        rows="5"
                        placeholder="Ketikkan Sesuatu..."
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className="font-weight-bold" variant="primary" type="submit">
                      KIRIM PESAN
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>

          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Contact;
