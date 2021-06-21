import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import {
  Col, Container, Row, Button, InputGroup, FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layouts/app';
import DestinationList from '../../components/modules/DestinationList';
import BasicTopBar from '../../components/modules/Header';
import { filterDestinations } from '../../store/actions/destinations';
import { selectFilterDestinations } from '../../store/selector';

const ORDER_NEWEST = 'created_at';
const ORDER_BEST_SELLER = 'orders_count';
const ORDER_HIGHEST_TO_LOWER = 'ORDER_HIGHEST_TO_LOWER';

function Destination() {
  const { search, orderBy } = useSelector(selectFilterDestinations);
  const inputSearch = useRef(search);
  const dispatch = useDispatch();

  const setOrderBy = (value) => {
    dispatch(filterDestinations({ orderBy: value, order: 'DESC' }));
  };

  const setSearch = (e) => {
    e.preventDefault();
    dispatch(filterDestinations({ search: inputSearch.current.value }));
  };

  const setPriceOrder = (e) => {
    if (e.target.value === ORDER_HIGHEST_TO_LOWER) {
      dispatch(filterDestinations({ orderBy: 'sale', order: 'DESC' }));
    } else {
      dispatch(filterDestinations({ orderBy: 'sale', order: 'ASC' }));
    }
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
                      <Button
                        onClick={() => setOrderBy(ORDER_NEWEST)}
                        variant={orderBy === ORDER_NEWEST ? 'primary' : 'outline-primary'}
                      >
                        Terbaru
                      </Button>
                      <Button
                        onClick={() => setOrderBy(ORDER_BEST_SELLER)}
                        variant={orderBy === ORDER_BEST_SELLER ? 'primary' : 'outline-primary'}
                      >
                        Terlaris
                      </Button>
                    </span>
                  </div>
                </Col>
                <Col xs={12} sm md={3} lg="auto">
                  <div className="input-group">
                    <select className="custom-select" id="selectHarga" onChange={setPriceOrder}>
                      <option disabled selected>Harga</option>
                      <option value={ORDER_HIGHEST_TO_LOWER}>Harga: Tinggi ke Rendah</option>
                      <option>Harga: Rendah ke Tinggi</option>
                    </select>
                  </div>
                </Col>
                <Col xs={12} md>
                  <form onSubmit={setSearch} method="get">
                    <InputGroup>
                      <FormControl
                        defaultValue={search}
                        ref={inputSearch}
                        placeholder="Cari destinasi .."
                        aria-label="Search"
                        type="search"
                      />
                      <InputGroup.Append onClick={setSearch} style={{ cursor: 'pointer' }}>
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
