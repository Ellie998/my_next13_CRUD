export default async function Framework(props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/post/study/framework/${props.params.framework}.json`,
    { cache: "no-cache" }
  );
  const result = await response.json();
  return (
    <>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
    </>
  );
}
