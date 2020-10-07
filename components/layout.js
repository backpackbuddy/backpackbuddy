import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, active }) {
    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Backpack Buddy. Gratis rute wisata harian untuk backpacker di bali" />
                <title>Backpack Buddy</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header active={active} />
            <main>{ children }</main>
            <Footer />
        </>
    );
}
