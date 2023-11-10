import ControlPost from "@/components/blog/ControlPost";

export default async function Posts(props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/post/${props.params.id[0]}/${
      props.params.id[1]
    }${props.params.id[2] === undefined ? "" : "/" + props.params.id[2]}.json`,
    { cache: "no-cache" }
  );
  const result = await response.json();

  return (
    <div>
      <h1>{result.title}</h1>
      <div>{result.description}</div>
      <a href={result.url} target="_blank">
        {result.url}
      </a>
      <ControlPost url={`portpolio/${props.params.id}`} />
    </div>
  );
}
