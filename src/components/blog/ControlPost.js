"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ControlPost({ url }) {
  const route = useRouter();
  return (
    <ul className="pt-6 field is-grouped" style={{ listStyle: "none" }}>
      <li className="control">
        <div className="button is-link is-light">
          <Link href={`/admin/blog/update/${url}`}>수정하기</Link>
        </div>
      </li>
      <li className="control" style={{ marginTop: "0" }}>
        <button
          className="button is-link"
          onClick={(e) => {
            e.preventDefault();
            const option = {
              method: "DELETE",
            };
            fetch(
              `${process.env.NEXT_PUBLIC_URL_API}/post/${url}.json`,
              option
            ).then((res) => {
              console.log(res.json());
            });
            route.push(
              `/admin/blog?category=${url.split("/")[0]}&sub=${
                url.split("/")[1]
              }`
            );
            route.refresh();
          }}>
          삭제하기
        </button>
      </li>
    </ul>
  );
}
