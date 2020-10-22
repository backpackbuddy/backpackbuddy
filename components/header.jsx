import BasicTopBar, { HomeTopBar } from './topbar';
import Link from 'next/link';
import '../styles/header.scss';

// react bootstrap components
import {
    Button,
    Carousel,
    Container,
} from 'react-bootstrap';

function Header({ children }) {

    return (
        <header className="intro">
            <Carousel controls={false} className="intro__carousel">
                <Carousel.Item className="intro__carousel-item">
                    <div className="intro__caption">
                        <Container>
                            <h1>Pertama Kali Ke Bali?</h1>
                            <p className="intro__description">Gratis rute wisata harian untuk backpacker di Bali.</p>
                            <Link href="/free-itinerary"><Button className="mt-5 shadow">Cari tau disini</Button></Link>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="intro__carousel-item">
                    <div className="intro__caption">
                        <Container>
                            <h1>Butuh Rekomendasi Rute?</h1>
                            <p className="intro__description">Konsultasikan dengan kami secara gratis!</p>
                            <Link href="/free-itinerary"><Button className="mt-5 shadow">Cari tau disini</Button></Link>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>

            {/*}
            <div className="intro text-white text-center" >
                <Container>
                    <h1>Pertama kali ke Bali?</h1>
                    <p className="intro__description">Gratis rute wisata harian untuk backpacker di Bali.</p>
                    <Link href="/free-itinerary"><Button className="mt-4">Cari tau disini</Button></Link>
                    { children }
                </Container>
            </div>
            {*/}
        </header>
    );
}

export default Header;
