"use client";

import Link from "next/link";

export default function ControlCategory({ category, subCategory }) {
  return (
    <ul className="field is-grouped buttons">
      <li className="control">
        <div className="button is-link is-outlined">
          <Link
            href={`/admin/create/post?category=${category}${
              subCategory !== undefined ? `&subCategory=${subCategory}` : ""
            }`}>
            새로운 글 생성하기
          </Link>
        </div>
      </li>
      <li className="control">
        <div className="button is-info is-outlined">
          <Link href={``}>수정하기</Link>
        </div>
      </li>
      <li className="control">
        <button
          className="button is-danger is-outlined"
          onClick={(e) => {
            e.preventDefault();
            const option = {
              method: "DELETE",
            };
            fetch(
              `${process.env.NEXT_PUBLIC_URL_API}/post/${url}.json`,
              option
            ).then((res) => res.json());
          }}>
          삭제하기
        </button>
      </li>
    </ul>
  );
}
