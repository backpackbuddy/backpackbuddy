import PropTypes from 'prop-types';
import { cslx } from '../../../utils/cslx';

function Title({ className, children, style }) {
  return (
    <h1
      className={cslx('font-weight-bold mb-3 text-primary', className)}
      style={{
        fontSize: '1.4rem',
        ...style,
      }}
    >
      { children }
    </h1>
  );
}

Title.defaultProps = {
  className: '',
  style: {},
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

export default Title;
