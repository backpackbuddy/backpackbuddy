import axios from "axios";
import { useRouter } from "next/router";
import pt from 'prop-types';
import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "react-rating";
import { StarFilledIcon, StarOutlineIcon } from "../../elements/Icons";

function ReviewForm ({ data, itineraryId }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const content = useRef(null);
  const router = useRouter();

  const ratingClickHandler = e => {
    setUserRating(e);
  };

  const onSubmit = e => {
    e.preventDefault();

    const formData = {
      content: content.current.value,
      rating: userRating
    }

    axios.post(`/review/${itineraryId}`, formData)
      .then(router.reload)
      .catch((err) => alert(err.response.data.message))
  }

  useEffect(() => {
    const appState = JSON.parse(localStorage.getItem('app_state'));

    if (appState) {
      setIsLoggedIn(appState.isLoggedIn);
    }
  }, []);

  return (
    <Form onSubmit={onSubmit} method="POST">
      <Form.Group>
        <div className="mb-4 d-flex align-items-center flex-wrap">
          <div className="comment__rating d-flex flex-wrap align-items-center">
            <div
              className="text-warning mr-2"
              style={{ fontSize: '3em' }}
            >
              {userRating}
            </div>
            <Rating
              className="mr-2"
              emptySymbol={
                <StarOutlineIcon
                  className="mr-2"
                  height="2em"
                  width="2em"
                />
              }
              fullSymbol={
                <StarFilledIcon
                  className="mr-2"
                  height="2em"
                  width="2em"
                />
              }
              initialRating={userRating}
              onClick={ratingClickHandler}
            />
          </div>
          <div>{data.length} Ulasan</div>
        </div>
      </Form.Group>
      <Form.Group controlId="ulasan">
        <Form.Control
          as="textarea"
          type="text"
          rows={4}
          placeholder="Tulis ulasan"
          disabled={!isLoggedIn}
          ref={content}
          required
        />
      </Form.Group>

      {isLoggedIn
        ? (
          <Button variant="outline-primary" type="submit">
            Kirim Ulasan
          </Button>
        ) : (
          <Button variant="outline-primary" onClick={() => router.push('/login')}>
            Login
          </Button>
        )
      }
    </Form>
  );
}

ReviewForm.defaultProps = {
  data: [],
}

ReviewForm.propTypes = {
  data: pt.instanceOf(Array),
  itineraryId: pt.number.isRequired,
}

export default ReviewForm;
