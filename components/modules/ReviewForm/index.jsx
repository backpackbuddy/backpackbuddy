import axios from 'axios';
import { useRouter } from 'next/router';
import pt from 'prop-types';
import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Rating from 'react-rating';
import { useDispatch, useSelector } from 'react-redux';
import { setToast } from '../../../store/actions/toast';
import { selectAuth } from '../../../store/selector';
import { StarFilledIcon, StarOutlineIcon } from '../../elements/Icons';

function ReviewForm({ data = [], itineraryId }) {
  const { isLoggedIn } = useSelector(selectAuth);
  const [userRating, setUserRating] = useState(5);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const content = useRef(null);
  const router = useRouter();

  const ratingClickHandler = (e) => {
    setUserRating(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = {
      content: content.current.value,
      rating: userRating,
    };

    axios.post(`/review/${itineraryId}`, formData)
      .then(router.reload)
      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };

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
              emptySymbol={(
                <StarOutlineIcon
                  className="mr-2"
                  height="2em"
                  width="2em"
                />
              )}
              fullSymbol={(
                <StarFilledIcon
                  className="mr-2"
                  height="2em"
                  width="2em"
                />
              )}
              initialRating={userRating}
              onClick={ratingClickHandler}
            />
          </div>
          <div>
            {data.length}
            {' '}
            Ulasan
          </div>
        </div>
      </Form.Group>
      <Form.Group controlId="ulasan">
        <Form.Control
          as="textarea"
          type="text"
          rows={4}
          placeholder="Tulis ulasan"
          disabled={!isLoggedIn || loading}
          ref={content}
          required
          isInvalid={error}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>

      {isLoggedIn
        ? (
          <Button variant="outline-primary" type="submit" disabled={loading}>
            Kirim Ulasan
          </Button>
        ) : (
          <Button variant="outline-primary" onClick={() => router.push('/login')}>
            Login
          </Button>
        )}
    </Form>
  );
}

ReviewForm.propTypes = {
  data: pt.instanceOf(Array),
  itineraryId: pt.string.isRequired,
};

export default ReviewForm;
