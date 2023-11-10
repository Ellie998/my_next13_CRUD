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
          `/admin?category=${params.category}${
            params.subCategory !== undefined ? `&sub=${params.subCategory}` : ""
          }`
        );
        route.refresh();
      }}>
      <ul>
        <li>카테고리 : {params.category}</li>
        {params.subCategory !== undefined && (
          <li>서브 카테고리 : {params.subCategory}</li>
        )}
        <li>
          <input
            type="date"
            placeholder="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}></input>
        </li>
        <li>
          <input
            type="text"
            placeholder="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}></input>
        </li>
        <li>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}></input>
        </li>
        <li>
          <textarea
            placeholder="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </li>
        <li>
          <button>생성하기</button>
        </li>
      </ul>
    </form>
  );
}