"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function Update(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/post/${props.params.slug[0]}/${props.params.slug[1]}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, []);
  // console.log(props.params);

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
              `${process.env.NEXT_PUBLIC_URL_API}/post/${props.params.slug[0]}/${props.params.slug[1]}.json`,
              option
            ).then((res) => console.log(res));
          }}>
          수정하기
        </button>
      </form>
    </>
  );
}
