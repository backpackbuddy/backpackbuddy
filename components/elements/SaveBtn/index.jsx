import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      {loading ? (
        <div className="d-flex align-items-center">
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span className="ml-1">Loading...</span>
        </div>
      ) : (
        <>
          <FontAwesomeIcon className="mr-1" fixedWidth icon={faSave} />
          <span>Simpan</span>
        </>
      )}
    </Button>
  );
}

SaveBtn.propTypes = {
  onChange: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SaveBtn;
