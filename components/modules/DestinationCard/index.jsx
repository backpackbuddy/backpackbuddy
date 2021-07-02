import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { LocationIcon } from '../../elements/Icons';
import PriceTag from '../../elements/PriceTag';
import Stars from '../../elements/Stars';

function DestinationCard({
  id,
  featured_picture_thumb,
  media,
  place_name,
  average_rating,
  sale,
  price,
  orders_count,
}) {
  return (
    <Card className="place__card">
      <Link href={`/destination/${id}`}>
        <a className="place__img--link" href={`/destination/${id}`}>
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

          <Link href={`/destination/${id}`}>
            <a
              className="place__text-truncate"
              title={place_name}
              href={`/destination/${id}`}
            >
              {place_name}
            </a>
          </Link>
        </Card.Title>
        <PriceTag
          className="my-3"
          sale={sale}
          price={price}
        />
        <div className="d-flex align-items-center justify-content-between">
          <Stars rating={average_rating} />
          <small className="text-secondary">{orders_count} Terjual</small>
        </div>
      </Card.Body>
    </Card>
  );
}

DestinationCard.propTypes = {
  id: PropTypes.number.isRequired,
  featured_picture_thumb: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(PropTypes.string).isRequired,
  place_name: PropTypes.string.isRequired,
  average_rating: PropTypes.number,
  sale: PropTypes.number,
  price: PropTypes.number.isRequired,
  orders_count: PropTypes.number.isRequired,
};

export default DestinationCard;
