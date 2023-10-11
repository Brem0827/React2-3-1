export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const repo = await res.json();
    return {
        props: { repo },
        revalidate: 60,
    }
}

import styles from '../styles/Home.module.css'

export default function Chapter02_06({repo}) {
    return (
        <>
            {/* Next 공식 문서 예제 */}
            <div className={styles.main}>
                <h1>{repo.name}</h1>
                <h1>{repo.node_id}</h1>
                <h1>{repo.html_url}</h1>
            </div>
        </>
    )
}