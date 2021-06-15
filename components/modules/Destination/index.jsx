import axios from 'axios';
import Link from 'next/link';
import pt from 'prop-types';
import { useEffect, useState } from 'react';
import {
  Button, Card, Col, Spinner,
} from 'react-bootstrap';
import '../../../styles/destinasi.scss';
import { LocationIcon } from '../../elements/Icons';
import Loading from '../../elements/Loading';
import PriceTag from '../../elements/PriceTag';
import Stars from '../../elements/Stars';

function Destination({ offset, limit, loadMore }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offsetState, setOffsetState] = useState(offset);
  const [isLimit, setIsLimit] = useState(!loadMore);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`/itineraries/${offsetState}/${limit}`)
      .then((res) => {
        setData((prev) => [...prev, ...res.data]);

        if (res.data.length < limit) setIsLimit(true);
      })
      .finally(() => setIsLoading(false));
  }, [offsetState]);

  const doLoadMore = () => {
    setOffsetState((prev) => prev + limit);
  };

  return !data.length ? <Loading className="my-5" /> : (
    <>
      {data.map(({
        id, place_name, featured_picture_thumb, media, price, sale, average_rating,
      }) => (
        <Col className="place__destination mb-4" xs={12} sm={6} md={4} lg={3} key={id}>
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
                  <a
                    className="place__text-truncate"
                    title={place_name}
                    href={`/destinasi/${id}`}
                  >
                    {place_name}
                  </a>
                </Link>
              </Card.Title>
              <PriceTag
                className="my-3"
                sale={sale}
                price={price}
                style={{ fontSize: '1.3rem' }}
              />
              <Stars rating={average_rating} />
            </Card.Body>
          </Card>
        </Col>
      ))}
      {isLimit || (
        <Button
          className="mx-auto d-flex align-items-center shadow-none text-decoration-none"
          onClick={doLoadMore}
          disabled={isLoading}
          variant="link"
          style={{ outline: 'none' }}
        >
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
&nbsp;Loading
            </>
          ) : 'Load more'}
        </Button>
      )}
    </>
  );
}

Destination.defaultProps = {
  offset: 0,
  limit: 12,
  loadMore: true,
};

Destination.propTypes = {
  offset: pt.number,
  limit: pt.number,
  loadMore: pt.bool,
};

export default Destination;
