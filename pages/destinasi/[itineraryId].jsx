import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import Rating from 'react-rating';
// Icons
import {
  StarFilledIcon,
  StarOutlineIcon
} from '../../components/elements/Icons';
// Components
import Layout from '../../components/layouts/app';
import BasicTopBar from '../../components/modules/Header';
import Reviews from '../../components/modules/Reviews';
import '../../styles/itinerary.scss';



function Itinerary () {
  const { itineraryId } = useRouter().query;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAlreadyOrdered, setIsAlreadyOrdered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const appState = JSON.parse(localStorage.getItem('app_state'));

    if (appState) {
      setIsLoggedIn(appState.isLoggedIn);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);

    if (itineraryId) {
      axios.get(`/itinerary/${itineraryId}`)
        .then(res => setData(res.data))
        .finally(() => setIsLoading(false));
    }
  }, [itineraryId]);

  useEffect(() => {
    if (typeof itineraryId === 'string' && isLoggedIn) {
      axios.get(`order/exist/${itineraryId}`)
        .then((res) => setIsAlreadyOrdered(res.data.exist))
        .catch(() => { })
    }
  }, [itineraryId, isLoggedIn]);

  return (
    <>
      <BasicTopBar />
      <Layout>
        <div className="bg-light premium">
          <Container className="py-4">
            {isLoading ? (
              <h4>Loading ...</h4>
            ) : (
              <>
                <Carousel
                  className="premium__carousel mb-4"
                  pause={false}
                  height="400px"
                >
                  {data.media.reverse().map(({ url, alt }) => (
                    <Carousel.Item key={url}>
                      <img
                        className="premium__img d-block w-100 bg-secondary"
                        src={url}
                        alt={alt}
                        loading="lazy"
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Row>
                  <Col
                    lg={{
                      span: 4,
                      order: 'last',
                    }}
                  >
                    <div className="border p-4 bg-white">
                      {data.sale ? (
                        <>
                          <p className="premium__price--discount mb-0">
                            <NumberFormat
                              displayType="text"
                              value={data.price}
                              thousandSeparator
                              prefix="Rp. "
                            />
                          </p>
                          <h3 className="premium__price">
                            <NumberFormat
                              displayType="text"
                              value={data.sale}
                              thousandSeparator
                              prefix="Rp. "
                            />
                          </h3>
                        </>
                      ) : (
                        <h3 className="premium__price mb-0">
                          <NumberFormat
                            displayType="text"
                            value={data.price}
                            thousandSeparator
                            prefix="Rp. "
                          />
                        </h3>
                      )}
                      <Link href={`/order/${itineraryId}`}>
                        <Button
                          className="w-100 mt-4"
                          disabled={isAlreadyOrdered || !isLoggedIn}
                        >
                          {isAlreadyOrdered ? 'Sudah ada di ransel' : 'Pesan Sekarang'}
                        </Button>
                      </Link>

                      <hr />

                      <div className="excerpt">{data.excerpt}</div>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="shadow-sm p-4 my-4 my-lg-0 bg-white">
                      <h1> {data.place_name} </h1>
                      <Rating
                        readonly
                        emptySymbol={
                          <StarOutlineIcon
                            className="mr-1"
                            height="1.3em"
                            width="1.3em"
                          />
                        }
                        fullSymbol={
                          <StarFilledIcon
                            className="mr-1"
                            height="1.3em"
                            width="1.3em"
                          />
                        }
                        initialRating={data.average_rating}
                      />
                      <div className="premium__info d-sm-flex justify-content-between align-items-center mt-2">
                        <div>
                          <span className="premium__info">
                            ({data.reviews.length} Ulasan) | {data.view} kali
                            dilihat
                          </span>
                        </div>
                      </div>
                      <hr />
                      <div className="premium__description">
                        <h3>Deskripsi</h3>
                        <p>{data.description}</p>
                      </div>
                    </div>
                    <Reviews data={data.reviews} itineraryId={itineraryId} />
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default Itinerary;
