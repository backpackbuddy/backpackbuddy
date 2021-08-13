import { faCheck, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateMyOrder } from '../../../store/actions/myOrders';
import { setToast } from '../../../store/actions/toast';
import { cslx } from '../../../utils/cslx';
import PriceTag from '../../elements/PriceTag';
import StatusBadge from '../../elements/StatusBadge';

function MyOrderList({ orders }) {
  const dispatch = useDispatch();

  const isPayed = (status_code) => status_code === 4;

  const receiptUploadHandler = async (e, id, index) => {
    if (window.confirm('Upload file sekarang?')) {
      const [file] = e.target.files;

      const formData = new FormData();
      formData.append('receipt', file, 'receipt');

      const req = await axios.post(`/order/${id}/upload-receipt`, formData);
      const res = await req.data;

      if (res) {
        dispatch(setToast({
          title: 'Upload Berhasil',
          message: 'Upload Bukti Pembayaran Berhasil!',
        }));

        dispatch(updateMyOrder(res, index));
      }
    }
  };

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
    updated_at,
  }, index) => (
    <div className="p-2 p-lg-3 mb-3 bg-light shadow-sm" key={code}>
      <div className="d-flex" style={{ gap: '.8rem' }}>
        <Link href={`/destination/${itinerary_id}`}>
          <a href={`/destination/${itinerary_id}`}>
            <img className="myorder__img" src={featured_picture} alt={place_name} />
          </a>
        </Link>
        <div className="flex-fill text-truncate">
          <Link href={`/destination/${itinerary_id}`}>
            <a href={`/destination/${itinerary_id}`}>{place_name}</a>
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
          title: 'Total Biaya:',
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
        <div
          className="text-right pt-2 mt-2 border-top d-flex justify-content-between"
          key={title}
        >
          <span>{title}</span>
          <span>{content}</span>
        </div>
      ))}

      <form className="d-flex justify-content-between align-items-center">
        <label
          className={cslx(
            isPayed(status_code) && 'disabled',
            'mx-auto d-block text-uppercase mt-3 btn btn-link btn-sm',
          )}
          htmlFor={`receipt-${id}`}
        >
          <input
            type="file"
            className="d-none"
            id={`receipt-${id}`}
            name="receipt"
            disabled={isPayed(status_code)}
            onChange={(e) => receiptUploadHandler(e, id, index)}
          />
          <FontAwesomeIcon className="mr-2" icon={isPayed(status_code) ? faCheck : faUpload} />
          {isPayed(status_code) ? 'Menunggu Konfirmasi' : 'Upload Bukti Pembayaran'}
        </label>
      </form>
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
