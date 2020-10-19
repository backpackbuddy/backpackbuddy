import { HomeTopBar } from './topbar';
import Link from 'next/link';
import '../styles/header.scss';

// react bootstrap components
import {
    Button,
    Container,
} from 'react-bootstrap';

function Header({
    title = 'Pertama kali ke Bali?',
    description = 'Gratis rute wisata harian untuk backpacker di Bali.',
    btn = true,
    children
}) {

    return (
        <header className="header">
            <HomeTopBar />

            <div className="intro text-white text-center" >
                <Container>
                    <h1>{title}</h1>
                    <p className="intro__description">{description}</p>
                    { btn && <Link href="/free-itinerary"><Button className="mt-4">Cari tau disini</Button></Link> }
                    { children }
                </Container>
            </div>
        </header>
    );
}

export default Header;
