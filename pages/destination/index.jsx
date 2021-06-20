import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import {
  Col, Container, Row, Button, InputGroup, FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layouts/app';
import DestinationList from '../../components/modules/DestinationList';
import BasicTopBar from '../../components/modules/Header';
import { filterDestinations } from '../../store/actions/destinations';
import { selectFilterDestinations } from '../../store/selector';

const ORDER_RELEVANT = 'place_name';
const ORDER_NEWEST = 'created_at';
const ORDER_BEST_SELLER = 'sold_count';

function Destination() {
  const { search } = useSelector(selectFilterDestinations);
  const inputSearch = useRef(search);
  const [orderBy, setOrderBy] = useState('id');
  const [order, setOrder] = useState('DESC');
  const dispatch = useDispatch();

  const updateSearch = (e) => {
    e.preventDefault();
    dispatch(filterDestinations({ search: inputSearch.current.value }));
  };

  const updateOrder = (ordBy, ord) => {
    setOrderBy(ordBy);
    setOrder(ord);
  };

  const updatePriceOrder = (e) => {
    const o = e.target.value === 1 ? 'DESC' : 'ASC';
    updateOrder('sale', o);
  };

  return (
    <>
      <BasicTopBar />
      <Layout>
        <section className="pt-4">
          <Container>
            <h1 className="text-center">Destinasi Wisata</h1>
            <p className="text-center">Pilihan Destinasi Wisata di Bali</p>

            <div
              className="mb-3 p-3 shadow-sm"
              style={{ backgroundColor: '#f7f7f7' }}
            >
              <Row className="align-items-center" style={{ rowGap: '.6rem' }}>
                <Col xs sm="auto">
                  <div className="d-flex align-items-center flex-wrap" style={{ gap: '.5rem' }}>
                    <span>Urutkan</span>
                    <span className="d-flex flex-wrap" style={{ gap: '.5rem' }}>
                      <Button variant={orderBy === ORDER_RELEVANT ? 'primary' : 'outline-primary'}>Terkait</Button>
                      <Button variant={orderBy === ORDER_NEWEST ? 'primary' : 'outline-primary'}>Terbaru</Button>
                      <Button variant={orderBy === ORDER_BEST_SELLER ? 'primary' : 'outline-primary'}>Terlaris</Button>
                    </span>
                  </div>
                </Col>
                <Col xs={12} sm md={3} lg="auto">
                  <div className="input-group">
                    <select className="custom-select" id="selectHarga" onChange={updatePriceOrder}>
                      <option disabled selected>Harga</option>
                      <option value="1">Harga: Tinggi ke Rendah</option>
                      <option value="2">Harga: Rendah ke Tinggi</option>
                    </select>
                  </div>
                </Col>
                <Col xs={12} md>
                  <form onSubmit={updateSearch} method="get">
                    <InputGroup>
                      <FormControl
                        defaultValue={search}
                        ref={inputSearch}
                        placeholder="Cari destinasi .."
                        aria-label="Search"
                        type="search"
                      />
                      <InputGroup.Append onClick={updateSearch} style={{ cursor: 'pointer' }}>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </form>
                </Col>
              </Row>
            </div>
            <Row className="my-2 my-md-0">
              <DestinationList />
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export default Destination;
