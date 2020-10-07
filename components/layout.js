import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, active }) {
    return (
        <>
            <Head>
                <title>Backpack Buddy</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header active={active} />
            <main>{ children }</main>
            <Footer />
        </>
    );
}
