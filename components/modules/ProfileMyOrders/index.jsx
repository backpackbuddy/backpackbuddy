import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyOrders } from '../../../store/actions/myOrders';
import { selectMyOrders } from '../../../store/selector';
import Title from '../../elements/Title';
import MyOrderLoader from '../../loader/MyOrderLoader';
import MyOrderList from '../MyOrderList';

function ProfileMyOrders() {
  const { orders = [], loading } = useSelector(selectMyOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, []);

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
