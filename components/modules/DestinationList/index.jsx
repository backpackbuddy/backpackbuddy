import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations, loadMoreDestinations } from '../../../store/actions/destinations';
import { selectDestinations, selectFilterDestinations } from '../../../store/selector';
import '../../../styles/destination.scss';
import DestinationCardLoader from '../../Loading/DestinationCardLoader';
import DestinationCard from '../DestinationCard';

function DestinationList() {
  const { destinations, thereIsMore, loading } = useSelector(selectDestinations);
  const { limit, search } = useSelector(selectFilterDestinations);
  const dispatch = useDispatch();

  const Loader = () => Array.from(Array(limit)).map((i) => (
    <Col className="mb-4" xs={6} md={4} lg={3} key={i}>
      <DestinationCardLoader />
    </Col>
  ));

  const loadMoreHandler = () => {
    dispatch(loadMoreDestinations());
  };

  useEffect(() => {
    dispatch(fetchDestinations());
  }, []);

  return (
    <>
      {destinations.map((props) => (
        <Col
          className="place__destination mb-4 px-1 px-sm-3"
          xs={6}
          md={4}
          lg={3}
          // eslint-disable-next-line react/prop-types
          key={props.place_name}
        >
          <DestinationCard {...props} />
        </Col>
      ))}
      {!loading && !destinations.length && (
        <div className="text-danger mx-auto mt-4">
          {`Pencarian "${search}" tidak ditemukan`}
        </div>
      )}
      {loading && <Loader />}
      {thereIsMore && (
        <Button
          className="mx-auto d-flex align-items-center shadow-none text-decoration-none"
          onClick={loadMoreHandler}
          disabled={loading}
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
  loadMoreBtn: PropTypes.bool,
};

export default DestinationList;
