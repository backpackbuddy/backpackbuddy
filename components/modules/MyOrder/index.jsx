import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import '../../../styles/backpack.scss';
import MyOrderLoader from './MyOrderLoader';

function MyOrder({ orders, loading }) {
  if (loading) return <MyOrderLoader />;

  return !orders.length
    ? (
      <div
        className="w-100 text-center text-danger d-flex align-items-center justify-content-center"
        style={{ minHeight: '300px' }}
      >
        Tidak ada data yang dapat ditampilkan
      </div>
    )
    : orders.map(({
      itinerary_id, code, status, price, featured_picture, place_name,
    }) => (
      <Col className="mb-4" md={6} lg={4} xl={3}>
        <Card>
          <Link href={`destination/${itinerary_id}`}>
            <a href={`destination/${itinerary_id}`}>
              <Card.Img
                className="backpack__img"
                variant="top"
                src={featured_picture}
              />
            </a>
          </Link>
          <Card.Body>
            <Card.Title>
              <Link href={`destination/${itinerary_id}`}>{place_name}</Link>
            </Card.Title>
            <Card.Text>
              <small>{code}</small>
              <div>{status}</div>
              <h5 className="text-danger mt-2">
                <NumberFormat
                  displayType="text"
                  value={price}
                  prefix="Rp. "
                  thousandSeparator
                />
              </h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
}

MyOrder.propTypes = {
  orders: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyOrder;
