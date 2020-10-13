
// Icons
import {
    FacebookIcon,
    YoutubeIcon,
    InstagramIcon,
    LinkedInIcon,
} from '../components/icons';

// variables
import {
    facebookLink,
    youtubeLink,
    instagramLink,
    linkedinLink
} from './_variable';

function Sosmed(props) {
    return [
        {
            Icon: FacebookIcon,
            url: facebookLink,
        },
        {
            Icon: YoutubeIcon,
            url: youtubeLink,
        },
        {
            Icon: InstagramIcon,
            url: instagramLink,
        },
        {
            Icon: LinkedInIcon,
            url: linkedinLink,
        }
    ].map(({Icon, url}) => (
        <a href={url} target="_blank" key={url}>
            <Icon {...props} />
        </a>
    ));
}


export default Sosmed;
