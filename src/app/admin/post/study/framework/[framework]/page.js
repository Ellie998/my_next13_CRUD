import ControlPost from "@/app/admin/ControlPost";

export default async function Framework(props) {
  const response = await fetch(
    `https://myblog-3ce64-default-rtdb.firebaseio.com/post/study/library&framework/${props.params.framework}.json`,
    { cache: "no-cache" }
  );
  const result = await response.json();
  return (
    <>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
      <ControlPost url={`study/framework/${props.params.framework}`} />
    </>
  );
}
