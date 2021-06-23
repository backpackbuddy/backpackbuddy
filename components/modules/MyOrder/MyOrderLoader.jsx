import { Col } from 'react-bootstrap';
import DestinationCardLoader from '../../loader/DestinationCardLoader';

function MyOrderLoader() {
  return Array.from(Array(4)).map(() => (
    <Col className="mb-4" md={6} lg={4} xl={3}>
      <DestinationCardLoader />
    </Col>
  ));
}

export default MyOrderLoader;
