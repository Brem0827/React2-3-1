import { useEffect } from "react"
import Link from "next/link"
import axios from "axios";

export async function getServerSideProps() {
  const usersReq = await axios.get('https://jsonplaceholder.typicode.com/users'); // REST API 테스트 사이트 링크 변경
  return {
    props: {
      users: usersReq.data,
    },
  };
}

function Home({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={'/users/${user.username}'} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Home;
