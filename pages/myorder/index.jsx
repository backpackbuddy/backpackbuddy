import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Col,
  Container, Row, Table,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PriceTag from '../../components/elements/PriceTag';
import StatusBadge from '../../components/elements/StatusBadge';
import Title from '../../components/elements/Title';
import Layout from '../../components/layouts/app';
import MyOrderLoader from '../../components/loader/MyOrderLoader';
import Header from '../../components/modules/Header';
import { selectAuth } from '../../store/selector';

function Backpack() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    if (!isLoggedIn) {
      router.push('/login');
    }

    axios.get('/order')
      .then((res) => setOrders(res.data))
      .finally(() => setLoading(false));
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <Row>
            <Col>
              <Title style={{ fontSize: '1.5rem' }}>PESANAN SAYA</Title>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <section className="p-4">
                {loading ? <MyOrderLoader /> : (
                  <Table borderless>
                    <thead className="border-bottom">
                      <tr className="text-primary">
                        <th>PRODUK</th>
                        <th>KODE PESANAN</th>
                        <th>STATUS</th>
                        <th>TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
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
                      }) => (
                        <tr key={code}>
                          <td>
                            <div className="d-flex">
                              <Link href={`/destination/${itinerary_id}`}>
                                <a href={`/destination/${itinerary_id}`}>
                                  <img
                                    className="rounded"
                                    src={featured_picture}
                                    alt={place_name}
                                    style={{
                                      height: '60px',
                                      objectFit: 'cover',
                                      width: '90px',
                                    }}
                                  />
                                </a>
                              </Link>
                              <div className="ml-3">
                                <Link href={`/destination/${itinerary_id}`}>
                                  <a href={`/destination/${itinerary_id}`}>{place_name}</a>
                                </Link>
                                <small className="d-block">{ordered_at}</small>
                              </div>
                            </div>
                          </td>
                          <td>{code}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <StatusBadge statusCode={status_code}>{status}</StatusBadge>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <PriceTag price={price} />
                              <Link href={`/myorder/${id}`}>
                                <a
                                  href={`/myorder/${id}`}
                                  className="btn btn-outline-primary ml-auto text-nowrap"
                                  variant="outline-primary"
                                >
                                  Rincian Pesanan
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Backpack;
