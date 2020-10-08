import styles from '../styles/footer.module.scss';

export default function Footer() {
    return (
        <footer className={[styles.footer, "text-light text-center py-5"].join(' ')}>
            <h3>Backpack Buddy</h3>
            <p>Travel makes one modest. You see what a tiny place you occupy in the world.</p>
        </footer>
    );
}
