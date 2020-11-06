import { useState } from 'react';
import Rating from 'react-rating';
import '../../styles/comments.scss';

// react bootstrap components
import {
    Button,
    Form,
    Image,
} from 'react-bootstrap';

// icons
import {
    StarFilledIcon,
    StarOutlineIcon,
} from '../icons';

function Comments({ data }) {
    const [rating, setRating] = useState(0);

    const ratingClickHandler = e => { setRating(e); }

    return (
        <>
            <div className="shadow-sm p-4 bg-white mt-4">
                <div className="comment__ulasan">
                    <h3>Ulasan</h3>
                    <Form action="#" method="POST">
                        <Form.Group>
                            <div className="mb-4 d-flex align-items-center flex-wrap">
                                <div className="comment__rating d-flex flex-wrap align-items-center">
                                    <div className="text-warning mr-2" style={{ fontSize: '3em' }}>{rating}</div>
                                    <Rating
                                        className="mr-2"
                                        emptySymbol={<StarOutlineIcon className="mr-2" height="2em" width="2em" />}
                                        fullSymbol={<StarFilledIcon className="mr-2" height="2em" width="2em" />}
                                        initialRating={rating}
                                        onClick={ratingClickHandler}
                                    />
                                </div>
                                <div>74 Ulasan</div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="ulasan">
                            <Form.Control as="textarea" type="text" rows={4} placeholder="Tulis ulasan" />
                        </Form.Group>

                        <Button variant="outline-primary" type="submit">
                            Kirim Ulasan
                        </Button>
                    </Form>
                </div>
                <div className="comment__comments">
                    <hr/>
                    <div className="d-flex align-items-start">
                        <Image className="comment__avatar" src={data[1].foto} roundedCircle alt={data[1].tempat} />
                        <div className="ml-4">
                            <div className="d-flex align-text-center flex-wrap justify-content-between">
                                <h5>Lorem ipsum dolor</h5>
                                <span>10 October 2020</span>
                            </div>
                            <h6>
                                <Rating
                                    emptySymbol={<StarOutlineIcon className="mr-1" height="1em" width="1em" />}
                                    fullSymbol={<StarFilledIcon className="mr-1" height="1em" width="1em" />}
                                    initialRating={5}
                                    readonly
                                />
                            </h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nesciunt obcaecati fugit aspernatur minus saepe accusamus velit eius consequuntur inventore harum quisquam maiores voluptatibus error odit, animi ducimus ipsum odio porro. Enim rerum voluptatem illo sint, temporibus sit assumenda quasi qui dolorem sed veritatis quis, ad quidem porro minus sapiente! Delectus veniam sed et suscipit labore aperiam eveniet! Enim, quod!</p>
                        </div>
                    </div>

                    <hr/>
                    <div className="d-flex align-items-start">
                        <Image className="comment__avatar" src={data[1].foto} roundedCircle alt={data[1].tempat} />
                        <div className="ml-4">
                            <div className="d-flex align-text-center flex-wrap justify-content-between">
                                <h5>Lorem ipsum</h5>
                                <span>10 October 2020</span>
                            </div>
                            <h6>
                                <Rating
                                    emptySymbol={<StarOutlineIcon className="mr-1" height="1em" width="1em" />}
                                    fullSymbol={<StarFilledIcon className="mr-1" height="1em" width="1em" />}
                                    initialRating={5}
                                    readonly
                                />
                            </h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nesciunt obcaecati fugit aspernatur minus saepe accusamus velit eius consequuntur inventore harum quisquam maiores voluptatibus error odit, animi ducimus ipsum odio porro. Enim rerum voluptatem illo sint, temporibus sit assumenda quasi qui dolorem sed veritatis quis, ad quidem porro minus sapiente! Delectus veniam sed et suscipit labore aperiam eveniet! Enim, quod!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comments;
