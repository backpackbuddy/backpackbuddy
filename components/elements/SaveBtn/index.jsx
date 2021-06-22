import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function SaveBtn({ onChange, loading }) {
  return (
    <Button
      disabled={!onChange}
      variant="primary"
      size="sm"
      type="submit"
    >
      {loading ? 'Loading...' : 'Simpan'}
    </Button>
  );
}

SaveBtn.propTypes = {
  onChange: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SaveBtn;
