"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

export default function Update(props) {
  const route = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const slug = props.params.slug;

  const dataUrl =
    slug.length === 2
      ? `${slug[0]}/${slug[1]}`
      : slug[1] === "framework"
      ? `${slug[0]}/library&framework/${slug[2]}`
      : `${slug[0]}/${slug[1]}/${slug[2]}`;
  const pageUrl =
    slug.length === 2
      ? `${slug[0]}/${slug[1]}`
      : `${slug[0]}/${slug[1]}/${slug[2]}`;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL_API}/post/${dataUrl}.json`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, []);

  return (
    <>
      <h1>Update</h1>

      <form>
        <p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            const option = {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({ title: title, description: description }), // body data type must match "Content-Type" header
            };
            fetch(
              `${process.env.NEXT_PUBLIC_URL_API}/post/${dataUrl}.json`,
              option
            ).then((res) => console.log(res));
            route.push(`/admin/post/${pageUrl}`);
            route.refresh();
          }}>
          수정하기
        </button>
      </form>
    </>
  );
}
