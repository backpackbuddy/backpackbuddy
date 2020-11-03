import BasicTopBar from '../../components/topbar';
import filterData from '../../utils/filter-data';
import ItineraryLists from '../../components/itinerary-lists';
import Layout from '../../components/layout';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
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

const dataJson = require('../../data.json');

function Itinerary({ place }) {
    const data = filterData(dataJson, place);

    return (
        <>
            <BasicTopBar />
            <Layout>
                <div className="bg-light premium">
                    <Container className="py-4">
                        <Carousel className="premium__carousel mb-4">
                            <Carousel.Item>
                                <img
                                    className="premium__img d-block w-100"
                                    src={data[3].foto}
                                    alt="First slide"
                                    loading="lazy"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="premium__img d-block w-100"
                                    src={data[1].foto}
                                    alt="Third slide"
                                    loading="lazy"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="premium__img d-block w-100"
                                    src={data[0].foto}
                                    alt="Third slide"
                                    loading="lazy"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <Row>
                            <Col lg={8}>
                                <div className="border p-4 bg-white">
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

                                <div className="border p-4 bg-white mt-4">
                                    <div className="premium__comment">
                                        <h3>Ulasan</h3>
                                        <div className="premium__rating">5.0 *****</div>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
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
