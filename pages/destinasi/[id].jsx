import BasicTopBar from '../../components/topbar';
import currencyFormatter from 'currency-formatter';
import Layout from '../../components/layout';
import toTitleCase from 'to-title-case';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../../styles/itinerary.scss';

import { 
    Button,
    Carousel,
    Container,
    Col,
    Row,
} from 'react-bootstrap';

function Itinerary() {
    const { id } = useRouter().query;
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        if (id) {
            fetch(`http://localhost/api/itinerary/${id}`)
                .then(res => res.json())
                .then(res => setData(res))
                .catch(err => console.error(err))
                .finally(() => setIsLoading(false));
        }

    }, [id]);

    return (
        <>
            <BasicTopBar />
            <Layout>
                <div className="bg-light premium">
                    <Container className="py-4">
                        { isLoading ? <h4>Loading ...</h4> :
                        <>
                            <Carousel className="premium__carousel mb-4" pause={false} height="400px">
                                <Carousel.Item>
                                    <img
                                        className="premium__img d-block bg-secondary img-fluid"
                                        alt={data.place_name}
                                        loading="lazy"
                                        src={data.featured_picture}
                                    />
                                </Carousel.Item>
                                {/*
                                    data.foto.split(';').map(photo => (
                                        <Carousel.Item key={photo}>
                                            <img
                                                className="premium__img d-block w-100 bg-secondary"
                                                src={photo}
                                                alt={photo}
                                                loading="lazy"
                                                style={{
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </Carousel.Item>
                                    ))
                                    */}
                            </Carousel>
                            <Row>
                                <Col
                                    lg={{
                                        span: 4,
                                        order: 'last',
                                    }}
                                >
                                    <div className="border p-4 bg-white">
                                        {
                                            data.sale
                                                ?  <>
                                                    <p className="premium__price--discount mb-0">{ currencyFormatter.format(data.price, { code: 'IDR' }) }</p>
                                                    <h3 className="premium__price">{ currencyFormatter.format(data.sale, { code: 'IDR' }) }</h3>
                                                </>
                                                : <h3 className="premium__price mb-0">{ currencyFormatter.format(data.price, { code: 'IDR' }) }</h3>
                                        }
                                        <Button className="w-100 mt-4">Pesan Sekarang</Button>

                                        <hr />

                                        <div className="excerpt">
                                            { data.excerpt }
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="shadow-sm p-4 my-4 my-lg-0 bg-white">
                                        <h1>{ toTitleCase(data.place_name) }</h1>
                                        <div className="premium__info d-sm-flex justify-content-between align-items-center">
                                            <div>
                                                <small className="premium__info">
                                                    5.0 (0 Ulasan) | { data.view } kali dilihat
                                                </small>
                                            </div>
                                            <div>
                                                <a href="#">+ Wishlist</a>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="premium__description">
                                            <h3>Deskripsi</h3>
                                            <p>{ data.description }</p>
                                        </div>
                                    </div>
                                    {/*}
                                    <Comments data={data} />
                                    {*/}
                                </Col>
                            </Row>
                        </>
                        }
                    </Container>
                </div>
            </Layout>
        </>
    );
}

export default Itinerary;
