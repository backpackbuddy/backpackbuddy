import {
  Container,
} from 'react-bootstrap';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';

function Backpack() {
  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <h1>This is backpack page</h1>
        </Container>
      </Layout>
    </>
  );
}

export default Backpack;
