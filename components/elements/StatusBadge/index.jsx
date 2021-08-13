import PropTypes from 'prop-types';
import { cslx } from '../../../utils/cslx';

function StatusBadge({ children, className, statusCode }) {
  const statusBgClass = [null, 'bg-primary', 'bg-success', 'bg-danger', 'bg-info'];

  return (
    <small
      className={cslx(
        'px-3 py-1 text-uppercase text-white font-weight-bold text-nowrap rounded-pill',
        statusBgClass[statusCode],
        className,
      )}
    >
      {children}
    </small>
  );
}

StatusBadge.defaultProps = {
  className: '',
};

StatusBadge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  className: PropTypes.string,
  statusCode: PropTypes.number.isRequired,
};

export default StatusBadge;
