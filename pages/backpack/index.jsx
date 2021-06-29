import {
  Col, Container, Row, Image,
} from 'react-bootstrap';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';

function Backpack() {
  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <h1
            className="font-weight-bold mb-3 text-uppercase"
            style={{ fontSize: '2rem' }}
          >
            Ransel Saya
          </h1>
          <section className="p-4">
            <Row>
              <Col lg="4">
                <div className="d-flex" style={{ columnGap: '1rem' }}>
                  <Image
                    className="img-fluid img-thumbnail"
                    src="https://unsplash.it/1000/800"
                    style={{
                      height: '150px',
                      objectFit: 'cover',
                      width: '120px',
                    }}
                  />
                  <div>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum </p>
                  </div>
                </div>
              </Col>
              <Col lg="8">
                <div>Lorem Ipsum</div>
              </Col>
            </Row>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export default Backpack;
