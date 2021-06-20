import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

function PriceTag(props) {
  const { price, sale } = props;
  return (
    <div {...props}>
      <div className="d-flex flex-row align-items-center">
        <span className={['mb-0 text-strike text-truncate', !sale && 'd-none'].join(' ')}>
          <NumberFormat
            className="overflow-hidden"
            displayType="text"
            value={sale && price}
            thousandSeparator
            prefix="Rp"
            style={{ fontSize: '.95rem' }}
          />
        </span>
        <span className="text-danger text-nowrap flex-shrink-0">
          <span style={{ fontSize: '.95rem' }}>&nbsp;Rp</span>
          <NumberFormat
            className="flex-shrink-0"
            displayType="text"
            value={sale || price}
            thousandSeparator
            style={{ fontSize: '1.2rem' }}
          />
        </span>
      </div>
    </div>
  );
}

PriceTag.defaultProps = {
  price: null,
  sale: null,
};

PriceTag.propTypes = {
  price: PropTypes.number,
  sale: PropTypes.number,
};

export default PriceTag;
