import { Container } from "react-bootstrap";
import Layout from "../../components/layouts/app";
import Header from "../../components/modules/Header";

function BackpackDetails () {
  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <section>
            <h2>Test</h2>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export default BackpackDetails;
