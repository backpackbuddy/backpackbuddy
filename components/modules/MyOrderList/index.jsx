import {
  faCheck, faQuestionCircle, faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ListGroup, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateMyOrder } from '../../../store/actions/myOrders';
import { setToast } from '../../../store/actions/toast';
import { cslx } from '../../../utils/cslx';
import PriceTag from '../../elements/PriceTag';
import StatusBadge from '../../elements/StatusBadge';

function MyOrderList({ orders }) {
  const [modalPrice, setModalPrice] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const isPendingPayment = (status_code) => status_code === 4;

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

  const revealPaymentInfo = (price) => {
    setModalShow(true);
    setModalPrice(price);
  };

  return (
    <>
      <Modal
        aria-labelledby="payment-info"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="payment-info">
            Cara melakukan pembayaran
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Melakukan Transfer via ATM</h5>
          <ListGroup>
            <ListGroup.Item>Pilih Jenis Transaksi, Anda dapat memilih Transfer</ListGroup.Item>
            <ListGroup.Item>Pilih Bank Tujuan Transfer, Pilih Bank BNI</ListGroup.Item>
            <ListGroup.Item>
              <span>Masukkan nomor rekening </span>
              <strong>123456789</strong>
              <span>. Lalu pilih BENAR</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Isikan jumlah nominal transfer sebesar </span>
              <PriceTag className="d-inline-block" price={modalPrice} />
            </ListGroup.Item>
            <ListGroup.Item>Pilih proses transfer dengan memilih Ya, jika semua informasi sudah benar. </ListGroup.Item>
            <ListGroup.Item>Selanjutnya Anda akan mendapatkan struk transfer, Foto struk tersebut lalu upload.</ListGroup.Item>
            <ListGroup.Item>
              <span>Selanjutnya anda akan segera dihubungi oleh admin. Pastikan data diri anda sudah benar. </span>
              <span className="text-primary">
                <Link href="/me/profile">Ubah Identitas Saya</Link>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>

      {orders.map(({
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
              content: (
                <div className="d-flex align-items-center">
                  {status_code === 1 && (
                    <>
                      <FontAwesomeIcon
                        className="text-secondary mr-1"
                        icon={faQuestionCircle}
                        onClick={() => revealPaymentInfo(price)}
                        style={{ cursor: 'pointer' }}
                      />
                    </>
                  )}
                  <StatusBadge statusCode={status_code}>{status}</StatusBadge>
                </div>
              ),
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

          {isPendingPayment(status_code) && (
          <form className="d-flex justify-content-between align-items-center">
            <label
              className={cslx(
                isPendingPayment(status_code) || 'disabled',
                'mx-auto d-block text-uppercase mt-3 btn btn-link btn-sm',
              )}
              htmlFor={`receipt-${id}`}
            >
              <input
                type="file"
                className="d-none"
                id={`receipt-${id}`}
                name="receipt"
                disabled={!isPendingPayment(status_code)}
                onChange={(e) => receiptUploadHandler(e, id, index)}
              />
              <FontAwesomeIcon className="mr-2" icon={isPendingPayment(status_code) ? faUpload : faCheck} />
              {isPendingPayment(status_code) ? 'Upload Bukti Pembayaran' : 'Menunggu Konfirmasi'}
            </label>
          </form>
          )}
        </div>
      ))}
    </>
  );
}

MyOrderList.propTypes = {
  orders: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default MyOrderList;
