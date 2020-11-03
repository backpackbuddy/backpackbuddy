import { useState } from 'react';
import Link from 'next/link';
import sort from 'fast-sort';
import toSentenceCase from 'to-sentence-case-with-dot';
import toTitleCase from 'to-title-case';

// react bootstrap components
import {
    Button,
    Card,
    Table,
} from 'react-bootstrap';

// icons
import {
    BlueArrowIcon,
    VCircleArrowIcon,
} from './icons';

function ItineraryLists({ data }) {
    const borderColors = [
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
    ];

    const [isOpen, setIsOpen] = useState(null);

    return sort(data).asc(e => e.rute_ke).map(({
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
    }, index, { length }) => ( 
    <>
        <Card border={borderColors[index % borderColors.length]} key={index}>
            <Link href={foto}>
                <Card.Img
                    className="itinerary__img img-fluid"
                    variant="top"
                    src={foto}
                    style={{
                        height: '280px',
                        objectFit: 'cover',
                    }}
                />
            </Link>
            <Card.Body>
                <Card.Text>
                    <h3>{ toTitleCase(tempat) }</h3>
                    <p>{toSentenceCase(info)}</p>
                    {
                        isOpen === index ?
                        <>
                            <Table>
                                <tbody>
                                    <tr>
                                        <th>Jam</th>
                                        <td>{ waktu }</td>
                                    </tr>
                                    <tr>
                                        <th>Kecamatan</th>
                                        <td>{ toTitleCase(kecamatan) }</td>
                                    </tr>
                                    <tr>
                                        <th>Kabupaten</th>
                                        <td>{ toTitleCase(kabupaten) }</td>
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
                                        <th>Kategori</th>
                                        <td>{ toTitleCase(kategori.split(';').join(', ')) }</td>
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
                                        <td>{ toSentenceCase(keterangan) }</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </> :
                            <>
                                <Table borderless size="sm">
                                    <tbody>
                                        <tr>
                                            <th>Jam</th>
                                            <td>{ waktu }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button
                                    className="d-block mx-auto mt-4"
                                    variant="default"
                                    size="sm"
                                    style={{ boxShadow: 'none' }}
                                    onClick={() => setIsOpen(index)}
                                >
                                    Info Selengkapnya <VCircleArrowIcon style={{ transform: 'rotate(180deg)' }} />
                                </Button>
                            </>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
        {
            index < (length - 1) &&
            <BlueArrowIcon
                className="my-4 d-block mx-auto"
                fill="#46A4B9"
                height="35px"
                width="35px"
            />
        }
    </>
    ));
}

export default ItineraryLists;
