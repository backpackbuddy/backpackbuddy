import PropTypes from 'prop-types';
import { cslx } from '../../../utils/cslx';

function Title({ text, className, fontSize }) {
  return (
    <h1
      className={cslx('text-primary font-weight-bold mb-3', className)}
      style={{ fontSize }}
    >
      {text}
    </h1>
  );
}

Title.defaultProps = {
  className: '',
  fontSize: '1.4rem',
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Title;
