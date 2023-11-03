import Link from "next/link";

export default function Home(props) {
  const params = props.searchParams;
  return (
    <>
      <>
        {params.category === "1" && (
          <ul>
            <li>
              <Link href="/?category=1&sub=1">language</Link>
            </li>
            <li>
              <Link href="/?category=1&sub=2">library & framework</Link>
            </li>
          </ul>
        )}
      </>
      {params.category === "1" && params.sub === "1" && (
        <>
          <h2>글 목록</h2>
          <ol>
            <li>
              <Link href="/post/language/html">HTML</Link>
            </li>
            <li>
              <Link href="/post/language/css">CSS</Link>
            </li>
            <li>
              <Link href="/post/language/js">JS</Link>
            </li>
          </ol>
        </>
      )}
      {params.category === "1" && params.sub === "2" && (
        <>
          <h2>글 목록</h2>
          <ol>
            <li>
              <Link href="/post/framework/react">REACT</Link>
            </li>
            <li>
              <Link href="/post/framework/nextjs">Next.js13</Link>
            </li>
          </ol>
        </>
      )}
      {params.category === "2" && (
        <>
          <h2>글 목록</h2>
          <ol>
            <li>
              <Link href="/post/portpolio/1">디지털쏙</Link>
            </li>
            <li>
              <Link href="/post/portpolio/2">강아지 사람 나이 계산기</Link>
            </li>
          </ol>
        </>
      )}
    </>
  );
}
