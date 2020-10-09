import styles from '../styles/home.module.scss';
import Layout from '../components/layout';
import toSlugCase from 'to-slug-case';
import {
    Free as FreeIcon,
    Experienced as ExperiencedIcon,
    Custom as CustomIcon
} from '../components/icons';
import {
    Button,
    Col,
    Container,
    Form,
    Image,
    Row,
} from 'react-bootstrap';


function Destinasi() {
    const data = [ 'Ubud', 'Gianyar', 'Kintamani', 'Nusa Penida', 'Seminyak', 'Canggu' ];

    return data.map(place => {
        const filename = toSlugCase(place);

        return (
            <Col className="p-2" xs={12} sm={6} md={4}>
                <Image className="img-fluid" src="/images/destinasi/ubud.jpg" alt={place} />
                <h5 className={[styles.place, 'font-italic', 'd-flex', 'align-items-center', 'text-dark', 'p-3'].join(' ')}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    <span>&nbsp; {place}</span>
                </h5>
            </Col>
        );
    });
}

export default function Home() {
    return (
        <Layout>
            <div className="py-5 bg-light">
                <Container className="">
                    <h2 className="text-center">Mulai petualanganmu</h2>
                    <p className="text-center font-italic">Destinasi wisata populer di Bali</p>

                    <Row className="my-2 my-md-0">
                        <Destinasi />
                    </Row>
                </Container>
            </div>

            <div className={[styles.find, 'py-5'].join(' ')}>
                <Container>
                    <h3>Cari Itinerary favoritmu</h3>
                    <Row>
                        <Col xs={12} md={4}>
                            <a className="d-block my-2" href="#">Bertualang ke hutan</a>
                            <a className="d-block my-2" href="#">Petualangan ke air terjun</a>
                            <a className="d-block my-2" href="#">Itinerary untuk keluarga dan anak-anak</a>
                            <a className="d-block my-2" href="#">Mengenal budaya Bali</a>
                        </Col>

                        <Col xs={12} md={4}>
                            <a className="d-block my-2" href="#">City tour kota Denpasar</a>
                            <a className="d-block my-2" href="#">Mencari sunset</a>
                            <a className="d-block my-2" href="#">Naik Gunung Batur</a>
                            <a className="d-block my-2" href="#">Petualangan penuh adrenalin</a>
                        </Col>

                        <Col
                            xs={12}
                            md={4}
                            className="mt-4 mt-md-0"
                        >
                            <h4>Newsletter</h4>
                            <p>Daftar untuk mendapatkan info terbaru</p>
                            <Form inline action="#" method="post">
                                <Form.Group className="mb-0 mb-md-2" controlId="#newsletterInput">
                                    <Form.Control type="email" name="email" id="newsletterInput" placeholder="Masukkan alamat E-Mail"/>
                                </Form.Group>
                                <Button className="ml-xl-2 ml-2 ml-md-0" variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={[styles.concultation, 'text-white'].join(' ')}>
                <Container className="text-right">
                    <h2 className="pb-2">Gratis konsultasi rute wisata</h2>
                    <h5 className="w-50 ml-auto font-weight-normal">Butuh rekomendasi rute selama di Bali atau ingin tahu wisata anti mainstream yang baru di Bali. Konsultasikan dengan kami secara gratis!</h5>
                    <Button className="mt-2" variant="outline-light" size="lg">Cari tau disini</Button>
                </Container>
            </div>

            <div className={[styles.why, 'bg-light', 'py-5'].join(' ')}>
                <Container>
                    <h2 className="text-center">Mengapa memilih Backpack Buddy?</h2>
                    <p className={[styles.description, "text-center font-weight-normal font-italic mx-auto mb-4"].join(' ')}>Kami melayani konsultasi rute wisata harian dengan informasi yang lebih lengkap secara langsung bersama konsultan kami</p>

                    <Row>
                        {
                            [
                                {
                                    file: '1.jpeg',
                                    Icon: FreeIcon,
                                    title: 'Gratis',
                                    description: 'Kita memberikan rute gratis untuk wisata harian di Bali.'
                                },
                                {
                                    file: '2.jpeg',
                                    Icon: ExperiencedIcon,
                                    title: 'Konsultan berpengalaman',
                                    description: 'Para konsultan merupakan traveler asli Bali.'
                                },
                                {
                                    file: '3.jpeg',
                                    Icon: CustomIcon,
                                    title: 'Customize itinerary',
                                    description: 'Kami melayani request itinerary sesuai keinginan pelanggan.'
                                },
                            ].map(({file, Icon, title, description}) => (
                                <Col
                                    className={[styles.why__col, 'text-center', 'text-white'].join(' ')}
                                    style={{
                                        backgroundImage: `url('/images/gallery/${file}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative',
                                    }}
                                    xs={12}
                                    md={4}
                                >
                                    <div className={styles.why__text}>
                                        <Icon width="48px" height="48px" fill="#fff" />
                                        <h4 className="mt-3">{title}</h4>
                                        <h5>{description}</h5>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}
