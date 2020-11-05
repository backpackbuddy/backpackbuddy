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
    Image,
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
                                    <Carousel.Item key={foto}>
                                        <img
                                            className="premium__img d-block w-100"
                                            src={foto}
                                            alt={foto}
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
                                    <div className="premium__ulasan">
                                        <h3>Ulasan</h3>
                                        <Form action="#" method="POST">
                                            <Form.Group>
                                                <div className="mb-4 d-flex align-items-center flex-wrap">
                                                    <div className="premium__rating d-flex flex-wrap align-items-center">
                                                        <div className="text-warning mr-2" style={{ fontSize: '3em' }}>{rating}</div>
                                                        <Rating
                                                            className="mr-2"
                                                            emptySymbol={<StarOutlineIcon className="mr-2" height="2em" width="2em" />}
                                                            fullSymbol={<StarFilledIcon className="mr-2" height="2em" width="2em" />}
                                                            initialRating={rating}
                                                            onClick={ratingClickHandler}
                                                        />
                                                    </div>
                                                    <div>74 Ulasan</div>
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="ulasan">
                                                <Form.Control as="textarea" type="text" rows={4} placeholder="Tulis ulasan" />
                                            </Form.Group>

                                            <Button variant="outline-primary" type="submit">
                                                Kirim Ulasan
                                            </Button>
                                        </Form>
                                    </div>
                                    <div className="premium__comments">
                                        <hr/>
                                        <div className="d-flex align-items-start">
                                            <Image className="premium__avatar" src={data[1].foto} roundedCircle alt={data[1].foto} />
                                            <div className="ml-4">
                                                <div className="d-flex align-text-center flex-wrap justify-content-between">
                                                    <h5>Lorem ipsum dolor</h5>
                                                    <span>10 October 2020</span>
                                                </div>
                                                <h6>
                                                    <Rating
                                                        emptySymbol={<StarOutlineIcon className="mr-1" height="1em" width="1em" />}
                                                        fullSymbol={<StarFilledIcon className="mr-1" height="1em" width="1em" />}
                                                        initialRating={5}
                                                        readonly
                                                    />
                                                </h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nesciunt obcaecati fugit aspernatur minus saepe accusamus velit eius consequuntur inventore harum quisquam maiores voluptatibus error odit, animi ducimus ipsum odio porro. Enim rerum voluptatem illo sint, temporibus sit assumenda quasi qui dolorem sed veritatis quis, ad quidem porro minus sapiente! Delectus veniam sed et suscipit labore aperiam eveniet! Enim, quod!</p>
                                            </div>
                                        </div>


                                        <hr/>
                                        <div className="d-flex align-items-start">
                                            <Image className="premium__avatar" src={data[2].foto} roundedCircle alt={data[2].foto} />
                                            <div className="ml-4">
                                                <h5>John Doe</h5>
                                                <h6>
                                                    <Rating
                                                        emptySymbol={<StarOutlineIcon className="mr-1" height="1em" width="1em" />}
                                                        fullSymbol={<StarFilledIcon className="mr-1" height="1em" width="1em" />}
                                                        initialRating={5}
                                                        readonly
                                                    />
                                                </h6>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, modi.</p>
                                            </div>
                                        </div>
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
