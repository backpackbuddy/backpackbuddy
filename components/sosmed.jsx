// Icons
import {
    FacebookIcon,
    YoutubeIcon,
    InstagramIcon,
    LinkedInIcon,
} from '../components/icons';

function Sosmed(props) {
    return [
        {
            Icon: FacebookIcon,
            url: 'https://facebook.com/backpackbuddyid'
        },
        {
            Icon: YoutubeIcon,
            url: 'https://youtube.com/channel/UCS9pAKRfIfMZz8nbCKORxHA'
        },
        {
            Icon: InstagramIcon,
            url: 'https://www.instagram.com/backpack.buddy/'
        },
        {
            Icon: LinkedInIcon,
            url: '#'
        }
    ].map(({Icon, url}) => (
        <a href={url} target="_blank">
            <Icon {...props} />
        </a>
    ));
}


export default Sosmed;
