import ControlPost from "@/components/blog/ControlPost";

export default async function Posts(props) {
  const url = `${props.params.id[0]}/${props.params.id[1]}${
    props.params.id[2] === undefined ? "" : "/" + props.params.id[2]
  }`;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/post/${url}.json`,
    { cache: "no-cache" }
  );
  const result = await response.json();

  return (
    <div className="section">
      <h1 className="title">{result.title}</h1>
      <div className="has-text-right">{result.date}</div>
      <div className="pt-3">{result.description}</div>
      {result.url ? (
        <div>
          url :
          <a href={result.url} target="_blank">
            {result.url}
          </a>
        </div>
      ) : null}
      <ControlPost url={url} />
    </div>
  );
}
