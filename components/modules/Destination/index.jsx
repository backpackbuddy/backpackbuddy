import pt from 'prop-types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
import '../../../styles/destinasi.scss';

// Icons
import axios from 'axios';
import { LocationIcon } from '../../elements/Icons';

function Cards({ offset = 0, limit = 12 }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios.get('/itinerary')
      .then(res => setData(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <h4>Loading ...</h4>
  ) : (
    data
      .slice(offset, limit)
      .map(({ id, place_name, featured_picture_thumb, media }) => (
        <Col className="place__destination mb-4" xs={12} sm={6} md={4} key={id}>
          <Card className="place__card">
            <Link href={`/destinasi/${id}`}>
              <a className="place__img--link" href={`/destinasi/${id}`}>
                <Card.Img
                  className="place__img"
                  variant="top"
                  src={featured_picture_thumb}
                  alt={media.alt}
                />
              </a>
            </Link>
            <Card.Body className="place__card--body">
              <Card.Title className="place__name d-flex align-items-center mb-0">
                <LocationIcon />
                <span>&nbsp;</span>

                <Link href={`/destinasi/${id}`}>
                  <a className="place__text-truncate" title={place_name} href={`/destinasi/${id}`}>
                    {place_name}
                  </a>
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))
  );
}

Cards.propTypes = {
  offset: pt.number.isRequired,
  limit: pt.number.isRequired,
};

function Destination(props) {
  return (
    <Row className="my-2 my-md-0">
      <Cards {...props} />
    </Row>
  );
}

export default Destination;
