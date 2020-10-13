import Header from '../components/header';
import Layout from '../components/layout';
import Sosmed from '../components/sosmed';

// icons
import {
    WhatsappIcon,
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
} from '../components/icons';

// react bootstrap components
import {
    Container,
    Col,
    Image,
    Row,
} from 'react-bootstrap';

function About() {
    return (
        <>
            <Header
                title="About Us"
                description="Your digital Travel Buddy"
                btn={false}
            />
            <Layout>
                <section>
                    <Container className="text-dark">
                        <Row>
                            <Col xs={12} md={6}>
                                <Image className="img-fluid rounded h-100" style={{ objectFit: 'cover' }} src="/images/gallery/about-us.jpg" alt="About Backpack Buddy" />
                            </Col>
                            <Col xs={12} md={6}>
                                <Image className="mx-auto d-block img-fluid" src="/images/default-logo.png" alt="backpack buddy logo" />
                                <p>BackpackBuddy adalah startup yang menyediakan rute wisata harian untuk Backpacker secara Gratis di Bali.</p>
                                <p>Kami melayani konsultasi rute wisata harian dengan informasi yang lebih lengkap secara langsung bersama konsultan kami terutama wisata-wisata baru yang anti mainstream dan pengalaman yang berbeda saat berwisata ke Bali.</p>
                                <p>Kami juga bisa membantu backpacker jika ingin menyewa kendaraan ataupun rute wisata beserta tiket masuknya. Hemat waktu, hemat budget dan jelajah lebih banyak tempat di Bali!</p>
                                <strong style={{ fontSize: '1.1em' }}>Plan Now, Travel Soon!!</strong>
                                <div className="mt-3">
                                    <Sosmed className="mx-2" fill="#444" height="50px" width="50px" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="bg-light">
                    <Container>
                        <Row>
                            <Col xs={12} sm={8}>
                                <h2>Niken Pertiwi</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illum nulla nostrum earum iure est ducimus saepe hic ea explicabo repudiandae, laboriosam blanditiis reprehenderit omnis non odio pariatur eum error?</p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <div className="bg-dark h-100"></div>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={12} sm={4}>
                                <div className="bg-dark h-100"></div>
                            </Col>
                            <Col xs={12} sm={8}>
                                <h2>Utary Dewi</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illum nulla nostrum earum iure est ducimus saepe hic ea explicabo repudiandae, laboriosam blanditiis reprehenderit omnis non odio pariatur eum error?</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    );
}

export default About;
