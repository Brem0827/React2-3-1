export async function getStaticPtops() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()

  return {
    props : {repo},
      revalidate : 60,
  }
}

export default function Chapter02_06({repo}) {
  return (
    <>
      <div>
        <h1>{repo.name}</h1>
        <h1>{repo.node_id}</h1>
        <h1>{repo.node_url}</h1>
      </div>
    </>
  )
}