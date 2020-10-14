import Header from '../components/header';
import Layout from '../components/layout';

function Contact() {
    return (
        <>
            <Header
                title="Contact Us"
                description="Travel makes you happy"
                btn={false}
            />
            <Layout>
                <h1 className="text-center">Contact</h1>
            </Layout>
        </>
    );
}

export default Contact;
