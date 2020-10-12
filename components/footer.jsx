import '../styles/footer.scss';
import {
    FacebookIcon,
    YoutubeIcon,
    InstagramIcon,
    LinkedInIcon,
} from '../components/icons';

export default function Footer() {
    return (
        <footer className="footer text-light text-center py-5">
            <h3>Backpack Buddy</h3>
            {
                [FacebookIcon, YoutubeIcon, InstagramIcon, LinkedInIcon].map(Icon => (
                    <Icon className="m-2" fill="#fff" width="2em" height="2em" />
                ))
            }
            <p className="mt-2">Travel makes one modest. You see what a tiny place you occupy in the world.</p>
        </footer>
    );
}
