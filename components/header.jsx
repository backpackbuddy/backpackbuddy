import TopBar from './topbar';
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
            <TopBar />

            <div className="intro text-white text-center" >
                <Container>
                    <h1>{title}</h1>
                    <p className="intro__description">{description}</p>
                    { btn && <Button className="mt-4">Cari tau disini</Button> }
                    { children }
                </Container>
            </div>
        </header>
    );
}

export default Header;
