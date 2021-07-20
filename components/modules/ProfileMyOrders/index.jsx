import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../store/selector';
import Title from '../../elements/Title';
import MyOrderLoader from '../../loader/MyOrderLoader';
import MyOrderList from '../MyOrderList';

function ProfileMyOrders() {
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
      <Title>PESANAN SAYA</Title>
      <Row>
        <Col xs={12}>
          {loading ? <MyOrderLoader /> : (
            <>
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
    </>
  );
}

export default ProfileMyOrders;
