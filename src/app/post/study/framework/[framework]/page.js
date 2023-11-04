export default async function Framework(props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/post/study/library&framework/${props.params.framework}.json`
  );
  const result = await response.json();
  return (
    <>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
    </>
  );
}
