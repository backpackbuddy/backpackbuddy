import { Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import toTitleCase from 'to-title-case';
import { closeToast } from '../../../store/actions/toast';
import { selectToast } from '../../../store/selector';

function NotificationToast() {
  const {
    title, message, show, bg,
  } = useSelector(selectToast);
  const dispatch = useDispatch();

  const handleCloseToast = () => {
    dispatch(closeToast);
  };

  return (

    <Toast
      autohide
      bg={bg}
      delay={7000}
      onClose={handleCloseToast}
      show={show}
    >
      <Toast.Header>
        <strong className="mr-auto">{toTitleCase(title)}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default NotificationToast;
