import styles from '@/styles/Home.module.css';

export default function Menu() {
    return (
        <div className={styles.Menu}>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/page1'>Page 1</a>
        </div>
    );
}