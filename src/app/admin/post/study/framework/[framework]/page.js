export default async function Framework(props) {
  const response = await fetch(
    `https://myblog-3ce64-default-rtdb.firebaseio.com/post/study/library&framework/${props.params.framework}.json`
  );
  const result = await response.json();
  return (
    <>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
      <div>
        <button>
          <Link
            href={`/admin/update/study/framework/${props.params.framework}`}>
            수정하기
          </Link>
        </button>
      </div>
    </>
  );
}
