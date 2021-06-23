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
          <section className="p-4">
            <Row>
              <Col lg="4">
                <Image
                  className="img-fluid img-thumbnail"
                  src="https://unsplash.it/1000/800"
                  style={{
                    height: '150px',
                    objectFit: 'cover',
                    width: '120px',
                  }}
                />
              </Col>
              <Col lg="4">
                <div> Lorem Ipsum </div>
                <div>Lorem ipsum</div>
              </Col>
              <Col lg="4">
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
