import PropTypes from 'prop-types';
import { cslx } from '../../../utils/cslx';
import Title from '../Title';

function PageHeader({ title, description, className }) {
  return (
    <div className={cslx('text-center mb-5 mt-4', className)}>
      <Title
        className="text-uppercase "
        style={{ fontSize: '2.2rem' }}
      >
        {title}
      </Title>
      <p>{description}</p>
    </div>
  );
}

PageHeader.defaultProps = {
  description: '',
  className: '',
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default PageHeader;
