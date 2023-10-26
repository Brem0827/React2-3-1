import styles from '@/styles/Home.module.css';
import Menu from './Menu';


export default function MainMenu() {
    return (
        <div className={styles.Menu}>
            <Menu />
            <a href='./'>IndexPage</a> <br />
            <a href='./about'>AboutPage</a>
        </div>
    );
}