"use client";

import Link from "next/link";

export default function ControlCategory({ category, subCategory }) {
  return (
    <ul>
      <li>
        <Link
          href={`/admin/create/post?category=${category}${
            subCategory !== undefined ? `&subCategory=${subCategory}` : ""
          }`}>
          새로운 글 생성하기
        </Link>
      </li>
      <li>
        <Link href={``}>수정하기</Link>
      </li>
      <li>
        <button
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
