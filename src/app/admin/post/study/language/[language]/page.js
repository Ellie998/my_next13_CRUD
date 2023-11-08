import Link from "next/link";

export default async function Language(props) {
  const response = await fetch(
    `https://myblog-3ce64-default-rtdb.firebaseio.com/post/study/language/${props.params.language}.json`
  );
  const result = await response.json();
  return (
    <>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
      <div>
        <button>
          <Link href={`/admin/update/study/language/${props.params.language}`}>
            수정하기
          </Link>
        </button>
      </div>
    </>
  );
}
