import NumberFormat from 'react-number-format';
import pt from 'prop-types';

function PriceTag(props) {
  const { price, sale } = props;
  return (
    <div {...props}>
      <p className="mb-0 text-strike">
        <NumberFormat
          displayType="text"
          value={sale && price}
          thousandSeparator
          prefix="Rp. "
        />
      </p>
      <div className="text-danger font-size-12">
        <NumberFormat
          displayType="text"
          value={sale || price}
          thousandSeparator
          prefix="Rp. "
        />
      </div>
    </div>
  );
}

PriceTag.defaultProps = {
  price: null,
  sale: null,
};

PriceTag.propTypes = {
  price: pt.number,
  sale: pt.number,
};

export default PriceTag;
