import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Title from '../../components/elements/Title';
import Layout from '../../components/layouts/app';
import MyOrderLoader from '../../components/loader/MyOrderLoader';
import Header from '../../components/modules/Header';
import MyOrderListMobile from '../../components/modules/MyOrderListMobile';
import MyOrderList from '../../components/modules/MyOrderList';
import { selectAuth } from '../../store/selector';

function Backpack() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    if (!isLoggedIn) {
      router.push('/login');
    }

    axios.get('/order')
      .then((res) => setOrders(res.data))
      .finally(() => setLoading(false));
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <Row>
            <Col>
              <Title style={{ fontSize: '1.5rem' }}>PESANAN SAYA</Title>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {loading ? <MyOrderLoader /> : (
                <>
                  <MyOrderListMobile orders={orders} />
                  <MyOrderList orders={orders} />
                  {!orders.length && (
                    <section className="px-3 pt-lg-5">
                      <div className="text-danger text-center">Anda belum pernah melakukan pemesanan.</div>
                    </section>
                  )}
                </>
              )}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Backpack;
