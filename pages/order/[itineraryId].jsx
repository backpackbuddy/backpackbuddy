import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Layout from '../../components/layouts/app';
import Header from '../../components/modules/Header';
import OrderForm from '../../components/modules/OrderForm';
import ProfileInfoForm from '../../components/modules/ProfileInfoForm';
import { setToast } from '../../store/actions/toast';

function Order() {
  const router = useRouter();
  const { itineraryId } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`order/exist/${itineraryId}`)
      .then((res) => {
        if (res.data.exist) {
          dispatch(setToast({
            title: 'Terjadi kesalahan',
            message: 'Anda sudah memesan produk ini, silahkan periksa ransel anda',
            bg: 'danger',
          }));
          router.back();
        }
      })
      .catch();
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
                <ProfileInfoForm displayTitle={false} />
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
