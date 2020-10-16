import { TopBarSlim } from '../../components/topbar';
import Layout from '../../components/layout';
import Link from 'next/link';
import toSlugCase from 'to-slug-case';
import toTitleCase from 'to-title-case';
import toSentenceCase from 'to-sentence-case-with-dot';
import filterData from '../../utils/filter-data';
import noDuplicateData from '../../utils/no-duplicate-data';
import '../../styles/itinerary.scss';

// react bootstrap components
import {
    Button,
    Card,
    Container,
    Col,
    Image,
    Row,
    Table,
    Tab,
    Tabs,
} from 'react-bootstrap';

const dataJson = require('../../data.json');

function Itinerary({ place }) {
    const data = filterData(dataJson, place);
    const dataRute = [
        {
            "tempat": "Goa Gajah",
            "kabupaten": "gianyar",
            "kecamatan": "Blahbatu",
            "kategori": "alami;temple;hidden gem",
            "keterangan": "Goa tersembunyi",
            "untuk": "solo traveler;couple;group kecil",
            "telp": "",
            "map": "https://www.google.com/maps/place/Goa+Gajah/@-8.5233969,115.2846644,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd216319e3e8cbb:0xcf6f85fcf798a545!8m2!3d-8.5234378!4d115.2871568",
            "foto_instagram": "https://www.instagram.com/explore/tags/goagajah/",
            "info": "Tempat wisata Goa Gajah",
            "foto": "https://tempatwisatadibali.info/wp-content/uploads/2017/08/Goa-Gajah-Bedulu-Ubud-Gianyar-Bali.jpg",
            "waktu": "09:00",
            "rute_ke": "6",
            "rute": "Blahbatuh"
        },
        {
            "tempat": "Goa Gajah",
            "kabupaten": "gianyar",
            "kecamatan": "Blahbatu",
            "kategori": "alami;temple;hidden gem",
            "keterangan": "Goa tersembunyi",
            "untuk": "solo traveler;couple;group kecil",
            "telp": "",
            "map": "https://www.google.com/maps/place/Goa+Gajah/@-8.5233969,115.2846644,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd216319e3e8cbb:0xcf6f85fcf798a545!8m2!3d-8.5234378!4d115.2871568",
            "foto_instagram": "https://www.instagram.com/explore/tags/goagajah/",
            "info": "Tempat wisata Goa Gajah merupakan salah satu tempat wisata paling populer di Gianyar, bahkan di pulau Bali. Tempat ini memang benar-benar unik dan bersejarah",
            "foto": "https://tempatwisatadibali.info/wp-content/uploads/2017/08/Goa-Gajah-Bedulu-Ubud-Gianyar-Bali.jpg",
            "waktu": "09:00",
            "rute_ke": "6",
            "rute": "Blahbatuh"
        },
        {
            "tempat": "Goa Gajah",
            "kabupaten": "gianyar",
            "kecamatan": "Blahbatu",
            "kategori": "alami;temple;hidden gem",
            "keterangan": "Goa tersembunyi",
            "untuk": "solo traveler;couple;group kecil",
            "telp": "",
            "map": "https://www.google.com/maps/place/Goa+Gajah/@-8.5233969,115.2846644,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd216319e3e8cbb:0xcf6f85fcf798a545!8m2!3d-8.5234378!4d115.2871568",
            "foto_instagram": "https://www.instagram.com/explore/tags/goagajah/",
            "info": "Tempat wisata Goa Gajah merupakan salah satu tempat wisata paling populer di Gianyar, bahkan di pulau Bali. Tempat ini memang benar-benar unik dan bersejarah",
            "foto": "https://tempatwisatadibali.info/wp-content/uploads/2017/08/Goa-Gajah-Bedulu-Ubud-Gianyar-Bali.jpg",
            "waktu": "09:00",
            "rute_ke": "6",
            "rute": "Blahbatuh"
        },
        {
            "tempat": "Goa Gajah",
            "kabupaten": "gianyar",
            "kecamatan": "Blahbatu",
            "kategori": "alami;temple;hidden gem",
            "keterangan": "Goa tersembunyi",
            "untuk": "solo traveler;couple;group kecil",
            "telp": "",
            "map": "https://www.google.com/maps/place/Goa+Gajah/@-8.5233969,115.2846644,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd216319e3e8cbb:0xcf6f85fcf798a545!8m2!3d-8.5234378!4d115.2871568",
            "foto_instagram": "https://www.instagram.com/explore/tags/goagajah/",
            "info": "Tempat wisata Goa Gajah merupakan salah satu tempat wisata paling populer di Gianyar, bahkan di pulau Bali. Tempat ini memang benar-benar unik dan bersejarah",
            "foto": "https://tempatwisatadibali.info/wp-content/uploads/2017/08/Goa-Gajah-Bedulu-Ubud-Gianyar-Bali.jpg",
            "waktu": "09:00",
            "rute_ke": "6",
            "rute": "Blahbatuh"
        },
    ]

    return (
        <>
            <TopBarSlim />
            <Layout>
                <div className="bg-light">
                    <Container className="itinerary py-4">
                        <h2 className="text-center py-3">Itinerary {toTitleCase(place)}</h2>
                        <Row>
                            <ItineraryLists data={dataRute} />
                        </Row>

                        <Link href="/free-itinerary">
                            <Button className="mx-auto d-block mt-3" variant="info"> Back to list </Button>
                        </Link>
                    </Container>
                </div>
            </Layout>
        </>
    );
}


function ItineraryLists({ data }) {
    const borderColors = [
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
    ];

    return data.map(({
        kecamatan,
        kabupaten,
        waktu,
        map,
        tempat,
        untuk,
        info,
        kategori,
        telp,
        keterangan,
        foto,
        foto_instagram,
    }, index) => ( 
    <Col className="mb-2" xs={12} sm={6} md={4}>
        <Card border={borderColors[index % borderColors.length]}>
            <Card.Img
                className="itinerary__img img-fluid"
                variant="top"
                src={foto}
                style={{
                    maxHeight: '312px',
                    objectFit: 'cover',
                }}
            />
            <Card.Body>
                <Card.Text>
                    <h3>{index + 1}. {toTitleCase(tempat)}</h3>
                    <p>{toSentenceCase(info)}</p>
                    <Table>
                        <tbody>
                            <tr>
                                <th>Kecamatan</th>
                                <td>{toTitleCase(kecamatan)}</td>
                            </tr>
                            <tr>
                                <th>Kabupaten</th>
                                <td>{toTitleCase(kabupaten)}</td>
                            </tr>
                            <tr>
                                <th>Telp.</th>
                                <td>{telp}</td>
                            </tr>
                            <tr>
                                <th>Cocok Untuk</th>
                                <td>
                                    { untuk.split(';').map(e => toTitleCase(e)).join(', ') }
                                </td>
                            </tr>
                            <tr>
                                <th>Waktu</th>
                                <td>{toTitleCase(waktu)}</td>
                            </tr>
                            <tr>
                                <th>Kategori</th>
                                <td>{toTitleCase(kategori.split(';').join(', '))}</td>
                            </tr>
                            <tr>
                                <th>Google Map</th>
                                <td>
                                    <a className="text-primary" href={map} target="_blank">Klik Disini</a>
                                </td>
                            </tr>
                            <tr>
                                <th>Instagram</th>
                                <td>
                                    <a className="text-primary" href={foto_instagram} target="_blank">Klik Disini</a>
                                </td>
                            </tr>
                            <tr>
                                <th>Keterangan</th>
                                <td>{toSentenceCase(keterangan)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    ));
}

// for next export 
export async function getStaticPaths() {
    const uniqueData = noDuplicateData(dataJson, 'rute');

    return {
        paths: uniqueData.map((rute) => ({
            params: {
                place: toSlugCase(rute)
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { place } = params;

    return { 
        props: { place }
    };
}

export default Itinerary;
