import '../styles/footer.scss';
import Sosmed from '../components/sosmed';
import {
    Container,
    Image,
} from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer text-light text-center py-5 bg-dark">
            <Container>
                <a href="/">
                    <Image className="d-block mx-auto img-fluid" src="/images/default-logo.png" alt="backpackbuddy logo" />
                </a>
                <Sosmed
                    className="m-2"
                    fill="#fff"
                    height="2em"
                    width="2em"
                />
                <p className="mt-2">Travel makes one modest. You see what a tiny place you occupy in the world.</p>
            </Container>
        </footer>
    );
}

export default Footer;
