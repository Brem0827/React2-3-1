import Head from "next/head";
import Link from "next/link";
import Widget from "@/components/Widget";

function IndexPage() {
    return (
        <>
            <Head>
                <title> Welcome to my Next.js Website</title>
            </Head>
            <div>
                <Link href='/about'>
                    About us
                </Link>
            </div>
            <div>
                <Widget pageName="index" />
            </div>
        </>
    );
}

export default IndexPage;