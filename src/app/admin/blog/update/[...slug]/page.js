"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

export default function Update(props) {
  const route = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const slug = props.params.slug;

  const url =
    slug.length === 2
      ? `${slug[0]}/${slug[1]}`
      : `${slug[0]}/${slug[1]}/${slug[2]}`;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL_API}/post/${url}.json`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, []);

  return (
    <div className="container ">
      <h1 className="title">Update Post</h1>

      <form>
        <ul>
          <li className="field">
            <label htmlFor="title" className="label">
              Title :
            </label>
            <input
              id="title"
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>
          <li className="field">
            <label htmlFor="description" className="label">
              Description :{" "}
            </label>
            <textarea
              className="textarea"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </li>
          <li>
            <div className="control">
              <button
                className="button is-link is-light"
                onClick={(e) => {
                  e.preventDefault();
                  const option = {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                      // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                      title: title,
                      description: description,
                    }), // body data type must match "Content-Type" header
                  };
                  fetch(
                    `${process.env.NEXT_PUBLIC_URL_API}/post/${url}.json`,
                    option
                  ).then((res) => console.log(res));
                  route.push(`/admin/blog/post/${url}`);
                  route.refresh();
                }}>
                수정하기
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}
