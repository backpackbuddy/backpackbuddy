import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/layouts/app";
import Header from "../../components/modules/Header";
import OrderForm from "../../components/modules/OrderForm";
import ProfileAccountForm from "../../components/modules/ProfileAccountForm";

function Order () {
  const router = useRouter();
  const { itineraryId } = router.query;

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <Row>
            <Col md="7">
              <section className="p-5 shadow-sm">
                <h5 className="mb-3">Pastikan data sudah benar</h5>
                <ProfileAccountForm />
              </section>
            </Col>
            <Col md="5">
              <section className="p-5 shadow-sm">
                <h5 className="mb-3">Pilih metode pembayaran</h5>
                <OrderForm itineraryId={itineraryId} />
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Order;
