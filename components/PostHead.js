import Head from "next/head";

function PostMeta(props) {
    return(
        <Head>
            <title> {props.title} </title>
            <meta name="desctiption" content={props.subtitle} />

            {/* 오픈 그래프 메타 데이터 */}
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.subtitle} />
            <meta property="og:image" content={props.image} />

            {/* 트위터 타드 메타데이터 */}
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:title" content={props.title} />
            <meta property="twitter:description" content={props.subtitle} />
            <meta property="twitter:image" content={props.image} />
        </Head>
    )
}