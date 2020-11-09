import { useState } from 'react';
import BasicTopBar from '../topbar';
import Comments from './comments';
import currencyFormatter from 'currency-formatter';
import filterData from '../../utils/filter-data';
import Layout from '../layout';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
import Rating from 'react-rating';
import uniqueBy from 'unique-by';
import '../../styles/premium-itinerary.scss';

// react bootstrap components
import {
    Button,
    Carousel,
    Col,
    Container,
    Form,
    Image,
    ListGroup,
    ListGroupItem,
    Row,
} from 'react-bootstrap';

// icons
import {
    StarFilledIcon,
    StarOutlineIcon,
} from '../icons';

const dataJson = require('../../premium-itinerary.json');

function PremiumItinerary({ place }) {
    const data = filterData(dataJson, place)[0];

    return (
        <>
            <BasicTopBar />
            <Layout>
                <div className="bg-light premium">
                    <Container className="py-4">
                        <Carousel className="premium__carousel mb-4">
                            {
                                data.foto.split(';').map(photo => (
                                    <Carousel.Item>
                                        <img
                                            className="premium__img d-block w-100"
                                            src={photo}
                                            alt={photo}
                                            loading="lazy"
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                        <Row>
                            <Col
                                lg={{
                                    span: 4,
                                    order: 'last',
                                }}
                            >
                                <div className="border p-4 bg-white">
                                    <p className="premium__price--discount mb-0">{ currencyFormatter.format(data.ticket, { code: 'IDR' }) }</p>
                                    <h3 className="premium__price">{ currencyFormatter.format(data.discount, { code: 'IDR' }) }</h3>
                                    <Button className="w-100 mt-4">Pesan Sekarang</Button>

                                    <hr />

                                    <h5>Termasuk</h5>
                                    <ul>
                                        {
                                            data.includes.split(';').map(include => (
                                                <li>{include}</li>
                                            ))
                                        }
                                    </ul>

                                    <hr/>
                                    <h5>Tidak Termasuk</h5>
                                    <ul>
                                        {
                                            data.excludes.split(';').map(exclude => (
                                                <li>{exclude}</li>
                                            ))
                                        }
                                    </ul>

                                    <hr/>
                                    <h5>Keterangan</h5>
                                    <ul>
                                        {
                                            data.keterangan.split(';').map(k => (
                                                <li>{k}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="shadow-sm p-4 my-4 my-lg-0 bg-white">
                                    <h2>{ toTitleCase(data.ikonik) }</h2>
                                    <div className="premium__info d-sm-flex justify-content-between align-items-center">
                                        <div>
                                            <small className="premium__info">
                                                5.0 (0 Ulasan) | 1 kali dipesan
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
                    </Container>
                </div>
            </Layout>
        </>
    );
}

export default PremiumItinerary;
