import PropTypes from 'prop-types';
import { cslx } from '../../../utils/cslx';

function Title({
  text, className, children, style,
}) {
  return (
    <h1
      className={cslx('font-weight-bold mb-3', className)}
      style={{
        color: '#3aabe6',
        fontSize: '1.4rem',
        ...style,
      }}
    >
      { children || text }
    </h1>
  );
}

Title.defaultProps = {
  className: '',
  style: {},
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

export default Title;
