"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePost(props) {
  const params = props.searchParams;
  const route = useRouter();
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dbUrl =
    params.category === "portpolio"
      ? `portpolio.json`
      : `study/${params.subCategory}.json`;

  return (
    <div className="container">
      <h1 className="title">Create Post</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
              id: id,
              date: date,
            }),
          };
          fetch(`${process.env.NEXT_PUBLIC_URL_API}/post/${dbUrl}`, options)
            .then((res) => res.json())
            .then((data) => console.log(data));
          route.push(
            `/admin/blog?category=${params.category}${
              params.subCategory !== undefined
                ? `&sub=${params.subCategory}`
                : ""
            }`
          );
          route.refresh();
        }}>
        <ul>
          <li className="field">
            <li>
              <b>카테고리</b> : {params.category}
            </li>
            {params.subCategory !== undefined && (
              <li>
                <b>서브 카테고리</b> : {params.subCategory}
              </li>
            )}
          </li>
          <li className="field">
            <label htmlFor="date" className="label">
              Create Date :
            </label>
            <input
              className="input"
              type="date"
              placeholder="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}></input>
          </li>
          <li className="field">
            <label htmlFor="id" className="label">
              Id :
            </label>
            <input
              id="id"
              type="text"
              className="input"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </li>
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
              <button className="mt-6 button is-link">생성하기</button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}
