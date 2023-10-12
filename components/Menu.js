import styles from '@/styles/Home.module.css';

export default function Menu() {
    return (
        <div className={styles.Menu}>
            <a href='/'>Home</a>
            <a href='/Chapter02_2'>Chapter02_2</a>
            <a href='/Chapter02_3'>Chapter02_3</a>
            <a href='/Chapter02_4'>Chapter02_4</a>
            <a href='/Chapter02_6'>Chapter02_6</a>
        </div>
    );
}