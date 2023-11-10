import ControlCategory from "@/components/blog/ControlCategory";
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
      <div className="tabs">
        <ul>
          {keys.map((category, i) => (
            <li key={i}>
              <Link href={`/admin/blog/?category=${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>

      <>
        {params.category === "study" && (
          <div className="tabs">
            <ul>
              {Object.keys(result.study).map((subCategory, i) => (
                <li key={i}>
                  <Link href={`/admin/blog/?category=study&sub=${subCategory}`}>
                    {subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
      {params.category === "study" && params.sub !== undefined && (
        <>
          <h2>글 목록</h2>
          <div className="content">
            <ol type="1">
              {Object.keys(result.study[params.sub]).map((studyKey, i) => (
                <li key={i}>
                  <Link
                    href={`/admin/blog/post/study/${params.sub}/${studyKey}`}>
                    {result.study[params.sub][studyKey].title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </>
      )}

      {params.category === "portpolio" && (
        <>
          <h2>글 목록</h2>
          <div className="content">
            <ol>
              {Object.keys(result.portpolio).map(
                (content, i) =>
                  result.portpolio[content] !== null && (
                    <li key={i}>
                      <Link href={`/admin/blog/post/portpolio/${content}`}>
                        {result.portpolio[content]?.title}
                      </Link>
                    </li>
                  )
              )}
            </ol>
          </div>
        </>
      )}
      {(params.category === "portpolio" ||
        (params.category === "study" && params.sub !== undefined)) && (
        <ControlCategory category={params.category} subCategory={params.sub} />
      )}
    </>
  );
}
