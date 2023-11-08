export default async function Language(props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/post/study/language/${props.params.language}.json`
  );
  const result = await response.json();
  return (
    <>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
    </>
  );
}
