import { Button, Card, Col } from "react-bootstrap";
import NumberFormat from "react-number-format";
import pt from 'prop-types';
import '../../../styles/backpack.scss';
import Link from "next/link";
import Loading from "../../elements/Loading";

function BackpackItem ({ orders, loading }) {

  if (loading) {
    return <Loading />
  }

  return !orders.length
    ? <div className="w-100 text-center">Tidak ada data yang ditampilkan</div>
    : orders.map(({ itinerary_id, code, status, price, featured_picture, place_name }) => (
      <Col className="mb-4" md={6} lg={4} xl={3}>
        <Card>
          <Link href={`destinasi/${itinerary_id}`}>
            <a href={`destinasi/${itinerary_id}`}>
              <Card.Img
                className="backpack__img"
                variant="top"
                src={featured_picture}
              />
            </a>
          </Link>
          <Card.Body>
            <Card.Title>
              <Link href={`destinasi/${itinerary_id}`}>{place_name}</Link>
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

BackpackItem.propTypes = {
  orders: pt.instanceOf(Array).isRequired,
  loading: pt.bool.isRequired
}

export default BackpackItem;
