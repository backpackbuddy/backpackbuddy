import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';
import OrderForm from '../../components/modules/OrderForm';
import ProfileInfoForm from '../../components/modules/ProfileInfoForm';

function Order() {
  const router = useRouter();
  const { itineraryId } = router.query;

  useEffect(() => {
    if (typeof itineraryId === 'string') {
      axios.get(`order/exist/${itineraryId}`)
        .then((res) => {
          if (res.data.exist) {
            alert('You already oldered this');
            router.back();
          }
        })
        .catch();
    }
  }, [itineraryId]);

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <Row>
            <Col md="7">
              <section className="p-5 shadow-sm">
                <h5 className="mb-4 text-uppercase font-weight-bold text-primary">
                  Pastikan data sudah benar
                </h5>
                <ProfileInfoForm />
              </section>
            </Col>
            <Col md="5">
              <section className="p-5 shadow-sm">
                <h5 className="mb-3 text-uppercase font-weight-bold text-primary">
                  Pilih metode pembayaran
                </h5>
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
