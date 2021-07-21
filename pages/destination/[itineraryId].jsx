import { faLocationArrow, faSignInAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Button, Carousel, Col, Container, Row,
} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import NumberFormat from 'react-number-format';
import Rating from 'react-rating';
import { useSelector } from 'react-redux';
import rehypeRaw from 'rehype-raw';
import { StarFilledIcon, StarOutlineIcon } from '../../components/elements/Icons';
import Layout from '../../components/layouts/app';
import DestinationLoader from '../../components/loader/DestinationLoader';
import BasicTopBar from '../../components/modules/Header';
import Reviews from '../../components/modules/Reviews';
import { selectAuth } from '../../store/selector';

function Itinerary() {
  const router = useRouter();
  const { itineraryId } = router.query;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAlreadyOrdered, setIsAlreadyOrdered] = useState(false);
  const { isLoggedIn } = useSelector(selectAuth);

  useEffect(() => {
    setIsLoading(true);

    if (itineraryId) {
      axios.get(`/itinerary/${itineraryId}`)
        .then((res) => setData(res.data))
        .finally(() => setIsLoading(false));
    }
  }, [itineraryId]);

  useEffect(() => {
    if (typeof itineraryId === 'string' && isLoggedIn) {
      axios.get(`order/exist/${itineraryId}`)
        .then((res) => setIsAlreadyOrdered(res.data.exist))
        .catch(() => { });
    }
  }, [itineraryId, isLoggedIn]);

  return (
    <>
      <BasicTopBar />
      <Layout>
        <div className="bg-light premium">
          <Container className="py-4">
            {isLoading ? <DestinationLoader /> : (
              <>
                <Carousel
                  className="premium__carousel mb-4 shadow"
                  pause={false}
                  height="400px"
                >
                  {data.media.reverse().map(({ url, alt }) => (
                    <Carousel.Item key={url}>
                      <div className="position-relative">
                        <div
                          className="premium__img--bg"
                          style={{
                            backgroundImage: `url('${url}')`,
                          }}
                        />
                        <img
                          className="premium__img d-block w-100 p-2"
                          src={url}
                          alt={alt}
                          loading="lazy"
                          style={{
                            objectFit: 'contain',
                          }}
                        />
                      </div>
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
                      {isLoggedIn ? (
                        <Link href={`/order/${itineraryId}`}>
                          <Button
                            className="w-100 mt-4 text-uppercase font-weight-bold"
                            disabled={isAlreadyOrdered}
                          >
                            {isAlreadyOrdered ? 'Sudah Dipesan' : 'Pesan Sekarang'}
                          </Button>
                        </Link>
                      ) : (
                        <Link href="/login">
                          <Button
                            className="w-100 mt-4 text-uppercase font-weight-bold"
                            onClick={() => {}}
                          >
                            <FontAwesomeIcon
                              className="mr-2"
                              fixedWidth
                              icon={faSignInAlt}
                            />
                            Login
                          </Button>
                        </Link>
                      )}

                      <hr />

                      <div className="excerpt">
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data.excerpt}</ReactMarkdown>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="shadow-sm p-4 my-4 my-lg-0 bg-white">
                      <h1>{data.place_name}</h1>
                      <Rating
                        readonly
                        emptySymbol={(
                          <StarOutlineIcon
                            className="mr-1"
                            height="1.3em"
                            width="1.3em"
                          />
                        )}
                        fullSymbol={(
                          <StarFilledIcon
                            className="mr-1"
                            height="1.3em"
                            width="1.3em"
                          />
                        )}
                        initialRating={data.average_rating}
                      />
                      <div className="premium__info d-sm-flex justify-content-between align-items-center mt-2">
                        <div>
                          <span className="premium__info">
                            {`(${data.reviews.length} Ulasan) | ${data.view} kali dilihat`}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-secondary">
                        <FontAwesomeIcon icon={faTag} />
                        <span>&nbsp;{data.categories}</span>
                      </div>
                      <div className="d-flex align-items-center text-secondary">
                        <FontAwesomeIcon icon={faLocationArrow} />
                        <span>&nbsp;{data.districts}</span>
                      </div>
                      <hr />
                      <div className="premium__description">
                        <h3>Deskripsi</h3>
                        <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                        >
                          {data.description}
                        </ReactMarkdown>
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
