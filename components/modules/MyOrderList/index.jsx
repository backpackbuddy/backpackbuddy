import PropTypes from 'prop-types';
import Link from 'next/link';
import PriceTag from '../../elements/PriceTag';
import StatusBadge from '../../elements/StatusBadge';

function MyOrderList({ orders }) {
  return orders.map(({
    itinerary_id,
    featured_picture,
    place_name,
    status,
    status_code,
    price,
    code,
    ordered_at,
    updated_at,
  }) => (
    <div className="p-2 p-lg-3 mb-3 bg-light shadow-sm" key={code}>
      <div className="d-flex" style={{ gap: '.8rem' }}>
        <Link href={`/destination/${itinerary_id}`}>
          <a href={`/destination/${itinerary_id}`}>
            <img className="myorder__img" src={featured_picture} alt={place_name} />
          </a>
        </Link>
        <div className="flex-fill text-truncate">
          <Link href={`/destination/${itinerary_id}`}>
            <a href={`/destination/${itinerary_id}`}>
              {place_name}
            </a>
          </Link>
          <small className="d-block">{ordered_at}</small>
        </div>
      </div>
      {[
        {
          title: 'Kode: ',
          content: code,
        },
        {
          title: 'Total Pesanan:',
          content: <PriceTag className="d-inline-block" price={price} />,
        },
        {
          title: 'Status:',
          content: <StatusBadge statusCode={status_code}>{status}</StatusBadge>,
        },
        {
          title: 'Diupdate:',
          content: updated_at,
        },
      ].map(({ title, content }) => (
        <div className="text-right pt-2 mt-2 border-top d-flex justify-content-between">
          <span>{title}</span>
          <span>{content}</span>
        </div>
      ))}
    </div>
  ));
}

MyOrderList.propTypes = {
  orders: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default MyOrderList;
