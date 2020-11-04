import { useState } from 'react';
import BasicTopBar from '../../components/topbar';
import filterData from '../../utils/filter-data';
import ItineraryLists from '../../components/itinerary-lists';
import Layout from '../../components/layout';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
import Rating from 'react-rating';
import Router from 'next/router';
import uniqueBy from 'unique-by';
import '../../styles/premium-itinerary.scss';

// react bootstrap components
import {
    Button,
    Carousel,
    Col,
    Container,
    Form,
    ListGroup,
    ListGroupItem,
    Row,
} from 'react-bootstrap';

// icons
import {
    StarFilledIcon,
    StarOutlineIcon,
} from '../../components/icons';

const dataJson = require('../../data.json');

function Itinerary({ place }) {
    const data = filterData(dataJson, place);
    const [rating, setRating] = useState(0);

    const ratingClickHandler = e => { setRating(e); }

    return (
        <>
            <BasicTopBar />
            <Layout>
                <div className="bg-light premium">
                    <Container className="py-4">
                        <Carousel className="premium__carousel mb-4">
                            {
                                data.map(({ foto }) => (
                                    <Carousel.Item>
                                        <img
                                            className="premium__img d-block w-100"
                                            src={foto}
                                            alt="First slide"
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
                                    <p className="premium__price--discount mb-0">Rp. 550.000</p>
                                    <h3 className="premium__price">Rp. 550.000</h3>
                                    <Button className="w-100 mt-4">Pesan Sekarang</Button>

                                    <hr />

                                    <h5>Termasuk</h5>
                                    <ul>
                                        <li>Cras justo odio</li>
                                        <li>Dapibus ac facilisis in</li>
                                        <li>Morbi leo risus</li>
                                        <li>Porta ac consectetur ac</li>
                                        <li>Vestibulum at eros</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="shadow-sm p-4 my-4 my-lg-0 bg-white">
                                    <h2>{ toTitleCase(place) }</h2>
                                    <div className="premium__info d-sm-flex justify-content-between align-items-center">
                                        <div>
                                            <small className="premium__info">
                                                5.0 (658 Ulasan) | 234k kali dipesan
                                            </small>
                                        </div>
                                        <div>
                                            <a href="#">+ Wishlist</a>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="premium__description">
                                        <h3>Deskripsi</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil earum modi debitis nobis quos molestias consectetur! Neque beatae amet, nesciunt soluta dolor dolorum numquam incidunt cupiditate illum minus non est!</p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias maiores quod voluptas, sit esse et, voluptates, debitis tempora quibusdam dolorem magni facere sint porro? Perspiciatis eveniet, doloribus ea atque rerum itaque pariatur incidunt in libero tempora ipsum quisquam sint ex illo maxime laborum dignissimos nesciunt quidem assumenda delectus reprehenderit eius architecto mollitia. Eius atque libero eligendi magnam nisi sapiente dolores facilis unde doloremque possimus aperiam quasi ex, perspiciatis enim illo obcaecati odit nobis accusamus sunt esse. Necessitatibus, vel at. Officiis natus nihil culpa eaque blanditiis! Atque, corrupti nesciunt ea commodi mollitia, illo inventore consequuntur suscipit, nisi deleniti et porro expedita sit quod id modi reiciendis minima eos consequatur pariatur voluptas. Nisi nesciunt at minima ullam tenetur tempora molestias totam quod explicabo accusamus recusandae eligendi eaque perspiciatis, rerum deserunt ipsam eos. Sapiente, expedita accusantium voluptatum nisi incidunt nihil aliquid laboriosam veritatis dolor fuga maxime ea non quibusdam ipsa eaque atque veniam nostrum! Nostrum dicta quibusdam officiis ratione quia. Laborum provident fugiat ab libero, vitae recusandae maxime culpa commodi? A, repellat dolores! Quis inventore totam, reprehenderit qui libero quia iusto ipsam quibusdam velit? Velit, dolorem suscipit. Quas quae nisi, unde quibusdam perferendis dolore sint? Delectus harum facilis, veritatis quaerat quidem ratione!</p>
                                    </div>
                                </div>

                                <div className="shadow-sm p-4 bg-white mt-4">
                                    <div className="premium__comment">
                                        <h3>Ulasan</h3>
                                        <Form action="#" method="POST">
                                            <div className="premium__rating d-flex align-items-center">
                                                <div className="text-warning font-weight-bold mr-1" style={{ fontSize: '3em' }}>{rating}</div>
                                                <Rating
                                                    className="my-4"
                                                    emptySymbol={<StarOutlineIcon className="mx-1" height="2em" width="2em" />}
                                                    fullSymbol={<StarFilledIcon className="mx-1" height="2em" width="2em" />}
                                                    initialRating={rating}
                                                    onClick={ratingClickHandler}
                                                />
                                                <div className="ml-2">75 Ulasan</div>
                                            </div>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control as="textarea" type="text" rows={4} placeholder="Tulis ulasan" />
                                            </Form.Group>

                                            <Button variant="outline-primary" type="submit">
                                                Kirim Ulasan
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        </>
    );
}

// for next export 
export async function getStaticPaths() {
    const uniqueData = uniqueBy(dataJson, 'ikonik');

    return {
        paths: uniqueData.map(({ ikonik }) => ({
            params: {
                place: toSlugCase(ikonik)
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { place } = params;

    return { 
        props: { place }
    };
}

export default Itinerary;
