import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  Button, Col,
} from 'react-bootstrap';
import '../../../styles/destinasi.scss';
import DestinationCardLoader from '../../Loading/DestinationCardLoader';
import DestinationCard from '../DestinationCard';

function DestinationList({
  offset = 0, limit = 12, loadMore = true, search = '',
}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offsetState, setOffsetState] = useState(offset);
  const [isLimit, setIsLimit] = useState(!loadMore);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`/itineraries?offset=${offset}&limit=${limit}&search=${search}`)
      .then((res) => {
        setData((prev) => [...prev, ...res.data]);

        if (res.data.length < limit) setIsLimit(true);
      })
      .finally(() => setIsLoading(false));
  }, [offsetState]);

  const Loader = () => Array.from(Array(limit)).map((i) => (
    <Col className="mb-4" xs={6} md={4} lg={3} key={i}>
      <DestinationCardLoader />
    </Col>
  ));

  const doLoadMore = () => {
    setOffsetState((prev) => prev + limit);
  };

  return (
    <>
      {data.map((props) => (
        <Col
          className="place__destination mb-4 px-1 px-sm-3"
          xs={6}
          md={4}
          lg={3}
          key={props}
        >
          <DestinationCard {...props} />
        </Col>
      ))}
      {isLoading && <Loader />}
      {isLimit || (
      <Button
        className="mx-auto d-flex align-items-center shadow-none text-decoration-none"
        onClick={doLoadMore}
        disabled={isLoading}
        variant="link"
        style={{ outline: 'none' }}
      >
        Load More
      </Button>
      )}
    </>
  );
}

DestinationList.propTypes = {
  search: PropTypes.string,
  offset: PropTypes.number,
  limit: PropTypes.number,
  loadMore: PropTypes.bool,
};

export default DestinationList;
