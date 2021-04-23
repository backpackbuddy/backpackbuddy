import { Container, Row } from "react-bootstrap";
import Layout from "../components/layouts/app";
import Header from "../components/modules/Header";

function Backpack () {
  return (
    <>
      <Header />
      <Layout>
        <Container>
          <Row>
            <h1>Backpack page</h1>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Backpack;
