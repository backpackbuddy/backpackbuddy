import PropTypes from 'prop-types';
import Link from 'next/link';
import PriceTag from '../../elements/PriceTag';
import StatusBadge from '../../elements/StatusBadge';

function MyOrderListMobile({ orders }) {
  return orders.map(({
    id,
    itinerary_id,
    featured_picture,
    place_name,
    status,
    status_code,
    price,
    code,
    ordered_at,
  }) => (
    <div className="d-lg-none p-3 mb-2 bg-white shadow-sm" key={code}>
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
          <small className="d-block text-right">{ordered_at}</small>
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
          title: <StatusBadge statusCode={status_code}>{status}</StatusBadge>,
        },
        {
          title: (
            <Link href={`/myorder/${id}`}>
              <a
                className="d-block w-100 btn btn-link btn-sm font-weight-bold mt-1 shadow-none"
                href={`/myorder/${id}`}
              >
                LIHAT PESANAN
              </a>
            </Link>
          ),
        },
      ].map(({ title, content }) => (
        <div className="text-right pt-2 mt-2 border-top">
          <span>{title}</span>
          <span>{content}</span>
        </div>
      ))}
    </div>
  ));
}

MyOrderListMobile.propTypes = {
  orders: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default MyOrderListMobile;
