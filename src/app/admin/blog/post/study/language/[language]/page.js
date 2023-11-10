import ControlPost from "@/components/blog/ControlPost";

export default async function Language(props) {
  const response = await fetch(
    `https://myblog-3ce64-default-rtdb.firebaseio.com/post/study/language/${props.params.language}.json`,
    { cache: "no-cache" }
  );
  const result = await response.json();
  return (
    <>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
      <ControlPost url={`study/language/${props.params.language}`} />
    </>
  );
}
