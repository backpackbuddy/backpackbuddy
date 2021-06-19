import Rating from 'react-rating';
import pt from 'prop-types';
import { StarFilledIcon, StarOutlineIcon } from '../Icons';

function Stars(props) {
  const { rating } = props;

  return (
    <Rating
      readonly
      emptySymbol={(
        <StarOutlineIcon
          className="mr-1"
          height="1.3em"
          width="1.3em"
        />
      )}
      fullSymbol={(
        <StarFilledIcon
          className="mr-1"
          height="1.3em"
          width="1.3em"
        />
      )}
      initialRating={rating}
      {...props}
    />
  );
}

Stars.defaultProps = {
  rating: 5,
};

Stars.propTypes = {
  rating: pt.number,
};

export default Stars;
