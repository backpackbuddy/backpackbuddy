import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

function ProfileMenu({ icon, text, url }) {
  const router = useRouter();
  const { page } = router.query;

  return (
    <Link href={url} key={url}>
      <a
        href={url}
        className={[
          'align-items-center text-nowrap overflow-hidden text-truncate',
          url.includes(page) ? 'text-primary' : ''].join(' ')}
      >
        <span className="mr-3">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="text-uppercase">{text}</span>
      </a>
    </Link>
  );
}

ProfileMenu.propTypes = {
  icon: PropTypes.instanceOf(Object).isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProfileMenu;
