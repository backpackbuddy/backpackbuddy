import pt from 'prop-types';
import { useState } from 'react';
import Rating from 'react-rating';
import '../../../styles/comments.scss';

// react bootstrap components
import { Button, Form } from 'react-bootstrap';

// icons
import { StarFilledIcon, StarOutlineIcon } from '../../elements/Icons';

function Reviews({ data }) {
  const [rating, setRating] = useState(0);

  const ratingClickHandler = e => {
    setRating(e);
  };

  return (
    <>
      <div className="shadow-sm p-4 bg-white mt-4">
        <div className="comment__ulasan">
          <h3>Ulasan</h3>
          <Form action="#" method="POST">
            <Form.Group>
              <div className="mb-4 d-flex align-items-center flex-wrap">
                <div className="comment__rating d-flex flex-wrap align-items-center">
                  <div
                    className="text-warning mr-2"
                    style={{ fontSize: '3em' }}
                  >
                    {rating}
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
                    initialRating={rating}
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
              />
            </Form.Group>

            <Button variant="outline-primary" type="submit">
              Kirim Ulasan
            </Button>
          </Form>
        </div>
        <div className="comment__comments">
          {data.map(({ name, is_edited, updated_at, rating, content }) => (
            <>
              <hr />
              <div className="d-flex align-items-start">
                <div className="ml-4">
                  <div className="d-flex align-text-center flex-wrap justify-content-between">
                    <h5>{name}</h5>
                    <span>{updated_at}</span>
                  </div>
                  <h6>
                    <Rating
                      emptySymbol={
                        <StarOutlineIcon
                          className="mr-1"
                          height="1em"
                          width="1em"
                        />
                      }
                      fullSymbol={
                        <StarFilledIcon
                          className="mr-1"
                          height="1em"
                          width="1em"
                        />
                      }
                      initialRating={rating}
                      readonly
                    />
                  </h6>
                  <p>
                    {content}
                    <small className="text-muted">
                      {is_edited ? ' Edited' : ''}
                    </small>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

Reviews.propTypes = {
    data: pt.instanceOf(Array).isRequired
}

export default Reviews;
