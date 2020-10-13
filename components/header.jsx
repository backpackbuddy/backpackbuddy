import { motion } from 'framer-motion';
import TopBar from './topbar';
import '../styles/header.scss';

// react bootstrap components
import {
    Button,
    Container,
} from 'react-bootstrap';

export default function Header({
    title = 'Pertama kali ke Bali?',
    description = 'Gratis rute wisata harian untuk backpacker di Bali.',
    btn = true,
    children
}) {
    return (
        <header className="header">
            <TopBar />

            <div className="intro text-white text-center" >
                <motion.div
                    className="container"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{
                        when: "beforeChildren"
                    }}
                >
                    <h1>{title}</h1>
                    <p className="intro__description">{description}</p>
                    { btn && <Button className="mt-4">Cari tau disini</Button> }
                    { children }
                </motion.div>
            </div>
        </header>
    );
}
