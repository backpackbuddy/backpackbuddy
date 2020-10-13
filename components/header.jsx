import '../styles/header.scss';
import TopBar from './topbar';
import {
    Button,
    Container,
} from 'react-bootstrap';

export default function Header(props) {
    return (
        <header className="header">
            <TopBar />

            <div className="intro text-white text-center">
                <Container>
                    <h1>Pertama Kali ke Bali?</h1>
                    <p className="intro__description">Gratis rute wisata harian untuk backpacker di Bali</p>
                    <Button className="mt-4">Cari tau disini</Button>
                </Container>
            </div>
        </header>
    );
}
