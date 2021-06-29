import PropTypes from 'prop-types';
import { cslx } from '../../../utils/cslx';

function Title({
  text, className, fontSize, children,
}) {
  return (
    <h1
      className={cslx('font-weight-bold mb-3', className)}
      style={{
        fontSize,
        color: '#3aabe6',
      }}
    >
      { children || text }
    </h1>
  );
}

Title.defaultProps = {
  className: '',
  fontSize: '1.4rem',
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Title;
