import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/layouts/app";
import Header from "../../components/modules/Header";

function Order () {
  const router = useRouter();
  const { itineraryId } = router.query;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get('/customer/current')
      .then(res => setCurrentUser(res.data))
      .catch(() => router.push('/login'))
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <Container className="my-5">
          <Row>
            <Col>
              <section className="px-4">
                <h5>Lengkapi data diri anda dengan benar</h5>
              </section>
            </Col>
            <Col>
              <section>
                <h1>Form</h1>
              </section>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Order;
