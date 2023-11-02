import Link from "next/link";
import axios from "axios";

export async function getServerSideProps(ctx) {
    const { username } = ctx.query;
    const userReq = await axios.get(`https://jsonplaceholder.typicode.com/users`,
    {
        headers: {
            authorization: process.env.API_TOKEN
        }
    });

    if(userReq.status === 404) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            user: userReq.data,
        },
    };
}

export default getServerSideProps;