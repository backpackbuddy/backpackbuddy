import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Stars from '../../elements/Stars';
import PriceTag from '../../elements/PriceTag';
import { LocationIcon } from '../../elements/Icons';

function DestinationCard({
  id, featured_picture_thumb,
  media, place_name,
  average_rating, sale, price,
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
          sale={Number(sale)}
          price={Number(price)}
        />
        <Stars rating={average_rating} />
      </Card.Body>
    </Card>
  );
}

DestinationCard.propTypes = {
  id: PropTypes.number.isRequired,
  featured_picture_thumb: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  place_name: PropTypes.string.isRequired,
  average_rating: PropTypes.number,
  sale: PropTypes.string,
  price: PropTypes.string.isRequired,
};

export default DestinationCard;
