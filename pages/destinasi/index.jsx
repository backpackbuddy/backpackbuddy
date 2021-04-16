import { Container } from 'react-bootstrap';

// Components
import BasicTopBar from '../../components/modules/Header';
import Layout from '../../components/layouts/app';
import Destination from '../../components/modules/Destination';

function Destinasi() {
  return (
    <>
      <BasicTopBar />
      <Layout>
        <section className="pt-4">
          <Container>
            <h1 className="text-center">Destinasi Wisata</h1>
            <p className="text-center">Pilihan Destinasi Wisata di Bali</p>

            <Destination />
          </Container>
        </section>
      </Layout>
    </>
  );
}

export default Destinasi;
