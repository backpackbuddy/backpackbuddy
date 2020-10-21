import BasicTopBar, { HomeTopBar } from './topbar';
import Link from 'next/link';
import '../styles/header.scss';

// react bootstrap components
import {
    Button,
    Container,
} from 'react-bootstrap';

function Header({ children }) {

    return (
        <header className="header">
            <HomeTopBar />

            <div className="intro text-white text-center" >
                <Container>
                    <h1>Pertama kali ke Bali?</h1>
                    <p className="intro__description">Gratis rute wisata harian untuk backpacker di Bali.</p>
                    <Link href="/free-itinerary"><Button className="mt-4">Cari tau disini</Button></Link>
                    { children }
                </Container>
            </div>
        </header>
    );
}

export default Header;
