// Icons
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../Icons';

// variables
import {
  FACEBOOK_LINK,
  YOUTUBE_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
} from '../../../constants/sosmed-links';

function Sosmed(props) {
  return [
    {
      Icon: FacebookIcon,
      url: FACEBOOK_LINK,
    },
    {
      Icon: YoutubeIcon,
      url: YOUTUBE_LINK,
    },
    {
      Icon: InstagramIcon,
      url: INSTAGRAM_LINK,
    },
    {
      Icon: LinkedInIcon,
      url: LINKEDIN_LINK,
    },
  ].map(({ Icon, url }) => (
    <a href={url} target="_blank" key={url} rel="noreferrer">
      <Icon {...props} />
    </a>
  ));
}

export default Sosmed;
