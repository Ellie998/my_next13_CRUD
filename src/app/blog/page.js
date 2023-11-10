import Link from "next/link";

export default async function Home(props) {
  const params = props.searchParams;
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/post.json`, {
    cache: "no-cache",
  });
  const result = await response.json();
  const keys = Object.keys(result);

  return (
    <>
      <h2>카테고리</h2>
      <ol>
        {keys.map((category, i) => (
          <li key={i}>
            <Link href={`/blog/?category=${category}`}>{category}</Link>
          </li>
        ))}
      </ol>

      <>
        {params.category === "study" && (
          <ul>
            {Object.keys(result.study).map((subCategory, i) => (
              <li key={i}>
                <Link href={`/blog/?category=study&sub=${subCategory}`}>
                  {subCategory}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
      {params.category === "study" && params.sub !== undefined && (
        <>
          <h2>글 목록</h2>
          <ol>
            {Object.keys(result.study[params.sub]).map((studyKey, i) => (
              <li key={i}>
                <Link href={`/blog/post/study/${params.sub}/${studyKey}`}>
                  {result.study[params.sub][studyKey].title}
                </Link>
              </li>
            ))}
          </ol>
        </>
      )}

      {params.category === "portpolio" && (
        <>
          <h2>글 목록</h2>
          <ol>
            {Object.keys(result.portpolio).map(
              (content, i) =>
                result.portpolio[content] !== null && (
                  <li key={i}>
                    <Link href={`/blog/post/portpolio/${content}`}>
                      {result.portpolio[content]?.title}
                    </Link>
                  </li>
                )
            )}
          </ol>
        </>
      )}
    </>
  );
}
