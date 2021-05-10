import axios from 'axios';
import Link from 'next/link';
import pt from 'prop-types';
import { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import '../../../styles/destinasi.scss';
import { LocationIcon } from '../../elements/Icons';
import Loading from '../../elements/Loading';

function Destination ({ offset, limit, loadMore }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offsetState, setOffsetState] = useState(offset);
  const [isLimit, setIsLimit] = useState(!loadMore);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`/itinerary/${offsetState}/${limit}`)
      .then(res => {
        setData((prev) => [...prev, ...res.data]);

        if (res.data.length < limit) setIsLimit(true);
      })
      .finally(() => setIsLoading(false));
  }, [offsetState]);

  const doLoadMore = () => {
    setOffsetState((prev) => prev + limit);
  }

  return !data.length ? <Loading /> : (
    <>
      {data.map(({ id, place_name, featured_picture_thumb, media }) => (
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
                  <a
                    className="place__text-truncate"
                    title={place_name}
                    href={`/destinasi/${id}`}
                  >
                    {place_name}
                  </a>
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {isLimit || (
        <Button
          className="mx-auto"
          onClick={doLoadMore}
          disabled={isLoading}
          variant="link"
        >
          { isLoading ? 'Loading ...' : 'Load More'}
        </Button>
      )}
    </>
  );
}

Destination.defaultProps = {
  offset: 0,
  limit: 12,
  loadMore: true,
}

Destination.propTypes = {
  offset: pt.number,
  limit: pt.number,
  loadMore: pt.bool,
}

export default Destination;
