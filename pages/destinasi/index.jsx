import { Container, Row } from 'react-bootstrap';
import Layout from '../../components/layouts/app';
import Destination from '../../components/modules/Destination';
import BasicTopBar from '../../components/modules/Header';

function Destinasi() {
  return (
    <>
      <BasicTopBar />
      <Layout>
        <section className="pt-4">
          <Container>
            <h1 className="text-center">Destinasi Wisata</h1>
            <p className="text-center">Pilihan Destinasi Wisata di Bali</p>

            <Row className="my-2 my-md-0">
              <Destination />
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export default Destinasi;
