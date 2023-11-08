import Link from "next/link";

export default async function Portpolio(props) {
  const response = await fetch(
    `https://myblog-3ce64-default-rtdb.firebaseio.com/post/portpolio/${props.params.id}.json`
  );
  const result = await response.json();

  return (
    <>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
      <a href={result.url} target="_blank">
        {result.url}
      </a>
      <div>
        <button>
          <Link href={`/admin/update/portpolio/${props.params.id}`}>
            수정하기
          </Link>
        </button>
      </div>
    </>
  );
}
